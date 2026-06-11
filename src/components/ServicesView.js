import { SERVICES } from '../data.js';

const getServiceIconHtml = (iconName) => {
  switch (iconName) {
    case 'terminal':           return '<i data-lucide="terminal" class="w-6 h-6 text-[#d3bbff]"></i>';
    case 'sparkles':           return '<i data-lucide="sparkles" class="w-6 h-6 text-[#d3bbff]"></i>';
    case 'hub':                return '<i data-lucide="network" class="w-6 h-6 text-[#d3bbff]"></i>';
    case 'dashboard_customize':return '<i data-lucide="layout-dashboard" class="w-6 h-6 text-[#d3bbff]"></i>';
    case 'megaphone':          return '<i data-lucide="megaphone" class="w-6 h-6 text-[#d3bbff]"></i>';
    case 'cloud':              return '<i data-lucide="cloud" class="w-6 h-6 text-[#d3bbff]"></i>';
    case 'smartphone':         return '<i data-lucide="smartphone" class="w-6 h-6 text-[#d3bbff]"></i>';
    case 'bot':                return '<i data-lucide="bot" class="w-6 h-6 text-[#d3bbff]"></i>';
    case 'box':                return '<i data-lucide="box" class="w-6 h-6 text-[#a78bfa]"></i>';
    case 'scan-3d':            return '<i data-lucide="scan-eye" class="w-6 h-6 text-[#a78bfa]"></i>';
    case 'film':               return '<i data-lucide="film" class="w-6 h-6 text-[#a78bfa]"></i>';
    case 'glasses':            return '<i data-lucide="glasses" class="w-6 h-6 text-[#a78bfa]"></i>';
    default:                   return '<i data-lucide="terminal" class="w-6 h-6 text-[#d3bbff]"></i>';
  }
};

const getServiceSubtitle = (id) => {
  if (id === 'webdev')    return 'Next.js &amp; React Core';
  if (id === 'uiux')      return 'Tactile Fluid Glassmorphism';
  if (id === 'crm')       return 'Elite Analytics Integration';
  if (id === 'dashboards')return 'Real-time Telemetry Maps';
  if (id === 'digitalmarketing') return 'Strategic Growth Campaigns';
  if (id === 'cloudarch') return 'Scalable Infrastructure DevOps';
  if (id === 'mobileapp') return 'Native Cross-Platform Solutions';
  if (id === 'aiml')      return 'Intelligent Systems Engineering';
  return '';
};

const calculateEstimate = (selectedServices, deliveryWeeks) => {
  let serviceTotal = 0;
  selectedServices.forEach(s => {
    if (s === 'webdev')     serviceTotal += 40;
    else if (s === 'uiux')  serviceTotal += 35;
    else if (s === 'crm')   serviceTotal += 50;
    else if (s === 'dashboards') serviceTotal += 45;
    else if (s === 'digitalmarketing') serviceTotal += 30;
    else if (s === 'cloudarch') serviceTotal += 55;
    else if (s === 'mobileapp') serviceTotal += 45;
    else if (s === 'aiml')      serviceTotal += 60;
  });
  const speedMultiplier = Math.max(0.8, 1.8 - (deliveryWeeks - 2) * 0.15);
  const score = Math.round(serviceTotal * speedMultiplier);
  return {
    score,
    badge: score > 70 ? 'Enterprise Grade' : score > 45 ? 'Professional Premium' : 'Agile Dynamic',
    desc: score > 70
      ? 'Highly specialized architecture featuring severe, zero-latency rendering setups. Optimised for maximum client conversion scales.'
      : 'Stellar dynamic setup tailored for standard digital presence. Built on precise, robust typography frameworks.'
  };
};

const renderServiceCard = (service, is3d = false) => {
  const accentColor = is3d ? '#a78bfa' : '#d3bbff';
  const iconBg = is3d ? 'bg-[#3b1f6b]/30 border-[#a78bfa]/20' : 'bg-[#53398b]/20 border-[#d3bbff]/20';
  const iconColor = is3d ? 'text-[#a78bfa]' : 'text-[#d3bbff]';
  return `
    <div class="rounded-[2rem] p-8 md:p-10 flex flex-col gap-6 bg-gradient-to-br from-[#2a1f3d] to-[#1a1229] border border-[#d3bbff]/10 hover:border-[#d3bbff]/25 transition-all duration-500 relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.4)] hover:bg-gradient-to-br">
      <div class="p-3 rounded-xl ${iconBg} border w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(211,187,255,0.3)]">
        ${getServiceIconHtml(service.iconName).replace('text-[#d3bbff]', iconColor).replace('text-[#a78bfa]', iconColor)}
      </div>
      <div class="flex flex-col gap-3">
        <h3 class="text-2xl font-headline font-bold text-[#ecddf9] tracking-tight group-hover:text-[#d3bbff] transition-colors duration-300">${service.title}</h3>
        <p class="text-sm text-[#ccc3d7] leading-relaxed">${service.description}</p>
      </div>
      ${service.exploreLink ? `
        <div class="mt-2 text-xs font-mono text-[#d3bbff] uppercase tracking-wider flex items-center gap-1.5 hover:text-[#ebddff] cursor-pointer">
          <span>Explore couture visuals</span> <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </div>` : ''}
      ${service.tags ? `
        <div class="flex flex-wrap gap-2 mt-auto">
          ${service.tags.map(t => `<span class="text-[10px] font-mono text-[#ccc3d7] bg-[#120a1d]/90 px-3 py-1 rounded-full border border-[#d3bbff]/10">${t}</span>`).join('')}
        </div>` : ''}
    </div>`;
};

