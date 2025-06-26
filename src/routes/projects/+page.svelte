<script>    
    import { fade } from 'svelte/transition';

    let projects = [
        {
            name: 'SnrgyStudios.com',
            description: 'Built the company\'s website from scratch, collaborating closely with designers Donnie Mastromonaco and Hannes Lövbacka.',
            image: '/phone/snrgy-phone.png'
        },
    ];

    let currentProject = $state(projects[0]);
    let currentProjectIndex = $state(0);


    function nextProject() {
        currentProject = projects[currentProjectIndex + 1];
    }

    function prevProject() {
        currentProject = projects[currentProjectIndex - 1];
    }
</script>



<section class="flex flex-col items-center justify-center min-h-screen h-[150vh] w-full gap-42 mx-auto ">
<div class="carousel w-full h-full bg-black/50">
  <div id="slide1" class="carousel-item relative w-full flex flex-row items-center justify-center">
    
    <div class="flex flex-row items-center justify-between gap-42">

      <div class="mockup-phone">
          <div class="mockup-phone-camera bg-white/10 shadow-2xl"></div>
          <div class="mockup-phone-display text-white grid place-content-center">
              <div class="flex flex-col items-center justify-center">
                  <img src={currentProject.image} alt={currentProject.name} class="w-full h-full object-cover" />
              </div>
          </div>
      </div>
  
      
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col items-start justify-start max-w-2xl text-left">
          
          <div class="stack stack-start size-[700px]">
            
            <div class="border-base-content card bg-gradient-to-br from-white/20 via-black/20 to-white/20 backdrop-blur-lg border border-white/30 text-center shadow-2xl">
              <h1 class="text-3xl font-bold mb-4 mt-14 bg-gradient-to-r from-white/80 to-black/80 bg-clip-text">SnrgyStudios.com</h1>
          
          <div class="space-y-1 mb-4 text-sm">
              <p>The guy who turned dreams into pixels</p>
              <p>SvelteKit, Tailwind CSS, GitHub, Figma</p>
              <p>Donnie & Hannes crafted the vision, I brought it to life</p>
          </div>
              <div class="card-body"><div class="mb-4">
                <h2 class="text-lg font-semibold mb-2">The Story:</h2>
                <p class="leading-relaxed text-sm">
                    Picture this: a creative studio with wild ideas and stunning designs, but they needed someone to make it all work on the web. That's where I came in – turning their beautiful Figma mockups into a living, breathing website that actually does what it's supposed to do.
                </p>
            </div>
        
            <div class="mb-4">
                <h2 class="text-lg font-semibold mb-2">What went down:</h2>
                <ul class="space-y-1 list-none text-xs">
                    <li>• Pixel-perfect code that would make designers weep tears of joy</li>
                    <li>• Built a lightning-fast SvelteKit site that just works</li>
                    <li>• Added smooth animations that make users go "ooh, nice"</li>
                    <li>• Daily design sync sessions (aka "is this shade of blue right?")</li>
                </ul>
            </div>
        
            <div>
                <h2 class="text-xl font-semibold mb-3">Plot twist learnings:</h2>
                <ul class="space-y-1 list-none text-sm">
                    <li>• Creative minds + technical execution = pure magic</li>
                    <li>• Sometimes "just make it pop" actually means something specific</li>
                    <li>• Good communication beats perfect code every single time</li>
                </ul>
            </div>
          </div>
            </div>
            <div class="border-base-content card bg-base-100 border text-center">
              <div class="card-body">B</div>
            </div>
            <div class="border-base-content card bg-base-100 border text-center">
              <div class="card-body">C</div>
            </div>
          </div>
          
        </div>
      </div>
  </div>
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" class="btn btn-circle">❮</a>
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div>
  <!-- SLIDE 2 -->
  <div id="slide2" class="carousel-item relative w-full flex flex-row items-center justify-center">
    <div class="flex flex-row items-center justify-between gap-42">

      <div class="mockup-phone">
          <div class="mockup-phone-camera bg-white/10 shadow-2xl"></div>
          <div class="mockup-phone-display text-white grid place-content-center">
              <div class="flex flex-col items-center justify-center">
                  <video src="/videos/soldr-phone-video.webm" class="w-full h-full object-cover" autoplay muted loop></video> 
              </div>
          </div>
      </div>
  
      
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col items-start justify-start max-w-2xl text-left">
          
          <div class="stack stack-start size-[700px]">
            
            <div class="border-base-content card bg-gradient-to-br from-white/20 via-black/20 to-white/20 backdrop-blur-lg border border-white/30 text-center shadow-2xl">
              <h1 class="text-3xl font-bold mb-4 mt-14 bg-gradient-to-r from-white/80 to-black/80 bg-clip-text">Soldr.pro</h1>
          
          <div class="space-y-1 mb-4 text-sm">
              <p>Launch Support & E‑commerce Foundations</p>
              <p>HTML, CSS, GitHub, Shopify</p>
              <p>At SNRGY Studios, innovation doesn't just glow — it solders</p>
          </div>
              <div class="card-body"><div class="mb-4">
                <h2 class="text-lg font-semibold mb-2">The Mission:</h2>
                <p class="leading-relaxed text-sm">
                    As part of the internal dev team, I supported the early stages of Soldr.pro, a sleek, open-source soldering kit built for creators, tinkerers, and field engineers. From pre-Kickstarter landing page improvements to kickstarting the e-commerce foundation, I helped shape the digital launchpad for this portable piece of hardware.
                </p>
            </div>
        
            <div class="mb-4">
                <h2 class="text-lg font-semibold mb-2">What happened:</h2>
                <ul class="space-y-1 list-none text-xs">
                    <li>• Maintained and optimized the site during the live Kickstarter campaign</li>
                    <li>• Laid down the first structural version of their e‑commerce site</li>
                    <li>• Worked side-by-side with the design team on improvements</li>
                    <li>• Handed off to their lead fullstack dev for the next phase</li>
                </ul>
            </div>
        
            <div>
                <h2 class="text-xl font-semibold mb-3">Secret ingredients:</h2>
                <ul class="space-y-1 list-none text-sm">
                    <li>• HTML, CSS, GitHub, Shopify</li>
                    <li>• Curiosity, less is more mindset and a lot of coffee</li>
                    <li>• Real-time campaign support under pressure</li>
                </ul>
            </div>
          </div>
            </div>
            <div class="border-base-content card bg-base-100 border text-center">
              <div class="card-body">B</div>
            </div>
            <div class="border-base-content card bg-base-100 border text-center">
              <div class="card-body">C</div>
            </div>
          </div>
          
        </div>
      </div>
  </div>
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" class="btn btn-circle">❮</a>
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>




<div class="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 p-4">
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      class="rounded-box" />
  </div>
</div>
</section>