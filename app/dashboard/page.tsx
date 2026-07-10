'use client';
import React, { useState, useEffect } from 'react';

// === Dynamic Inline SVG Icons (No-Dependency Portability) ===
const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>
);

const PayslipIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.125A3.375 3.375 0 0 0 10.125 2.5h-2.75c-.9 0-1.75.525-2.175 1.35L3.6 7.275a1.125 1.125 0 0 0 .15 1.35l3.3 3.3c.45.45 1.125.45 1.575 0l.75-.75M19.5 14.25c0 .9-.525 1.75-1.35 2.175l-3.375 1.688c-.675.338-1.5.338-2.175 0l-3.375-1.688A2.43 2.43 0 0 1 8.25 14.25V9m11.25 5.25h-11.25" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0 1 10.089 20c-2.207 0-4.3-.629-6.09-1.73v-.109m12-3.251a6.002 6.002 0 0 0-2.122-4.136m-1.113 4.136A6.002 6.002 0 0 1 11 12.19m-4.762 2.078a4.125 4.125 0 0 1-7.533 2.493 9.337 9.337 0 0 0 4.121.952 9.38 9.38 0 0 0 2.625-.372m-2.625-.372v-.003c0-1.113.285-2.16.786-3.07M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8 2v-1a3 3 0 0 0-3-3h-1.53c.277.662.43 1.393.43 2.161 0 .393-.04.777-.118 1.148M3 12v-1a3 3 0 0 1 3-3h1.53c-.277.662-.43 1.393-.43 2.161 0 .393.04.777.118 1.148" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg className="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.764-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 5.352 1.494 5.511 0 9.993-4.484 9.996-10 .001-2.673-1.04-5.186-2.93-7.078-1.89-1.891-4.407-2.934-7.082-2.934-5.52 0-10.003 4.484-10.006 10-.001 2.083.541 4.111 1.57 5.894L1.758 22.3l4.889-1.314zM16.52 13.66c-.247-.124-1.465-.722-1.692-.804-.228-.08-.393-.124-.558.125-.166.247-.64.804-.784.966-.145.163-.29.183-.537.06-.247-.124-1.044-.385-1.988-1.317-.735-.656-1.232-1.467-1.377-1.714-.144-.247-.015-.38.11-.502.112-.11.247-.247.37-.37.124-.124.166-.207.248-.372.082-.165.041-.31-.02-.433-.062-.124-.558-1.344-.764-1.84-.2-.48-.4-.41-.558-.41-.144-.002-.31-.002-.475-.002-.166 0-.434.062-.66.31-.227.247-.866.845-.866 2.062 0 1.216.887 2.392.986 2.535.1.144 1.746 2.666 4.23 3.738.591.254 1.053.405 1.413.518.593.115 1.133.099 1.559.036.475-.069 1.465-.598 1.671-1.175.207-.578.207-1.073.144-1.175-.062-.1-.227-.163-.474-.287z" />
  </svg>
);

const MenuHamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// === Sample Injected Data ===
const initialWorkers = [
  { id: 'W101', name: 'Ramesh Kumar', role: 'WORKER', pin: '8821', dailyRate: 650, phone: '+91 98765 00101', joined: 'Jan 2025' },
  { id: 'W102', name: 'Sunita Devi', role: 'WORKER', pin: '1452', dailyRate: 600, phone: '+91 98765 00102', joined: 'Feb 2025' },
  { id: 'W103', name: 'Amrit Singh', role: 'WORKER', pin: '9081', dailyRate: 750, phone: '+91 98765 00103', joined: 'Jun 2024' },
  { id: 'W104', name: 'Pooja Sharma', role: 'WORKER', pin: '3342', dailyRate: 700, phone: '+91 98765 00104', joined: 'Mar 2025' },
  { id: 'W105', name: 'Vijay Yadav', role: 'WORKER', pin: '1105', dailyRate: 850, phone: '+91 98765 00105', joined: 'Nov 2024' },
  { id: 'W106', name: 'Deepak Gupta', role: 'WORKER', pin: '5540', dailyRate: 600, phone: '+91 98765 00106', joined: 'Sep 2025' },
];

const initialManagers = [
  { id: 'M201', name: 'Vinay Sharma', role: 'MANAGER', phone: '+91 98765 43210', joined: 'Jan 2024' },
  { id: 'M202', name: 'Harish Rao', role: 'MANAGER', phone: '+91 99887 76655', joined: 'Aug 2024' },
];

