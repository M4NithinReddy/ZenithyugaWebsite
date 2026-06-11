import { COMPLETED_PROJECTS, ONGOING_PROJECTS, FUTURE_PROJECTS, DEPLOYED_SITES, PORTFOLIO_WORKS } from '../data.js';

const getHostname = (url) => {
  if (!url) return null;
  try { return new URL(url).hostname; } catch { return null; }
};

const getStatusBadgeColor = (status) => {
  switch (status) {
    case 'completed': return 'bg-[#22c55e]/20 text-[#22c55e] border-[#22c55e]/30';
    case 'ongoing':   return 'bg-[#eab308]/20 text-[#eab308] border-[#eab308]/30';
    case 'future':    return 'bg-[#a855f7]/20 text-[#c084fc] border-[#a855f7]/30';
    case 'deployed':  return 'bg-[#3b82f6]/20 text-[#60a5fa] border-[#3b82f6]/30';
    case 'portfolio': return 'bg-[#ec4899]/20 text-[#f472b6] border-[#ec4899]/30';
    default:          return 'bg-[#ccc3d7]/20 text-[#ccc3d7] border-[#ccc3d7]/30';
  }
};

const getProjectIconHtml = (iconName) => {
  switch (iconName) {
    case 'psychology': return '<i data-lucide="brain" class="w-5 h-5 text-[#d3bbff]"></i>';
    case 'hub':        return '<i data-lucide="network" class="w-5 h-5 text-[#d3bbff]"></i>';
    case 'token':      return '<i data-lucide="cpu" class="w-5 h-5 text-[#d3bbff]"></i>';
    default:           return '<i data-lucide="code-2" class="w-5 h-5 text-[#d3bbff]"></i>';
  }
};

