import { Footer } from './Footer.js';

export const ENABLE_WEBINAR = true;

export function WebinarLanding() {
  const faqs = [
    { q: "Who can attend this webinar?", a: "Anyone interested in AI, software development, or modern development tools can participate." },
    { q: "Do I need prior coding experience?", a: "No. The webinar is beginner-friendly and suitable for learners at all levels." },
    { q: "Will I receive a certificate?", a: "Yes. All registered participants who attend the webinar will receive an official Participation Certificate." },
    { q: "Will recordings be available?", a: "Recording availability will be announced during the webinar." },
    { q: "How will I receive the joining link?", a: "The webinar joining link will be shared through email and the official WhatsApp community before the event." }
  ];

  const faqsHtml = faqs.map((f, i) => `
    <div class="faq-item rounded-2xl bg-white/[0.02] border border-white/5 mb-3 overflow-hidden transition-colors hover:border-white/10 hover:bg-white/[0.04]">
      <button class="faq-btn w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none group" aria-expanded="false" data-index="${i}">
        <span class="text-white/90 font-medium text-base group-hover:text-white transition-colors">${f.q}</span>
        <span class="faq-icon transition-transform duration-300 transform flex items-center justify-center text-white/50 group-hover:text-white/90 bg-white/5 p-2 rounded-full"><i data-lucide="plus" class="w-4 h-4"></i></span>
      </button>
      <div class="faq-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out opacity-0 px-6">
        <p class="text-white/60 text-sm pb-6 leading-relaxed font-light">${f.a}</p>
      </div>
    </div>
  `).join('');

  return `
    <!-- Scrollable Webinar Container -->
    <div id="webinar-landing" class="fixed inset-0 z-[80] w-full h-[100dvh] font-sans bg-[#030014] overflow-y-auto overflow-x-hidden opacity-0 pointer-events-none transition-all duration-500 ease-out translate-y-4 block scroll-smooth [-webkit-overflow-scrolling:touch]">

      <!-- Premium Background -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden bg-[#030014]">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
        <div class="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 blur-2xl md:blur-[120px] rounded-full mix-blend-screen md:animate-pulse" style="animation-duration: 10s; transform: translateZ(0);"></div>
        <div class="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-blue-600/20 blur-2xl md:blur-[120px] rounded-full mix-blend-screen md:animate-pulse" style="animation-duration: 10s; animation-delay: 1s; transform: translateZ(0);"></div>
        <div class="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-fuchsia-600/10 blur-2xl md:blur-[120px] rounded-full mix-blend-screen" style="transform: translateZ(0);"></div>
        <div id="webinar-particles" class="absolute inset-0 opacity-50 mix-blend-screen"></div>
      </div>

      <!-- Main Content Wrapper -->
      <div class="w-full relative block">
        
        <!-- HERO SECTION -->
        <div class="max-w-[1400px] mx-auto px-6 pt-24 md:pt-32 pb-20 min-h-[90vh] flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          <!-- LEFT COLUMN -->
          <div class="w-full lg:w-1/2 flex flex-col items-start text-left gap-8">
            
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs tracking-[0.2em] uppercase font-semibold shadow-[0_4px_24px_-8px_rgba(255,255,255,0.2)] fade-in-section hover:bg-white/10 transition-all duration-300 cursor-default">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
              </span>
              <span class="bg-gradient-to-r from-red-200 to-red-100 bg-clip-text text-transparent font-bold">LIVE MASTERCLASS</span>
            </div>
            
            <h1 class="text-5xl md:text-[72px] lg:text-[84px] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-purple-400 leading-[1.1] tracking-tight fade-in-section drop-shadow-sm pb-2" style="transition-delay: 100ms">
              NextGen AI Tools<br/><span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Webinar 2026</span>
            </h1>
            
            <p class="text-xl md:text-2xl text-white/80 font-medium fade-in-section tracking-wide" style="transition-delay: 200ms">
              Master the Modern AI Development Workflow
            </p>

            <p class="text-lg text-white/60 leading-relaxed max-w-xl fade-in-section font-light" style="transition-delay: 300ms">
              Build, deploy, and scale real AI applications using <span class="text-white font-medium">Stitch, Antigravity, React, and Vercel</span> in one live hands-on masterclass.
            </p>
            
            <div class="flex flex-wrap items-center gap-3 fade-in-section w-full max-w-2xl" style="transition-delay: 400ms">
              ${[
      { icon: 'calendar', text: '11 July, 5 PM IST' },
      { icon: 'award', text: 'Certificate' },
      { icon: 'monitor-play', text: 'Live Masterclass' },
      { icon: 'flame', text: 'Limited Seats' },
      { icon: 'baby', text: 'Beginner Friendly' }
    ].map(item => `
                <div class="group flex items-center gap-2 bg-white/5 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-xl cursor-default hover:-translate-y-0.5">
                  <i data-lucide="${item.icon}" class="w-4 h-4 text-purple-300 group-hover:text-purple-200 transition-colors"></i>
                  <span class="text-white/80 text-sm font-medium group-hover:text-white transition-colors">${item.text}</span>
                </div>
              `).join('')}
            </div>
            
            <div class="flex flex-col sm:flex-row items-center gap-4 mt-4 fade-in-section w-full sm:w-auto" style="transition-delay: 500ms">
              <button id="hero-register-btn" class="relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-[17px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_-10px_rgba(147,51,234,0.5)] group w-full sm:w-auto border border-purple-400/30 cursor-pointer">
                <span class="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-30 group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span class="relative z-10 flex items-center gap-2 drop-shadow-md">Register Now <span class="bg-white/20 px-2 py-0.5 rounded-md text-sm ml-1 border border-white/10">₹69</span></span>
                <i data-lucide="arrow-right" class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform drop-shadow-md"></i>
              </button>
              <button id="view-agenda-btn" class="flex items-center justify-center gap-2 bg-purple-900/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-medium text-[17px] border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-800/40 transition-all duration-300 w-full sm:w-auto group shadow-[0_0_20px_-5px_rgba(147,51,234,0.2)] text-left cursor-pointer">
                View Agenda
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 fade-in-section w-full" style="transition-delay: 600ms">
              <div class="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex flex-col justify-center shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
                <div class="text-[11px] text-white/50 font-semibold tracking-[0.15em] uppercase mb-3 relative z-10">Starts In</div>
                <div class="flex items-center justify-between gap-2" id="hero-countdown">
                  <div class="flex flex-col items-center flex-1">
                    <span class="text-2xl font-bold text-white cd-days font-mono tracking-tight">00</span>
                    <span class="text-[10px] text-white/40 uppercase mt-0.5 font-medium">Days</span>
                  </div>
                  <span class="text-white/20 font-light text-2xl pb-4">:</span>
                  <div class="flex flex-col items-center flex-1">
                    <span class="text-2xl font-bold text-white cd-hours font-mono tracking-tight">00</span>
                    <span class="text-[10px] text-white/40 uppercase mt-0.5 font-medium">Hrs</span>
                  </div>
                  <span class="text-white/20 font-light text-2xl pb-4">:</span>
                  <div class="flex flex-col items-center flex-1">
                    <span class="text-2xl font-bold text-white cd-mins font-mono tracking-tight">00</span>
                    <span class="text-[10px] text-white/40 uppercase mt-0.5 font-medium">Min</span>
                  </div>
                  <span class="text-white/20 font-light text-2xl pb-4">:</span>
                  <div class="flex flex-col items-center flex-1">
                    <span class="text-2xl font-bold text-blue-400 cd-secs font-mono tracking-tight drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">00</span>
                    <span class="text-[10px] text-blue-400/70 uppercase mt-0.5 font-medium">Sec</span>
                  </div>
                </div>
              </div>

              <div class="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:border-white/20 transition-all shadow-2xl relative overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
                <div class="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-[2px] shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.3)] relative z-10 group-hover:scale-105 transition-transform">
                  <div class="w-full h-full bg-[#0a0514] rounded-full overflow-hidden flex items-center justify-center">
                    <img src="/mentor-nithin.png" alt="Nithin" class="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <div class="flex flex-col relative z-10">
                  <span class="text-[10px] text-white/50 tracking-[0.15em] uppercase font-semibold mb-0.5">Hosted By</span>
                  <span class="text-white font-bold text-lg">Nithin</span>
                  <span class="text-purple-300/80 text-xs font-medium">Founder & Director</span>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-6 mt-6 fade-in-section text-sm font-medium" style="transition-delay: 700ms">
              <div class="flex items-center gap-2">
                <div class="flex text-amber-400 gap-0.5">
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                </div>
                <span class="text-white/90">4.9/5 Rating</span>
              </div>
              <div class="text-white/60 flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
                500+ Expected
              </div>
              <div class="text-white/60 flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]"></div>
                30+ Practical Demos
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN 3D -->
          <div class="w-full lg:w-1/2 h-[500px] lg:h-[700px] relative hidden md:block fade-in-section" style="transition-delay: 400ms">
            <div class="absolute inset-0 flex items-center justify-center perspective-[1000px]">
              <div class="w-[85%] h-[65%] bg-gradient-to-br from-white/[0.08] to-white/[0.01] border border-white/10 rounded-[40px] backdrop-blur-2xl transform rotate-x-[15deg] rotate-y-[-10deg] rotate-z-[2deg] shadow-[0_30px_100px_-20px_rgba(0,0,0,1),inset_0_0_30px_rgba(255,255,255,0.05)] relative animate-float transition-transform duration-700 hover:rotate-x-[10deg] hover:rotate-y-[-5deg]">
                
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/30 rounded-full blur-[80px] animate-pulse"></div>
                
                <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-40" style="filter: drop-shadow(0 0 5px rgba(255,255,255,0.5))">
                  <path d="M 20% 20% Q 50% 10% 80% 30% T 50% 80% T 20% 60% Z" fill="none" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="10 10" class="animate-[spin_40s_linear_infinite]" />
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#3b82f6" />
                      <stop offset="50%" stop-color="#a855f7" />
                      <stop offset="100%" stop-color="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                <div class="absolute top-[15%] left-[20%] w-16 h-16 bg-white/[0.05] backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] animate-[float_4s_ease-in-out_infinite]">
                  <i data-lucide="code-2" class="w-8 h-8 text-[#61dafb]"></i>
                </div>
                <div class="absolute top-[25%] right-[20%] w-16 h-16 bg-white/[0.05] backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] animate-[float_5s_ease-in-out_infinite_0.5s]">
                  <i data-lucide="triangle" class="w-8 h-8 text-white fill-white"></i>
                </div>
                <div class="absolute bottom-[30%] left-[10%] w-16 h-16 bg-white/[0.05] backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] animate-[float_6s_ease-in-out_infinite_1s]">
                  <i data-lucide="github" class="w-8 h-8 text-white"></i>
                </div>
                <div class="absolute bottom-[20%] right-[15%] w-16 h-16 bg-white/[0.05] backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] animate-[float_4.5s_ease-in-out_infinite_1.5s]">
                  <i data-lucide="server" class="w-8 h-8 text-[#46E3B7]"></i>
                </div>
                
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.4)] z-20 hover:scale-110 transition-all duration-500 group">
                  <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <i data-lucide="sparkles" class="w-10 h-10 text-purple-300 mb-2 relative z-10 group-hover:animate-pulse"></i>
                  <span class="text-white text-[10px] font-bold tracking-[0.2em] relative z-10">AI WORKFLOW</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-[1400px] mx-auto px-6 relative z-10">

        <!-- AGENDA -->
        <div id="agenda-section" class="mb-32 fade-in-section scroll-mt-24 pt-16">
          <div class="flex flex-col items-center text-center mb-16">
            <h2 class="text-sm font-bold tracking-[0.2em] text-purple-400 uppercase mb-4">Curriculum</h2>
            <h3 class="text-4xl md:text-5xl font-black text-white tracking-tight">Tools & Technologies</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${[
      { title: 'Stitch', desc: 'Simplify AI-powered development workflows natively.', icon: 'puzzle', color: 'from-blue-500/20 to-purple-500/20', borderColor: 'group-hover:border-blue-400/50', iconColor: 'text-blue-400' },
      { title: 'Antigravity', desc: 'Build applications using modern AI agent techniques.', icon: 'rocket', color: 'from-purple-500/20 to-pink-500/20', borderColor: 'group-hover:border-purple-400/50', iconColor: 'text-purple-400' },
      { title: 'GitHub', desc: 'Manage projects professionally using version control.', icon: 'github', color: 'from-gray-500/20 to-slate-500/20', borderColor: 'group-hover:border-gray-400/50', iconColor: 'text-gray-300' },
      { title: 'React', desc: 'Develop modern, responsive user interfaces.', icon: 'code-2', color: 'from-cyan-500/20 to-blue-500/20', borderColor: 'group-hover:border-cyan-400/50', iconColor: 'text-cyan-400' },
      { title: 'Vercel', desc: 'Deploy applications quickly with production hosting.', icon: 'triangle', color: 'from-white/10 to-gray-500/10', borderColor: 'group-hover:border-white/50', iconColor: 'text-white fill-white' },
      { title: 'Render', desc: 'Host APIs, databases, and backend services.', icon: 'server', color: 'from-emerald-500/20 to-teal-500/20', borderColor: 'group-hover:border-emerald-400/50', iconColor: 'text-emerald-400' }
    ].map(topic => `
              <div class="p-8 rounded-[32px] flex flex-col gap-5 group border border-white/5 bg-white/[0.02] backdrop-blur-xl ${topic.borderColor} transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]"></div>
                <div class="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl relative z-10">
                  <i data-lucide="${topic.icon}" class="w-7 h-7 ${topic.iconColor}"></i>
                </div>
                <div class="relative z-10">
                  <h4 class="text-2xl font-bold text-white tracking-tight mb-2">${topic.title}</h4>
                  <p class="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">${topic.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- WHO SHOULD ATTEND -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-32 fade-in-section">
          
          <div class="rounded-[40px] p-10 md:p-14 border border-white/10 flex flex-col h-full bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition-all group relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-colors duration-700"></div>
            <h3 class="text-3xl font-bold text-white mb-6 tracking-tight relative z-10">Who Should Attend?</h3>
            <p class="text-white/60 mb-8 text-lg font-light relative z-10">This live masterclass is perfectly designed for:</p>
            <div class="flex flex-col gap-4 relative z-10">
              ${[
      'Students & Freshers', 'Software Developers', 'AI Enthusiasts',
      'Full Stack Engineers', 'Anyone looking to build modern AI apps'
    ].map(item => `
                <div class="flex items-center gap-4 bg-black/20 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div class="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <i data-lucide="user" class="w-5 h-5 text-purple-300"></i>
                  </div>
                  <span class="text-white/90 text-base font-medium">${item}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="rounded-[40px] p-10 md:p-14 border border-white/10 flex flex-col h-full bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-xl hover:border-white/20 transition-all group relative overflow-hidden">
             <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-700"></div>
            <h3 class="text-3xl font-bold text-white mb-8 tracking-tight relative z-10">What You Will Learn</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 relative z-10">
              ${[
      'Build AI apps from scratch', 'Modern AI workflow',
      'Accelerate with AI tools', 'Collaborate via GitHub',
      'Responsive React UIs', 'Deploy using Vercel',
      'Backend hosting via Render', 'Startup best practices'
    ].map(item => `
                <div class="flex items-center gap-4 bg-black/20 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group/item">
                  <div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-blue-500/40 transition-colors">
                    <i data-lucide="check" class="w-4 h-4 text-blue-300"></i>
                  </div>
                  <span class="text-white/80 text-sm font-medium group-hover/item:text-white transition-colors">${item}</span>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- MENTOR -->
        <div class="mb-32 fade-in-section max-w-5xl mx-auto">
          <div class="rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 pointer-events-none"></div>
            <div class="grid grid-cols-1 md:grid-cols-12 relative z-10">
              <div class="md:col-span-5 bg-black/40 p-12 flex flex-col items-center justify-center text-center relative overflow-hidden border-r border-white/5">
                <div class="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-[2px] mb-8 relative z-10 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                  <div class="w-full h-full rounded-full bg-[#0a0514] overflow-hidden flex items-center justify-center">
                    <img src="/mentor-nithin.png" alt="Nithin - Mentor" class="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <h4 class="text-4xl font-extrabold text-white mb-2">Nithin</h4>
                <p class="text-blue-400 font-bold tracking-widest uppercase text-sm mb-2">Founder & Director</p>
                <p class="text-white/40 text-xs uppercase tracking-[0.2em]">ZenithYugaTech</p>
              </div>
              <div class="md:col-span-7 p-10 md:p-16 flex flex-col justify-center">
                <h3 class="text-3xl font-bold text-white mb-6 tracking-tight">Meet Your Mentor</h3>
                <p class="text-white/60 text-lg leading-relaxed mb-10 font-light">
                  Learn directly from an experienced AI professional who has successfully built and deployed AI solutions for startups and businesses. Gain practical insights, modern industry workflows, and proven development techniques used in real-world high-scale projects.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  ${[
      '4+ Years in AI Development', '300+ AI Projects Delivered',
      'Worked with 30+ Brands', 'Full Stack Developer',
      'AI Workflow Consultant', 'Automation Expert'
    ].map(item => `
                    <div class="flex items-center gap-3">
                      <div class="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                        <i data-lucide="check" class="w-3 h-3 text-purple-300"></i>
                      </div>
                      <span class="text-white/80 font-medium text-sm">${item}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CERTIFICATE & TESTIMONIALS -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-32 fade-in-section">
          <!-- Certificate -->
          <div class="rounded-[40px] p-10 md:p-14 border border-white/10 flex flex-col h-full bg-gradient-to-br from-white/[0.02] to-white/[0.05] relative overflow-hidden group hover:border-white/20 transition-all backdrop-blur-xl">
            <div class="absolute -right-10 -bottom-10 opacity-5 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700">
              <i data-lucide="award" class="w-72 h-72 text-blue-400"></i>
            </div>
            <div class="w-16 h-16 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0.2)] relative z-10 group-hover:scale-110 transition-transform">
              <i data-lucide="award" class="w-8 h-8"></i>
            </div>
            <h3 class="text-3xl font-bold text-white mb-4 relative z-10 tracking-tight">Participation Certificate</h3>
            <p class="text-white/60 mb-6 text-lg font-light leading-relaxed relative z-10">
              Every participant who completes registration and attends the webinar will receive an official verifiable Participation Certificate from ZenithYugaTech.
            </p>
            <p class="text-blue-400 font-medium relative z-10 mt-auto">
              Perfect for your Resume, LinkedIn profile, and Portfolio.
            </p>
          </div>
          
          <!-- Testimonials -->
          <div class="rounded-[40px] p-10 md:p-14 border border-white/10 flex flex-col h-full bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition-all">
            <h3 class="text-2xl font-bold text-white mb-8 tracking-tight">Student Success</h3>
            <div class="bg-black/30 border border-white/5 rounded-[32px] p-8 flex flex-col items-center justify-center flex-1 relative group overflow-hidden hover:border-white/10 transition-all">
              <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <i data-lucide="quote" class="w-10 h-10 text-white/10 mb-6 relative z-10 group-hover:text-white/20 transition-colors"></i>
              <p class="text-white/60 italic text-xl font-light text-center leading-relaxed relative z-10">
                "Your success story could be featured here after attending our webinar."
              </p>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="max-w-3xl mx-auto mb-32 fade-in-section">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Got Questions?</h2>
            <p class="text-white/50 text-lg">Everything you need to know about the webinar.</p>
          </div>
          <div class="rounded-[40px] p-6 md:p-10 border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl flex flex-col gap-2">
            ${faqsHtml}
          </div>
        </div>

        <!-- FINAL CTA -->
        <div class="text-center mb-24 fade-in-section pb-10 max-w-4xl mx-auto">
          <div class="p-14 md:p-20 rounded-[48px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-[0_0_80px_rgba(168,85,247,0.1)] relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/10 blur-[100px] rounded-full group-hover:bg-purple-500/20 transition-colors duration-1000"></div>
            
            <h2 class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 tracking-tight relative z-10">Don't Miss Out!</h2>
            <p class="text-white/60 text-lg max-w-2xl mx-auto mb-10 font-light relative z-10">
              Secure your spot today and unlock the skills required to build, deploy, and scale modern AI applications.
            </p>
            <button id="final-cta-btn" class="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_-10px_rgba(147,51,234,0.6)] z-10 cursor-pointer w-full sm:w-auto border border-purple-400/30 group">
              <span class="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-30 group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <span class="relative z-10 flex items-center gap-2 drop-shadow-md">Register Now <span class="bg-white/20 px-2.5 py-1 rounded-lg text-sm ml-1 border border-white/10">₹69</span></span>
              <i data-lucide="arrow-right" class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform drop-shadow-md"></i>
            </button>
          </div>
        </div>

        </div>
      </div>
      
      <button id="close-webinar-btn" class="fixed top-6 right-6 z-[100] w-12 h-12 bg-white/5 backdrop-blur-xl text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/10 shadow-2xl group">
        <i data-lucide="x" class="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"></i>
      </button>

      <button id="sticky-register-btn" class="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:right-6 z-[90] px-6 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.4)] cursor-pointer flex items-center justify-center border border-purple-400/50 translate-y-32 md:translate-y-[calc(-50%+8rem)] opacity-0 transition-all duration-500 hover:scale-[1.05] pointer-events-none group">
        <span class="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-30 group-hover:animate-[shimmer_1.5s_infinite]"></span>
        <span class="relative z-10 flex items-center gap-2 text-sm whitespace-nowrap drop-shadow-md">Register Now <span class="bg-white/20 px-1.5 py-0.5 rounded-md text-xs border border-white/10">₹69</span></span>
      </button>

      <!-- Registration Modal -->
      <div id="registration-modal" class="fixed inset-0 z-[110] w-full h-[100dvh] flex items-center justify-center bg-black/85 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 ease-out">
        <div class="relative w-[90%] max-w-lg bg-gradient-to-br from-[#1c122c] to-[#0f081d] border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(109,40,217,0.3)] transform scale-95 transition-transform duration-300 flex flex-col max-h-[90vh]">
          <button id="close-registration-modal-btn" class="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors cursor-pointer bg-[#0f081d]/80 backdrop-blur-md rounded-full p-2 border border-white/10 z-20">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
          
          <div class="p-8 md:p-10 overflow-y-auto w-full h-full [-webkit-overflow-scrolling:touch] rounded-3xl relative z-10">
          
          <div class="text-center mb-8">
            <h3 class="text-2xl font-black text-white mb-2 tracking-tight">Webinar Registration</h3>
            <p class="text-white/60 text-sm">Secure your spot for the NextGen AI Tools Masterclass</p>
          </div>
          
          <form id="registration-form" class="flex flex-col gap-5">
            <!-- Full Name -->
            <div class="flex flex-col gap-1.5 text-left">
              <label for="reg-name" class="text-xs font-semibold text-[#d3bbff] uppercase tracking-wider pl-1 font-sans">Full Name</label>
              <input type="text" id="reg-name" required class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all font-sans text-sm" placeholder="John Doe">
            </div>
            
            <!-- Email -->
            <div class="flex flex-col gap-1.5 text-left">
              <label for="reg-email" class="text-xs font-semibold text-[#d3bbff] uppercase tracking-wider pl-1 font-sans">Email Address</label>
              <input type="email" id="reg-email" required class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all font-sans text-sm" placeholder="john@example.com">
            </div>

            <!-- Phone (WhatsApp) -->
            <div class="flex flex-col gap-1.5 text-left">
              <label for="reg-phone" class="text-xs font-semibold text-[#d3bbff] uppercase tracking-wider pl-1 font-sans">WhatsApp Number</label>
              <input type="tel" id="reg-phone" required class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all font-sans text-sm" placeholder="+91 98765 43210">
            </div>

            <!-- Institution / Organization -->
            <div class="flex flex-col gap-1.5 text-left">
              <label for="reg-institution" class="text-xs font-semibold text-[#d3bbff] uppercase tracking-wider pl-1 font-sans">College / Organization</label>
              <input type="text" id="reg-institution" required class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all font-sans text-sm" placeholder="Your College or Company Name">
            </div>

            <!-- Role Selection -->
            <div class="flex flex-col gap-1.5 text-left">
              <label class="text-xs font-semibold text-[#d3bbff] uppercase tracking-wider pl-1 font-sans">I am a</label>
              <div class="grid grid-cols-2 gap-3">
                <label class="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-white/80">
                  <input type="radio" name="reg-role" value="student" checked class="accent-purple-500">
                  <span>Student</span>
                </label>
                <label class="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-white/80">
                  <input type="radio" name="reg-role" value="professional" class="accent-purple-500">
                  <span>Professional</span>
                </label>
              </div>
            </div>

            <!-- Why Attend -->
            <div class="flex flex-col gap-1.5 text-left">
              <label for="reg-why" class="text-xs font-semibold text-[#d3bbff] uppercase tracking-wider pl-1 font-sans">Why do you want to attend? (Optional)</label>
              <textarea id="reg-why" rows="2" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all font-sans text-sm resize-none" placeholder="Briefly describe what you hope to learn..."></textarea>
            </div>

            <!-- Error message container -->
            <div id="registration-error" class="hidden text-red-400 text-xs font-semibold text-center mt-1 bg-red-950/20 border border-red-900/30 p-3 rounded-lg"></div>

            <!-- Submit Button -->
            <button type="submit" id="submit-registration-btn" class="w-full mt-2 relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-[0_0_30px_rgba(147,51,234,0.4)] border border-purple-400/30 group">
              <span class="btn-text">Submit Registration</span>
              <div class="btn-spinner hidden w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </button>
          </form>
          
          <!-- Success State -->
          <div id="registration-success-state" class="hidden flex flex-col items-center justify-center text-center py-6">
            <div class="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <i data-lucide="check" class="w-8 h-8 text-emerald-400"></i>
            </div>
            <h3 class="text-2xl font-black text-white mb-2 tracking-tight">🎉 Registration Successful!</h3>
            <div id="wa-redirecting-state" class="flex flex-col items-center justify-center my-4">
              <div class="w-8 h-8 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mb-3"></div>
              <p class="text-emerald-400 font-semibold text-sm">Redirecting you to our WhatsApp Community...</p>
            </div>
            <p class="text-white/70 text-sm leading-relaxed max-w-xs mb-6 mt-2">
              Awesome! We have sent the confirmation to your email.
            </p>
            <a href="https://chat.whatsapp.com/Bi8vjKHDEXwGzyui1YYQdx" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba56] text-white py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_24px_rgba(37,211,102,0.3)]">
              <i data-lucide="message-square" class="w-5 h-5"></i>
              Join WhatsApp Community
            </a>
          </div>
          </div>

        </div>
      </div>

      ${Footer()}
    </div>
  `;
}


export function setupWebinarLanding() {
  if (!ENABLE_WEBINAR) return;

  // Load Razorpay SDK Script
  if (!document.getElementById('razorpay-checkout-script')) {
    const script = document.createElement('script');
    script.id = 'razorpay-checkout-script';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script);
  }

  const container = document.getElementById('webinar-landing');
  const closeBtn = document.getElementById('close-webinar-btn');
  const stickyBtn = document.getElementById('sticky-register-btn');
  const viewAgendaBtn = document.getElementById('view-agenda-btn');
  const agendaSection = document.getElementById('agenda-section');

  if (!container || !closeBtn) return;

  // Button Listeners for scrolling
  if (viewAgendaBtn) viewAgendaBtn.addEventListener('click', () => {
    if (agendaSection) agendaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // --- REGISTRATION MODAL LOGIC ---
  const regModal = document.getElementById('registration-modal');
  const closeRegModalBtn = document.getElementById('close-registration-modal-btn');
  const regForm = document.getElementById('registration-form');
  const regSuccessState = document.getElementById('registration-success-state');
  const regErrorEl = document.getElementById('registration-error');
  const submitRegBtn = document.getElementById('submit-registration-btn');

  const openRegistrationModal = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!regModal) return;

    // Prevent duplicate rendering/actions if already open
    if (!regModal.classList.contains('opacity-0')) return;

    regModal.classList.remove('opacity-0', 'pointer-events-none');
    regModal.classList.add('opacity-100');
    const modalBox = regModal.querySelector('.relative');
    if (modalBox) {
      modalBox.classList.remove('scale-95');
      modalBox.classList.add('scale-100');
    }
    // Reset form states
    if (regForm) regForm.classList.remove('hidden');
    if (regSuccessState) regSuccessState.classList.add('hidden');
    if (regErrorEl) {
      regErrorEl.classList.add('hidden');
      regErrorEl.innerText = '';
    }

    // Accessibility: Focus the first input field automatically
    setTimeout(() => {
      const firstInput = document.getElementById('reg-name');
      if (firstInput) firstInput.focus();
    }, 100);
  };

  const closeRegistrationModal = () => {
    if (!regModal) return;
    regModal.classList.add('opacity-0', 'pointer-events-none');
    regModal.classList.remove('opacity-100');
    const modalBox = regModal.querySelector('.relative');
    if (modalBox) {
      modalBox.classList.add('scale-95');
      modalBox.classList.remove('scale-100');
    }
  };

  // Keyboard accessibility: ESC to close the modal
  if (!window._webinarEscListener) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const currentModal = document.getElementById('registration-modal');
        if (currentModal && !currentModal.classList.contains('opacity-0')) {
          const closeBtn = document.getElementById('close-registration-modal-btn');
          if (closeBtn) closeBtn.click();
        }
      }
    });
    window._webinarEscListener = true;
  }

  // Wire up the open triggers, preventing duplicate listeners
  const heroRegBtn = document.getElementById('hero-register-btn');
  const finalRegBtn = document.getElementById('final-cta-btn');

  const setupRegBtn = (btn) => {
    if (btn && !btn.dataset.regSetup) {
      btn.addEventListener('click', openRegistrationModal);
      btn.dataset.regSetup = 'true';
    }
  };

  setupRegBtn(heroRegBtn);
  setupRegBtn(finalRegBtn);
  if (typeof stickyBtn !== 'undefined') setupRegBtn(stickyBtn);

  if (closeRegModalBtn && !closeRegModalBtn.dataset.regSetup) {
    closeRegModalBtn.addEventListener('click', closeRegistrationModal);
    closeRegModalBtn.dataset.regSetup = 'true';
  }

  if (regModal && !regModal.dataset.regSetup) {
    regModal.addEventListener('click', (e) => {
      if (e.target === regModal) closeRegistrationModal();
    });
    regModal.dataset.regSetup = 'true';
  }

  // Handle form submit
  if (regForm) {
    regForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const fullName = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const phone = document.getElementById('reg-phone').value.trim();
      const institution = document.getElementById('reg-institution').value.trim();
      const role = regForm.querySelector('input[name="reg-role"]:checked').value;
      const whyAttend = document.getElementById('reg-why').value.trim();

      // Show loader
      if (submitRegBtn) {
        submitRegBtn.disabled = true;
        submitRegBtn.querySelector('.btn-text').classList.add('hidden');
        submitRegBtn.querySelector('.btn-spinner').classList.remove('hidden');
      }
      if (regErrorEl) regErrorEl.classList.add('hidden');

      const API_ENDPOINT = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000/api/registrations'
        : 'https://webinarbackend-vr7l.onrender.com/api/registrations';

      try {
        // Step 1: Create pending registration & Razorpay Order on backend
        const response = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fullName,
            email,
            phone,
            institution,
            role,
            whyAttend
          })
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          if (regErrorEl) {
            regErrorEl.innerText = data.message || 'Registration failed. Please try again.';
            regErrorEl.classList.remove('hidden');
          }
          // Reset loader
          if (submitRegBtn) {
            submitRegBtn.disabled = false;
            submitRegBtn.querySelector('.btn-text').classList.remove('hidden');
            submitRegBtn.querySelector('.btn-spinner').classList.add('hidden');
          }
          return;
        }

        // Step 2: Open Razorpay Checkout Modal
        if (!window.Razorpay) {
          if (regErrorEl) {
            regErrorEl.innerText = 'Razorpay SDK failed to load. Please check your network connection.';
            regErrorEl.classList.remove('hidden');
          }
          // Reset loader
          if (submitRegBtn) {
            submitRegBtn.disabled = false;
            submitRegBtn.querySelector('.btn-text').classList.remove('hidden');
            submitRegBtn.querySelector('.btn-spinner').classList.add('hidden');
          }
          return;
        }

        const options = {
          key: data.keyId,
          amount: data.amount,
          currency: "INR",
          name: "ZenithYugaTech",
          description: "NextGen AI Tools Masterclass Registration",
          order_id: data.orderId,
          handler: async function (paymentResponse) {
            // Step 3: Verify payment signature on backend
            if (submitRegBtn) {
              submitRegBtn.disabled = true;
              // Update button UI to show verification in progress
              const btnText = submitRegBtn.querySelector('.btn-text');
              if (btnText) {
                btnText.innerText = 'Verifying Payment...';
                btnText.classList.remove('hidden');
              }
              submitRegBtn.querySelector('.btn-spinner').classList.remove('hidden');
            }

            try {
              const verifyResponse = await fetch(`${API_ENDPOINT}/verify`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  razorpay_payment_id: paymentResponse.razorpay_payment_id,
                  razorpay_order_id: paymentResponse.razorpay_order_id,
                  razorpay_signature: paymentResponse.razorpay_signature,
                  registrationId: data.registrationId
                })
              });

              const verifyData = await verifyResponse.json();

              if (verifyResponse.ok && verifyData.success) {
                // Dynamic WhatsApp Group link update from verified backend response
                const waLinkBtn = regSuccessState.querySelector('a');
                const waLink = verifyData.whatsappLink || 'https://chat.whatsapp.com/Bi8vjKHDEXwGzyui1YYQdx';
                if (waLinkBtn) {
                  waLinkBtn.href = waLink;
                }

                if (regForm) regForm.classList.add('hidden');
                if (regSuccessState) regSuccessState.classList.remove('hidden');

                if (window.lucide) {
                  window.lucide.createIcons();
                }

                // Automatic WhatsApp redirect
                setTimeout(() => {
                  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                  if (isMobile) {
                    window.location.href = waLink;
                  } else {
                    window.open(waLink, '_blank');
                  }
                  
                  const redirectState = document.getElementById('wa-redirecting-state');
                  if (redirectState) {
                    redirectState.innerHTML = '<p class="text-emerald-400 font-semibold text-sm">If not redirected automatically, please click below:</p>';
                  }
                }, 2500);
              } else {
                if (regErrorEl) {
                  regErrorEl.innerText = verifyData.message || 'Payment verification failed.';
                  regErrorEl.classList.remove('hidden');
                }
              }
            } catch (err) {
              console.error('Verification Error:', err);
              if (regErrorEl) {
                regErrorEl.innerText = 'Could not verify payment with the server. Please contact support.';
                regErrorEl.classList.remove('hidden');
              }
            } finally {
              // Reset loader UI text
              if (submitRegBtn) {
                submitRegBtn.disabled = false;
                const btnText = submitRegBtn.querySelector('.btn-text');
                if (btnText) {
                  btnText.innerText = 'Submit Registration';
                  btnText.classList.remove('hidden');
                }
                submitRegBtn.querySelector('.btn-spinner').classList.add('hidden');
              }
            }
          },
          prefill: {
            name: fullName,
            email: email,
            contact: phone
          },
          theme: {
            color: "#6d28d9"
          },
          modal: {
            ondismiss: function () {
              // Payment cancelled/dismissed by user
              if (regErrorEl) {
                regErrorEl.innerText = 'Payment cancelled. Complete the payment to secure your registration.';
                regErrorEl.classList.remove('hidden');
              }
              // Reset loader
              if (submitRegBtn) {
                submitRegBtn.disabled = false;
                submitRegBtn.querySelector('.btn-text').classList.remove('hidden');
                submitRegBtn.querySelector('.btn-spinner').classList.add('hidden');
              }
            }
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();

      } catch (err) {
        console.error('API Error:', err);
        if (regErrorEl) {
          regErrorEl.innerText = 'Could not connect to the server. Please check your network or make sure the backend is running.';
          regErrorEl.classList.remove('hidden');
        }
        // Reset loader
        if (submitRegBtn) {
          submitRegBtn.disabled = false;
          submitRegBtn.querySelector('.btn-text').classList.remove('hidden');
          submitRegBtn.querySelector('.btn-spinner').classList.add('hidden');
        }
      }
    });
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (e) => {
    if (window.location.pathname === '/webinar') {
      if (typeof window.openWebinarLanding === 'function') {
        window.openWebinarLanding(true);
      }
    } else if (container.style.display === 'block') {
      closeWebinar(true);
    }
  });

  // Check initial URL on page load
  if (window.location.pathname === '/webinar') {
    setTimeout(() => {
      if (typeof window.openWebinarLanding === 'function') {
        window.openWebinarLanding(true);
      }
    }, 300);
  }

  // --- COUNTDOWN LOGIC ---
  // Target: 11 July 2026, 5:00 PM IST (IST is UTC+5:30)
  const targetDate = new Date('2026-07-11T17:00:00+05:30').getTime();
  let countdownInterval;

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.querySelector('.cd-days');
    const hoursEl = document.querySelector('.cd-hours');
    const minsEl = document.querySelector('.cd-mins');
    const secsEl = document.querySelector('.cd-secs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    if (distance < 0) {
      daysEl.innerText = "00";
      hoursEl.innerText = "00";
      minsEl.innerText = "00";
      secsEl.innerText = "00";
      if (countdownInterval) clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Simple flip effect logic (add a quick class toggle to trigger CSS if desired)
    const setVal = (el, val) => {
      const formatted = val < 10 ? '0' + val : val;
      if (el.innerText !== formatted.toString()) {
        el.innerText = formatted;
        el.classList.remove('animate-pulse');
        void el.offsetWidth; // trigger reflow
        el.classList.add('animate-pulse');
      }
    };

    setVal(daysEl, days);
    setVal(hoursEl, hours);
    setVal(minsEl, minutes);
    setVal(secsEl, seconds);
  };

  // Global open function
  window.openWebinarLanding = (skipHistoryUpdate = false) => {
    if (!skipHistoryUpdate && window.location.pathname !== '/webinar') {
      window.history.pushState({ modal: 'webinar' }, '', '/webinar');
    }

    container.style.display = 'block';

    // Start countdown
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);

    // Small delay to allow display:block to apply before animating opacity
    setTimeout(() => {
      container.style.opacity = '1';
      container.style.pointerEvents = 'auto';
      container.style.transform = 'translateY(0)';
      document.body.style.overflow = 'hidden';

      // Trigger animations
      const sections = container.querySelectorAll('.fade-in-section');
      sections.forEach(section => {
        section.classList.remove('visible');
        setTimeout(() => {
          if (isElementInViewport(section, container)) {
            section.classList.add('visible');
          }
        }, 100);
      });
    }, 10);
  };

  // Close logic
  const closeWebinar = (skipHistoryUpdate = false) => {
    container.style.opacity = '0';
    container.style.pointerEvents = 'none';
    container.style.transform = 'translateY(4rem)';
    document.body.style.overflow = '';

    if (countdownInterval) clearInterval(countdownInterval);

    if (!skipHistoryUpdate && window.location.pathname === '/webinar') {
      window.history.pushState({}, '', '/');
    }

    // Reset video iframe if exists to stop playing
    const iframe = container.querySelector('iframe');
    if (iframe) {
      const src = iframe.src;
      iframe.src = src;
    }

    setTimeout(() => {
      container.style.display = 'none';
      container.scrollTop = 0; // Reset scroll position
    }, 500);
  };

  closeBtn.addEventListener('click', () => closeWebinar(false));

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && container.style.opacity === '1') {
      closeWebinar(false);
    }
  });

  // FAQ Interaction
  const faqBtns = container.querySelectorAll('.faq-btn');
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all other FAQs
      faqBtns.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherBtn.nextElementSibling.style.maxHeight = '0px';
          otherBtn.nextElementSibling.style.opacity = '0';
          const otherIcon = otherBtn.querySelector('.faq-icon');
          if (otherIcon) {
            otherIcon.style.transform = 'rotate(0deg)';
            otherIcon.classList.remove('bg-[#d3bbff]/20');
          }
        }
      });

      if (!isExpanded) {
        btn.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
        if (icon) {
          icon.style.transform = 'rotate(45deg)';
          icon.classList.add('bg-[#d3bbff]/20');
        }
      } else {
        btn.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        if (icon) {
          icon.style.transform = 'rotate(0deg)';
          icon.classList.remove('bg-[#d3bbff]/20');
        }
      }
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: container,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const sections = container.querySelectorAll('.fade-in-section');
  sections.forEach(section => observer.observe(section));

  // Handle sticky register button visibility
  if (stickyBtn) {
    let ticking = false;
    container.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isDesktop = window.innerWidth >= 768;
          // Show sticky button after scrolling past hero section (approx 600px now)
          if (container.scrollTop > 600) {
            stickyBtn.style.opacity = '1';
            stickyBtn.style.pointerEvents = 'auto';
            stickyBtn.style.transform = isDesktop ? 'translateY(-50%) translateX(0)' : 'translateY(0) translateX(-50%)';
          } else {
            stickyBtn.style.opacity = '0';
            stickyBtn.style.pointerEvents = 'none';
            stickyBtn.style.transform = isDesktop ? 'translateY(calc(-50% + 8rem)) translateX(0)' : 'translateY(6rem) translateX(-50%)';
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Particle background effect
  const particlesContainer = document.getElementById('webinar-particles');
  if (particlesContainer && particlesContainer.children.length === 0) {
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-white pointer-events-none';
      const size = Math.random() * 3 + 1;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.opacity = Math.random() * 0.3 + 0.1;
      particle.style.animation = `float ${Math.random() * 15 + 15}s linear infinite`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particlesContainer.appendChild(particle);
    }
  }

  // Initial call to render icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Helper to check if element is in viewport of container
function isElementInViewport(el, container) {
  const rect = el.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return (
    rect.top >= containerRect.top - 100 &&
    rect.left >= containerRect.left &&
    rect.bottom <= containerRect.bottom + window.innerHeight &&
    rect.right <= containerRect.right
  );
}
