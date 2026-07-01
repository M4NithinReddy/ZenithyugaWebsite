export const ENABLE_GLOBAL_AI_CHAT = true;

const INITIAL_MESSAGE = "👋 Welcome to ZenithYugaTech! I'm your AI Assistant. How can I help you today?";

const QUICK_ACTIONS = [
  { id: 'webinar', label: 'Register for Webinar', icon: 'monitor-play' },
  { id: 'courses', label: 'Explore AI Courses', icon: 'graduation-cap' },
  { id: 'internships', label: 'Internship Programs', icon: 'briefcase' },
  { id: 'services', label: 'Services', icon: 'layers' },
  { id: 'pricing', label: 'Pricing', icon: 'credit-card' },
  { id: 'career', label: 'Career Guidance', icon: 'compass' },
  { id: 'contact', label: 'Contact Us', icon: 'phone' }
];

export function AiChatBot() {
  if (!ENABLE_GLOBAL_AI_CHAT) return '';

  const quickActionsHtml = QUICK_ACTIONS.map(action => `
    <button type="button" data-action="${action.id}" class="quick-action-btn flex items-center justify-center gap-2 p-3 rounded-xl bg-[#180f23]/80 border border-[#d3bbff]/10 hover:border-[#d3bbff]/40 hover:bg-[#6d28d9]/20 text-[#ecddf9] text-xs font-medium transition-all duration-300 w-full text-left group shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d3bbff]/50" aria-label="${action.label}">
      <i data-lucide="${action.icon}" class="w-4 h-4 text-[#a855f7] group-hover:text-[#d3bbff] transition-colors"></i>
      <span class="truncate">${action.label}</span>
    </button>
  `).join('');

  return `
    <!-- Chat Bot Trigger Button -->
    <div id="ai-chatbot-container" class="fixed bottom-6 right-6 z-[110] flex flex-col items-end group" role="region" aria-label="AI Assistant">
      
      <!-- Tooltip -->
      <div id="chatbot-tooltip" class="mb-3 px-3 py-1.5 bg-[#120a1d]/90 backdrop-blur-md border border-[#d3bbff]/30 text-[#ecddf9] text-[10px] font-mono tracking-widest uppercase rounded-lg shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        Need Help? Chat with AI
      </div>
      
      <!-- Trigger Button -->
      <button id="chatbot-trigger" aria-label="Open AI Assistant" aria-expanded="false" class="relative w-14 h-14 bg-gradient-to-br from-[#6d28d9] to-[#4c1d95] hover:from-[#5b00c5] hover:to-[#3b0764] rounded-full shadow-[0_0_25px_rgba(109,40,217,0.5)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#120a1d] focus:ring-[#d3bbff]">
        <i data-lucide="bot" class="w-6 h-6 text-[#ecddf9] group-hover:animate-pulse"></i>
        
        <!-- Outer Glow/Pulse -->
        <div class="absolute inset-0 rounded-full border border-[#d3bbff]/40 animate-ping opacity-30 pointer-events-none"></div>

        <!-- Notification Badge -->
        <span id="chatbot-badge" class="absolute top-0 -left-1 flex h-4 w-4">
          <span class="relative inline-flex items-center justify-center rounded-full h-4 w-4 bg-red-500 border-2 border-[#120a1d] text-[8px] font-bold text-white shadow-lg">1</span>
        </span>
      </button>
    </div>

    <!-- Chat Bot Window -->
    <div id="chatbot-window" role="dialog" aria-modal="true" aria-labelledby="chatbot-title" class="fixed bottom-24 right-6 md:right-6 md:bottom-24 z-[110] w-[380px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[75vh] bg-[#120a1d]/95 backdrop-blur-2xl border border-[#d3bbff]/20 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(109,40,217,0.15)] flex flex-col overflow-hidden opacity-0 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-12 scale-90 origin-bottom-right">
      
      <!-- Header -->
      <div class="px-5 py-4 border-b border-[#d3bbff]/10 bg-gradient-to-r from-[#180f23]/90 to-[#201533]/90 flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <div class="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#6d28d9] to-[#d3bbff] p-[2px] shadow-[0_0_15px_rgba(109,40,217,0.4)]">
            <div class="w-full h-full bg-[#120a1d] rounded-full flex items-center justify-center">
              <i data-lucide="bot" class="w-5 h-5 text-[#ecddf9]"></i>
            </div>
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#120a1d] shadow-[0_0_5px_#4ade80]"></span>
          </div>
          <div>
            <h3 id="chatbot-title" class="text-[#ecddf9] font-bold text-sm tracking-wide">ZenithYugaTech AI Assistant</h3>
            <div class="flex items-center gap-1.5 mt-0.5">
              <span class="text-[10px] font-mono text-[#958da1] uppercase tracking-wider">Online & Ready</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <button id="chatbot-minimize" aria-label="Minimize Chat" class="text-[#958da1] hover:text-[#ecddf9] transition-colors cursor-pointer p-2 rounded-full hover:bg-white/5 focus:outline-none focus:bg-white/10">
            <i data-lucide="minus" class="w-4 h-4"></i>
          </button>
        </div>
      </div>

      <!-- Messages Area -->
      <div id="chatbot-messages" class="flex-1 overflow-y-auto custom-scrollbar p-5 flex flex-col gap-5 scroll-smooth relative" aria-live="polite">
        <!-- Messages will be injected here -->
      </div>

      <!-- Quick Actions (Hidden after first user message) -->
      <div id="chatbot-quick-actions" class="px-5 pb-4 shrink-0 transition-all duration-500">
        <div class="text-[10px] font-mono text-[#958da1] uppercase tracking-widest mb-3 flex items-center gap-2">
          <div class="h-px flex-1 bg-[#d3bbff]/10"></div>
          Suggested Topics
          <div class="h-px flex-1 bg-[#d3bbff]/10"></div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          ${quickActionsHtml}
        </div>
      </div>

      <!-- Input Area -->
      <div class="p-4 border-t border-[#d3bbff]/10 bg-[#180f23]/95 shrink-0">
        <form id="chatbot-form" class="flex items-center gap-2 relative">
          <input type="text" id="chatbot-input" placeholder="Type your message..." autocomplete="off" aria-label="Chat input" class="w-full bg-[#120a1d] border border-[#d3bbff]/20 text-[#ecddf9] text-sm rounded-full pl-5 pr-12 py-3.5 focus:outline-none focus:border-[#d3bbff]/50 focus:shadow-[0_0_15px_rgba(211,187,255,0.1)] transition-all placeholder-[#958da1]">
          <button type="submit" aria-label="Send message" class="absolute right-1.5 w-9 h-9 rounded-full bg-[#6d28d9] hover:bg-[#5b00c5] flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_10px_rgba(109,40,217,0.4)] focus:outline-none focus:ring-2 focus:ring-[#d3bbff]">
            <i data-lucide="send" class="w-4 h-4 ml-0.5"></i>
          </button>
        </form>
        <div class="text-center mt-3">
          <span class="text-[9px] font-mono text-[#958da1] uppercase tracking-widest flex items-center justify-center gap-1">
            <i data-lucide="zap" class="w-3 h-3 text-[#a855f7]"></i> Powered by Zenith AI
          </span>
        </div>
      </div>
      
    </div>
  `;
}

