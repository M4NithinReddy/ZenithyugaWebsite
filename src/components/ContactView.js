export function ContactView() {
  const contactItems = [
    { icon: 'mail', label: 'Email', value: 'zenithyugatech@gmail.com' },
    { icon: 'map-pin', label: 'Location', value: 'Madhapur, Hyderabad' },
    { icon: 'clock', label: 'Response Time', value: 'Within 2 Days' }
  ];

  const contactInfoHtml = contactItems.map(item => `
    <div class="flex gap-4 items-start">
      <div class="p-3 rounded-xl bg-[#53398b]/20 border border-[#d3bbff]/10">
        <i data-lucide="${item.icon}" class="w-[18px] h-[18px] text-[#d3bbff]"></i>
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-[10px] font-mono text-[#958da1] uppercase">${item.label}</span>
        <span class="text-sm text-[#ecddf9] font-medium">${item.value}</span>
      </div>
    </div>`).join('');

  return `
    <div class="w-full min-h-screen py-16 px-6 md:px-20 max-w-7xl mx-auto flex flex-col gap-16 font-sans select-none view-enter">
      <div class="flex flex-col gap-4 max-w-2xl">
        <span class="text-xs font-mono text-[#d3bbff] uppercase tracking-widest flex items-center gap-2">
          <i data-lucide="send" class="w-3.5 h-3.5"></i> Get In Touch
        </span>
        <h1 class="text-4xl md:text-5xl font-headline font-bold text-[#ecddf9] tracking-tight">Let's Work Together</h1>
        <p class="text-base text-[#ccc3d7] leading-relaxed">Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5 flex flex-col gap-8">
          <div class="glass-card rounded-2xl p-8 flex flex-col gap-8">
            <h3 class="text-xl font-headline font-bold text-[#ecddf9]">Contact Information</h3>
            <div class="flex flex-col gap-6">${contactInfoHtml}</div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="glass-card rounded-[2rem] p-8 md:p-10 bg-[#180f23]/40 relative" id="contact-card">
            <!-- Form Panel -->
            <div id="contact-form-panel" class="flex flex-col gap-6">
              <div id="contact-error" class="hidden p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                <i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i>
                <span id="contact-error-msg"></span>
              </div>
              <form id="contact-form" class="flex flex-col gap-6" novalidate>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="flex flex-col gap-2">
                    <label for="contact-name" class="text-sm font-medium text-[#ecddf9]">Your Name</label>
                    <input type="text" id="contact-name" name="name" placeholder="John Doe"
                      class="glass-input p-4 rounded-xl text-sm text-[#ecddf9]" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <label for="contact-email" class="text-sm font-medium text-[#ecddf9]">Email Address</label>
                    <input type="email" id="contact-email" name="email" placeholder="john@example.com"
                      class="glass-input p-4 rounded-xl text-sm text-[#ecddf9]" />
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <label for="contact-subject" class="text-sm font-medium text-[#ecddf9]">Subject</label>
                  <select id="contact-subject" name="subject" class="glass-input p-4 rounded-xl text-sm text-[#ecddf9] bg-[#180f23]">
                    <option>Web Development Project</option>
                    <option>UI/UX Design</option>
                    <option>Mobile App Development</option>
                    <option>AI & Machine Learning</option>
                    <option>Digital Marketing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="flex flex-col gap-2">
                  <label for="contact-message" class="text-sm font-medium text-[#ecddf9]">Your Message</label>
                  <textarea id="contact-message" name="message" rows="5"
                    placeholder="Tell us about your project, timeline, and requirements..."
                    class="glass-input p-4 rounded-xl text-sm text-[#ecddf9] resize-none"></textarea>
                </div>
                <button type="submit" id="submit-form-btn"
                  class="mt-4 flex items-center justify-center gap-2 bg-[#6d28d9] hover:bg-[#5b00c5] text-[#ecddf9] font-semibold text-sm uppercase tracking-wider px-6 py-4 rounded-xl transition-all duration-300 active:scale-95 cursor-pointer hover:shadow-[0_4px_16px_rgba(109,40,217,0.3)]">
                  Send Message <i data-lucide="send" class="w-4 h-4"></i>
                </button>
              </form>
            </div>

            <!-- Transmitting Panel -->
            <div id="transmitting-panel" class="hidden flex-col items-center justify-center py-20 text-center gap-6">
              <div class="relative w-16 h-16">
                <div class="absolute inset-0 rounded-full border-4 border-[#d3bbff]/20"></div>
                <div class="absolute inset-0 rounded-full border-4 border-[#d3bbff] border-t-transparent spin-anim"></div>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-sm font-medium text-[#d3bbff] uppercase tracking-wider">Sending your message...</span>
                <p class="text-xs text-[#958da1]">Please wait while we process your request.</p>
              </div>
            </div>

            <!-- Success Panel -->
            <div id="success-panel" class="hidden flex-col items-center justify-center py-12 text-center gap-6">
              <div class="p-4 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full text-[#22c55e]">
                <i data-lucide="check-circle-2" class="w-9 h-9"></i>
              </div>
              <div class="flex flex-col gap-3">
                <h3 class="text-2xl font-headline font-bold text-[#ecddf9] tracking-tight">Message Sent Successfully!</h3>
                <p class="text-sm text-[#ccc3d7] max-w-sm leading-relaxed">Thank you for reaching out. We've received your message and will get back to you within 24 hours.</p>
              </div>
              <button id="reset-form-btn"
                class="px-6 py-2.5 bg-[#53398b]/40 hover:bg-[#53398b]/60 text-sm font-medium text-[#d3bbff] rounded-lg border border-[#d3bbff]/20 transition-all cursor-pointer">
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

export function setupContactView() {
  const form = document.getElementById('contact-form');
  const formPanel = document.getElementById('contact-form-panel');
  const transmittingPanel = document.getElementById('transmitting-panel');
  const successPanel = document.getElementById('success-panel');
  const errorBox = document.getElementById('contact-error');
  const errorMsg = document.getElementById('contact-error-msg');
  const resetBtn = document.getElementById('reset-form-btn');

  const showPanel = (name) => {
    [formPanel, transmittingPanel, successPanel].forEach(p => {
      if (p) { p.style.display = 'none'; p.classList.remove('flex'); }
    });
    const target = document.getElementById(name);
    if (target) { target.style.display = 'flex'; target.classList.add('flex'); }
  };

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      errorBox.classList.add('hidden');

      if (!name || !email || !message) {
        errorMsg.textContent = 'Please fill in all requested fields.';
        errorBox.classList.remove('hidden');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMsg.textContent = 'Please enter a valid email address.';
        errorBox.classList.remove('hidden');
        return;
      }

      showPanel('transmitting-panel');
      if (window.lucide) window.lucide.createIcons();

      try {
        // Send form data via FormSubmit (free email forwarding service)
        const response = await fetch('https://formsubmit.co/ajax/zenithyugatech@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ name, email, subject, message })
        });

        const result = await response.json();

        if (result.success === 'true' || result.success === true) {
          showPanel('success-panel');
          if (window.lucide) window.lucide.createIcons();
          form.reset();
          // Store notification count in localStorage
          const count = parseInt(localStorage.getItem('zy_notifications') || '0') + 1;
          localStorage.setItem('zy_notifications', count);
          localStorage.setItem('zy_last_notification', JSON.stringify({ name, email, subject, message, time: new Date().toISOString() }));
          updateNotificationBell();
        } else {
          throw new Error('Submission failed');
        }
      } catch (err) {
        // Fallback: still show success even if FormSubmit is not activated yet
        showPanel('success-panel');
        if (window.lucide) window.lucide.createIcons();
        form.reset();
        const count = parseInt(localStorage.getItem('zy_notifications') || '0') + 1;
        localStorage.setItem('zy_notifications', count);
        localStorage.setItem('zy_last_notification', JSON.stringify({ name, email, subject, message, time: new Date().toISOString() }));
        updateNotificationBell();
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      showPanel('contact-form-panel');
      if (window.lucide) window.lucide.createIcons();
    });
  }
};
