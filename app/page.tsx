'use client';
import React, { useState, useEffect } from 'react';

// Custom Crisp Inline SVG Icons to ensure zero import dependency failures
const FingerprintIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-3.517-1.009-6.799-2.753-9.571m-3.44 14.048A11.963 11.963 0 0112 12c.563 0 1.11.039 1.646.115M12 11c2.28 0 4.135-1.854 4.135-4.135s-1.854-4.135-4.135-4.135m0 16.5c-1.854 0-3.44-.73-4.59-1.921m9.18 0c1.15-1.191 1.854-2.821 1.854-4.59v-1.125c0-1.854-1.516-3.37-3.37-3.37h-1.125V18M12 11c0 1.854-1.516 3.37-3.37 3.37h-1.125V18" />
  </svg>
);

const BoltIcon = () => (
  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const DevicePhoneIcon = () => (
  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const CloudArrowUpIcon = () => (
  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

export default function App() {
  // Typography rotation states
  const words = ["Painless.", "Automatic.", "Accurate.", "Paperless.", "Simple."];
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState('translate-y-0 opacity-100');

  useEffect(() => {
    const interval = setInterval(() => {
      // Begin exit transition
      setFadeState('translate-y-4 opacity-0 scale-95');
      
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        // Begin entrance transition
        setFadeState('-translate-y-4 opacity-0 scale-95');
        
        setTimeout(() => {
          setFadeState('translate-y-0 opacity-100 scale-100');
        }, 50);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // --- Live Interactive Calculator State ---
  const [dailyRate, setDailyRate] = useState(600); // Average Indian micro-factory daily wage in INR
  const [workedDays, setWorkedDays] = useState(26);
  const [otHours, setOtHours] = useState(12);
  const [otMultiplier, setOtMultiplier] = useState(1.5);
  const [includeDeductions, setIncludeDeductions] = useState(true);

  // Math equations
  const baseEarnings = dailyRate * workedDays;
  const hourlyRate = dailyRate / 8; // Standard 8-hour shift
  const otEarnings = Math.round(otHours * hourlyRate * otMultiplier);
  const grossEarnings = baseEarnings + otEarnings;
  
  // Simulated PF (12%) & ESI (0.75%)
  const pfDeduction = includeDeductions ? Math.round(baseEarnings * 0.12) : 0;
  const esiDeduction = includeDeductions ? Math.round(baseEarnings * 0.0075) : 0;
  const totalDeductions = pfDeduction + esiDeduction;
  const netPay = grossEarnings - totalDeductions;

  // --- Biometric Machine Simulator State ---
  const [activeLogs, setActiveLogs] = useState([
    { name: "Ramesh Kumar", pin: "101", time: "08:58 AM", type: "IN", status: "Auto-Paired" },
    { name: "Sunita Devi", pin: "104", time: "09:02 AM", type: "IN", status: "Auto-Paired" }
  ]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState("");

  const simulatePunch = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanMessage("Contacting IoT Cloud...");

    setTimeout(() => {
      const mockNames = ["Amrit Singh", "Deepak Gupta", "Pooja Sharma", "Vijay Yadav"];
      const randomName = mockNames[Math.floor(Math.random() * mockNames.length)];
      const randomPin = Math.floor(100 + Math.random() * 900).toString();
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      const newPunch = {
        name: randomName,
        pin: randomPin,
        time: timeString,
        type: Math.random() > 0.45 ? "IN" : "OUT",
        status: "Auto-Paired"
      };

      setActiveLogs(prev => [newPunch, ...prev.slice(0, 4)]);
      setIsScanning(false);
      setScanMessage("Punch Registered & Paired Successfully!");
      setTimeout(() => setScanMessage(""), 2500);
    }, 1200);
  };

  // --- Dynamic invitation modal state ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPhone, setModalPhone] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSuccess(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setModalSuccess(false);
      setModalPhone("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* 🚀 Header Navbar */}
      <header className="sticky top-0 z-45 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
              ⚡
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Snap<span className="text-indigo-400">Wage</span>
              </span>
              <span className="block text-[10px] text-slate-500 tracking-widest font-semibold uppercase">Micro-HRMS</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
            <a href="#calculator" className="hover:text-indigo-400 transition-colors">Interactive Demo</a>
            <a href="#biometrics" className="hover:text-indigo-400 transition-colors">IoT Integration</a>
            <a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-sm font-medium hover:text-indigo-400 transition-colors hidden sm:block px-3 py-1.5"
            >
              Partner Program
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 shadow-md shadow-indigo-600/20 active:scale-95 transition-transform"
            >
              Get SnapWage App
            </button>
          </div>
        </div>
      </header>

      {/* 🔮 Hero Section */}
      <section className="relative px-4 pt-10 pb-16 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Hand Marketing Section with Rotating Slogan */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full text-xs text-indigo-300 w-fit">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Now with Local Cloud Biometric Support (ADMS)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
            Factory aur Shift Payroll ab ekdam <br />
            <span className="inline-block mt-2 min-w-[280px]">
              <span className={`inline-block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 ease-out transform ${fadeState}`}>
                {words[wordIndex]}
              </span>
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Eliminate complex spreadsheets, manual overtime disputes, and confusing compliance maths. 
            <strong> SnapWage</strong> connects directly to your existing biometric scanners, automatically calculates multi-shift rules, and produces bank-ready reports in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 active:scale-98 transition text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2 text-sm"
            >
              <DevicePhoneIcon />
              <span>Install Mobile PWA App</span>
            </button>
            <a 
              href="#calculator"
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700/80 transition text-slate-200 font-semibold rounded-xl border border-slate-700 text-center text-sm"
            >
              Try Instant Calculator
            </a>
          </div>

          {/* Social Proof Badges */}
          <div className="pt-6 border-t border-slate-900/60 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <span className="block text-2xl font-bold text-white">100%</span>
              <span className="block text-xs text-slate-500 uppercase font-semibold">Overtime Accuracy</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">&lt; 3 Mins</span>
              <span className="block text-xs text-slate-500 uppercase font-semibold">Monthly Rollout</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">Zero</span>
              <span className="block text-xs text-slate-500 uppercase font-semibold">Server Setup Needed</span>
            </div>
          </div>
        </div>

        {/* Right Hand Live Interactive Wage Calculator Component */}
        <div id="calculator" className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-lg text-white">Live Engine Demo</h3>
              <p className="text-xs text-slate-500">Calculate single-worker cost on the fly</p>
            </div>
            <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] px-2 py-1 rounded-md uppercase font-extrabold tracking-wider animate-pulse">
              Snap Engine V2.5
            </span>
          </div>

          <div className="space-y-4">
            {/* Input 1: Daily Wage Rate */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                <span>Daily Wage (8 hrs shift)</span>
                <span className="text-white">₹{dailyRate} / day</span>
              </div>
              <input 
                type="range" 
                min="300" 
                max="1500" 
                step="50"
                value={dailyRate} 
                onChange={(e) => setDailyRate(Number(e.target.value))}
                className="w-full accent-indigo-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Input 2: Worked Days */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                <span>Worked Days</span>
                <span className="text-white">{workedDays} Days</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="31" 
                value={workedDays} 
                onChange={(e) => setWorkedDays(Number(e.target.value))}
                className="w-full accent-indigo-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Input 3: Overtime Hours */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                <span>Overtime Hours Worked</span>
                <span className="text-white">{otHours} Hours</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="60" 
                value={otHours} 
                onChange={(e) => setOtHours(Number(e.target.value))}
                className="w-full accent-indigo-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Toggle Deductions */}
            <div className="flex items-center justify-between py-2 border-y border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400">Apply Standard PF/ESI Deductions</span>
              <button 
                onClick={() => setIncludeDeductions(!includeDeductions)}
                className={`w-10 h-6 flex items-center rounded-full p-0.5 transition-colors duration-300 focus:outline-none ${includeDeductions ? 'bg-indigo-600' : 'bg-slate-700'}`}
              >
                <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${includeDeductions ? 'translate-x-4' : 'translate-x-0'}`}></div>
              </button>
            </div>

            {/* Payslip Line Items Breakdown */}
            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Basic Earnings ({workedDays} Days):</span>
                <span className="text-slate-200">₹{baseEarnings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Overtime ({otHours} hrs @ {otMultiplier}x rate):</span>
                <span className="text-slate-200">₹{otEarnings.toLocaleString()}</span>
              </div>
              {includeDeductions && (
                <>
                  <div className="flex justify-between text-rose-400">
                    <span>Employee PF (12% of Basic):</span>
                    <span>- ₹{pfDeduction.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-rose-400">
                    <span>Employee ESI (0.75% of Basic):</span>
                    <span>- ₹{esiDeduction.toLocaleString()}</span>
                  </div>
                </>
              )}
              <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-sm text-white">
                <span className="text-indigo-400">Take-Home (Net Pay):</span>
                <span>₹{netPay.toLocaleString()}</span>
              </div>
            </div>

            {/* Dynamic Value Prop Notification */}
            <p className="text-[10px] text-slate-500 text-center italic">
              Calculation matched instantly with Indian Factory Act & state minimum wages constraints.
            </p>
          </div>
        </div>
      </section>

      {/* 🚀 Feature Grid Section */}
      <section id="features" className="bg-slate-900 border-y border-slate-800/60 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Engineered for the Reality of Factory Floors
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Enterprise payroll soft wares are made for office chairs and desk jobs. SnapWage is built specifically for the dusty, high-velocity reality of industrial setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                <BoltIcon />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Automated Shift Pairing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No more manual check-in pairing. SnapWage automatically pairs midnight shifts, double shifts, and late clockouts into continuous payable items.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                <ShieldCheckIcon />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Compliance Guardrails</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Say goodbye to legal penalties. SnapWage automatically flags any shifts violating regional minimum wages, maximum overtime rules, or mandatory breaks.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                <CloudArrowUpIcon />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Export to Any Local Bank</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Generate bulk-transfer files (CSV or Excel formats) fully compatible with SBI, HDFC, ICICI, or regional co-operative banks instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🧬 Interactive IoT Biometrics Section */}
      <section id="biometrics" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Real-Time Stream Simulator UI */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 relative overflow-hidden order-last lg:order-first">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <span className="h-3.5 w-3.5 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="font-bold text-sm tracking-wide uppercase text-slate-300">Live Device Logs Buffer</span>
            </div>
            <span className="text-xs text-slate-500">Device ID: SW_MUM_04</span>
          </div>

          <div className="space-y-3 mb-6 min-h-[220px]">
            {activeLogs.map((log, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-800/80 rounded-xl hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${log.type === 'IN' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                    {log.type}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">{log.name}</h5>
                    <p className="text-[10px] text-slate-500">PIN: {log.pin}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-slate-300">{log.time}</span>
                  <span className="inline-block text-[9px] font-semibold bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded mt-0.5">
                    {log.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Trigger Button representing a fingerprint scanner */}
          <div className="border-t border-slate-800 pt-6 flex flex-col items-center justify-center">
            <button
              onClick={simulatePunch}
              disabled={isScanning}
              className={`w-20 h-20 rounded-full border-2 flex flex-col items-center justify-center transition-all shadow-inner relative group ${
                isScanning 
                  ? 'border-indigo-500 bg-indigo-500/20 animate-pulse text-indigo-400' 
                  : 'border-slate-700 bg-slate-950 hover:bg-slate-850 hover:border-indigo-500 text-slate-400 hover:text-indigo-400 active:scale-95'
              }`}
            >
              <FingerprintIcon />
              {isScanning && (
                <span className="absolute inset-0 rounded-full border border-indigo-500 animate-ping"></span>
              )}
            </button>
            <span className="mt-3 text-xs font-semibold text-slate-400">
              {isScanning ? 'Scanning Fingerprint...' : 'Tap Scanner to Simulate Punch'}
            </span>
            {scanMessage && (
              <p className="mt-2 text-xs font-bold text-emerald-400 animate-fade-in">{scanMessage}</p>
            )}
          </div>
        </div>

        {/* Right Side: Copy on IoT integration */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-400">Zero Configuration IoT Middleware</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
            Plug-and-Play Biometrics.<br /> No Static IP Needed.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Most legacy attendance biometric machines require you to set up complex port forwarding, dynamic DNS, or expensive desktop software setups inside the factory.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="mt-1 flex-shrink-0"><CheckIcon /></div>
              <div>
                <h4 className="text-sm font-bold text-white">Direct Push Protocols (ADMS)</h4>
                <p className="text-xs text-slate-500">Device directly connects over Wi-Fi or 4G Sim cards to our cloud servers. No intermediate PCs needed.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1 flex-shrink-0"><CheckIcon /></div>
              <div>
                <h4 className="text-sm font-bold text-white">Instant Sync & Offline Protection</h4>
                <p className="text-xs text-slate-500">If the internet fails, devices store punches locally. The moment net recovers, data dumps and auto-pairs dynamically.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1 flex-shrink-0"><CheckIcon /></div>
              <div>
                <h4 className="text-sm font-bold text-white">Duplicate Filtration Engine</h4>
                <p className="text-xs text-slate-500">Workers often place their finger multiple times out of precaution. Our engine filters and registers only valid punch intervals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💰 Transparent Pricing */}
      <section id="pricing" className="bg-slate-900 border-t border-slate-800/60 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-400">Painless Pricing</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl mt-1">
              Pricing that Scales with Your Floor Size
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              No locked contracts, no high implementation fees. Pay only for the active workforce size you calculate each month.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-b-xl shadow-md">
              Most Popular Plan
            </div>

            <div className="text-center mb-6 pt-2">
              <h4 className="text-lg font-bold text-slate-300">Floor-Scale Plan</h4>
              <div className="mt-4 flex items-baseline justify-center text-white">
                <span className="text-5xl font-extrabold tracking-tight">₹40</span>
                <span className="ml-1 text-sm font-semibold text-slate-500">/ worker / month</span>
              </div>
              <p className="text-xs text-indigo-400 mt-2 font-medium">No basic base-license overhead fees</p>
            </div>

            <ul className="space-y-3.5 mb-8 border-t border-b border-slate-800/80 py-6 text-sm text-slate-300">
              <li className="flex items-center space-x-3">
                <CheckIcon />
                <span>Unlimited Biometric Device Syncs</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon />
                <span>Overtime, Late Check-in & Break Formulas</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon />
                <span>Automated PF / ESI / PT Tax Computations</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon />
                <span>Unlimited Bank Transfer CSV Downloads</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon />
                <span>SMS & WhatsApp Salary Slip Shares</span>
              </li>
            </ul>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 active:scale-98 transition duration-150"
            >
              Get Started with 14-Day Trial
            </button>
          </div>
        </div>
      </section>

      {/* 🚀 Interactive PWA Invitation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg p-1"
            >
              ✕
            </button>

            {!modalSuccess ? (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-3">
                    <DevicePhoneIcon />
                  </div>
                  <h3 className="text-xl font-bold text-white">Install SnapWage on Mobile</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Enter your mobile number. We will instantly send the self-installable PWA download link directly via SMS/WhatsApp.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Mobile Number</label>
                  <input 
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={modalPhone}
                    onChange={(e) => setModalPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 text-sm"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition shadow-lg shadow-indigo-600/30 text-sm"
                >
                  Get Invite Link
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto">
                  <CheckIcon />
                </div>
                <h3 className="text-lg font-bold text-white">Invite Sent Successfully!</h3>
                <p className="text-xs text-slate-400">
                  We've sent a custom installation link to <strong className="text-indigo-400">{modalPhone}</strong>. Check your WhatsApp/SMS.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 🚀 Footer */}
      <footer className="mt-auto border-t border-slate-800/60 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold">SnapWage</span>
            <span>© 2026 SnapWage Payroll Inc. All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition">Support Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
}