export function ServicesView() {
  const coreServices = SERVICES.filter(s => !s.servicesOnly);
  const threeDServices = SERVICES.filter(s => s.servicesOnly);

  const coreServicesGridHtml = coreServices.map(s => renderServiceCard(s, false)).join('');
  const threeDServicesGridHtml = threeDServices.map(s => renderServiceCard(s, true)).join('');

  // Calculator only uses core services (not 3D which are creative/project-based)
  const estimatorServicesHtml = coreServices.map(s => `
    <button data-svc="${s.id}" class="estimator-svc-btn text-left p-4 rounded-xl border flex flex-col gap-1.5 transition-all text-xs cursor-pointer ${['webdev','uiux'].includes(s.id) ? 'bg-[#6d28d9]/20 border-[#d3bbff] text-[#ecddf9] selected' : 'bg-[#180f23] border-[#d3bbff]/10 text-[#ccc3d7] hover:border-[#d3bbff]/20'}">
      <span class="font-bold flex items-center gap-1.5">
        ${['webdev','uiux'].includes(s.id) ? '<span class="w-1.5 h-1.5 rounded-full bg-[#d3bbff] inline-block animate-ping"></span>' : ''}
        ${s.title}
      </span>
      <span class="text-[10px] leading-tight text-[#958da1] truncate max-w-full">${getServiceSubtitle(s.id)}</span>
    </button>`).join('');

  const initEstimate = calculateEstimate(['webdev','uiux'], 4);

  return `
    <div class="w-full min-h-screen py-16 px-6 md:px-20 max-w-7xl mx-auto flex flex-col gap-20 font-sans select-none view-enter">

      <!-- Page Header -->
      <div class="flex flex-col gap-4 max-w-2xl">
        <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
          <i data-lucide="sliders" class="w-3.5 h-3.5"></i> What We Offer
        </span>
        <h1 class="text-4xl md:text-5xl font-headline font-bold text-[#ecddf9] tracking-tight">Our Services</h1>
        <p class="text-sm text-[#ccc3d7] leading-relaxed">We design and build beautiful, fast, and reliable websites and apps. Every project is made with care using the latest tools and technologies.</p>
      </div>

      <!-- Core Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">${coreServicesGridHtml}</div>

      <!-- 3D & Immersive Section -->
      <section class="flex flex-col gap-10">
        <div class="flex flex-col gap-3">
          <span class="text-xs font-mono uppercase tracking-widest flex items-center gap-2" style="color:#a78bfa">
            <i data-lucide="box" class="w-3.5 h-3.5"></i> 3D & Immersive Studio
          </span>
          <h2 class="text-3xl md:text-4xl font-headline font-bold text-[#ecddf9] tracking-tight">Spatial & 3D Experiences</h2>
          <p class="text-sm text-[#ccc3d7] max-w-2xl leading-relaxed">From photorealistic 3D renders to fully immersive AR/VR environments — we bring dimensions to your digital vision that flat screens can't contain.</p>
        </div>

        <!-- Decorative 3D banner -->
        <div class="relative rounded-2xl overflow-hidden border border-[#a78bfa]/20 bg-gradient-to-r from-[#1a0a2e] via-[#200f3a] to-[#1a0a2e] p-6 flex items-center gap-6">
          <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 30% 50%, #a78bfa 0%, transparent 60%), radial-gradient(circle at 80% 50%, #6d28d9 0%, transparent 60%);"></div>
          <div class="flex gap-4 relative z-10">
            <div class="p-3 rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/20"><i data-lucide="box" class="w-5 h-5" style="color:#a78bfa"></i></div>
            <div class="p-3 rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/20"><i data-lucide="film" class="w-5 h-5" style="color:#a78bfa"></i></div>
            <div class="p-3 rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/20"><i data-lucide="scan-eye" class="w-5 h-5" style="color:#a78bfa"></i></div>
            <div class="p-3 rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/20"><i data-lucide="glasses" class="w-5 h-5" style="color:#a78bfa"></i></div>
          </div>
          <div class="flex flex-col gap-1 relative z-10">
            <span class="text-sm font-headline font-bold text-[#ecddf9]">Tools: Blender · Maya · Cinema 4D · Unreal Engine · Unity · WebXR · Three.js</span>
            <span class="text-xs font-mono text-[#958da1]">Industry-standard pipeline for cinematic-quality 3D output</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">${threeDServicesGridHtml}</div>
      </section>

      <!-- Architecture Calculator -->
      <section class="glass-card rounded-[2rem] p-8 md:p-12 border border-[#d3bbff]/10 relative bg-[#120a1d]/60 flex flex-col gap-8">
        <div class="flex flex-col gap-3">
          <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
            <i data-lucide="badge-dollar-sign" class="w-3.5 h-3.5"></i> Project Estimator
          </span>
          <h2 class="text-2xl sm:text-3xl font-headline font-bold text-[#ecddf9] tracking-tight">Plan Your Project</h2>
          <p class="text-sm text-[#ccc3d7] max-w-2xl leading-relaxed">Choose the services you need and your timeline below. Our tool will give you an instant estimate for your project.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-3">
              <span class="text-xs font-mono text-[#ccc3d7] uppercase">Select Services</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="estimator-services">
                ${estimatorServicesHtml}
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <div class="flex justify-between text-xs font-mono text-[#ccc3d7] uppercase">
                <span>Delivery Timeline</span>
                <span class="text-[#d3bbff] font-bold" id="week-label">4 Weeks Duration</span>
              </div>
              <input type="range" id="delivery-weeks" min="2" max="12" value="4"
                class="w-full h-1 bg-[#120a1d] rounded-lg appearance-none cursor-pointer accent-[#d3bbff] border border-[#d3bbff]/10" />
              <div class="flex justify-between text-[10px] font-mono text-[#958da1]">
                <span>2 weeks (Urgent)</span>
                <span>12 weeks (Standard)</span>
              </div>
            </div>
          </div>

          <div class="glass-card rounded-2xl p-8 bg-[#180f23] border border-[#d3bbff]/20 flex flex-col gap-6 text-center lg:text-left">
            <span class="text-xs font-mono text-[#958da1] uppercase">Estimated Complexity</span>
            <div class="flex flex-col lg:flex-row items-baseline justify-center lg:justify-start gap-2">
              <span id="estimate-score" class="text-5xl font-headline font-semibold text-[#d3bbff]">${initEstimate.score}</span>
              <span class="text-xs font-mono text-[#958da1]">/ 100 Score</span>
            </div>
            <div class="flex flex-col gap-2">
              <span id="estimate-badge" class="text-xs font-mono text-[#ecddf9] uppercase bg-[#6d28d9]/30 border border-[#d3bbff]/10 px-3 py-1.5 rounded-lg w-fit mx-auto lg:mx-0">${initEstimate.badge}</span>
              <p id="estimate-desc" class="text-xs text-[#ccc3d7] leading-relaxed">${initEstimate.desc}</p>
            </div>
            <button data-action="navigate" data-tab="contact"
              class="mt-4 w-full bg-[#6d28d9] hover:bg-[#5b00c5] py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#ecddf9] transition-all cursor-pointer border border-[#d3bbff]/30">
              Order Your Project
            </button>
          </div>
        </div>
      </section>
    </div>`;
}

