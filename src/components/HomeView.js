import { COMPLETED_PROJECTS, SERVICES } from '../data.js';

export function HomeView() {
  const masterworksHtml = COMPLETED_PROJECTS.map(project => `
    <div class="glass-card glass-card-hover rounded-[2rem] overflow-hidden flex flex-col h-full">
      <div class="relative aspect-video w-full overflow-hidden border-b border-[#d3bbff]/10 bg-[#120a1d]">
        <img src="${project.image}" alt="${project.title}"
          class="w-full h-full object-cover select-none transition-transform duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105"
          referrerpolicy="no-referrer" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#180f23]/80 via-[#180f23]/10 to-transparent pointer-events-none"></div>
        <span class="absolute top-4 right-4 text-[10px] font-mono uppercase bg-[#180f23]/80 text-[#d3bbff] px-3 py-1.5 rounded-full border border-[#d3bbff]/20">
          Deliverable Achieved
        </span>
      </div>
      <div class="p-8 flex flex-col gap-4 flex-1">
        <span class="text-xs font-mono text-[#ccc3d7]">
          ${project.tags ? project.tags.join('  •  ') : ''}
        </span>
        <h3 class="text-2xl font-headline font-bold text-[#ecddf9] tracking-tight">${project.title}</h3>
        <p class="text-sm text-[#ccc3d7] leading-relaxed flex-1">${project.description}</p>
        <div class="pt-4 flex items-center justify-between border-t border-[#d3bbff]/10">
          <span class="text-xs font-mono text-[#958da1]">System: Ready</span>
          <button data-action="navigate" data-tab="projects"
            class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#d3bbff] hover:text-[#ebddff] transition-colors cursor-pointer">
            View Details <i data-lucide="eye" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  const metrics = [
    { stat: '<15ms', label: 'Client Framework Hydration', desc: 'Sensationally rapid paint & interaction pathways.' },
    { stat: '100%', label: 'Semantics & Contrast Align', desc: 'Flawless compliance with premium typography levels.' },
    { stat: '0.0ms', label: 'Layout Overdraw Deficit', desc: 'Optimum frame rates under intense browser resizing.' },
    { stat: 'Core', label: 'Modular Layer Architecture', desc: 'Secure backend proxy limits client API exposures.' }
  ];

  const metricsHtml = metrics.map(item => `
    <div class="glass-card rounded-2xl p-6 flex flex-col gap-3">
      <span class="text-3xl font-headline font-bold text-[#d3bbff] tracking-tight">${item.stat}</span>
      <span class="text-xs font-mono text-[#ecddf9] uppercase tracking-wide">${item.label}</span>
      <p class="text-xs text-[#ccc3d7] leading-relaxed">${item.desc}</p>
    </div>
  `).join('');

  // Clients marquee
  const clients = ['Chalyati','Vyoma3D','DroneTV','InCruiter','iPage UMS','ProjectBazaar','India DaaS','BestIU','Adhyayan','RentAmigo','1XL','AHRS Live'];
  const clientItems = clients.map(c => `
    <span class="flex-shrink-0 px-8 py-3 text-sm font-mono text-[#958da1] uppercase tracking-widest whitespace-nowrap">${c}</span>
  `).join('');

  // Services preview — exclude servicesOnly (3D) entries
  const serviceIcons = { webdev: 'terminal', uiux: 'sparkles', crm: 'network', dashboards: 'layout-dashboard', digitalmarketing: 'megaphone', cloudarch: 'cloud', mobileapp: 'smartphone', aiml: 'bot' };
  const servicesPreviewHtml = SERVICES.filter(s => !s.servicesOnly).map(s => `
    <div class="glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4 items-center text-center cursor-pointer" data-action="navigate" data-tab="services">
      <div class="p-4 rounded-2xl bg-[#53398b]/20 border border-[#d3bbff]/10">
        <i data-lucide="${serviceIcons[s.id] || 'terminal'}" class="w-6 h-6 text-[#d3bbff]"></i>
      </div>
      <h3 class="text-lg font-headline font-bold text-[#ecddf9]">${s.title}</h3>
      <p class="text-xs text-[#ccc3d7] leading-relaxed line-clamp-3">${s.description}</p>
    </div>
  `).join('');

  // Tech stack
  const techStack = [
    { name: 'React', color: '#61DAFB' }, { name: 'Next.js', color: '#ecddf9' },
    { name: 'TypeScript', color: '#3178C6' }, { name: 'Node.js', color: '#339933' },
    { name: 'Tailwind CSS', color: '#06B6D4' }, { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'AWS', color: '#FF9900' }, { name: 'Vercel', color: '#ecddf9' },
    { name: 'GraphQL', color: '#E10098' }, { name: 'Figma', color: '#F24E1E' },
    { name: 'Vite', color: '#646CFF' }, { name: 'Prisma', color: '#2D3748' }
  ];
  const techHtml = techStack.map(t => `
    <div class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#120a1d]/80 border border-[#d3bbff]/10 hover:border-[#d3bbff]/30 transition-all duration-300 hover:scale-105">
      <div class="w-2.5 h-2.5 rounded-full" style="background:${t.color}"></div>
      <span class="text-xs font-mono text-[#ccc3d7]">${t.name}</span>
    </div>
  `).join('');

  // Testimonials
  const testimonials = [
    { quote: 'ZenithYuga transformed our entire digital presence. The attention to detail and pixel-perfect execution exceeded all expectations.', author: 'Arif .', role: 'Founder, ArifPhotography' },
    { quote: 'Incredible UI/UX work. Our user engagement metrics jumped 3x within the first month of launching the new platform.', author: 'Preetham.', role: 'CEO, iPage Vision' },
    { quote: 'The dashboard they built handles millions of data points with zero lag. Truly enterprise-grade engineering.', author: 'CA Ritu Mathranc:\Users\SRIRAM\Downloads\ChatGPT Image Mar 16, 2026, 01_15_55 PM (1).png.', role: 'Director, InCruiter' }
  ];
  const testimonialsHtml = testimonials.map(t => `
    <div class="glass-card rounded-2xl p-8 flex flex-col gap-5 relative testimonial-quote">
      <p class="text-sm text-[#ccc3d7] leading-relaxed italic">${t.quote}</p>
      <div class="flex items-center gap-3 mt-auto pt-4 border-t border-[#d3bbff]/10">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#6d28d9] to-[#d3bbff] flex items-center justify-center text-xs font-bold text-[#180f23]">
          ${t.author.charAt(0)}
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-semibold text-[#ecddf9]">${t.author}</span>
          <span class="text-[10px] font-mono text-[#958da1]">${t.role}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Stats counters
  const stats = [
    { value: '17+', label: 'Live Deployments' },
    { value: '11+', label: 'Portfolio Works' },
    { value: '50+', label: 'Happy Clients' },
    { value: '99.9%', label: 'Uptime Record' }
  ];
  const statsHtml = stats.map(s => `
    <div class="flex flex-col items-center gap-2 py-6">
      <span class="text-4xl md:text-5xl font-headline font-bold text-gradient">${s.value}</span>
      <span class="text-xs font-mono text-[#958da1] uppercase tracking-widest">${s.label}</span>
    </div>
  `).join('');

  return `
    <div class="w-full min-h-screen py-16 flex flex-col gap-24 font-sans select-none overflow-hidden">
      <!-- 1. Hero Section -->
      <section class="relative px-6 md:px-20 max-w-7xl mx-auto w-full text-center flex flex-col items-center gap-8 mt-6 view-enter overflow-hidden">
        <div class="absolute top-[-10%] left-[20%] w-[400px] h-[400px] bg-[#6d28d9]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div class="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-[#d3bbff]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <!-- Animated background logo -->
        <div class="hero-bg-logo-ring"></div>
        <img src="/zy-logo.png" alt="" class="hero-bg-logo" aria-hidden="true" />
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#53398b]/40 border border-[#d3bbff]/20 text-xs tracking-widest uppercase font-mono text-[#dac5ff] relative z-10">
          <i data-lucide="sparkles" class="text-[#d3bbff] animate-spin-[12s] w-3.5 h-3.5"></i>
          <span>Welcome to ZenithYuga</span>
        </div>
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-headline font-bold text-[#ecddf9] max-w-4xl tracking-tight leading-[1.1] relative z-10">
          We Build Amazing <br />
          <span class="text-gradient">Digital Experiences</span> & Websites
        </h1>
        <p class="text-[#ccc3d7] text-base md:text-lg max-w-2xl leading-relaxed relative z-10">
          We create beautiful, fast, and user-friendly websites and applications. From stunning designs to powerful functionality, we bring your digital vision to life with precision and creativity.
        </p>
        <div class="flex flex-col sm:flex-row gap-5 mt-4 relative z-10">
          <button data-action="navigate" data-tab="projects"
            class="flex items-center justify-center gap-2 bg-[#d3bbff] hover:bg-[#ebddff] text-[#3f008d] font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_4px_24px_rgba(211,187,255,0.3)] cursor-pointer">
            View Our Work <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
          <button data-action="navigate" data-tab="contact"
            class="flex items-center justify-center gap-2 bg-transparent text-[#ecddf9] hover:text-[#d3bbff] border border-[#d3bbff]/20 hover:border-[#d3bbff]/50 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#d3bbff]/5 active:scale-95 cursor-pointer">
            Get In Touch
          </button>
        </div>
      </section>

      <!-- 2. Clients Marquee -->
      <section class="w-full overflow-hidden border-y border-[#d3bbff]/5 py-6 fade-in-section">
        <div class="flex items-center gap-2 px-6 md:px-20 mb-4">
          <i data-lucide="shield-check" class="w-3.5 h-3.5 text-[#958da1]"></i>
          <span class="text-[10px] font-mono text-[#958da1] uppercase tracking-widest">Trusted by industry leaders</span>
        </div>
        <div class="overflow-hidden">
          <div class="marquee-track">
            ${clientItems}${clientItems}
          </div>
        </div>
      </section>

      <!-- 3. Stats Counters -->
      <section class="px-6 md:px-20 max-w-7xl mx-auto w-full fade-in-section">
        <div class="glass-card rounded-[2rem] p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-[#d3bbff]/10">
          ${statsHtml}
        </div>
      </section>

      <!-- 4. Interactive Feature Spotlight -->
      <section class="px-6 md:px-20 max-w-7xl mx-auto w-full fade-in-section">
        <div class="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
          <div class="flex-1 flex flex-col gap-6">
            <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
              <i data-lucide="zap" class="w-3.5 h-3.5"></i> Interactive Physics Lab
            </span>
            <h2 class="text-2xl sm:text-3xl font-headline font-bold text-[#ecddf9] tracking-tight">Animate with Intent</h2>
            <p class="text-sm text-[#ccc3d7] leading-relaxed">
              At ZenithYuga, standard linear transitions are forbidden. Experience our custom micro-animation timing curves. Tap a curve option, then trigger the simulator to observe.
            </p>
            <div class="flex flex-wrap gap-3 mt-2" id="curve-buttons">
              <button data-curve="fluid" class="curve-btn text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer bg-[#6d28d9] text-[#ecddf9] border-[#d3bbff]">fluid</button>
              <button data-curve="decelerated" class="curve-btn text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer bg-transparent text-[#ccc3d7] border-[#d3bbff]/10 hover:border-[#d3bbff]/30">decelerated</button>
              <button data-curve="snappy" class="curve-btn text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer bg-transparent text-[#ccc3d7] border-[#d3bbff]/10 hover:border-[#d3bbff]/30">snappy</button>
            </div>
            <button id="trigger-animation-btn"
              class="self-start mt-2 px-6 py-3 bg-[#6d28d9]/10 hover:bg-[#6d28d9]/30 text-[#d3bbff] border border-[#d3bbff]/20 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer hover:shadow-[0_0_12px_rgba(211,187,255,0.15)]">
              Play Animation Dynamics
            </button>
          </div>
          <div class="w-full lg:w-96 h-64 bg-[#120a1d] rounded-2xl border border-[#d3bbff]/10 relative flex items-center justify-center p-6 overflow-hidden">
            <div class="absolute inset-0 bg-transparent pointer-events-none border-t border-b border-[#d3bbff]/5 flex flex-col justify-between py-6">
              <span class="text-[10px] font-mono text-[#958da1] pl-4">Position Limit High</span>
              <span class="text-[10px] font-mono text-[#958da1] pl-4">Equilibrium Datum</span>
            </div>
            <div id="animated-cube"
              class="w-12 h-12 bg-gradient-to-tr from-[#6d28d9] to-[#d3bbff] rounded-xl flex items-center justify-center text-[#ecddf9] shadow-lg shadow-[#6d28d9]/40 border border-[#d3bbff]/50 relative z-10 transition-all duration-500"
              style="transform: translateX(-100px) scale(0.8) rotate(0deg);">
              <i data-lucide="sparkles" class="text-white w-5 h-5"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Services Preview -->
      <section class="px-6 md:px-20 max-w-7xl mx-auto w-full flex flex-col gap-10 fade-in-section">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div class="flex flex-col gap-3">
            <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
              <i data-lucide="layers" class="w-3.5 h-3.5"></i> Capabilities
            </span>
            <h2 class="text-3xl md:text-4xl font-headline font-bold text-[#ecddf9] tracking-tight">What We Engineer</h2>
          </div>
          <button data-action="navigate" data-tab="services"
            class="flex items-center gap-2 group text-sm font-sans font-medium text-[#d3bbff] hover:text-[#ebddff] transition-colors cursor-pointer">
            View all services <i data-lucide="chevron-right" class="w-[18px] h-[18px] transform group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${servicesPreviewHtml}
        </div>
      </section>

      <!-- 7. Tech Stack -->
      <section class="px-6 md:px-20 max-w-7xl mx-auto w-full flex flex-col gap-8 fade-in-section">
        <div class="flex flex-col gap-3 text-center items-center">
          <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
            <i data-lucide="cpu" class="w-3.5 h-3.5"></i> Technology Arsenal
          </span>
          <h2 class="text-3xl md:text-4xl font-headline font-bold text-[#ecddf9] tracking-tight">Built With Precision</h2>
          <p class="text-sm text-[#ccc3d7] max-w-xl leading-relaxed">Our curated stack of modern technologies ensures every project achieves peak performance and maintainability.</p>
        </div>
        <div class="flex flex-wrap justify-center gap-3">${techHtml}</div>
      </section>

      <!-- 8. Testimonials -->
      <section class="px-6 md:px-20 max-w-7xl mx-auto w-full flex flex-col gap-10 fade-in-section">
        <div class="flex flex-col gap-3 text-center items-center">
          <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
            <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Client Voices
          </span>
          <h2 class="text-3xl md:text-4xl font-headline font-bold text-[#ecddf9] tracking-tight">Words From Our Partners</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${testimonialsHtml}</div>
      </section>

      <!-- 9. Performance Metrics -->
      <section class="px-6 md:px-20 max-w-7xl mx-auto w-full fade-in-section">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">${metricsHtml}</div>
      </section>

      <!-- 10. CTA Banner -->
      <section class="px-6 md:px-20 max-w-7xl mx-auto w-full fade-in-section">
        <div class="relative rounded-[2rem] overflow-hidden p-10 md:p-16 text-center flex flex-col items-center gap-6"
          style="background: linear-gradient(135deg, #6d28d9 0%, #3f008d 50%, #53398b 100%);">
          <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23d3bbff&quot; fill-opacity=&quot;0.04&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          <h2 class="text-3xl md:text-5xl font-headline font-bold text-[#ecddf9] tracking-tight relative z-10">
            Ready to Build Something<br/><span class="text-[#d3bbff]">Extraordinary</span>?
          </h2>
          <p class="text-sm md:text-base text-[#d3bbff]/80 max-w-xl leading-relaxed relative z-10">
            Let's architect your next digital masterpiece together. From concept to deployment, we deliver excellence at every pixel.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 mt-2 relative z-10">
            <button data-action="navigate" data-tab="contact"
              class="px-8 py-4 bg-[#ecddf9] hover:bg-white text-[#3f008d] font-semibold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_24px_rgba(0,0,0,0.3)] cursor-pointer">
              Start a Conversation
            </button>
            <button data-action="navigate" data-tab="about"
              class="px-8 py-4 bg-transparent border border-[#d3bbff]/30 hover:border-[#d3bbff]/60 text-[#ecddf9] font-semibold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-[#d3bbff]/10 cursor-pointer">
              Learn About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function setupHomeView() {
  // Animation physics lab
  let selectedCurve = 'fluid';
  const buttons = document.querySelectorAll('.curve-btn');
  const playBtn = document.getElementById('trigger-animation-btn');
  const cube = document.getElementById('animated-cube');

  buttons.forEach(btn => {
    btn.onclick = () => {
      selectedCurve = btn.getAttribute('data-curve');
      buttons.forEach(b => {
        b.className = 'curve-btn text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer bg-transparent text-[#ccc3d7] border-[#d3bbff]/10 hover:border-[#d3bbff]/30';
      });
      btn.className = 'curve-btn text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer bg-[#6d28d9] text-[#ecddf9] border-[#d3bbff]';
    };
  });

  let state = 0;
  if (playBtn && cube) {
    playBtn.onclick = () => {
      if (selectedCurve === 'fluid') {
        cube.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
      } else if (selectedCurve === 'decelerated') {
        cube.style.transition = 'all 1.2s cubic-bezier(0, 0, 0.2, 1)';
      } else if (selectedCurve === 'snappy') {
        cube.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      }
      state = 1 - state;
      if (state === 1) {
        cube.style.transform = 'translateX(100px) scale(1.2) rotate(180deg)';
      } else {
        cube.style.transform = 'translateX(-100px) scale(0.8) rotate(0deg)';
      }
    };
  }

  // Scroll fade-in observer
  const fadeEls = document.querySelectorAll('.fade-in-section');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => observer.observe(el));
  }
};
