export function AboutView() {

  // Core values
  const values = [
    {
      icon: 'compass',
      title: 'Precision First',
      desc: 'Every line of code, every pixel of design is intentional. We architect on type-safe systems that minimize runtime volatility and maximize long-term maintainability.'
    },
    {
      icon: 'sparkles',
      title: 'Design Sincerity',
      desc: 'We reject off-the-shelf templates. Every interface is crafted from scratch — responsive, glassmorphic, and alive with purposeful micro-animations.'
    },
    {
      icon: 'users',
      title: 'Client-Centered',
      desc: 'Your vision drives everything. We embed ourselves in your goals and translate them into digital experiences that feel tailor-made — because they are.'
    },
    {
      icon: 'zap',
      title: 'Speed & Scale',
      desc: 'From MVP to enterprise grade. Our modular architecture ensures your platform can handle 10 users or 10 million — without a single frame dropped.'
    },
    {
      icon: 'shield',
      title: 'Secure by Design',
      desc: 'Security is not an afterthought. Every project is built with robust authentication, data encryption, and secure API layers baked in from day one.'
    },
    {
      icon: 'trending-up',
      title: 'Growth Obsessed',
      desc: "We don't just ship and vanish. Our work is built to evolve — with analytics-driven insights, conversion optimization, and continuous performance tuning."
    }
  ];

  const valuesHtml = values.map(v => `
    <div class="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/[0.05] hover:border-[#d3bbff]/25 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.4)]">
      <div class="p-3 rounded-xl bg-[#53398b]/20 w-fit border border-[#d3bbff]/10 group-hover:bg-[#6d28d9]/30 group-hover:border-[#d3bbff]/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_20px_rgba(211,187,255,0.3)]">
        <i data-lucide="${v.icon}" class="w-5 h-5 text-[#d3bbff]"></i>
      </div>
      <h3 class="text-lg font-headline font-bold text-[#ecddf9] tracking-tight group-hover:text-[#d3bbff] transition-colors duration-300">${v.title}</h3>
      <p class="text-sm text-[#ccc3d7] leading-relaxed">${v.desc}</p>
    </div>
  `).join('');

  // Impact stats
  const impactStats = [
    { value: '17+', label: 'Live Deployments', icon: 'globe' },
    { value: '50+', label: 'Happy Clients', icon: 'smile' },
    { value: '28+', label: 'Portfolio Works', icon: 'layers' },
    { value: '5+', label: 'Years of Craft', icon: 'calendar' }
  ];

  const impactHtml = impactStats.map(s => `
    <div class="flex flex-col items-center gap-3 py-8 px-4 group">
      <div class="p-3 rounded-full bg-[#6d28d9]/15 border border-[#d3bbff]/10 mb-1">
        <i data-lucide="${s.icon}" class="w-5 h-5 text-[#d3bbff]"></i>
      </div>
      <span class="text-4xl md:text-5xl font-headline font-bold text-gradient">${s.value}</span>
      <span class="text-xs font-mono text-[#958da1] uppercase tracking-widest text-center">${s.label}</span>
    </div>
  `).join('');

  // Timeline milestones
  const milestones = [
    {
      period: '2024 — Present',
      badge: 'CURRENT ERA',
      title: 'Full-Stack Digital Studio',
      description: 'Scaling into a comprehensive digital partner — offering everything from pixel-perfect UI/UX design, enterprise web platforms, 3D visualizations, and AI-driven solutions to clients across 5+ industries globally.',
      tags: ['Enterprise UI', 'AI Integration', '3D & Immersive', 'Cloud Scale']
    },
    {
      period: '2022 — 2024',
      badge: 'GROWTH PHASE',
      title: 'Product Design & SaaS',
      description: 'Pivoted from freelance into structured studio operations. Built high-fidelity SaaS dashboards, CRM platforms, and mobile apps for fast-scaling startups — handling design, development, and DevOps end-to-end.',
      tags: ['SaaS Dashboards', 'React & Next.js', 'Mobile Apps']
    },
    {
      period: '2020 — 2022',
      badge: 'FOUNDATION',
      title: 'Creative Development Roots',
      description: 'Started at the intersection of visual design and front-end engineering. Built bespoke brand identities and interactive web experiences for early-stage companies, sharpening both creative and technical instincts.',
      tags: ['UI Design', 'Frontend', 'Brand Identity']
    }
  ];

  const timelineHtml = milestones.map((m, idx) => `
    <div class="relative group">
      <!-- Timeline Node -->
      <div class="absolute -left-[45px] md:-left-[61px] top-2 w-6 h-6 rounded-full bg-[#180f23] border-2 border-[#d3bbff] flex items-center justify-center shadow-[0_0_14px_rgba(211,187,255,0.35)] group-hover:bg-[#d3bbff] transition-all duration-300">
        <div class="w-2 h-2 rounded-full bg-[#6d28d9]"></div>
      </div>
      <!-- Card -->
      <div class="glass-card rounded-2xl p-6 md:p-8 hover:border-[#d3bbff]/30 transition-all duration-300 flex flex-col gap-5">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span class="text-xs font-mono uppercase tracking-wider text-[#d3bbff] px-3 py-1 rounded-full bg-[#53398b]/30 border border-[#d3bbff]/10">
            ${m.period}
          </span>
          <span class="text-[10px] font-mono text-[#958da1] uppercase tracking-widest">
            ${m.badge}
          </span>
        </div>
        <h3 class="text-xl md:text-2xl font-headline font-bold text-[#ecddf9] tracking-tight">${m.title}</h3>
        <p class="text-sm text-[#ccc3d7] leading-relaxed">${m.description}</p>
        <div class="flex flex-wrap gap-2 pt-2 border-t border-[#d3bbff]/10">
          ${m.tags.map(t => `<span class="text-[10px] font-mono text-[#ccc3d7] bg-[#120a1d]/90 px-3 py-1 rounded-full border border-[#d3bbff]/10">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Tech focus areas
  const focuses = [
    { label: 'Web Platforms', pct: 95 },
    { label: 'UI/UX Design', pct: 90 },
    { label: '3D & Immersive', pct: 75 },
    { label: 'AI Integration', pct: 80 },
    { label: 'Mobile Apps', pct: 70 },
    { label: 'Cloud & DevOps', pct: 85 }
  ];

  const focusHtml = focuses.map(f => `
    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <span class="text-xs font-mono text-[#ccc3d7] uppercase tracking-wide">${f.label}</span>
        <span class="text-xs font-mono text-[#d3bbff]">${f.pct}%</span>
      </div>
      <div class="h-1.5 w-full bg-[#120a1d] rounded-full overflow-hidden border border-[#d3bbff]/5">
        <div class="h-full rounded-full bg-gradient-to-r from-[#6d28d9] to-[#d3bbff] skill-bar" style="width: ${f.pct}%; transition: width 1.2s cubic-bezier(0.23,1,0.32,1);"></div>
      </div>
    </div>
  `).join('');

  return `
    <div class="w-full min-h-screen py-16 px-6 md:px-20 max-w-7xl mx-auto flex flex-col gap-24 font-sans select-none view-enter">

      <!-- 1. Hero Statement -->
      <section class="relative flex flex-col lg:flex-row items-center gap-16">
        <div class="absolute top-[-5%] left-[10%] w-[350px] h-[350px] bg-[#6d28d9]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <!-- Left: Text -->
        <div class="flex-1 flex flex-col gap-7 relative z-10">
          <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Who We Are
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-[#ecddf9] tracking-tight leading-[1.1]">
            We Build Digital<br/>Experiences That<br/><span class="text-gradient">Actually Matter</span>
          </h1>
          <p class="text-base text-[#ccc3d7] leading-relaxed max-w-lg">
            ZenithYuga is a full-stack digital studio obsessed with the craft. We sit at the intersection of engineering precision, visual elegance, and strategic thinking — turning ideas into products that users love.
          </p>
          <div class="flex flex-wrap gap-3 mt-2">
            <span class="text-xs font-mono text-[#d3bbff] px-4 py-2 rounded-full border border-[#d3bbff]/20 bg-[#53398b]/20">Est. 2020</span>
            <span class="text-xs font-mono text-[#ccc3d7] px-4 py-2 rounded-full border border-[#d3bbff]/10">India-based · Global Reach</span>
            <span class="text-xs font-mono text-[#ccc3d7] px-4 py-2 rounded-full border border-[#d3bbff]/10">Design + Engineering</span>
          </div>
        </div>
        <!-- Right: Mission/Vision cards -->
        <div class="flex-1 flex flex-col gap-5 w-full max-w-md relative z-10">
          <div class="glass-card rounded-2xl p-7 flex flex-col gap-3 border-l-2 border-[#d3bbff]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(211,187,255,0.35)] hover:border-[#d3bbff] hover:bg-white/[0.05] group">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-xl bg-[#6d28d9]/20 border border-[#d3bbff]/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#6d28d9]/40 group-hover:shadow-[0_0_20px_rgba(211,187,255,0.3)]">
                <i data-lucide="target" class="w-5 h-5 text-[#d3bbff]"></i>
              </div>
              <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest">Our Mission</span>
            </div>
            <p class="text-sm text-[#ccc3d7] leading-relaxed">
              To empower businesses with technology that is not just functional, but transformative. We engineer digital products that create real, lasting impact for our clients and their users.
            </p>
          </div>
          <div class="glass-card rounded-2xl p-7 flex flex-col gap-3 border-l-2 border-[#a78bfa]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(167,139,250,0.35)] hover:border-[#a78bfa] hover:bg-white/[0.05] group">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#a78bfa]/30 group-hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]">
                <i data-lucide="eye" class="w-5 h-5" style="color:#a78bfa"></i>
              </div>
              <span class="text-xs font-mono uppercase tracking-widest" style="color:#a78bfa">Our Vision</span>
            </div>
            <p class="text-sm text-[#ccc3d7] leading-relaxed">
              To be recognized globally as the studio that redefined what beautiful, high-performance software looks like — making the extraordinary the new standard.
            </p>
          </div>
        </div>
      </section>

      <!-- 2. Impact Stats -->
      <section class="glass-card rounded-[2rem] overflow-hidden">
        <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#d3bbff]/10">
          ${impactHtml}
        </div>
      </section>

      <!-- 3. Core Values -->
      <section class="flex flex-col gap-10">
        <div class="flex flex-col gap-3">
          <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
            <i data-lucide="award" class="w-3.5 h-3.5"></i> What Drives Us
          </span>
          <h2 class="text-3xl md:text-4xl font-headline font-bold text-[#ecddf9] tracking-tight">Our Core Values</h2>
          <p class="text-sm text-[#ccc3d7] max-w-2xl leading-relaxed">These aren't aspirational slogans — they're operating principles embedded into how every project is scoped, designed, and delivered.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${valuesHtml}
        </div>
      </section>

      <!-- 4. Expertise Bars -->
      <section class="glass-card rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-start">
        <div class="flex-1 flex flex-col gap-5">
          <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
            <i data-lucide="cpu" class="w-3.5 h-3.5"></i> Expertise Spectrum
          </span>
          <h2 class="text-2xl md:text-3xl font-headline font-bold text-[#ecddf9] tracking-tight">Where We Excel</h2>
          <p class="text-sm text-[#ccc3d7] leading-relaxed max-w-md">
            Across every engagement, these are the capability areas we pour the most depth and discipline into. Each is backed by years of real-world delivery.
          </p>
          <div class="flex flex-col gap-5 mt-2 w-full" id="skill-bars-container">
            ${focusHtml}
          </div>
        </div>
        <div class="flex-shrink-0 w-full lg:w-80 glass-card rounded-2xl p-7 flex flex-col gap-5 bg-[#120a1d]/60">
          <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest">Studio at a Glance</span>
          <ul class="flex flex-col gap-4">
            ${[
              ['map-pin','Headquartered in India'],
              ['globe','Clients across 10+ countries'],
              ['code-2','100% custom code, no page builders'],
              ['layers','Full-stack: design to deployment'],
              ['clock','Avg. project delivery: 4–8 weeks'],
              ['refresh-cw','Ongoing retainer support available']
            ].map(([icon, text]) => `
              <li class="flex items-start gap-3">
                <i data-lucide="${icon}" class="w-4 h-4 text-[#d3bbff] mt-0.5 flex-shrink-0"></i>
                <span class="text-sm text-[#ccc3d7]">${text}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </section>

      <!-- 5. Journey Timeline -->
      <section class="flex flex-col gap-12">
        <div class="flex flex-col gap-3">
          <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
            <i data-lucide="git-branch" class="w-3.5 h-3.5"></i> The Journey
          </span>
          <h2 class="text-3xl md:text-4xl font-headline font-bold text-[#ecddf9] tracking-tight">How We Got Here</h2>
          <p class="text-sm text-[#ccc3d7] max-w-2xl leading-relaxed">From a single developer with a vision to a full-service digital studio — this is the story of ZenithYuga.</p>
        </div>
        <div class="relative border-l border-[#d3bbff]/10 ml-4 md:ml-8 pl-8 md:pl-12 flex flex-col gap-12 max-w-4xl">
          ${timelineHtml}
        </div>
      </section>

      <!-- 6. Our Team -->
      <section class="flex flex-col gap-6">
        <div class="flex flex-col gap-3">
          <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
            <i data-lucide="users" class="w-3.5 h-3.5"></i> The People Behind ZenithYuga
          </span>
          <h2 class="text-3xl md:text-4xl font-headline font-bold text-[#ecddf9] tracking-tight">Our Team</h2>
          <p class="text-sm text-[#ccc3d7] max-w-2xl leading-relaxed">Meet the talented people who bring our vision to life every day.</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <div class="glass-card rounded-2xl p-4 flex flex-col items-center gap-3 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.4)] transition-all duration-500 group">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-[#d3bbff]/20 group-hover:border-[#d3bbff]/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(211,187,255,0.3)]">
              <img src="/team-cmo.png" alt="Nithin Reddy" class="w-full h-full object-cover" style="object-position: center 5%;" />
            </div>
            <div class="flex flex-col items-center gap-1.5 text-center">
              <h3 class="text-base md:text-lg font-headline font-bold text-[#ecddf9] tracking-tight group-hover:text-[#d3bbff] transition-colors duration-300">Nithin Reddy</h3>
              <div class="designation-wrapper relative flex items-center justify-center">
                <span class="designation-label text-[10px] md:text-xs font-mono text-[#d3bbff] uppercase tracking-widest bg-[#53398b]/20 px-3 py-1 rounded-full border border-[#d3bbff]/10 cursor-pointer hover:bg-[#53398b]/40 transition-all duration-300">Founder & Director</span>
                <span class="designation-desc text-[10px] md:text-xs text-[#ccc3d7] text-center px-2 transition-all duration-300">Leads company vision and strategic growth</span>
              </div>
            </div>
          </div>
          <div class="glass-card rounded-2xl p-4 flex flex-col items-center gap-3 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.4)] transition-all duration-500 group">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-[#d3bbff]/20 group-hover:border-[#d3bbff]/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(211,187,255,0.3)]">
              <img src="/team-cfo.jpg" alt="Adharsh Yadav" class="w-full h-full object-cover" style="object-position: center 5%;" />
            </div>
            <div class="flex flex-col items-center gap-1.5 text-center">
              <h3 class="text-base md:text-lg font-headline font-bold text-[#ecddf9] tracking-tight group-hover:text-[#d3bbff] transition-colors duration-300">Adharsh Yadav</h3>
              <div class="designation-wrapper relative flex items-center justify-center">
                <span class="designation-label text-[10px] md:text-xs font-mono text-[#d3bbff] uppercase tracking-widest bg-[#53398b]/20 px-3 py-1 rounded-full border border-[#d3bbff]/10 cursor-pointer hover:bg-[#53398b]/40 transition-all duration-300">Director</span>
                <span class="designation-desc text-[10px] md:text-xs text-[#ccc3d7] text-center px-2 transition-all duration-300">Oversees operations and financial planning</span>
              </div>
            </div>
          </div>
          <div class="glass-card rounded-2xl p-4 flex flex-col items-center gap-3 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.4)] transition-all duration-500 group">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-[#d3bbff]/20 group-hover:border-[#d3bbff]/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(211,187,255,0.3)]">
              <img src="/team-sreenidhi.png" alt="Sreenidhi" class="w-full h-full object-cover" style="object-position: center 5%;" />
            </div>
            <div class="flex flex-col items-center gap-1.5 text-center">
              <h3 class="text-base md:text-lg font-headline font-bold text-[#ecddf9] tracking-tight group-hover:text-[#d3bbff] transition-colors duration-300">Sreenidhi</h3>
              <div class="designation-wrapper relative flex items-center justify-center">
                <span class="designation-label text-[10px] md:text-xs font-mono text-[#d3bbff] uppercase tracking-widest bg-[#53398b]/20 px-3 py-1 rounded-full border border-[#d3bbff]/10 cursor-pointer hover:bg-[#53398b]/40 transition-all duration-300">HR</span>
                <span class="designation-desc text-[10px] md:text-xs text-[#ccc3d7] text-center px-2 transition-all duration-300">Manages hiring and team well-being</span>
              </div>
            </div>
          </div>
          <div class="glass-card rounded-2xl p-4 flex flex-col items-center gap-3 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.4)] transition-all duration-500 group">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-[#d3bbff]/20 group-hover:border-[#d3bbff]/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(211,187,255,0.3)]">
              <img src="/team-sandhya.png" alt="Sandhya Reddy" class="w-full h-full object-cover" style="object-position: center 5%;" />
            </div>
            <div class="flex flex-col items-center gap-1.5 text-center">
              <h3 class="text-base md:text-lg font-headline font-bold text-[#ecddf9] tracking-tight group-hover:text-[#d3bbff] transition-colors duration-300">Sandhya Reddy</h3>
              <div class="designation-wrapper relative flex items-center justify-center">
                <span class="designation-label text-[10px] md:text-xs font-mono text-[#d3bbff] uppercase tracking-widest bg-[#53398b]/20 px-3 py-1 rounded-full border border-[#d3bbff]/10 cursor-pointer hover:bg-[#53398b]/40 transition-all duration-300">Graphic Designer</span>
                <span class="designation-desc text-[10px] md:text-xs text-[#ccc3d7] text-center px-2 transition-all duration-300">Creates visual designs and brand assets</span>
              </div>
            </div>
          </div>
          <div class="glass-card rounded-2xl p-4 flex flex-col items-center gap-3 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.4)] transition-all duration-500 group">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-[#d3bbff]/20 group-hover:border-[#d3bbff]/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(211,187,255,0.3)] aspect-square">
              <img src="/team-jayanth.png" alt="Jayanth" class="w-full h-full object-cover" style="object-position: center center;" />
            </div>
            <div class="flex flex-col items-center gap-1.5 text-center">
              <h3 class="text-base md:text-lg font-headline font-bold text-[#ecddf9] tracking-tight group-hover:text-[#d3bbff] transition-colors duration-300">Jayanth</h3>
              <div class="designation-wrapper relative flex items-center justify-center">
                <span class="designation-label text-[10px] md:text-xs font-mono text-[#d3bbff] uppercase tracking-widest bg-[#53398b]/20 px-3 py-1 rounded-full border border-[#d3bbff]/10 cursor-pointer hover:bg-[#53398b]/40 transition-all duration-300">Developer</span>
                <span class="designation-desc text-[10px] md:text-xs text-[#ccc3d7] text-center px-2 transition-all duration-300">Builds and maintains web applications</span>
              </div>
            </div>
          </div>
          <div class="glass-card rounded-2xl p-4 flex flex-col items-center gap-3 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.4)] transition-all duration-500 group">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-[#d3bbff]/20 group-hover:border-[#d3bbff]/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(211,187,255,0.3)] aspect-square">
              <img src="/team-sriram.jpg" alt="Sriram" class="w-full h-full object-cover" style="object-position: center 20%;" />
            </div>
            <div class="flex flex-col items-center gap-1.5 text-center">
              <h3 class="text-base md:text-lg font-headline font-bold text-[#ecddf9] tracking-tight group-hover:text-[#d3bbff] transition-colors duration-300">Sriram</h3>
              <div class="designation-wrapper relative flex items-center justify-center">
                <span class="designation-label text-[10px] md:text-xs font-mono text-[#d3bbff] uppercase tracking-widest bg-[#53398b]/20 px-3 py-1 rounded-full border border-[#d3bbff]/10 cursor-pointer hover:bg-[#53398b]/40 transition-all duration-300">Developer</span>
                <span class="designation-desc text-[10px] md:text-xs text-[#ccc3d7] text-center px-2 transition-all duration-300">Develops scalable software solutions</span>
              </div>
            </div>
          </div>
          <div class="glass-card rounded-2xl p-4 flex flex-col items-center gap-3 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.4)] transition-all duration-500 group">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-[#d3bbff]/20 group-hover:border-[#d3bbff]/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(211,187,255,0.3)]">
              <img src="/team-sai.png" alt="Sai" class="w-full h-full object-cover" style="object-position: center 5%;" />
            </div>
            <div class="flex flex-col items-center gap-1.5 text-center">
              <h3 class="text-base md:text-lg font-headline font-bold text-[#ecddf9] tracking-tight group-hover:text-[#d3bbff] transition-colors duration-300">Sai</h3>
              <div class="designation-wrapper relative flex items-center justify-center">
                <span class="designation-label text-[10px] md:text-xs font-mono text-[#d3bbff] uppercase tracking-widest bg-[#53398b]/20 px-3 py-1 rounded-full border border-[#d3bbff]/10 cursor-pointer hover:bg-[#53398b]/40 transition-all duration-300">Designer</span>
                <span class="designation-desc text-[10px] md:text-xs text-[#ccc3d7] text-center px-2 transition-all duration-300">Crafts UI/UX and user experiences</span>
              </div>
            </div>
          </div>
          <div class="glass-card rounded-2xl p-4 flex flex-col items-center gap-3 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.4)] transition-all duration-500 group">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-[#d3bbff]/20 group-hover:border-[#d3bbff]/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(211,187,255,0.3)]">
              <img src="/team-divya.png" alt="Divya" class="w-full h-full object-cover" style="object-position: center 5%;" />
            </div>
            <div class="flex flex-col items-center gap-1.5 text-center">
              <h3 class="text-base md:text-lg font-headline font-bold text-[#ecddf9] tracking-tight group-hover:text-[#d3bbff] transition-colors duration-300">Divya</h3>
              <div class="designation-wrapper relative flex items-center justify-center">
                <span class="designation-label text-[10px] md:text-xs font-mono text-[#d3bbff] uppercase tracking-widest bg-[#53398b]/20 px-3 py-1 rounded-full border border-[#d3bbff]/10 cursor-pointer hover:bg-[#53398b]/40 transition-all duration-300">Telecaller</span>
                <span class="designation-desc text-[10px] md:text-xs text-[#ccc3d7] text-center px-2 transition-all duration-300">Handles client calls and communication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. CTA -->
      <section class="relative rounded-[2rem] overflow-hidden p-10 md:p-16 text-center flex flex-col items-center gap-6"
        style="background: linear-gradient(135deg, #200f3a 0%, #2d1456 50%, #1a0a2e 100%); border: 1px solid rgba(211,187,255,0.12);">
        <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 30% 50%, #6d28d9 0%, transparent 55%), radial-gradient(circle at 75% 60%, #a78bfa 0%, transparent 50%);"></div>
        <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest relative z-10 flex items-center gap-2">
          <i data-lucide="handshake" class="w-3.5 h-3.5"></i> Let's Work Together
        </span>
        <h2 class="text-3xl md:text-4xl font-headline font-bold text-[#ecddf9] tracking-tight relative z-10">
          Your Next Project Deserves<br/><span class="text-gradient">ZenithYuga Quality</span>
        </h2>
        <p class="text-sm text-[#ccc3d7] max-w-lg leading-relaxed relative z-10">
          Whether you're a startup launching your MVP or an enterprise scaling your digital infrastructure — we're the partner that brings both craft and commitment.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mt-2 relative z-10">
          <button data-action="navigate" data-tab="contact"
            class="px-8 py-4 bg-[#d3bbff] hover:bg-[#ebddff] text-[#3f008d] font-semibold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_24px_rgba(211,187,255,0.25)] cursor-pointer">
            Start a Conversation
          </button>
          <button data-action="navigate" data-tab="services"
            class="px-8 py-4 bg-transparent border border-[#d3bbff]/30 hover:border-[#d3bbff]/60 text-[#ecddf9] font-semibold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-[#d3bbff]/10 cursor-pointer">
            Explore Services
          </button>
        </div>
      </section>

    </div>
  `;
}