export function setupAiChatBot() {
  if (!ENABLE_GLOBAL_AI_CHAT) return;

  const trigger = document.getElementById('chatbot-trigger');
  const windowEl = document.getElementById('chatbot-window');
  const minimizeBtn = document.getElementById('chatbot-minimize');
  const form = document.getElementById('chatbot-form');
  const input = document.getElementById('chatbot-input');
  const messagesArea = document.getElementById('chatbot-messages');
  const quickActionsContainer = document.getElementById('chatbot-quick-actions');
  const badge = document.getElementById('chatbot-badge');

  if (!trigger || !windowEl) return;

  let isOpen = false;
  let hasInteracted = false;
  let history = [];

  // --- Session Management ---
  const loadHistory = () => {
    try {
      const saved = sessionStorage.getItem('zenith_ai_chat_history');
      if (saved) {
        history = JSON.parse(saved);
        if (history.length > 0) hasInteracted = true;
      }
    } catch (e) {
      console.error('Could not parse chat history', e);
    }
  };

  const saveHistory = () => {
    try {
      sessionStorage.setItem('zenith_ai_chat_history', JSON.stringify(history));
    } catch (e) {
      console.error('Could not save chat history', e);
    }
  };

  // --- Rendering UI ---
  const renderMessage = (text, isUser, animate = false) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex items-end gap-3 max-w-[90%] ${isUser ? 'ml-auto flex-row-reverse' : ''}`;
    
    if (animate) {
      msgDiv.style.opacity = '0';
      msgDiv.style.transform = 'translateY(10px)';
      msgDiv.style.transition = 'all 0.3s ease-out';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          msgDiv.style.opacity = '1';
          msgDiv.style.transform = 'translateY(0)';
        });
      });
    }

    let avatarHtml = '';
    if (!isUser) {
      avatarHtml = `
        <div class="w-7 h-7 shrink-0 rounded-full bg-gradient-to-tr from-[#6d28d9] to-[#d3bbff] p-[1px] shadow-sm">
          <div class="w-full h-full bg-[#120a1d] rounded-full flex items-center justify-center">
            <i data-lucide="bot" class="w-3.5 h-3.5 text-[#ecddf9]"></i>
          </div>
        </div>
      `;
    }

    msgDiv.innerHTML = `
      ${avatarHtml}
      <div class="${isUser ? 'bg-gradient-to-r from-[#6d28d9] to-[#5b00c5] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-sm text-white' : 'bg-[#201533]/80 backdrop-blur-md rounded-tl-2xl rounded-tr-2xl rounded-bl-sm rounded-br-2xl border border-[#d3bbff]/10 text-[#ecddf9]'} text-sm px-4 py-3 leading-relaxed shadow-sm break-words whitespace-pre-wrap">
        ${text}
      </div>
    `;

    messagesArea.appendChild(msgDiv);
    messagesArea.scrollTop = messagesArea.scrollHeight;
    if (window.lucide) window.lucide.createIcons();
  };

  const renderHistory = () => {
    messagesArea.innerHTML = '';
    // Always show initial message first
    renderMessage(INITIAL_MESSAGE, false, false);
    history.forEach(msg => {
      renderMessage(msg.text, msg.isUser, false);
    });
    
    if (hasInteracted && quickActionsContainer) {
      quickActionsContainer.style.display = 'none';
    }
  };

  // --- Interaction Logic ---
  const toggleChat = () => {
    isOpen = !isOpen;
    trigger.setAttribute('aria-expanded', isOpen);
    
    if (isOpen) {
      windowEl.style.opacity = '1';
      windowEl.style.pointerEvents = 'auto';
      windowEl.style.transform = 'translateY(0) scale(1)';
      input.focus();
      if (badge) badge.style.display = 'none';
    } else {
      windowEl.style.opacity = '0';
      windowEl.style.pointerEvents = 'none';
      windowEl.style.transform = 'translateY(2rem) scale(0.95)';
      trigger.focus();
    }
  };

  trigger.addEventListener('click', toggleChat);
  minimizeBtn.addEventListener('click', toggleChat);

  const showTyping = () => {
    const msgDiv = document.createElement('div');
    msgDiv.id = 'chatbot-typing';
    msgDiv.className = 'flex items-end gap-3 max-w-[85%]';
    msgDiv.innerHTML = `
      <div class="w-7 h-7 shrink-0 rounded-full bg-gradient-to-tr from-[#6d28d9] to-[#d3bbff] p-[1px] shadow-sm">
        <div class="w-full h-full bg-[#120a1d] rounded-full flex items-center justify-center">
          <i data-lucide="bot" class="w-3.5 h-3.5 text-[#ecddf9]"></i>
        </div>
      </div>
      <div class="bg-[#201533]/80 backdrop-blur-md rounded-2xl rounded-bl-sm border border-[#d3bbff]/10 px-4 py-3 flex gap-1.5 items-center h-[42px]">
        <span class="w-1.5 h-1.5 bg-[#d3bbff] rounded-full animate-bounce" style="animation-delay: 0ms"></span>
        <span class="w-1.5 h-1.5 bg-[#d3bbff] rounded-full animate-bounce" style="animation-delay: 150ms"></span>
        <span class="w-1.5 h-1.5 bg-[#d3bbff] rounded-full animate-bounce" style="animation-delay: 300ms"></span>
      </div>
    `;
    messagesArea.appendChild(msgDiv);
    messagesArea.scrollTop = messagesArea.scrollHeight;
    if (window.lucide) window.lucide.createIcons();
  };

  const removeTyping = () => {
    const typingEl = document.getElementById('chatbot-typing');
    if (typingEl) typingEl.remove();
  };

  const handleMessage = (text) => {
    if (!text.trim()) return;

    // Hide quick actions on first interaction
    if (!hasInteracted && quickActionsContainer) {
      quickActionsContainer.style.opacity = '0';
      setTimeout(() => {
        quickActionsContainer.style.display = 'none';
      }, 500);
      hasInteracted = true;
    }

    renderMessage(text, true, true);
    history.push({ text, isUser: true });
    saveHistory();

    showTyping();

    // AI Logic Simulator
    setTimeout(() => {
      removeTyping();
      const lower = text.toLowerCase();
      let reply = "Thanks for reaching out! One of our human experts will get back to you shortly. Feel free to use the Contact page or our official WhatsApp community.";

      // Smart Knowledge Base
      if (lower.includes('webinar') || lower.includes('69') || lower.includes('register')) {
        reply = "Our NextGen AI Tools Webinar is on July 11! You will learn AI App Dev, Prompt Engineering, and Cloud Deployment. Would you like to register now for ₹69?";
        // If they explicitly typed "register for webinar", trigger the modal
        if (text === 'Register for Webinar' && typeof window.openWebinarLanding === 'function') {
          setTimeout(() => window.openWebinarLanding(), 800);
          reply = "I'm opening the registration modal for you right now! Let me know if you have any questions about the curriculum.";
        }
      } else if (lower.includes('course') || lower.includes('full stack')) {
        reply = "We offer premium courses in Full Stack Development, React, Next.js, and AI Integration. Each course includes real-world projects and 1-on-1 mentorship. Check our Services section for more details!";
      } else if (lower.includes('internship') || lower.includes('career')) {
        reply = "ZenithYugaTech offers intensive internship programs designed to make you industry-ready. We provide career guidance, resume building, and hands-on client project experience.";
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('fee')) {
        reply = "Our webinar is currently priced at just ₹69. For other courses and services, pricing depends on the scope. Please contact us for a detailed quote.";
      } else if (lower.includes('certificate')) {
        reply = "Yes! All attendees of our webinar and courses receive an official digital certificate from ZenithYuga Technologies to boost your resume and LinkedIn profile.";
      } else if (lower.includes('service') || lower.includes('company')) {
        reply = "We specialize in Digital Experiences, Custom Web Apps, UI/UX Design, Cloud Architecture, and AI/ML Solutions. Let's architect your next digital masterpiece!";
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email')) {
        reply = "You can reach out to us via the Contact page, or join our official WhatsApp and Discord communities for instant support.";
      } else if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
        reply = "Hello! I'm the ZenithYuga AI. How can I assist you with our services, courses, or the upcoming webinar today?";
      }

      renderMessage(reply, false, true);
      history.push({ text: reply, isUser: false });
      saveHistory();

    }, 1200 + Math.random() * 800); // Random natural typing delay
  };

  // --- Event Listeners ---
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    handleMessage(text);
  });

  // Quick Action Buttons
  document.querySelectorAll('.quick-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const actionText = btn.querySelector('span').innerText;
      handleMessage(actionText);
    });
  });

  // Init
  loadHistory();
  renderHistory();
}
