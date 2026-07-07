import './index.css';
import { createIcons, icons } from 'lucide';
import { Header, setupHeader, updateNotificationBell } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { HomeView, setupHomeView } from './components/HomeView.js';
import { AboutView } from './components/AboutView.js';
import { ProjectsView, setupProjectsView } from './components/ProjectsView.js';
import { ServicesView, setupServicesView } from './components/ServicesView.js';
import { ContactView, setupContactView } from './components/ContactView.js';
import { LoadingAnimation, setupLoadingAnimation } from './components/LoadingAnimation.js';
import { WebinarLanding, setupWebinarLanding } from './components/WebinarLanding.js';
import { AiChatBot, setupAiChatBot, ENABLE_GLOBAL_AI_CHAT } from './components/AiChatBot.js';
import { AdminDashboard, setupAdminDashboard } from './components/AdminDashboard.js';

// Make lucide globally accessible for dynamic re-renders
window.lucide = { createIcons: () => createIcons({ icons }) };

// Make setup functions globally accessible
window.setupHomeView = setupHomeView;
window.setupProjectsView = setupProjectsView;
window.setupServicesView = setupServicesView;
window.setupContactView = setupContactView;
window.setupAdminDashboard = setupAdminDashboard;
window.updateNotificationBell = updateNotificationBell;

let currentTab = window.location.pathname === '/admin' ? 'admin' : 'home';
const root = document.getElementById('root');

const getViewHtml = (tab) => {
  switch (tab) {
    case 'about': return AboutView();
    case 'projects': return ProjectsView();
    case 'services': return ServicesView();
    case 'contact': return ContactView();
    case 'admin': return AdminDashboard();
    case 'home':
    default: return HomeView();
  }
};

const runViewSetup = (tab) => {
  switch (tab) {
    case 'home': if (window.setupHomeView) window.setupHomeView(); break;
    case 'about': setupAboutView(); break;
    case 'projects': if (window.setupProjectsView) window.setupProjectsView(); break;
    case 'services': if (window.setupServicesView) window.setupServicesView(); break;
    case 'contact': if (window.setupContactView) window.setupContactView(); break;
    case 'admin': if (window.setupAdminDashboard) window.setupAdminDashboard(); break;
  }
};

// Setup About View - Designation toggle
function setupAboutView() {
  const wrappers = document.querySelectorAll('.designation-wrapper');
  wrappers.forEach(wrapper => {
    const label = wrapper.querySelector('.designation-label');
    const desc = wrapper.querySelector('.designation-desc');
    if (label) {
      label.addEventListener('click', () => {
        wrapper.classList.toggle('active');
      });
    }
    if (desc) {
      desc.addEventListener('click', () => {
        wrapper.classList.toggle('active');
      });
    }
  });
}

const navigate = (tab) => {
  if (tab === currentTab) return;
  currentTab = tab;

  // SPA navigation routing
  if (tab === 'admin') {
    window.history.pushState({ tab: 'admin' }, '', '/admin');
  } else if (window.location.pathname === '/admin') {
    window.history.pushState({}, '', '/');
  }

  // Fade out
  const mainEl = root.querySelector('main');
  if (mainEl) {
    mainEl.style.opacity = '0';
    mainEl.style.transform = 'translateY(8px)';
  }

  setTimeout(() => {
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 220);
};

const renderApp = () => {
  // Show loading screen first
  root.innerHTML = LoadingAnimation();

  // After loading animation completes, show the main app
  setTimeout(() => {
    root.innerHTML = `
      <div class="min-h-screen bg-gradient-mesh text-[#ecddf9] flex flex-col justify-between font-sans" style="selection-bg:[#6d28d9]/50">
        <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#d3bbff] via-[#6d28d9] to-[#c4abff] z-50 pointer-events-none"></div>
        ${Header(currentTab)}
        <main class="flex-grow w-full relative transition-all duration-300 ease-out" style="opacity:0; transform:translateY(8px);">
          ${getViewHtml(currentTab)}
        </main>
        ${Footer()}
      </div>

      <!-- Global Overlays -->
      ${WebinarLanding()}
      ${ENABLE_GLOBAL_AI_CHAT ? AiChatBot() : ''}

      <!-- Go to Top Button -->
      <button
        id="go-to-top"
        class="fixed bottom-[104px] right-6 z-[60] w-12 h-12 bg-gradient-to-br from-[#180f23] to-[#201533] border border-[#d3bbff]/20 text-[#ecddf9] hover:text-white hover:border-[#d3bbff]/50 rounded-full shadow-[0_4px_24px_rgba(109,40,217,0.3)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 opacity-0 pointer-events-none translate-y-8"
        aria-label="Go to top"
      >
        <i data-lucide="chevron-up" class="w-6 h-6 text-white"></i>
      </button>`;

    // Recreate all lucide icons
    createIcons({ icons });

    // Wire up all navigation buttons
    root.querySelectorAll('[data-action="navigate"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        if (tab) navigate(tab);
      });
    });

    // Run view-specific setup
    setupHeader();
    runViewSetup(currentTab);
    setupWebinarLanding();
    setupAiChatBot();

    // Go to top button click
    const goTopBtn = document.getElementById('go-to-top');
    if (goTopBtn) {
      goTopBtn.addEventListener('click', () => {
        const webinar = document.getElementById('webinar-landing');
        if (webinar && webinar.style.opacity === '1') {
          webinar.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
    setupScrollToTop();

    // Fade in
    requestAnimationFrame(() => {
      const mainEl = root.querySelector('main');
      if (mainEl) {
        mainEl.style.opacity = '1';
        mainEl.style.transform = 'translateY(0)';
      }
    });
  }, 200);
};

// Scroll listener for Go-to-top visibility
function setupScrollToTop() {
  const btn = document.getElementById('go-to-top');
  const webinar = document.getElementById('webinar-landing');

  const updateVisibility = () => {
    if (!btn) return;
    const webinarScroll = (webinar && webinar.style.opacity === '1') ? webinar.scrollTop : 0;
    const windowScroll = window.scrollY;

    if (windowScroll > 250 || webinarScroll > 250) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
      btn.style.transform = 'translateY(0)';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
      btn.style.transform = 'translateY(2rem)';
    }
  };

  window.removeEventListener('scroll', window._goTopScroll);
  window._goTopScroll = updateVisibility;
  window.addEventListener('scroll', updateVisibility, { passive: true });
  if (webinar) {
    webinar.removeEventListener('scroll', window._goTopWebinarScroll);
    window._goTopWebinarScroll = updateVisibility;
    webinar.addEventListener('scroll', updateVisibility, { passive: true });
  }
  updateVisibility();
}

// Initial render
renderApp();
