'use client';
import React, { useState, useEffect } from 'react';

const BuildingIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function App() {
  const [companyCode, setCompanyCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Simulated live API request logs to educate developers on DRF integration
  const [apiLogs, setApiLogs] = useState([]);

  const words = ["Painless.", "Automatic.", "Accurate.", "Paperless.", "Simple."];
  const [wordIndex, setWordIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsTransitioning(false);
      }, 300); // Wait for fade-out transition
    }, 2800); // Change word every 2.8 seconds
    return () => clearInterval(interval);
  }, []);

  const addLog = (method, endpoint, payload, response, status) => {
    const timestamp = new Date().toLocaleTimeString();
    setApiLogs(prev => [
      { timestamp, method, endpoint, payload, response, status },
      ...prev
    ]);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    
    if (!companyCode.trim()) {
      setErrorMsg('Kripya Company Code darj karein.');
      return;
    }
    if (!email.trim() || !password.trim()) {
      setErrorMsg('Email aur Password dono zaroori hain.');
      return;
    }

    setIsLoading(true);

    const payload = {
      tenant_schema: companyCode.toLowerCase().trim(),
      email: email.trim(),
      password: "••••••••" // Masked for UI log visualization
    };

    // Simulate Network Latency to DRF Server
    setTimeout(() => {
      setIsLoading(false);
      
      // Mock check: allow any input but throw error if code is "error" or email doesn't have "@"
      if (companyCode.toLowerCase() === 'test_error') {
        const errorRes = { detail: "Is Company Code ke liye koi active tenant nahi mila." };
        setErrorMsg(errorRes.detail);
        addLog('POST', '/api/v1/auth/login/', payload, errorRes, 404);
      } else if (!email.includes('@')) {
        const errorRes = { email: ["Sahi email address format ka prayog karein."] };
        setErrorMsg(errorRes.email[0]);
        addLog('POST', '/api/v1/auth/login/', payload, errorRes, 400);
      } else {
        const successRes = {
          token: "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b", // DRF Token Auth style
          user: {
            id: 42,
            email: email,
            role: "floor_manager",
            tenant_name: `${companyCode.toUpperCase()} Industries`
          }
        };
        setSuccessMsg(`Welcome to SnapWage, ${companyCode.toUpperCase()} Floor Portal!`);
        addLog('POST', '/api/v1/auth/login/', payload, successRes, 200);
      }
    }, 1200);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-900 text-slate-100 font-sans">
      
      {/* LEFT: Branding Showcase Column (Disappears on small/mobile devices for focus) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 p-12 flex-col justify-between relative overflow-hidden border-r border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        
        {/* Logo Banner */}
        <div className="z-10 flex items-center space-x-3">
          <div className="bg-indigo-600 text-white p-2.5 rounded-xl font-black text-xl tracking-tight shadow-lg shadow-indigo-600/30">
            SW
          </div>
          <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-200 bg-clip-text text-transparent">
            SnapWage
          </span>
        </div>

        {/* Industrial Pitch Illustration Cards */}
        <div className="z-10 my-auto max-w-lg space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight min-h-[6rem] lg:min-h-0">
            Factory aur Shift Payroll ab ekdam{" "}
            <br className="block xl:hidden" />
            <span className={`inline-block transition-all duration-300 transform bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent ${
              isTransitioning ? 'opacity-0 translate-y-3 scale-95' : 'opacity-100 translate-y-0 scale-100'
            }`}>
              {words[wordIndex]}
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Automatic biometric sync, accurate overtime, aur mobile-first floor logs. Complex excel files ko kaho bye-bye.
          </p>
          
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl shadow-xl flex items-start space-x-4">
            <span className="text-2xl mt-1">🏭</span>
            <div>
              <h4 className="font-semibold text-white">SME & Multi-Tenant Architecture</h4>
              <p className="text-slate-400 text-sm mt-1">Har manufacturing unit ya workshop ke liye isolated db schema secure and fast transactions ke sath.</p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="z-10 text-slate-500 text-sm">
          &copy; 2026 SnapWage Technologies Pvt Ltd. All rights reserved.
        </div>
      </div>

      {/* RIGHT: Login Core Screen (Interactive & Optimized) */}
      <div className="flex-1 flex flex-col justify-center p-6 sm:p-12 lg:p-16 relative bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.05),transparent_40%)]" />

        <div className="w-full max-w-md mx-auto z-10 space-y-8">
          
          {/* Mobile-Only Brand Header */}
          <div className="flex lg:hidden items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-600 text-white px-2 py-1 rounded-lg font-black text-sm">
                SW
              </div>
              <span className="text-lg font-bold tracking-tight text-white">SnapWage</span>
            </div>
            <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-full text-slate-400 border border-slate-700">Micro-HRMS PWA</span>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Portal Login
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Safar shuru karne ke liye apna allocated company code aur credentials dalein.
            </p>
          </div>

          {/* Form Actions */}
          <form className="space-y-5" onSubmit={handleLogin}>
            
            {/* 1. Multi-Tenant Company Code Input */}
            <div>
              <label htmlFor="company-code" className="block text-sm font-medium text-slate-300">
                Company Code
              </label>
              <div className="mt-1.5 relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <BuildingIcon />
                </div>
                <input
                  type="text"
                  id="company-code"
                  disabled={isLoading}
                  value={companyCode}
                  onChange={(e) => setCompanyCode(e.target.value)}
                  placeholder="e.g. acme, tatanagar"
                  className="block w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50 text-base"
                />
              </div>
              <p className="mt-1 text-xs text-slate-500 flex items-center gap-1">
                <InfoIcon /> Yeh aapki dynamic subdomain setting (/api/v1/auth) se verify hoga.
              </p>
            </div>

            {/* 2. Email Address Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                Email Address
              </label>
              <div className="mt-1.5 relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <MailIcon />
                </div>
                <input
                  type="text"
                  id="email"
                  disabled={isLoading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="block w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50 text-base"
                />
              </div>
            </div>

            {/* 3. Password Input */}
            <div>
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                  Password
                </label>
                <a href="#forgot" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                  Forgot Password?
                </a>
              </div>
              <div className="mt-1.5 relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <LockIcon />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  disabled={isLoading}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-11 pr-12 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:opacity-50 text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Remember Me Toggle */}
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-slate-800 text-indigo-600 bg-slate-900 focus:ring-indigo-500 focus:ring-offset-slate-950"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400 cursor-pointer">
                Remember my login details
              </label>
            </div>

            {errorMsg && (
              <div className="p-3 bg-rose-950/40 border border-rose-800/50 rounded-xl text-rose-300 text-sm flex items-start space-x-2.5">
                <span className="text-base">⚠️</span>
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-xl text-emerald-300 text-sm flex items-start space-x-2.5">
                <span className="text-base">✅</span>
                <span>{successMsg}</span>
              </div>
            )}

            {/* Action Trigger Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Authenticating via DRF...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Dev Notice Card */}
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-slate-400 text-xs leading-relaxed">
            💡 <strong className="text-slate-300">Developer Note:</strong> Submit forms with Company Code: <code className="text-indigo-400">tatanagar</code> to see a successful 200 auth log. Use <code className="text-indigo-400">test_error</code> or put incorrect email pattern to simulate API validation failures.
          </div>

          <div className="mt-8 border-t border-slate-800 pt-6">
            <h4 className="text-xs font-bold tracking-wider text-slate-500 uppercase flex items-center justify-between">
              <span>Django REST Framework API Logger</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </h4>
            
            <div className="mt-3 bg-slate-950 border border-slate-800 rounded-xl p-3 h-48 overflow-y-auto font-mono text-xs space-y-3 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              {apiLogs.length === 0 ? (
                <div className="text-slate-600 italic h-full flex items-center justify-center">
                  Authentication payloads and endpoints log details will appear here live...
                </div>
              ) : (
                apiLogs.map((log, index) => (
                  <div key={index} className="pb-3 border-b border-slate-900 last:border-0 last:pb-0">
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>[{log.timestamp}]</span>
                      <span className={`font-semibold ${log.status === 200 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        HTTP {log.status}
                      </span>
                    </div>
                    <div className="mt-1 text-slate-300">
                      <span className="text-indigo-400 font-bold">{log.method}</span> {log.endpoint}
                    </div>
                    <div className="mt-1 grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-slate-500">Request Body:</span>
                        <pre className="text-slate-400 mt-0.5 bg-slate-900/60 p-1 rounded overflow-x-auto">{JSON.stringify(log.payload, null, 2)}</pre>
                      </div>
                      <div>
                        <span className="text-slate-500">Response Data:</span>
                        <pre className="text-indigo-300 mt-0.5 bg-slate-900/60 p-1 rounded overflow-x-auto">{JSON.stringify(log.response, null, 2)}</pre>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}