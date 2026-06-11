export function Header(currentTab) {
  const navItems = [
    { label: 'Home', tab: 'home' },
    { label: 'About', tab: 'about' },
    { label: 'Services', tab: 'services' },
    { label: 'Projects', tab: 'projects' },
    { label: 'Contact', tab: 'contact' },
  ];

  const desktopLinks = navItems.map(item => `
    <button
      data-action="navigate"
      data-tab="${item.tab}"
      id="nav-tab-${item.tab}"
      class="relative py-1 font-sans text-sm tracking-wide transition-colors duration-300 focus:outline-none cursor-pointer ${
        currentTab === item.tab
          ? 'text-[#d3bbff] font-semibold'
          : 'text-[#ccc3d7] hover:text-[#d3bbff]'
      }"
    >
      ${item.label}
      ${currentTab === item.tab ? `
        <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d3bbff] rounded-full"></div>
      ` : ''}
    </button>
  `).join('');

  const mobileLinks = navItems.map(item => `
    <button
      data-action="navigate"
      data-tab="${item.tab}"
      class="text-left py-2 font-headline text-lg transition-colors cursor-pointer ${
        currentTab === item.tab ? 'text-[#d3bbff] font-semibold pl-2 border-l-2 border-[#d3bbff]' : 'text-[#ccc3d7]'
      }"
    >
      ${item.label}
    </button>
  `).join('');

  return `
    <header class="sticky top-0 z-50 w-full bg-[#180f23]/40 backdrop-blur-xl border-b border-[#d3bbff]/10 shadow-[0_8px_32px_0_rgba(83,57,139,0.15)]">
      <nav class="flex justify-between items-center w-full px-6 md:px-20 py-4 max-w-7xl mx-auto">
        <!-- Title Card Logo -->
        <button
          data-action="navigate"
          data-tab="home"
          class="flex items-center gap-3 bg-transparent border-none cursor-pointer group focus:outline-none"
          aria-label="ZenithYuga - Home"
        >
          <!-- Zy Logo -->
          <div class="relative flex-shrink-0 w-14 h-14 rounded-full bg-[#ecddf9] flex items-center justify-center shadow-[0_0_18px_rgba(211,187,255,0.25)] group-hover:shadow-[0_0_28px_rgba(211,187,255,0.45)] transition-shadow duration-300 overflow-hidden">
            <img src="/zy-logo.png" alt="ZenithYuga" class="w-[52px] h-[52px] object-contain" style="mix-blend-mode: multiply; transform: scale(1.5);" />
          </div>
          <!-- Wordmark + Tagline -->
          <div class="flex flex-col items-start leading-none gap-[3px]">
            <span class="font-headline font-extrabold text-xl md:text-2xl tracking-widest text-[#ecddf9] group-hover:text-[#d3bbff] transition-colors duration-300 uppercase leading-none">
              ZenithYuga
            </span>
            <span class="font-sans text-[9px] md:text-[10px] font-semibold tracking-[0.22em] text-[#a855f7] uppercase leading-none">
              Bring Your Worth
            </span>
          </div>
        </button>

        <div class="hidden md:flex items-center gap-8">
          ${desktopLinks}
        </div>

        <div class="flex items-center gap-3">
          <button
            id="notification-bell"
            class="relative p-2.5 rounded-full bg-[#53398b]/30 hover:bg-[#53398b]/50 border border-[#d3bbff]/10 hover:border-[#d3bbff]/30 transition-all duration-300 cursor-pointer group"
            aria-label="Notifications"
          >
            <i data-lucide="bell" class="w-4 h-4 text-[#d3bbff] group-hover:text-[#ecddf9] transition-colors"></i>
            <span id="notification-dot" class="hidden absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          <button
            data-action="navigate"
            data-tab="contact"
            class="hidden sm:inline-flex items-center justify-center bg-[#6d28d9] hover:bg-[#5b00c5] text-[#ecddf9] font-sans font-medium text-xs tracking-wider uppercase px-6 py-2.5 rounded-full hover:shadow-[0_0_24px_rgba(109,40,217,0.4)] transition-all duration-300 active:scale-95 cursor-pointer border border-[#d3bbff]/20"
          >
            Let's Talk
          </button>

          <button
            id="mobile-menu-toggle"
            class="md:hidden p-2 text-[#ecddf9] hover:text-[#d3bbff] transition-colors focus:outline-none bg-transparent cursor-pointer"
            aria-label="Toggle menu"
          >
            <i data-lucide="menu" class="w-6 h-6 mobile-menu-icon-open"></i>
            <i data-lucide="x" class="w-6 h-6 mobile-menu-icon-close hidden"></i>
          </button>
        </div>
      </nav>

      <div id="mobile-menu-drawer" class="hidden md:hidden border-t border-[#d3bbff]/10 bg-[#120a1d]/95 backdrop-blur-2xl overflow-hidden transition-all duration-300 ease-in-out">
        <div class="px-6 py-6 flex flex-col gap-4">
          ${mobileLinks}
          <hr class="border-[#d3bbff]/10 my-2" />
          <button
            data-action="navigate"
            data-tab="contact"
            class="w-full flex items-center justify-center gap-2 bg-[#6d28d9] py-3 rounded-full text-sm font-sans font-medium uppercase tracking-wider text-[#ecddf9] transition-all hover:bg-[#5b00c5] cursor-pointer"
          >
            Let's Talk Today
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </header>
  `;
}

export function setupHeader() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-menu-drawer');
  if (toggleBtn && drawer) {
    toggleBtn.onclick = () => {
      drawer.classList.toggle('hidden');
      const openIcon = toggleBtn.querySelector('.mobile-menu-icon-open');
      const closeIcon = toggleBtn.querySelector('.mobile-menu-icon-close');
      if (drawer.classList.contains('hidden')) {
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      } else {
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    };
  }

  // Notification bell setup
  const bell = document.getElementById('notification-bell');
  if (bell) {
    updateNotificationBell();
    bell.addEventListener('click', () => {
      const count = parseInt(localStorage.getItem('zy_notifications') || '0');
      const lastMsg = JSON.parse(localStorage.getItem('zy_last_notification') || 'null');
      if (count === 0) {
        alert('No new notifications yet.');
      } else {
        const msg = lastMsg
          ? `You have ${count} new message(s)!\n\nLast message from: ${lastMsg.name}\nEmail: ${lastMsg.email}\nSubject: ${lastMsg.subject}\nMessage: ${lastMsg.message}`
          : `You have ${count} new message(s)!`;
        alert(msg);
        // Clear notification dot after viewing
        localStorage.setItem('zy_notifications', '0');
        updateNotificationBell();
      }
    });
  }
}

export function updateNotificationBell() {
  const dot = document.getElementById('notification-dot');
  if (!dot) return;
  const count = parseInt(localStorage.getItem('zy_notifications') || '0');
  if (count > 0) {
    dot.classList.remove('hidden');
  } else {
    dot.classList.add('hidden');
  }
}
