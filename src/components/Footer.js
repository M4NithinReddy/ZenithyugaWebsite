export function Footer() {
  return `
    <footer class="w-full border-t border-[#d3bbff]/10 bg-[#120a1d]/80 backdrop-blur-md pt-12 pb-8 px-6 md:px-20 mt-auto shrink-0">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        <div class="md:col-span-2 flex flex-col gap-4">
          <!-- Title Card Logo -->
          <div class="flex items-center gap-3">
            <div class="relative flex-shrink-0 w-14 h-14 rounded-full bg-[#ecddf9] flex items-center justify-center shadow-[0_0_18px_rgba(211,187,255,0.25)] overflow-hidden">
              <img src="/zy-logo.png" alt="ZenithYuga" class="w-[52px] h-[52px] object-contain" style="mix-blend-mode: multiply; transform: scale(1.5);" />
            </div>
            <div class="flex flex-col items-start leading-none gap-[3px]">
              <span class="font-headline font-extrabold text-xl tracking-widest text-[#ecddf9] uppercase leading-none">ZenithYuga</span>
              <span class="font-sans text-[9px] font-semibold tracking-[0.22em] text-[#a855f7] uppercase leading-none">Bring Your Worth</span>
            </div>
          </div>
          <p class="text-sm text-[#ccc3d7] max-w-sm leading-relaxed">
            Crafting digital architecture engineered at a cellular level. High-fidelity interfaces, custom tactile animations, and fluid layouts.
          </p>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest mb-2">Navigation</h3>
          <button data-action="navigate" data-tab="home" class="text-sm text-[#ccc3d7] hover:text-[#ecddf9] transition-colors text-left focus:outline-none">Home</button>
          <button data-action="navigate" data-tab="projects" class="text-sm text-[#ccc3d7] hover:text-[#ecddf9] transition-colors text-left focus:outline-none">Deliverables</button>
          <button data-action="navigate" data-tab="services" class="text-sm text-[#ccc3d7] hover:text-[#ecddf9] transition-colors text-left focus:outline-none">Services</button>
          <button data-action="navigate" data-tab="about" class="text-sm text-[#ccc3d7] hover:text-[#ecddf9] transition-colors text-left focus:outline-none">Architecture</button>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest mb-2">Connect</h3>
          <a href="mailto:zenithyugatech@gmail.com" class="text-sm text-[#ccc3d7] hover:text-[#ecddf9] transition-colors flex items-center gap-2 group">
            <i data-lucide="mail" class="w-4 h-4 group-hover:text-[#d3bbff] transition-colors"></i> zenithyugatech@gmail.com
          </a>
          <a href="https://www.instagram.com/zenithyuga?igsh=MTNic2VkcG1vcDZ2cQ==" target="_blank" rel="noopener noreferrer" class="text-sm text-[#ccc3d7] hover:text-[#ecddf9] transition-colors flex items-center gap-2 group">
            <i data-lucide="instagram" class="w-4 h-4 group-hover:text-[#d3bbff] transition-colors"></i> Instagram
          </a>
          <a href="https://www.linkedin.com/company/zenithyuga/" target="_blank" rel="noopener noreferrer" class="text-sm text-[#ccc3d7] hover:text-[#ecddf9] transition-colors flex items-center gap-2 group">
            <i data-lucide="linkedin" class="w-4 h-4 group-hover:text-[#d3bbff] transition-colors"></i> LinkedIn
          </a>
        </div>
      </div>
      
      <div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#d3bbff]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#958da1]">
        <p>&copy; ${new Date().getFullYear()} ZenithYuga. All rights reserved.</p>
        <div class="flex items-center gap-1.5">
          <span>Engineered with precision</span>
        </div>
      </div>
    </footer>
  `;
}
