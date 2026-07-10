"use client";

import React, { useState, useEffect } from 'react';

// Crisp inline icons for zero-dependency portability
const BuildingIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Form State
  const [companyName, setCompanyName] = useState('');
  const [companyCode, setCompanyCode] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Simulated code uniqueness checking states
  const [isCheckingCode, setIsCheckingCode] = useState(false);
  const [codeAvailable, setCodeAvailable] = useState<boolean | null>(null);

  // Live Simulated Django Request Log Stack
  const [apiLogs, setApiLogs] = useState<any[]>([]);

  // Automatic Slug Generator: Factory Name badalne par Code auto-generate hoga
  const handleCompanyNameChange = (val: string) => {
    setCompanyName(val);
    const slug = val
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove invalid chars
      .replace(/\s+/g, '-')         // Convert spaces to dashes
      .substring(0, 30);            // Limit length
    setCompanyCode(slug);
    
    if (slug.length > 2) {
      triggerCodeCheck(slug);
    } else {
      setCodeAvailable(null);
    }
  };

  // Simulating an async API call to Django to check for unique constraints
  const triggerCodeCheck = (code: string) => {
    setIsCheckingCode(true);
    setCodeAvailable(null);
    
    const timeout = setTimeout(() => {
      setIsCheckingCode(false);
      // Let's pretend "error", "tata", "admin" are already taken company codes in the system
      if (['error', 'tata', 'admin', 'reliance'].includes(code.toLowerCase())) {
        setCodeAvailable(false);
      } else {
        setCodeAvailable(true);
      }
    }, 600);

    return () => clearTimeout(timeout);
  };

  // Safe client validation before advancing to credentials step
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!companyName.trim()) {
      setErrorMsg('Kripya apni Factory ya Company ka naam darj karein.');
      return;
    }
    if (!companyCode.trim()) {
      setErrorMsg('Kripya ek valid Company Code select karein.');
      return;
    }
    if (codeAvailable === false) {
      setErrorMsg('Yeh Company Code pehle se use me hai. Kripya doosra chunein.');
      return;
    }
    setStep(2);
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!ownerName.trim()) {
      setErrorMsg('Kripya owner ka naam enter karein.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Sahi email address format ka use karein.');
      return;
    }
    if (password.length < 8) {
      setErrorMsg('Security ke liye Password kam se kam 8 characters ka hona chahiye.');
      return;
    }

    setIsLoading(true);

    const payload = {
      company_name: companyName,
      company_code: companyCode.toLowerCase().trim(),
      owner_name: ownerName,
      email: email.trim().toLowerCase(),
      password: "••••••••", // Masked visually in log payload console
      phone_number: phone
    };

    // Simulate backend roundtrip to DRF API views
    setTimeout(() => {
      setIsLoading(false);

      if (email.toLowerCase().includes('already')) {
        // Mock error return from serializers.py custom validations
        const errorResponse = { email: ["Yeh email address pehle se use mein hai."] };
        setErrorMsg(errorResponse.email[0]);
        logRequest('POST', '/api/v1/auth/signup/', payload, errorResponse, 400);
      } else {
        // Success payload matching our serializing models structure
        const successResponse = {
          message: "Signup successful! Welcome to SnapWage.",
          token: "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b",
          user: {
            id: 104,
            email: email,
            name: ownerName,
            role: "OWNER",
            tenant_name: companyName
          },
          company_code: companyCode.toLowerCase().trim()
        };
        
        setSuccessMsg("Success! Aapka dynamic isolated workspace register ho gaya hai.");
        logRequest('POST', '/api/v1/auth/signup/', payload, successResponse, 201);
      }
    }, 1500);
  };

  const logRequest = (method: string, endpoint: string, payload: any, response: any, status: number) => {
    const time = new Date().toLocaleTimeString();
    setApiLogs(prev => [{ time, method, endpoint, payload, response, status }, ...prev]);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* LEFT PORTAL FORM: Onboarding Workspace */}
      <div className="flex-1 flex flex-col justify-center p-6 sm:p-12 lg:p-16 relative bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.05),transparent_40%)]" />

        <div className="w-full max-w-md mx-auto z-10 space-y-8">
          
          {/* Brand Identity */}
          <div className="flex items-center space-x-2.5">
            <div className="bg-indigo-600 text-white p-2 rounded-xl font-black text-sm tracking-tight shadow-md">
              SW
            </div>
            <span className="text-xl font-black tracking-tight text-white">SnapWage</span>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Partner Workspace Creation
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              Safar shuru karne ke liye niche di gayi settings aur credentials set karein.
            </p>
          </div>

          {/* Stepper Node Tracker */}
          <div className="flex items-center space-x-4 border-b border-slate-900 pb-5">
            <div className="flex items-center space-x-2">
              <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
                step === 1 ? 'bg-indigo-600 text-white' : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
              }`}>
                {step > 1 ? <CheckIcon /> : "1"}
              </span>
              <span className={`text-xs font-medium ${step === 1 ? 'text-indigo-400' : 'text-slate-500'}`}>Factory Details</span>
            </div>
            <span className="h-px w-8 bg-slate-800" />
            <div className="flex items-center space-x-2">
              <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
                step === 2 ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-600'
              }`}>
                2
              </span>
              <span className={`text-xs font-medium ${step === 2 ? 'text-indigo-400' : 'text-slate-500'}`}>Owner Account</span>
            </div>
          </div>

          {/* STEP 1: FACTORY & TENANT PROFILE */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-5">
              
              {/* Factory Name Input */}
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Factory ya Company ka Naam
                </label>
                <div className="mt-1.5 relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <BuildingIcon />
                  </div>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => handleCompanyNameChange(e.target.value)}
                    placeholder="e.g. Om Steels & Forgings"
                    className="block w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-base"
                  />
                </div>
              </div>

              {/* Dynamic Company Code Selector (Tenant Slug) */}
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Allocated Company Code
                </label>
                <div className="mt-1.5 relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <span className="font-bold text-xs text-indigo-400">CC</span>
                  </div>
                  <input
                    type="text"
                    required
                    value={companyCode}
                    onChange={(e) => {
                      setCompanyCode(e.target.value.toLowerCase().trim());
                      triggerCodeCheck(e.target.value);
                    }}
                    placeholder="e.g. omsteels"
                    className="block w-full pl-11 pr-12 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-base"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center">
                    {isCheckingCode && (
                      <svg className="animate-spin h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    )}
                    {!isCheckingCode && codeAvailable === true && <CheckIcon />}
                    {!isCheckingCode && codeAvailable === false && <CloseIcon />}
                  </div>
                </div>
                
                {/* Real-time Constraint Helper Badges */}
                <div className="mt-1.5 flex justify-between items-center text-xs text-slate-500">
                  <span>Ye aapki personal workspace routing identifier hogi.</span>
                  {codeAvailable === false && (
                    <span className="text-rose-400 font-semibold">Code already taken</span>
                  )}
                  {codeAvailable === true && (
                    <span className="text-emerald-400 font-semibold">Code is available!</span>
                  )}
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-950/40 border border-rose-800/50 rounded-xl text-rose-300 text-sm flex items-start space-x-2.5">
                  <span>⚠️</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit / Proceed Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-lg active:scale-[0.98]"
              >
                Proceed to Account Credentials
              </button>
            </form>
          )}

          {/* STEP 2: OWNER ACCOUNT SETTINGS */}
          {step === 2 && (
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Owner / Full Name
                </label>
                <div className="mt-1.5 relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <UserIcon />
                  </div>
                  <input
                    type="text"
                    required
                    disabled={isLoading}
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="e.g. Vinay Sharma"
                    className="block w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50 text-base"
                  />
                </div>
              </div>

              {/* Mobile Phone Number */}
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Mobile Number (Salary Alerts ke liye)
                </label>
                <div className="mt-1.5 relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <PhoneIcon />
                  </div>
                  <input
                    type="tel"
                    disabled={isLoading}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="block w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50 text-base"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Professional Email Address
                </label>
                <div className="mt-1.5 relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <MailIcon />
                  </div>
                  <input
                    type="text"
                    required
                    disabled={isLoading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vinay@company.com"
                    className="block w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50 text-base"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Create Master Password
                </label>
                <div className="mt-1.5 relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <LockIcon />
                  </div>
                  <input
                    type="password"
                    required
                    disabled={isLoading}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50 text-base"
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-950/40 border border-rose-800/50 rounded-xl text-rose-300 text-sm flex items-start space-x-2.5">
                  <span>⚠️</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-xl text-emerald-300 text-sm flex items-start space-x-2.5">
                  <span>✅</span>
                  <span>{successMsg}</span>
                </div>
              )}

              {/* Action Trigger Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => setStep(1)}
                  className="py-3.5 px-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-xl text-sm font-semibold text-slate-300 transition-colors disabled:opacity-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 flex justify-center py-3.5 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all disabled:opacity-50 shadow-lg active:scale-[0.98]"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Initializing Schema...</span>
                    </div>
                  ) : (
                    "Create SnapWage Account"
                  )}
                </button>
              </div>
            </form>
          )}

          <p className="text-center text-xs text-slate-500">
            Already have an active company workspace?{" "}
            <a href="/login" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
              Sign In Instead
            </a>
          </p>

        </div>
      </div>

      {/* RIGHT SIDEBAR: DRF Atomic Transaction Console */}
      <div className="hidden lg:flex lg:w-5/12 bg-slate-900/40 p-12 flex-col justify-between border-l border-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.03),transparent_40%)]" />

        <div className="space-y-6 z-10 max-w-sm my-auto">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Behind the Scenes:</span>
              <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full font-mono">
                Atomic API
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              SnapWage backend standard custom multi-tenant constraints ko process karta hai. Jab aap fields fill karte hain, frontend automatically nested transaction objects compile karta hai:
            </p>
          </div>

          {/* Core Serializer visual block */}
          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-4 font-mono text-[11px] leading-relaxed space-y-4">
            <h4 className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold">Django Serializer Preview</h4>
            <div>
              <span className="text-slate-500">// Transaction Payload structure</span>
              <pre className="text-slate-200 bg-slate-900/40 p-2.5 rounded-xl overflow-x-auto mt-1">
{`{
  "company_name": "${companyName || 'Om Steels Ltd'}",
  "company_code": "${companyCode || 'omsteels'}",
  "owner_name": "${ownerName || 'Vinay Sharma'}",
  "email": "${email || 'vinay@company.com'}",
  "phone_number": "${phone || '+91 98765 43210'}"
}`}
              </pre>
            </div>
            
            <div className="text-slate-400 flex items-start gap-1.5">
              <span>💡</span>
              <p className="text-[10px]">
                <strong className="text-slate-300">Atomic Rollback:</strong> Agar password policy fail hogi ya user register nahi hoga, toh automatic database configuration update drop kar di jayegi. Half-baked tables generate nahi honge.
              </p>
            </div>
          </div>

          {/* Dynamic API response logger */}
          <div className="border-t border-slate-800 pt-6">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              DRF HTTP Response Stream
            </h4>
            
            <div className="mt-3 bg-slate-950 border border-slate-800/60 rounded-xl p-3 h-32 overflow-y-auto font-mono text-[10px] space-y-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              {apiLogs.length === 0 ? (
                <div className="text-slate-600 italic h-full flex items-center justify-center">
                  Form submit karein validation responses live stream karne ke liye...
                </div>
              ) : (
                apiLogs.map((log, index) => (
                  <div key={index} className="pb-2 border-b border-slate-900 last:border-0 last:pb-0">
                    <div className="flex justify-between text-[9px] text-slate-500">
                      <span>[{log.time}]</span>
                      <span className={log.status === 201 ? 'text-emerald-400' : 'text-rose-400'}>
                        HTTP {log.status}
                      </span>
                    </div>
                    <div className="mt-1 font-bold text-slate-300">
                      {log.method} {log.endpoint}
                    </div>
                    <pre className="text-indigo-300 mt-1 bg-slate-900/60 p-1 rounded overflow-x-auto">
                      {JSON.stringify(log.response, null, 2)}
                    </pre>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Footer legalities info */}
        <div className="z-10 text-[10px] text-slate-500 leading-relaxed max-w-sm mt-4">
          * Developer note: Email address fields me <code className="text-indigo-400">already</code> text type karke simulate karein taaki aap DRF backend unique validation constraint failure (HTTP 400 Bad Request) live test kar sakein.
        </div>
      </div>

    </div>
  );
}