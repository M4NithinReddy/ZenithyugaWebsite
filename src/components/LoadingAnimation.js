export function LoadingAnimation() {
  return `
    <div id="loading-screen" class="fixed inset-0 z-[100] bg-[#180f23] flex flex-col items-center justify-center transition-opacity duration-500">
      <!-- Logo Container -->
      <div class="relative mb-8">
        <div class="w-52 h-52 md:w-60 md:h-60 rounded-full bg-[#ecddf9] flex items-center justify-center shadow-[0_0_40px_rgba(211,187,255,0.3)] animate-pulse overflow-hidden">
          <img src="/zy-logo.png" alt="ZenithYuga" class="w-[200px] h-[200px] md:w-[232px] md:h-[232px] object-contain" style="mix-blend-mode: multiply; transform: scale(1.5);" />
        </div>
        <!-- Orbiting ring -->
        <div class="absolute inset-0 w-52 h-52 md:w-60 md:h-60 border-2 border-[#d3bbff]/20 rounded-full animate-spin" style="animation-duration: 3s;"></div>
        <div class="absolute inset-0 w-52 h-52 md:w-60 md:h-60 border-2 border-[#6d28d9]/10 rounded-full animate-spin" style="animation-duration: 5s; animation-direction: reverse;"></div>
      </div>

      <!-- Brand Name -->
      <h1 class="font-headline font-extrabold text-3xl md:text-4xl tracking-widest text-[#ecddf9] uppercase mb-4">
        ZenithYuga
      </h1>

      <!-- Wave Animation for "BRING YOUR WORTH" -->
      <div class="flex gap-1 md:gap-2 mb-8">
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 0s;">B</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 0.1s;">R</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 0.2s;">I</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 0.3s;">N</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 0.4s;">G</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase mx-1" style="animation-delay: 0.5s;">&nbsp;</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 0.6s;">Y</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 0.7s;">O</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 0.8s;">U</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 0.9s;">R</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase mx-1" style="animation-delay: 1.0s;">&nbsp;</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 1.1s;">W</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 1.2s;">O</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 1.3s;">R</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 1.4s;">T</span>
        <span class="wave-letter font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-[#a855f7] uppercase" style="animation-delay: 1.5s;">H</span>
      </div>

      <!-- Loading Progress Bar -->
      <div class="w-48 md:w-64 h-1 bg-[#2f263b] rounded-full overflow-hidden">
        <div class="loading-bar h-full bg-gradient-to-r from-[#d3bbff] via-[#6d28d9] to-[#c4abff] rounded-full"></div>
      </div>
    </div>
  `;
}

export function setupLoadingAnimation() {
  // Simulate loading time (you can adjust this based on actual loading needs)
  const loadingTime = 1200; // 1.2 seconds
  
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }
  }, loadingTime);
}
