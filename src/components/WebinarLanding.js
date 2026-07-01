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
    <div class="faq-item border-b border-[#d3bbff]/10">
      <button class="faq-btn w-full py-5 flex items-center justify-between text-left focus:outline-none group" aria-expanded="false" data-index="${i}">
        <span class="text-[#ecddf9] font-medium text-sm md:text-base group-hover:text-white transition-colors">${f.q}</span>
        <span class="faq-icon transition-transform duration-300 transform flex items-center justify-center text-[#d3bbff] group-hover:text-white bg-[#d3bbff]/5 p-1.5 rounded-full"><i data-lucide="plus" class="w-4 h-4"></i></span>
      </button>
      <div class="faq-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out opacity-0">
        <p class="text-[#ccc3d7] text-sm pb-5 leading-relaxed">${f.a}</p>
      </div>
    </div>
  `).join('');

  return `
    <!-- Scrollable Webinar Container -->
    <div id="webinar-landing" class="fixed inset-0 z-[80] w-full h-[100dvh] font-sans bg-[#0a0514] overflow-y-auto overflow-x-hidden opacity-0 pointer-events-none transition-all duration-500 ease-out translate-y-4 block">

      <!-- Premium Background: Aurora, Grid, Particles -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <!-- CSS Grid Overlay -->
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <!-- Blurred Glowing Blobs -->
        <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6d28d9]/20 blur-[150px] rounded-full mix-blend-screen transform -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute top-[20%] right-0 w-[600px] h-[600px] bg-[#2563eb]/20 blur-[150px] rounded-full mix-blend-screen transform translate-x-1/3"></div>
        <!-- Particles Container -->
        <div id="webinar-particles" class="absolute inset-0 opacity-40"></div>
      </div>

      <!-- Main Content Wrapper -->
      <div class="w-full relative block">
        
        <!-- ============================================== -->
        <!-- PREMIUM HERO SECTION (Two-Column Layout)       -->
        <!-- ============================================== -->
        <div class="max-w-[1400px] mx-auto px-6 pt-24 md:pt-32 pb-20 min-h-[90vh] flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          <!-- LEFT COLUMN: Content -->
          <div class="w-full lg:w-1/2 flex flex-col items-start text-left gap-8">
            
            <!-- Animated Badge -->
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#180f23]/80 backdrop-blur-md border border-[#d3bbff]/20 text-xs tracking-widest uppercase font-mono text-[#dac5ff] shadow-[0_0_20px_rgba(211,187,255,0.1)] fade-in-section group hover:border-[#d3bbff]/40 transition-colors cursor-default">
              <span class="relative flex h-2 w-2 mr-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
              </span>
              LIVE MASTERCLASS
            </div>
            
            <!-- Huge Premium Heading -->
            <h1 class="text-6xl md:text-[80px] lg:text-[90px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c4abff] to-[#60a5fa] leading-[1.05] tracking-tight fade-in-section animate-text-shimmer bg-[length:200%_auto] drop-shadow-[0_0_40px_rgba(109,40,217,0.4)] pb-2" style="transition-delay: 100ms">
              NextGen AI Tools Webinar 2026
            </h1>
            
            <p class="text-xl md:text-2xl text-[#ecddf9] font-medium fade-in-section tracking-wide" style="transition-delay: 200ms">
              Master the Modern AI Development Workflow
            </p>

            <p class="text-lg text-[#ccc3d7] leading-relaxed max-w-xl fade-in-section font-light" style="transition-delay: 300ms">
              Build, deploy, and scale real AI applications using <span class="text-white font-medium">Stitch, Antigravity, React, and Vercel</span> in one live hands-on masterclass.
            </p>
            
            <!-- Premium Information Chips -->
            <div class="flex flex-wrap items-center gap-3 fade-in-section w-full max-w-2xl" style="transition-delay: 400ms">
              ${[
                { icon: 'calendar', text: '11 July, 5 PM IST' },
                { icon: 'award', text: 'Certificate' },
                { icon: 'monitor-play', text: 'Live Masterclass' },
                { icon: 'flame', text: 'Limited Seats' },
                { icon: 'baby', text: 'Beginner Friendly' }
              ].map(item => `
                <div class="group flex items-center gap-2.5 bg-[#120a1d]/60 backdrop-blur-xl px-4 py-2.5 rounded-full border border-[#d3bbff]/15 hover:border-[#60a5fa]/50 hover:bg-[#60a5fa]/10 transition-all duration-300 shadow-sm cursor-default">
                  <i data-lucide="${item.icon}" class="w-4 h-4 text-[#c4abff] group-hover:text-[#60a5fa] transition-colors"></i>
                  <span class="text-[#ecddf9] text-sm font-medium tracking-wide group-hover:text-white transition-colors">${item.text}</span>
                </div>
              `).join('')}
            </div>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-center gap-4 mt-2 fade-in-section w-full sm:w-auto" style="transition-delay: 500ms">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfycyrCNocF5NCv8bKO_fVBRm41fxWGkyIGtE0KD4GateyZAw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" id="hero-register-btn" class="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_10px_40px_rgba(37,99,235,0.4)] border border-blue-400/30 group w-full sm:w-auto">
                <span class="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-full"></span>
                <span class="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span class="relative z-10 drop-shadow-md">🚀 Register Now for ₹ 69 Only</span>
              </a>
              <button id="view-agenda-btn" class="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md text-[#ecddf9] px-10 py-5 rounded-full font-bold text-lg border border-[#d3bbff]/20 hover:border-[#d3bbff]/60 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                View Agenda
              </button>
            </div>

            <!-- Presenter & Countdown & Stats -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 fade-in-section w-full" style="transition-delay: 600ms">
              
              <!-- Countdown Container -->
              <div class="bg-[#180f23]/60 backdrop-blur-xl border border-[#d3bbff]/15 p-4 rounded-2xl flex flex-col justify-center">
                <div class="text-[10px] text-[#958da1] font-mono tracking-widest uppercase mb-2">Starts In</div>
                <div class="flex items-center gap-3 text-center" id="hero-countdown">
                  <div class="flex flex-col">
                    <span class="text-2xl font-bold text-white bg-[#120a1d] px-3 py-1.5 rounded-lg border border-[#d3bbff]/10 cd-days">00</span>
                    <span class="text-[9px] text-[#958da1] uppercase mt-1">Days</span>
                  </div>
                  <span class="text-[#c4abff] font-bold text-xl pb-3">:</span>
                  <div class="flex flex-col">
                    <span class="text-2xl font-bold text-white bg-[#120a1d] px-3 py-1.5 rounded-lg border border-[#d3bbff]/10 cd-hours">00</span>
                    <span class="text-[9px] text-[#958da1] uppercase mt-1">Hrs</span>
                  </div>
                  <span class="text-[#c4abff] font-bold text-xl pb-3">:</span>
                  <div class="flex flex-col">
                    <span class="text-2xl font-bold text-white bg-[#120a1d] px-3 py-1.5 rounded-lg border border-[#d3bbff]/10 cd-mins">00</span>
                    <span class="text-[9px] text-[#958da1] uppercase mt-1">Min</span>
                  </div>
                  <span class="text-[#c4abff] font-bold text-xl pb-3">:</span>
                  <div class="flex flex-col">
                    <span class="text-2xl font-bold text-[#60a5fa] bg-[#120a1d] px-3 py-1.5 rounded-lg border border-[#60a5fa]/30 cd-secs">00</span>
                    <span class="text-[9px] text-[#958da1] uppercase mt-1">Sec</span>
                  </div>
                </div>
              </div>

              <!-- Presenter Card -->
              <div class="bg-gradient-to-br from-[#180f23]/80 to-[#120a1d]/90 backdrop-blur-xl border border-[#d3bbff]/15 p-4 rounded-2xl flex items-center gap-4 hover:border-[#d3bbff]/30 transition-colors">
                <div class="w-14 h-14 rounded-full bg-gradient-to-tr from-[#6d28d9] to-[#d3bbff] p-[2px] shrink-0 shadow-[0_0_15px_rgba(109,40,217,0.3)]">
                  <div class="w-full h-full bg-[#120a1d] rounded-full overflow-hidden flex items-center justify-center">
                    <i data-lucide="user" class="w-6 h-6 text-[#d3bbff]"></i>
                  </div>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs text-[#958da1] tracking-widest uppercase font-mono">Hosted By</span>
                  <span class="text-white font-bold text-lg">Nithin</span>
                  <span class="text-[#c4abff] text-xs">Founder & Director</span>
                </div>
              </div>
              
            </div>

            <!-- Participant Stats -->
            <div class="flex flex-wrap items-center gap-x-8 gap-y-4 mt-4 fade-in-section text-sm font-medium" style="transition-delay: 700ms">
              <div class="flex items-center gap-2">
                <div class="flex text-yellow-400">
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                </div>
                <span class="text-white">4.9/5 Rating</span>
              </div>
              <div class="text-[#ccc3d7] flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-[#60a5fa]"></div>
                500+ Expected
              </div>
              <div class="text-[#ccc3d7] flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-[#c084fc]"></div>
                30+ Practical Demos
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN: 3D Visual Area -->
          <div class="w-full lg:w-1/2 h-[500px] lg:h-[700px] relative hidden md:block fade-in-section" style="transition-delay: 400ms">
            <!-- 3D Base Platform -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-[80%] h-[60%] bg-gradient-to-br from-[#ffffff05] to-[#ffffff01] border border-[#ffffff10] rounded-3xl backdrop-blur-3xl transform rotate-x-[20deg] rotate-y-[-15deg] rotate-z-[5deg] shadow-[0_50px_100px_rgba(0,0,0,0.8),inset_0_0_50px_rgba(255,255,255,0.05)] relative animate-float">
                
                <!-- Glowing Core -->
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#6d28d9]/40 rounded-full blur-[60px] animate-pulse"></div>
                
                <!-- SVG Connections -->
                <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-30" style="filter: drop-shadow(0 0 5px rgba(255,255,255,0.5))">
                  <path d="M 20% 20% Q 50% 10% 80% 30% T 50% 80% T 20% 60% Z" fill="none" stroke="url(#lineGrad)" stroke-width="1.5" stroke-dasharray="10 10" class="animate-[spin_40s_linear_infinite]" />
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#60a5fa" />
                      <stop offset="50%" stop-color="#c084fc" />
                      <stop offset="100%" stop-color="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>

                <!-- Floating Tech Stack Icons -->
                <!-- React -->
                <div class="absolute top-[15%] left-[20%] w-16 h-16 bg-[#180f23]/80 backdrop-blur-md border border-[#61dafb]/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(97,218,251,0.2)] animate-[float_4s_ease-in-out_infinite]">
                  <i data-lucide="code-2" class="w-8 h-8 text-[#61dafb]"></i>
                </div>
                <!-- Vercel -->
                <div class="absolute top-[25%] right-[20%] w-16 h-16 bg-[#180f23]/80 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] animate-[float_5s_ease-in-out_infinite_0.5s]">
                  <i data-lucide="triangle" class="w-8 h-8 text-white fill-white"></i>
                </div>
                <!-- GitHub -->
                <div class="absolute bottom-[30%] left-[10%] w-16 h-16 bg-[#180f23]/80 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] animate-[float_6s_ease-in-out_infinite_1s]">
                  <i data-lucide="github" class="w-8 h-8 text-white"></i>
                </div>
                <!-- Render -->
                <div class="absolute bottom-[20%] right-[15%] w-16 h-16 bg-[#180f23]/80 backdrop-blur-md border border-[#46E3B7]/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(70,227,183,0.2)] animate-[float_4.5s_ease-in-out_infinite_1.5s]">
                  <i data-lucide="server" class="w-8 h-8 text-[#46E3B7]"></i>
                </div>
                
                <!-- Central Focus (Stitch/Antigravity) -->
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-[#120a1d]/90 to-[#201533]/90 backdrop-blur-xl border border-[#d3bbff]/40 rounded-3xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(109,40,217,0.5)] z-20 hover:scale-110 transition-transform">
                  <i data-lucide="sparkles" class="w-10 h-10 text-[#c084fc] mb-1"></i>
                  <span class="text-white text-xs font-bold tracking-widest">AI WORKFLOW</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-[1400px] mx-auto px-6 relative z-10">

        <!-- ============================================== -->
        <!-- REST OF THE WEBINAR CONTENT                    -->
        <!-- ============================================== -->

        <!-- Topics Covered -->
        <div id="agenda-section" class="mb-32 fade-in-section scroll-mt-24 pt-16">
          <h3 class="text-3xl md:text-5xl font-bold text-center text-[#ecddf9] mb-16 tracking-tight">Tools & Technologies Covered</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${[
              { title: 'Stitch', desc: 'Learn how Stitch simplifies AI-powered development workflows natively.', icon: 'puzzle' },
              { title: 'Antigravity', desc: 'Build and accelerate applications using modern AI agent techniques.', icon: 'rocket' },
              { title: 'GitHub', desc: 'Manage projects professionally using version control and collaboration.', icon: 'github' },
              { title: 'React', desc: 'Develop modern, responsive user interfaces with component-driven design.', icon: 'code-2' },
              { title: 'Vercel', desc: 'Deploy frontend applications quickly with production-ready hosting.', icon: 'triangle' },
              { title: 'Render', desc: 'Host APIs, databases, and backend services with absolute ease.', icon: 'server' }
            ].map(topic => `
              <div class="glass-card p-10 rounded-3xl flex flex-col gap-4 group border border-[#d3bbff]/10 hover:border-[#60a5fa]/30 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(96,165,250,0.1)] hover:-translate-y-2 bg-[#120a1d]/60 backdrop-blur-xl">
                <div class="w-14 h-14 bg-[#180f23] rounded-2xl flex items-center justify-center text-[#d3bbff] border border-[#d3bbff]/20 group-hover:scale-110 group-hover:bg-[#60a5fa]/10 group-hover:text-[#60a5fa] transition-all shadow-lg">
                  <i data-lucide="${topic.icon}" class="w-7 h-7"></i>
                </div>
                <h4 class="text-2xl font-bold text-[#ecddf9] tracking-wide mt-2">${topic.title}</h4>
                <p class="text-[#958da1] text-sm leading-relaxed group-hover:text-[#ccc3d7] transition-colors">${topic.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Two Column: Who Should Attend & What You Will Learn -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32 fade-in-section">
          
          <!-- Who Should Attend -->
          <div class="glass-card rounded-3xl p-10 md:p-14 border border-[#d3bbff]/10 flex flex-col h-full bg-[#120a1d]/60 backdrop-blur-xl hover:border-[#d3bbff]/30 transition-all">
            <h3 class="text-3xl font-bold text-[#ecddf9] mb-8 tracking-tight">Who Should Attend?</h3>
            <p class="text-[#ccc3d7] mb-8 text-lg font-light">This live masterclass is perfectly designed for:</p>
            <div class="flex flex-col gap-5">
              ${[
                'Students & Freshers', 'Software Developers', 'AI Enthusiasts',
                'Full Stack Engineers', 'Anyone looking to build modern AI apps'
              ].map(item => `
                <div class="flex items-center gap-4">
                  <div class="w-2 h-2 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div>
                  <span class="text-[#ecddf9] text-base md:text-lg font-medium">${item}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- What You Will Learn -->
          <div class="glass-card rounded-3xl p-10 md:p-14 border border-[#d3bbff]/10 flex flex-col h-full bg-gradient-to-br from-[#120a1d]/60 to-[#201533]/60 backdrop-blur-xl hover:border-[#d3bbff]/30 transition-all">
            <h3 class="text-3xl font-bold text-[#ecddf9] mb-8 tracking-tight">What You Will Learn</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              ${[
                'Build AI apps from scratch', 'Modern AI workflow',
                'Accelerate with AI tools', 'Collaborate via GitHub',
                'Responsive React UIs', 'Deploy using Vercel',
                'Backend hosting via Render', 'Startup best practices'
              ].map(item => `
                <div class="flex items-start gap-3 group">
                  <div class="mt-1 w-5 h-5 rounded-full bg-[#180f23] border border-[#6d28d9] flex items-center justify-center shrink-0 group-hover:bg-[#60a5fa] group-hover:border-[#60a5fa] transition-colors">
                    <i data-lucide="check" class="w-3 h-3 text-[#d3bbff] group-hover:text-white transition-colors"></i>
                  </div>
                  <span class="text-[#ccc3d7] text-sm md:text-base font-medium group-hover:text-[#ecddf9] transition-colors">${item}</span>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- Presenter Section Details -->
        <div class="mb-32 fade-in-section max-w-5xl mx-auto">
          <div class="glass-card rounded-3xl overflow-hidden border border-[#d3bbff]/20 bg-[#120a1d]/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div class="grid grid-cols-1 md:grid-cols-12">
              <div class="md:col-span-5 bg-gradient-to-br from-[#2a1b42] to-[#120a1d] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden border-r border-[#d3bbff]/10">
                <div class="absolute inset-0 bg-[#60a5fa]/10 blur-[50px] rounded-full mix-blend-screen"></div>
                <div class="w-48 h-48 rounded-full bg-gradient-to-tr from-[#60a5fa] to-[#c084fc] p-1 mb-8 relative z-10 shadow-[0_0_40px_rgba(96,165,250,0.3)]">
                  <div class="w-full h-full rounded-full bg-[#120a1d] overflow-hidden flex items-center justify-center">
                    <i data-lucide="user" class="w-20 h-20 text-[#d3bbff]"></i>
                  </div>
                </div>
                <h4 class="text-4xl font-extrabold text-white mb-2 relative z-10">Nithin</h4>
                <p class="text-[#60a5fa] font-bold tracking-widest uppercase text-sm mb-2 relative z-10">Founder & Director</p>
                <p class="text-[#958da1] text-xs uppercase tracking-widest relative z-10">ZenithYugaTech</p>
              </div>
              <div class="md:col-span-7 p-10 md:p-16 flex flex-col justify-center">
                <h3 class="text-3xl font-bold text-[#ecddf9] mb-6">Meet Your Mentor</h3>
                <p class="text-[#ccc3d7] text-lg leading-relaxed mb-10 font-light">
                  Learn directly from an experienced AI professional who has successfully built and deployed AI solutions for startups and businesses. Gain practical insights, modern industry workflows, and proven development techniques used in real-world high-scale projects.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  ${[
                    '4+ Years in AI Development', '300+ AI Projects Delivered',
                    'Worked with 30+ Brands', 'Full Stack Developer',
                    'AI Workflow Consultant', 'Automation Expert'
                  ].map(item => `
                    <div class="flex items-center gap-3">
                      <i data-lucide="check-circle-2" class="w-5 h-5 text-[#c084fc]"></i>
                      <span class="text-[#ecddf9] font-medium">${item}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Certificate & Testimonials Sections -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32 fade-in-section">
          <!-- Certificate -->
          <div class="glass-card rounded-3xl p-10 md:p-14 border border-[#d3bbff]/20 flex flex-col h-full bg-gradient-to-br from-[#120a1d] to-[#201533] relative overflow-hidden group hover:border-[#60a5fa]/50 transition-colors">
            <div class="absolute -right-10 -bottom-10 opacity-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
              <i data-lucide="award" class="w-64 h-64 text-[#60a5fa]"></i>
            </div>
            <div class="w-16 h-16 bg-[#c084fc]/10 border border-[#c084fc]/30 text-[#c084fc] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(192,132,252,0.2)]">
              <i data-lucide="award" class="w-8 h-8"></i>
            </div>
            <h3 class="text-3xl font-bold text-[#ecddf9] mb-4 relative z-10">Participation Certificate</h3>
            <p class="text-[#ccc3d7] mb-6 text-lg font-light leading-relaxed relative z-10">
              Every participant who completes registration and attends the webinar will receive an official verifiable Participation Certificate from ZenithYugaTech.
            </p>
            <p class="text-[#60a5fa] font-medium relative z-10">
              Perfect for your Resume, LinkedIn profile, and Portfolio.
            </p>
          </div>
          
          <!-- Testimonials -->
          <div class="glass-card rounded-3xl p-10 md:p-14 border border-[#d3bbff]/10 flex flex-col h-full bg-[#120a1d]/60 backdrop-blur-xl">
            <h3 class="text-2xl font-bold text-[#ecddf9] mb-8">Student Success</h3>
            <div class="bg-[#180f23]/80 border border-[#d3bbff]/10 rounded-2xl p-8 flex flex-col items-center justify-center flex-1 relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <i data-lucide="quote" class="w-10 h-10 text-[#60a5fa]/30 mb-6"></i>
              <p class="text-[#ccc3d7] italic text-xl font-light text-center leading-relaxed">
                "Your success story could be featured here after attending our webinar."
              </p>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="max-w-4xl mx-auto mb-32 fade-in-section">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-extrabold text-[#ecddf9] mb-4 tracking-tight">Got Questions?</h2>
            <p class="text-[#958da1] text-lg">Everything you need to know about the webinar.</p>
          </div>
          <div class="glass-card rounded-3xl p-8 md:p-12 border border-[#d3bbff]/20 bg-[#120a1d]/80 backdrop-blur-xl shadow-xl">
            ${faqsHtml}
          </div>
        </div>

        <!-- Final CTA -->
        <div class="text-center mb-24 fade-in-section pb-10 max-w-5xl mx-auto">
          <div class="glass-card p-14 md:p-20 rounded-[3rem] border border-[#d3bbff]/20 bg-gradient-to-t from-[#60a5fa]/10 via-[#120a1d]/80 to-[#120a1d]/80 backdrop-blur-2xl shadow-[0_0_80px_rgba(96,165,250,0.15)] relative overflow-hidden">
            <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            
            <h2 class="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#c4abff] mb-6 tracking-tight relative z-10">Don't Miss Out!</h2>
            <p class="text-[#ccc3d7] text-xl max-w-2xl mx-auto mb-12 font-light relative z-10">
              Secure your spot today and unlock the skills required to build, deploy, and scale modern AI applications.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfycyrCNocF5NCv8bKO_fVBRm41fxWGkyIGtE0KD4GateyZAw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" id="final-cta-btn" class="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-14 py-6 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-[0_0_50px_rgba(37,99,235,0.6)] cursor-pointer group border border-blue-400/30 z-10">
              <span class="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-full"></span>
              <span class="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <span class="relative z-10 drop-shadow-md">🚀 Register Now for ₹ 69 Only</span>
            </a>
          </div>
        </div>

        </div>
      </div>
      
      <!-- Sticky Close Button -->
      <button id="close-webinar-btn" class="fixed top-6 right-6 z-[100] w-12 h-12 bg-[#120a1d]/80 backdrop-blur-xl text-[#ecddf9] rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-all border border-[#d3bbff]/30 group shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <i data-lucide="x" class="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"></i>
      </button>

      <!-- Sticky Register Button (Shows on scroll) -->
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfycyrCNocF5NCv8bKO_fVBRm41fxWGkyIGtE0KD4GateyZAw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" id="sticky-register-btn" class="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:right-6 z-[90] px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-full shadow-[0_0_40px_rgba(37,99,235,0.8)] animate-pulse-border-glow cursor-pointer flex items-center justify-center border border-blue-400/50 translate-y-32 md:translate-y-[calc(-50%+8rem)] opacity-0 transition-all duration-500 hover:scale-110 pointer-events-none whitespace-nowrap overflow-hidden group">
        <span class="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-full"></span>
        <span class="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shimmer_1.5s_infinite]"></span>
        <span class="relative z-10 drop-shadow-md flex items-center">🚀 Register Now for ₹ 69 Only</span>
      </a>

      ${Footer()}
    </div>
  `;
}

export function setupWebinarLanding() {
  if (!ENABLE_WEBINAR) return;

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
    container.addEventListener('scroll', () => {
      // Show sticky button after scrolling past hero section (approx 600px now)
      if (container.scrollTop > 600) {
        stickyBtn.style.opacity = '1';
        stickyBtn.style.pointerEvents = 'auto';
        stickyBtn.style.transform = 'translateY(0) translateX(-50%)'; // For mobile centering
        if (window.innerWidth >= 768) {
          stickyBtn.style.transform = 'translateY(-50%) translateX(0)'; // For desktop top-1/2 centered
        }
      } else {
        stickyBtn.style.opacity = '0';
        stickyBtn.style.pointerEvents = 'none';
        stickyBtn.style.transform = 'translateY(6rem) translateX(-50%)';
        if (window.innerWidth >= 768) {
          stickyBtn.style.transform = 'translateY(calc(-50% + 8rem)) translateX(0)';
        }
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