export default function App() {
  const [currentRole, setCurrentRole] = useState('OWNER'); 
  const [activeTab, setActiveTab] = useState('ATTENDANCE'); // ATTENDANCE | CALENDAR | PAYSLIP | COLLEAGUES
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [workers, setWorkers] = useState(initialWorkers);
  const [managers, setManagers] = useState(initialManagers);
  
  // Dynamic Onboarding Dialog parameters
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('WORKER');
  const [formPin, setFormPin] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDailyRate, setFormDailyRate] = useState(650);
  const [formError, setFormError] = useState('');

  // Payslip compiler states
  const [slipWorker, setSlipWorker] = useState(initialWorkers[0]);
  const [slipMonthLabel, setSlipMonthLabel] = useState('June 2026');
  const [isDispatching, setIsDispatching] = useState(false);
  const [dispatchStatus, setDispatchStatus] = useState('');
  
  // 60-Day Historic Register State
  const [calendarDays, setCalendarDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  // Generate 60 Days historical calendar mapping backward from July 8, 2026
  useEffect(() => {
    const daysArray = [];
    const baseDate = new Date(2026, 6, 8); // July 8, 2026

    for (let i = 0; i < 60; i++) {
      const targetDate = new Date(baseDate);
      targetDate.setDate(baseDate.getDate() - i);
      
      const dayOfWeek = targetDate.getDay();
      const isSunday = dayOfWeek === 0;

      let presentCount = 0;
      let absentCount = 0;
      let otHours = 0;

      if (isSunday) {
        presentCount = Math.random() > 0.85 ? 1 : 0;
        absentCount = workers.length - presentCount;
        otHours = presentCount * 4;
      } else {
        presentCount = Math.floor(Math.random() * 2) + (workers.length - 1); // 5-6 present usually
        absentCount = workers.length - presentCount;
        otHours = Math.floor(Math.random() * 8) + 2; 
      }

      const dailyStatuses = workers.map((w, idx) => {
        let status = 'ABSENT';
        let checkIn = '--:--';
        let checkOut = '--:--';
        let ot = 0;

        if (isSunday) {
          if (idx < presentCount) {
            status = 'PRESENT';
            checkIn = '09:00 AM';
            checkOut = '05:00 PM';
            ot = 4;
          }
        } else {
          if (idx < presentCount) {
            status = Math.random() > 0.88 ? 'LATE' : 'PRESENT';
            checkIn = status === 'LATE' ? '09:35 AM' : '08:52 AM';
            checkOut = '17:05 PM';
            ot = Math.random() > 0.45 ? 2 : 0;
          }
        }

        return {
          workerId: w.id,
          name: w.name,
          status,
          checkIn,
          checkOut,
          overtime: ot
        };
      });

      daysArray.push({
        id: `day-${i}`,
        date: targetDate,
        isSunday,
        presentCount,
        absentCount,
        otHours,
        statuses: dailyStatuses
      });
    }

    setCalendarDays(daysArray);
    setSelectedDay(daysArray[0]); 
  }, [workers]);

  const handleAddUser = (e) => {
    e.preventDefault();
    setFormError('');

    if (!formName.trim()) {
      setFormError('Naam enter karna zaroori hai.');
      return;
    }

    if (currentRole === 'MANAGER' && formRole === 'MANAGER') {
      setFormError('Rule Check: Managers are not authorized to provision other managers.');
      return;
    }

    if (formRole === 'WORKER') {
      if (!formPin || formPin.length !== 4 || isNaN(formPin)) {
        setFormError('Kripya valid 4-digit machine PIN enter karein.');
        return;
      }
      
      const newWorker = {
        id: `W${100 + workers.length + 1}`,
        name: formName,
        role: 'WORKER',
        pin: formPin,
        dailyRate: Number(formDailyRate),
        phone: formPhone || '+91 98765 00000',
        joined: 'Today'
      };
      setWorkers([...workers, newWorker]);
    } else {
      if (!formPhone.trim()) {
        setFormError('Manager alerts mobile mapping numbers are required.');
        return;
      }
      
      const newManager = {
        id: `M${200 + managers.length + 1}`,
        name: formName,
        role: 'MANAGER',
        phone: formPhone,
        joined: 'Today'
      };
      setManagers([...managers, newManager]);
    }

    setFormName('');
    setFormPin('');
    setFormPhone('');
    setIsModalOpen(false);
  };

  const toggleWorkerStatus = (workerId) => {
    if (!selectedDay) return;
    
    const updatedStatuses = selectedDay.statuses.map(status => {
      if (status.workerId === workerId) {
        const nextStatus = status.status === 'PRESENT' ? 'LATE' : status.status === 'LATE' ? 'ABSENT' : 'PRESENT';
        return {
          ...status,
          status: nextStatus,
          checkIn: nextStatus === 'ABSENT' ? '--:--' : nextStatus === 'LATE' ? '09:40 AM' : '08:45 AM',
          checkOut: nextStatus === 'ABSENT' ? '--:--' : '17:00 PM',
          overtime: nextStatus === 'PRESENT' ? 2 : 0
        };
      }
      return status;
    });

    const revisedPresent = updatedStatuses.filter(s => s.status === 'PRESENT' || s.status === 'LATE').length;
    const revisedAbsent = updatedStatuses.length - revisedPresent;
    const revisedOT = updatedStatuses.reduce((acc, curr) => acc + curr.overtime, 0);

    const updatedDays = calendarDays.map(day => {
      if (day.id === selectedDay.id) {
        return {
          ...day,
          presentCount: revisedPresent,
          absentCount: revisedAbsent,
          otHours: revisedOT,
          statuses: updatedStatuses
        };
      }
      return day;
    });

    setCalendarDays(updatedDays);
    setSelectedDay({
      ...selectedDay,
      presentCount: revisedPresent,
      absentCount: revisedAbsent,
      otHours: revisedOT,
      statuses: updatedStatuses
    });
  };

  const getMonthsData = () => {
    const months = {};
    calendarDays.forEach(day => {
      const monthLabel = day.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      if (!months[monthLabel]) months[monthLabel] = [];
      months[monthLabel].push(day);
    });
    return months;
  };

  const generateSlipMetrics = (workerId, monthLabel) => {
    const targetWorker = workers.find(w => w.id === workerId) || slipWorker;
    const rate = targetWorker?.dailyRate || 650;
    let presentDaysCount = 0;
    let accumulatedOTHours = 0;

    calendarDays.forEach(day => {
      const dayMonthLabel = day.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      if (dayMonthLabel === monthLabel) {
        const workerStatus = day.statuses.find(s => s.workerId === workerId);
        if (workerStatus && (workerStatus.status === 'PRESENT' || workerStatus.status === 'LATE')) {
          presentDaysCount += 1;
          accumulatedOTHours += workerStatus.overtime || 0;
        }
      }
    });

    const basicEarnings = presentDaysCount * rate;
    const hourlyOvertimeRate = (rate / 8) * 1.5; // Standard 1.5x OT multiplier
    const overtimeEarnings = Math.round(accumulatedOTHours * hourlyOvertimeRate);
    const grossSalary = basicEarnings + overtimeEarnings;

    const pfDeduction = Math.round(basicEarnings * 0.12); // EPF (12%)
    const esiDeduction = Math.round(basicEarnings * 0.0075); // ESI (0.75%)
    const totalDeductions = pfDeduction + esiDeduction;
    const netSalary = grossSalary - totalDeductions;

    return {
      presentDaysCount,
      accumulatedOTHours,
      basicEarnings,
      overtimeEarnings,
      grossSalary,
      pfDeduction,
      esiDeduction,
      totalDeductions,
      netSalary
    };
  };

  const handleWhatsAppDispatch = () => {
    if (isDispatching) return;
    setIsDispatching(true);
    setDispatchStatus('Establishing communication with Whatsapp gateway API...');

    setTimeout(() => {
      setDispatchStatus('Formatting PDF attachment payloads...');
      setTimeout(() => {
        setIsDispatching(false);
        setDispatchStatus(`Successfully dispatched payslip to: ${slipWorker?.phone}!`);
        setTimeout(() => setDispatchStatus(''), 4000);
      }, 1500);
    }, 1200);
  };

  const activeSlipData = slipWorker ? generateSlipMetrics(slipWorker.id, slipMonthLabel) : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* ================= HEADER BAR ================= */}
      <header className="bg-slate-900 border-b border-slate-800 px-4 py-3 sm:px-6 sticky top-0 z-40 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-400 hover:text-white md:hidden focus:outline-none"
          >
            <MenuHamburgerIcon />
          </button>
          
          <div className="bg-indigo-600 text-white p-2 rounded-xl font-black text-sm tracking-tight shadow-md shadow-indigo-600/10">
            SW
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              SnapWage <span className="text-[10px] bg-indigo-950 text-indigo-400 px-2 py-0.5 rounded-full border border-indigo-900 font-semibold uppercase">Floor v2.5</span>
            </h1>
            <p className="hidden sm:block text-[10px] text-slate-500">Decoupled Multi-Role HRMS & IoT Sync Engine</p>
          </div>
        </div>

        {/* Global Configuration Controls (Role switching simulator) */}
        <div className="flex items-center space-x-3">
          <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center space-x-1">
            <button
              onClick={() => {
                setCurrentRole('OWNER');
                setFormRole('WORKER');
              }}
              className={`flex items-center justify-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                currentRole === 'OWNER' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="Switch system to Owner role view"
            >
              <ShieldIcon />
              <span className="hidden xs:inline">Owner</span>
            </button>
            <button
              onClick={() => {
                setCurrentRole('MANAGER');
                setFormRole('WORKER');
              }}
              className={`flex items-center justify-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                currentRole === 'MANAGER' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="Switch system to Floor Manager role view"
            >
              <UserGroupIcon />
              <span className="hidden xs:inline">Manager</span>
            </button>
          </div>
          
          {/* Active status indicator badge */}
          <div className="hidden md:flex items-center space-x-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-[10px] text-emerald-400 font-semibold font-mono">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>IoT Active</span>
          </div>
        </div>
      </header>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="flex-1 flex relative">
        
        {/* ================= LEFT SIDE NAVIGATION (DESKTOP) ================= */}
        <aside className={`hidden md:flex flex-col bg-slate-900 border-r border-slate-800 transition-all duration-300 ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        }`}>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <nav className="space-y-1.5">
              
              {/* Sidebar Menu options */}
              <button
                onClick={() => setActiveTab('ATTENDANCE')}
                className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'ATTENDANCE' 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/10' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <DashboardIcon />
                {!sidebarCollapsed && <span>Floor Attendance</span>}
              </button>

              <button
                onClick={() => setActiveTab('CALENDAR')}
                className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'CALENDAR' 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/10' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <CalendarIcon />
                {!sidebarCollapsed && <span>60-Day History</span>}
              </button>

              <button
                onClick={() => setActiveTab('PAYSLIP')}
                className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'PAYSLIP' 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/10' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <PayslipIcon />
                {!sidebarCollapsed && <span>Salary Slips</span>}
              </button>

              <button
                onClick={() => setActiveTab('COLLEAGUES')}
                className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'COLLEAGUES' 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/10' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <UserGroupIcon />
                {!sidebarCollapsed && <span>Colleagues & Crew</span>}
              </button>
            </nav>

            {/* Sidebar Collapse Toggle & Active Context Profile */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              {!sidebarCollapsed && (
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-850/80">
                  <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-widest">Active session</span>
                  <span className="block text-xs font-bold text-slate-200 mt-0.5 truncate">
                    {currentRole === 'OWNER' ? 'Owner Account' : 'Floor Supervisor'}
                  </span>
                  <span className="block text-[9px] text-indigo-400 font-mono mt-0.5">mumbai_unit_02</span>
                </div>
              )}
              
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="w-full flex items-center justify-center p-2.5 bg-slate-950 border border-slate-850 hover:bg-slate-800/50 rounded-lg text-slate-400 hover:text-white text-[10px] font-bold"
              >
                {sidebarCollapsed ? '→' : '← Collapse Side Menu'}
              </button>
            </div>
          </div>
        </aside>

        {/* ================= MOBILE SLIDEOUT DRAWER MENU ================= */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden animate-fade-in">
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
            <aside className="relative flex flex-col w-64 max-w-xs bg-slate-900 border-r border-slate-800 h-full p-4 z-10">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <span className="text-sm font-extrabold text-white uppercase tracking-wider">Navigation Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white text-sm">✕</button>
              </div>
              
              <nav className="space-y-2 flex-1">
                {['ATTENDANCE', 'CALENDAR', 'PAYSLIP', 'COLLEAGUES'].map((tab) => {
                  const label = tab === 'ATTENDANCE' ? 'Floor Attendance' : tab === 'CALENDAR' ? '60-Day History' : tab === 'PAYSLIP' ? 'Salary Slips' : 'Colleagues & Crew';
                  const icon = tab === 'ATTENDANCE' ? <DashboardIcon /> : tab === 'CALENDAR' ? <CalendarIcon /> : tab === 'PAYSLIP' ? <PayslipIcon /> : <UserGroupIcon />;
                  return (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl text-xs font-bold transition-all ${
                        activeTab === tab 
                          ? 'bg-indigo-600 text-white shadow-lg' 
                          : 'text-slate-400 hover:bg-slate-800/50'
                      }`}
                    >
                      {icon}
                      <span>{label}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-widest">Logged Workspace</span>
                <span className="block text-xs font-bold text-slate-200 mt-1 uppercase">
                  {currentRole === 'OWNER' ? 'Owner Session' : 'Manager Session'}
                </span>
              </div>
            </aside>
          </div>
        )}

        {/* ================= MAIN DASHBOARD VIEWS FRAME ================= */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
          
          {/* ================= TAB 1: ATTENDANCE (LIVE MONITOR & OVERRIDES) ================= */}
          {activeTab === 'ATTENDANCE' && selectedDay && (
            <div className="space-y-6">
              
              {/* Overview Analytics HUD Block */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center justify-between shadow-lg">
                  <div>
                    <span className="block text-[9px] text-slate-500 uppercase font-bold tracking-wider">Active Turnout</span>
                    <span className="text-2xl font-black text-white mt-1 block">
                      {selectedDay.isSunday ? 'OFF' : `${Math.round((selectedDay.presentCount / workers.length) * 100)}%`}
                    </span>
                  </div>
                  <span className="bg-emerald-950/40 text-emerald-400 text-xs px-2.5 py-1 rounded-lg border border-emerald-900 font-bold uppercase">
                    {selectedDay.presentCount} / {workers.length} Present
                  </span>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center justify-between shadow-lg">
                  <div>
                    <span className="block text-[9px] text-slate-500 uppercase font-bold tracking-wider">Overtime Accumulations</span>
                    <span className="text-2xl font-black text-indigo-400 mt-1 block">
                      {selectedDay.otHours} Hours
                    </span>
                  </div>
                  <span className="bg-indigo-950/40 text-indigo-400 text-[10px] px-2.5 py-1 rounded-lg border border-indigo-900/60 font-semibold font-mono">
                    +{selectedDay.otHours * 1.5}x Multiplier
                  </span>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center justify-between shadow-lg">
                  <div>
                    <span className="block text-[9px] text-slate-500 uppercase font-bold tracking-wider">Manual Overrides</span>
                    <span className="text-xs text-slate-400 mt-1.5 block leading-normal">
                      Click <strong className="text-white">"Override"</strong> rows below to correct active logs.
                    </span>
                  </div>
                  <span className="text-xl">🛠️</span>
                </div>
              </div>

              {/* Central Attendance Grid (Dual-Panel Inspector layout) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Daily Punch Logs list (Takes 8 cols) */}
                <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
                  <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white">Daily Attendance Logbook</h3>
                      <p className="text-[10px] text-slate-500">Selected range: {selectedDay.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <span className="bg-slate-950 border border-slate-800 text-[10px] px-3 py-1.5 rounded-xl text-slate-400">
                      Sync Cycle: 1 Hour
                    </span>
                  </div>

                  <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                    {selectedDay.statuses.map((statusObj) => {
                      let pillClass = 'bg-rose-500/10 text-rose-400 border border-rose-500/15';
                      if (statusObj.status === 'PRESENT') {
                        pillClass = 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15';
                      } else if (statusObj.status === 'LATE') {
                        pillClass = 'bg-amber-500/10 text-amber-400 border border-amber-500/15';
                      }

                      return (
                        <div key={statusObj.workerId} className="bg-slate-950 border border-slate-850 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-slate-800 transition">
                          <div>
                            <div className="flex items-center space-x-2">
                              <h5 className="font-bold text-sm text-white">{statusObj.name}</h5>
                              <span className="text-[9px] font-mono bg-slate-900 text-slate-500 px-1.5 py-0.2 rounded">
                                {statusObj.workerId}
                              </span>
                            </div>
                            <div className="flex items-center space-x-3 text-[10px] text-slate-500 mt-1 font-mono">
                              <span>Clock-In: {statusObj.checkIn}</span>
                              <span>•</span>
                              <span>Clock-Out: {statusObj.checkOut}</span>
                              {statusObj.overtime > 0 && (
                                <span className="text-indigo-400 font-semibold">(OT: +{statusObj.overtime} Hrs)</span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center space-x-3 self-end sm:self-auto">
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${pillClass}`}>
                              {statusObj.status}
                            </span>
                            
                            <button
                              onClick={() => toggleWorkerStatus(statusObj.workerId)}
                              className="text-[9px] font-extrabold bg-indigo-950/60 hover:bg-indigo-900 border border-indigo-900 text-indigo-300 px-3 py-1.5 rounded-lg active:scale-95 transition"
                              title="Override this worker's attendance for today"
                            >
                              Override Status
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Micro Live IoT activity feed on factory floor */}
                <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <h4 className="font-bold text-xs text-slate-300 uppercase tracking-wider">Live IoT Device Terminal</h4>
                    <p className="text-[9px] text-slate-500">Real-time biometric activity updates</p>
                  </div>

                  <div className="space-y-2 font-mono text-[10px] bg-slate-950/80 p-4 rounded-xl border border-slate-850 max-h-[300px] overflow-y-auto">
                    <div className="text-emerald-400 flex items-start gap-1.5">
                      <span className="text-slate-500">[08:52 AM]</span>
                      <span>Ramesh Kumar verified check-in - Machine #01 (Gate)</span>
                    </div>
                    <div className="text-emerald-400 flex items-start gap-1.5">
                      <span className="text-slate-500">[08:55 AM]</span>
                      <span>Amrit Singh verified check-in - Machine #01 (Gate)</span>
                    </div>
                    <div className="text-amber-400 flex items-start gap-1.5">
                      <span className="text-slate-500">[09:35 AM]</span>
                      <span>Pooja Sharma verified checked-in (LATE FLAG triggered)</span>
                    </div>
                    <div className="text-slate-500 flex items-start gap-1.5">
                      <span className="text-slate-600">[17:05 PM]</span>
                      <span>All workers auto checkout paired successfully.</span>
                    </div>
                  </div>

                  <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-3.5 text-[10px] leading-relaxed text-indigo-300">
                    💡 <strong>Pro-Tip:</strong> To test changes dynamically on other dates, navigate to the <strong className="text-white">"60-Day History"</strong> option in the side menu, select a date, and return here.
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ================= TAB 2: CALENDAR (60-DAY ROSTER GRID) ================= */}
          {activeTab === 'CALENDAR' && (
            <div className="space-y-6">
              
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-indigo-400"><CalendarIcon /></span>
                    <div>
                      <h3 className="font-bold text-base text-white">60-Day Shift Registers</h3>
                      <p className="text-xs text-slate-500">Live historic rosters from May to July 2026. Select a calendar block to configure its sheets.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-[10px]">
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500"></span> High Turnout</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500"></span> Moderate</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-700"></span> Sunday OFF</span>
                  </div>
                </div>

                <div className="space-y-8">
                  {Object.entries(getMonthsData()).map(([monthName, days]) => (
                    <div key={monthName}>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 pl-1">
                        {monthName}
                      </h4>
                      
                      <div className="grid grid-cols-5 sm:grid-cols-7 gap-2">
                        {days.map((day) => {
                          const isSelected = selectedDay && selectedDay.id === day.id;
                          const attendancePercentage = (day.presentCount / workers.length) * 100;
                          
                          let colorClass = 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/60 text-slate-300';
                          if (day.isSunday) {
                            colorClass = 'border-slate-800/40 bg-slate-900/40 hover:bg-slate-800/40 text-slate-500';
                          } else if (attendancePercentage >= 80) {
                            colorClass = 'border-emerald-950 bg-emerald-950/20 text-emerald-300 hover:bg-emerald-950/45';
                          } else if (attendancePercentage >= 50) {
                            colorClass = 'border-amber-950 bg-amber-950/20 text-amber-300 hover:bg-amber-950/45';
                          }

                          return (
                            <button
                              key={day.id}
                              onClick={() => {
                                setSelectedDay(day);
                                setActiveTab('ATTENDANCE'); // Quick shortcut link directly back
                              }}
                              className={`border rounded-xl p-3 flex flex-col items-center justify-between transition-all aspect-square relative outline-none ${colorClass} ${
                                isSelected ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-950 scale-95 shadow' : ''
                              }`}
                              title="Click to view detailed log summary"
                            >
                              <span className="text-xs font-semibold">{day.date.getDate()}</span>
                              <span className="text-[9px] font-bold opacity-80">
                                {day.isSunday ? 'OFF' : `${day.presentCount}/${workers.length}`}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ================= TAB 3: PAYSLIP (COMPILER SANDBOX) ================= */}
          {activeTab === 'PAYSLIP' && (
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Select Worker List on Left Panel (Takes 5 Cols) */}
                <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
                  <div>
                    <h3 className="font-bold text-base text-white">Select Worker Profile</h3>
                    <p className="text-xs text-slate-500">Choose a worker below to run dynamic statutory calculations.</p>
                  </div>

                  {/* Range selectors */}
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-850 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Select Month:</span>
                    <div className="flex space-x-1">
                      {['May 2026', 'June 2026', 'July 2026'].map((m) => (
                        <button
                          key={m}
                          onClick={() => setSlipMonthLabel(m)}
                          className={`px-3 py-1.5 rounded-xl text-[9px] font-bold border transition-all ${
                            slipMonthLabel === m
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Directory list */}
                  <div className="space-y-2 max-h-[350px] overflow-y-auto">
                    {workers.map((w) => (
                      <button
                        key={w.id}
                        onClick={() => setSlipWorker(w)}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                          slipWorker.id === w.id
                            ? 'bg-indigo-950/40 border-indigo-500 text-indigo-300'
                            : 'bg-slate-950/60 border-slate-850 hover:bg-slate-850 text-slate-300'
                        }`}
                      >
                        <div>
                          <span className="block font-bold text-xs">{w.name}</span>
                          <span className="block text-[9px] text-slate-500 mt-0.5">Rate: ₹{w.dailyRate}/day • {w.id}</span>
                        </div>
                        <span className="text-[9px] font-bold bg-slate-900 text-slate-400 px-2.5 py-1 rounded">
                          Select
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Compiled Payslip Document on Right Panel (Takes 7 Cols) */}
                <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <h3 className="font-bold text-base text-white">Dynamic Payslip Compiler</h3>
                      <p className="text-xs text-slate-500">Compiling biometric sync log loops</p>
                    </div>
                  </div>

                  {slipWorker && activeSlipData ? (
                    <div className="space-y-5">
                      
                      {/* Printable Invoice Slip Area */}
                      <div className="bg-white text-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-md font-sans text-xs space-y-4">
                        <div className="flex justify-between items-start border-b border-dashed border-slate-300 pb-3">
                          <div>
                            <h4 className="font-black text-xs uppercase tracking-tight text-indigo-900 leading-none">SNAPWAGE INDUSTRIES LTD.</h4>
                            <p className="text-[8px] text-slate-500 mt-1">Mumbai Unit No. 02, Maharashtra</p>
                          </div>
                          <div className="text-right">
                            <span className="bg-indigo-100 text-indigo-900 font-bold px-2 py-0.5 rounded text-[8px] uppercase tracking-wider">
                              Official Salary Receipt
                            </span>
                            <p className="text-[8px] text-slate-500 mt-1 font-mono uppercase">{slipMonthLabel}</p>
                          </div>
                        </div>

                        {/* Summary metrics rows */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 border-b border-slate-200 pb-3 text-[9px]">
                          <div>
                            <span className="text-slate-400 uppercase font-bold block text-[7px]">Employee Name</span>
                            <span className="font-extrabold text-slate-800">{slipWorker.name}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 uppercase font-bold block text-[7px]">Employee Register ID</span>
                            <span className="font-mono text-slate-800">{slipWorker.id}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 uppercase font-bold block text-[7px]">Days Present (Attendance Verified)</span>
                            <span className="font-extrabold text-indigo-700">{activeSlipData.presentDaysCount} Days</span>
                          </div>
                          <div>
                            <span className="text-slate-400 uppercase font-bold block text-[7px]">Overtime hours worked</span>
                            <span className="font-extrabold text-slate-800">{activeSlipData.accumulatedOTHours} Hrs</span>
                          </div>
                        </div>

                        {/* Calculations side-by-side splits */}
                        <div className="grid grid-cols-2 gap-4">
                          
                          {/* Earnings split */}
                          <div className="space-y-1.5 text-[9px]">
                            <h5 className="font-bold border-b border-slate-200 text-slate-500 pb-1 text-[8px] uppercase tracking-wider">Earnings</h5>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Basic Salary:</span>
                              <span className="font-bold text-slate-800">₹{activeSlipData.basicEarnings.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">OT Pay (1.5x):</span>
                              <span className="font-bold text-slate-800">₹{activeSlipData.overtimeEarnings.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between border-t border-slate-100 pt-1 font-bold text-slate-850">
                              <span>Gross Earnings:</span>
                              <span>₹{activeSlipData.grossSalary.toLocaleString()}</span>
                            </div>
                          </div>

                          {/* Deductions Split */}
                          <div className="space-y-1.5 text-[9px] border-l border-slate-100 pl-3">
                            <h5 className="font-bold border-b border-slate-200 text-slate-500 pb-1 text-[8px] uppercase tracking-wider">Statutory Deductions</h5>
                            <div className="flex justify-between text-rose-700">
                              <span>EPF (12% of Basic):</span>
                              <span className="font-bold">-₹{activeSlipData.pfDeduction.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-rose-700">
                              <span>ESI (0.75% of Basic):</span>
                              <span className="font-bold">-₹{activeSlipData.esiDeduction.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between border-t border-slate-100 pt-1 font-bold text-rose-700">
                              <span>Total Deductions:</span>
                              <span>-₹{activeSlipData.totalDeductions.toLocaleString()}</span>
                            </div>
                          </div>

                        </div>

                        {/* Large calculated Final Take Home Net pay */}
                        <div className="bg-slate-100 p-3 rounded-xl flex justify-between items-center border border-slate-200 mt-1">
                          <div>
                            <span className="font-bold text-[8px] uppercase tracking-wider text-slate-500 block">Take-Home (Net Pay)</span>
                            <span className="text-[8px] text-slate-400 block">Disbursed via bank transfer</span>
                          </div>
                          <span className="text-base font-black text-indigo-900 tracking-tight">
                            ₹{activeSlipData.netSalary.toLocaleString()}
                          </span>
                        </div>

                        <p className="text-[7px] text-slate-400 italic text-center leading-relaxed">
                          Note: This is a system-generated document based on Biometric sync logs. Approved under Section 136 of the Indian Factory Act, 1948.
                        </p>

                      </div>

                      {/* Interactive alert status */}
                      {dispatchStatus && (
                        <div className="bg-slate-950 border border-indigo-950 text-indigo-400 p-3 rounded-xl text-xs font-semibold animate-pulse text-center">
                          {dispatchStatus}
                        </div>
                      )}

                      {/* PDF actions buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => window.print()}
                          className="bg-slate-950 hover:bg-slate-800 active:scale-95 border border-slate-800 text-slate-300 font-bold px-4 py-3 rounded-xl text-xs flex-1 transition-all"
                        >
                          Print / Export Paper PDF
                        </button>
                        <button
                          onClick={handleWhatsAppDispatch}
                          disabled={isDispatching}
                          className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-extrabold px-4 py-3 rounded-xl text-xs flex-1 flex items-center justify-center space-x-1.5 transition-all shadow-lg"
                        >
                          <WhatsappIcon />
                          <span>{isDispatching ? 'Sending Slip...' : 'WhatsApp Salary Slip'}</span>
                        </button>
                      </div>

                    </div>
                  ) : (
                    <div className="text-center py-10 text-slate-500 italic">
                      Select a worker profile from the list to display their compiled salary details.
                    </div>
                  )}
                </div>

              </div>

            </div>
          )}

          {/* ================= TAB 4: COLLEAGUES (TEAM DIRECTORY) ================= */}
          {activeTab === 'COLLEAGUES' && (
            <div className="space-y-6">
              
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="font-bold text-base text-white">Roster & Team Management</h3>
                    <p className="text-xs text-slate-500">Registered factory workforce directory</p>
                  </div>
                  
                  {/* Action launcher button */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 self-start sm:self-auto shadow-lg"
                  >
                    <PlusIcon />
                    <span>Onboard Member</span>
                  </button>
                </div>

                {/* Directory Split lists */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Managers Panel directory */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <span>Shift Managers</span>
                      <span className="text-[10px] bg-slate-800 text-slate-500 px-2 py-0.5 rounded font-mono">
                        {managers.length}
                      </span>
                    </h4>
                    
                    <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-850 max-h-[350px] overflow-y-auto">
                      {managers.map((m) => (
                        <div key={m.id} className="flex items-center justify-between border-b border-slate-900 pb-2.5 last:border-0 last:pb-0">
                          <div>
                            <h5 className="font-bold text-sm text-white">{m.name}</h5>
                            <p className="text-[10px] text-slate-500 mt-0.5">Role: Shift Supervisor • Mobile: {m.phone}</p>
                          </div>
                          <span className="text-[9px] font-mono bg-slate-800 text-slate-400 px-2.5 py-1 rounded">
                            {m.id}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Workers directory panel */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <span>Floor Workers</span>
                      <span className="text-[10px] bg-indigo-950/40 text-indigo-400 px-2 py-0.5 rounded border border-indigo-900/60 font-mono">
                        {workers.length}
                      </span>
                    </h4>

                    <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-850 max-h-[350px] overflow-y-auto">
                      {workers.map((w) => (
                        <div key={w.id} className="flex items-center justify-between border-b border-slate-900 pb-2.5 last:border-0 last:pb-0">
                          <div>
                            <h5 className="font-bold text-sm text-white">{w.name}</h5>
                            <div className="flex flex-col gap-0.5 mt-0.5 text-[10px] text-slate-500">
                              <p>Rate: ₹{w.dailyRate}/day • Biometric Machine PIN: {w.pin}</p>
                              <p className="text-indigo-400/90 font-medium">WhatsApp: {w.phone}</p>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono bg-indigo-950 text-indigo-300 px-2 py-1 rounded">
                            {w.id}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

        </main>

      </div>

      {/* ================= GLOBAL ONBOARDING DIALOG ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <h3 className="font-bold text-base text-white">Add Crew Profile</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Role limit active notice */}
            <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-3.5 mb-4 text-xs text-indigo-300 flex items-start gap-2 leading-relaxed">
              <span>⚠️</span>
              <div>
                <strong>Active Permission boundary:</strong> Current role: <strong className="text-white uppercase">{currentRole}</strong>. 
                {currentRole === 'MANAGER' 
                  ? ' Managers can only onboard Worker profiles. Creating Managers is disabled.' 
                  : ' Owners can register both Workers and Shift Managers.'}
              </div>
            </div>

            <form onSubmit={handleAddUser} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Baldev Singh"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Role Option Block */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Roster Role</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormRole('WORKER')}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      formRole === 'WORKER'
                        ? 'bg-indigo-600/10 text-indigo-400 border-indigo-500/50'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Worker (Shift Labor)
                  </button>
                  <button
                    type="button"
                    disabled={currentRole === 'MANAGER'}
                    onClick={() => setFormRole('MANAGER')}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
                      formRole === 'MANAGER'
                        ? 'bg-indigo-600/10 text-indigo-400 border-indigo-500/50'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Manager {currentRole === 'MANAGER' && '🔒'}
                  </button>
                </div>
              </div>

              {/* Conditional parameters based on role */}
              {formRole === 'WORKER' ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Daily Rate (INR)</label>
                      <input 
                        type="number" 
                        required
                        value={formDailyRate}
                        onChange={(e) => setFormDailyRate(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Machine PIN</label>
                      <input 
                        type="text" 
                        maxLength={4}
                        placeholder="e.g. 5560"
                        value={formPin}
                        onChange={(e) => setFormPin(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 font-mono"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">WhatsApp / Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 00000"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Mobile Number (WhatsApp Salary Alerts)</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              )}

              {formError && (
                <div className="p-3 bg-rose-950/40 border border-rose-800/40 text-rose-300 rounded-xl text-xs">
                  ⚠️ {formError}
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex gap-2.5 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800 px-4 py-2.5 rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs shadow-lg transition-colors"
                >
                  Confirm Registration
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}