const renderProjectCard = (project) => {
  const hostname = getHostname(project.demoUrl);
  const isLiveSite = project.status === 'deployed' || project.status === 'portfolio' || project.status === 'completed';

  let headerHtml = '';
  if (project.image) {
    const needsYellowBg = project.needsYellowBg === true;
    const needsBeigeBg = project.needsBeigeBg === true;
    const imgContainerBg = needsYellowBg ? 'bg-[#fbbf24]' : needsBeigeBg ? 'bg-[#e8dcc8]' : 'bg-[#120a1d]';
    const skipOverlay = needsYellowBg || needsBeigeBg;
    headerHtml = `
      <div class="relative w-full ${imgContainerBg} shrink-0 overflow-hidden" style="height:200px;">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-contain object-center" loading="lazy" />
        ${skipOverlay ? '' : '<div class="absolute inset-0 bg-gradient-to-t from-[#180f23] via-[#180f23]/20 to-transparent"></div>'}
      </div>`;
  } else if (project.demoUrl && hostname && isLiveSite) {
    headerHtml = `
      <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer"
         class="relative w-full bg-[#120a1d] flex items-center justify-center group overflow-hidden block shrink-0" style="height:200px;">
        <div class="absolute inset-0 flex items-center justify-center opacity-20 blur-2xl transform scale-150 pointer-events-none">
          <img src="https://www.google.com/s2/favicons?domain=${hostname}&sz=128" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#180f23] via-[#180f23]/60 to-[#180f23]/40"></div>
        <div class="relative z-10 w-24 h-24 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl transition-transform duration-500 group-hover:scale-110">
          <img src="https://www.google.com/s2/favicons?domain=${hostname}&sz=128" alt="${project.title} logo" class="w-14 h-14 object-contain drop-shadow-lg" />
        </div>
      </a>`;
  } else {
    headerHtml = `
      <div class="relative w-full bg-[#120a1d] flex items-center justify-center group overflow-hidden shrink-0" style="height:200px;">
        <div class="absolute inset-0 bg-gradient-to-t from-[#180f23] via-[#180f23]/60 to-[#180f23]/40"></div>
        <div class="relative z-10 w-24 h-24 flex items-center justify-center rounded-2xl bg-[#53398b]/20 border border-[#d3bbff]/10 backdrop-blur-sm shadow-2xl transition-transform duration-500 group-hover:scale-110">
          ${project.status === 'future' ? '<i data-lucide="lock" class="w-10 h-10 text-[#d3bbff]"></i>' : getProjectIconHtml(project.iconName).replace('w-5 h-5', 'w-10 h-10')}
        </div>
        ${project.status === 'future' ? '<div class="absolute top-4 right-4"><span class="text-[10px] font-mono text-[#958da1] uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full border border-[#d3bbff]/5">Encrypted Horizon</span></div>' : ''}
      </div>`;
  }

  const externalLinkHtml = isLiveSite && project.demoUrl ? `
    <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer"
       class="text-[#d3bbff] hover:text-[#ebddff] transition-colors" aria-label="Launch live demo">
      <i data-lucide="external-link" class="w-4 h-4"></i>
    </a>` : '';

  const progressHtml = project.status === 'ongoing' && typeof project.progress === 'number' ? `
    <div class="mt-4 flex flex-col gap-2">
      <div class="flex justify-between text-xs font-mono text-[#ccc3d7]">
        <span>Hydration Phase Progress</span>
        <span class="text-[#d3bbff] font-bold">${project.progress}%</span>
      </div>
      <div class="w-full h-2 bg-[#120a1d] rounded-full overflow-hidden border border-[#d3bbff]/10">
        <div class="h-full bg-gradient-to-r from-[#6d28d9] to-[#d3bbff] rounded-full progress-bar" data-width="${project.progress}" style="width:0%"></div>
      </div>
      ${project.progressNote ? `<span class="text-[10px] font-mono text-[#958da1] flex items-center gap-1.5 mt-1"><i data-lucide="milestone" class="w-2.5 h-2.5 text-[#d3bbff]"></i> ${project.progressNote}</span>` : ''}
    </div>` : '';

  const futureDateHtml = project.status === 'future' && project.plannedDate ? `
    <div class="mt-4 pt-4 border-t border-[#d3bbff]/10">
      <span class="text-xs font-mono text-[#d3bbff] tracking-wider uppercase bg-[#53398b]/20 px-3 py-1.5 rounded-lg border border-[#d3bbff]/10">${project.plannedDate}</span>
    </div>` : '';

  const tagsHtml = isLiveSite && project.tags ? `
    <div class="flex flex-wrap gap-1.5 mt-2">
      ${project.tags.map(tag => `<span class="text-[10px] font-mono text-[#ccc3d7] px-2.5 py-1 rounded bg-[#1f162c] border border-[#d3bbff]/5">${tag}</span>`).join('')}
    </div>` : '';

  return `
    <div class="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col h-[420px] bg-[#180f23]/60 relative project-card" data-id="${project.id}">
      ${headerHtml}
      <div class="p-8 flex flex-col gap-4 flex-1 overflow-hidden">
        <div class="flex justify-between items-center gap-2 shrink-0">
          <span class="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${getStatusBadgeColor(project.status)}">${project.status}</span>
          ${externalLinkHtml}
        </div>
        <h2 class="text-xl md:text-2xl font-headline font-bold text-[#ecddf9] tracking-tight shrink-0 truncate">${project.title}</h2>
        <p class="text-xs text-[#ccc3d7] leading-relaxed flex-1 line-clamp-3">${project.description}</p>
      </div>
    </div>`;
};

const getFilteredProjects = (filter) => {
  switch (filter) {
    case 'completed': return COMPLETED_PROJECTS;
    case 'ongoing':   return ONGOING_PROJECTS;
    case 'future':    return FUTURE_PROJECTS;
    case 'deployed':  return DEPLOYED_SITES;
    case 'portfolio': return PORTFOLIO_WORKS;
    default: return [...COMPLETED_PROJECTS, ...DEPLOYED_SITES, ...PORTFOLIO_WORKS, ...ONGOING_PROJECTS, ...FUTURE_PROJECTS];
  }
};