export function setupServicesView() {
  let selectedServices = ['webdev', 'uiux'];
  let deliveryWeeks = 4;

  const updateEstimate = () => {
    const est = calculateEstimate(selectedServices, deliveryWeeks);
    document.getElementById('estimate-score').textContent = est.score;
    document.getElementById('estimate-badge').textContent = est.badge;
    document.getElementById('estimate-desc').textContent = est.desc;
  };

  document.querySelectorAll('.estimator-svc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-svc');
      const isSelected = selectedServices.includes(id);
      if (isSelected && selectedServices.length > 1) {
        selectedServices = selectedServices.filter(s => s !== id);
        btn.classList.remove('bg-[#6d28d9]/20', 'border-[#d3bbff]', 'text-[#ecddf9]', 'selected');
        btn.classList.add('bg-[#180f23]', 'border-[#d3bbff]/10', 'text-[#ccc3d7]');
        const dot = btn.querySelector('.animate-ping');
        if (dot) dot.remove();
      } else if (!isSelected) {
        selectedServices.push(id);
        btn.classList.add('bg-[#6d28d9]/20', 'border-[#d3bbff]', 'text-[#ecddf9]', 'selected');
        btn.classList.remove('bg-[#180f23]', 'border-[#d3bbff]/10', 'text-[#ccc3d7]');
        const titleSpan = btn.querySelector('.font-bold');
        if (titleSpan && !titleSpan.querySelector('.animate-ping')) {
          titleSpan.insertAdjacentHTML('afterbegin', '<span class="w-1.5 h-1.5 rounded-full bg-[#d3bbff] inline-block animate-ping"></span>');
        }
      }
      updateEstimate();
    });
  });

  const slider = document.getElementById('delivery-weeks');
  const weekLabel = document.getElementById('week-label');
  if (slider) {
    slider.addEventListener('input', () => {
      deliveryWeeks = parseInt(slider.value);
      weekLabel.textContent = deliveryWeeks + ' Weeks Duration';
      updateEstimate();
    });
  }
};