export function ProjectsView() {
  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Deployed Sites', value: 'deployed' },
    { label: 'Portfolio Works', value: 'portfolio' },
    { label: 'Completed Masterworks', value: 'completed' },
    { label: 'Ongoing Operations', value: 'ongoing' },
    { label: 'Future Horizons', value: 'future' }
  ];

  const activeFilter = 'all';
  const projects = getFilteredProjects(activeFilter);

  const filtersHtml = filters.map(f => `
    <button data-filter="${f.value}" id="filter-${f.value}"
      class="filter-btn text-xs font-mono uppercase tracking-wider px-5 py-3 rounded-full border transition-all duration-300 cursor-pointer ${
        f.value === activeFilter
          ? 'bg-[#6d28d9] text-[#ecddf9] border-[#d3bbff]'
          : 'bg-transparent text-[#ccc3d7] border-[#d3bbff]/10 hover:border-[#d3bbff]/30'
      }">
      ${f.label}
    </button>`).join('');

  return `
    <div class="w-full min-h-screen py-16 px-6 md:px-20 max-w-7xl mx-auto flex flex-col gap-12 font-sans select-none view-enter">
      <div class="flex flex-col gap-4 max-w-2xl">
        <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
          <i data-lucide="layers" class="w-3.5 h-3.5"></i> Our Project Portfolio
        </span>
        <h1 class="text-4xl md:text-5xl font-headline font-bold text-[#ecddf9] tracking-tight">Our Work</h1>
        <p class="text-sm text-[#ccc3d7] leading-relaxed">A collection of websites, apps, and digital tools we've built for clients and our own experiments. From business dashboards to modern web experiences, we build things that work well and look great.</p>
      </div>

      <div class="flex flex-wrap gap-2 pb-4 border-b border-[#d3bbff]/10">
        ${filtersHtml}
      </div>

      <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${projects.map(renderProjectCard).join('')}
      </div>
    </div>`;
}

export function setupProjectsView() {
  let activeFilter = 'all';

  const animateProgressBars = () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.transition = 'width 1s ease-out';
      setTimeout(() => { bar.style.width = width + '%'; }, 50);
    });
  };

  const updateGrid = (filter) => {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    
    // Fade out
    grid.style.opacity = '0';
    grid.style.transition = 'opacity 0.25s ease';
    
    setTimeout(() => {
      // Get filtered projects
      const projects = getFilteredProjects(filter);
      
      // Update grid content
      grid.innerHTML = projects.map(renderProjectCard).join('');
      
      // Re-create icons
      if (window.lucide) window.lucide.createIcons();
      
      // Animate progress bars
      animateProgressBars();
      
      // Fade in
      grid.style.opacity = '1';
    }, 250);
  };

  // Wait for DOM to be ready
  setTimeout(() => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    console.log('Found filter buttons:', filterButtons.length);
    
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = btn.getAttribute('data-filter');
        console.log('Filter clicked:', filter);
        activeFilter = filter;
        
        // Update button styles
        document.querySelectorAll('.filter-btn').forEach(b => {
          b.className = 'filter-btn text-xs font-mono uppercase tracking-wider px-5 py-3 rounded-full border transition-all duration-300 cursor-pointer bg-transparent text-[#ccc3d7] border-[#d3bbff]/10 hover:border-[#d3bbff]/30';
        });
        btn.className = 'filter-btn text-xs font-mono uppercase tracking-wider px-5 py-3 rounded-full border transition-all duration-300 cursor-pointer bg-[#6d28d9] text-[#ecddf9] border-[#d3bbff]';
        
        // Update the grid with filtered projects
        updateGrid(filter);
      });
    });
  }, 100);

  animateProgressBars();
};
