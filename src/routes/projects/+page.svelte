<script lang="ts">
	import { fade } from 'svelte/transition';
	import LineDividerCarousel from '$lib/components/LineDividerCarousel.svelte';
	let projects = [
		{
			name: 'SnrgyStudios.com',
			description:
				"Built the company's website from scratch, collaborating closely with designers Donnie Mastromonaco and Hannes Lövbacka.",
			image: '/phone/snrgy-phone.png'
		}
	];

	let currentProject = $state(projects[0]);
</script>

<main>
<section
	class="mx-auto flex h-[100vh] min-h-screen w-full flex-col items-center justify-center gap-42"
>
	<div class="carousel h-full w-full bg-black/50 ">
		<div
			id="slide1"
			class="carousel-item relative flex w-full flex-row items-center justify-center"
		>
			<div class="flex flex-row items-center justify-between gap-42">
				<div class="mockup-phone">
					<div class="mockup-phone-camera bg-white/10 shadow-2xl"></div>
					<div class="mockup-phone-display p-0 m-0">
						<iframe
							src="https://snrgystudios.com"
							title="SnrgyStudios Live Mobile Preview"
							class="h-full w-full border-0 bg-white rounded-lg"
							loading="lazy"
							scrolling="yes"
						></iframe>
					</div>
				</div>

				<div class="flex flex-col items-center justify-center">
					<div class="flex max-w-2xl flex-col items-start justify-start text-left">
						<div class="flex flex-col items-center justify-center text-center max-w-2xl">
							<h1
								class="mt-8 mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl font-extrabold tracking-tight"
							>
								SnrgyStudios.com
							</h1>

							<div class="mb-8 space-y-2">
								<p class="text-lg font-medium text-white/90">The guy who turned dreams into pixels</p>
								<div class="flex flex-wrap justify-center gap-2 text-sm text-white/70">
									<span class="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">SvelteKit</span>
									<span class="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Tailwind CSS</span>
									<span class="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">GitHub</span>
									<span class="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Figma</span>
								</div>
								<p class="text-sm text-white/60 italic">Donnie & Hannes crafted the vision, I brought it to life</p>
							</div>
							
							<div class="space-y-8 text-left">
								<div>
									<h2 class="mb-4 text-xl font-bold text-white/90 flex items-center gap-2">
										<span class="w-2 h-2 bg-blue-400 rounded-full"></span>
										The Story
									</h2>
									<p class="text-base leading-relaxed text-white/80">
										Picture this: a creative studio with wild ideas and stunning designs, but they
										needed someone to make it all work on the web. That's where I came in –
										turning their beautiful Figma mockups into a living, breathing website that
										actually does what it's supposed to do.
									</p>
								</div>

								<div>
									<h2 class="mb-4 text-xl font-bold text-white/90 flex items-center gap-2">
										<span class="w-2 h-2 bg-green-400 rounded-full"></span>
										What went down
									</h2>
									<ul class="space-y-2 text-sm text-white/80">
										<li class="flex items-start gap-2">
											<span class="text-green-400 mt-1">•</span>
											<span>Pixel-perfect code that would make designers weep tears of joy</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-green-400 mt-1">•</span>
											<span>Built a lightning-fast SvelteKit site that just works</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-green-400 mt-1">•</span>
											<span>Added smooth animations that make users go "ooh, nice"</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-green-400 mt-1">•</span>
											<span>Daily design sync sessions (aka "is this shade of blue right?")</span>
										</li>
									</ul>
								</div>

								<div>
									<h2 class="mb-4 text-xl font-bold text-white/90 flex items-center gap-2">
										<span class="w-2 h-2 bg-purple-400 rounded-full"></span>
										Plot twist learnings
									</h2>
									<ul class="space-y-2 text-sm text-white/80">
										<li class="flex items-start gap-2">
											<span class="text-purple-400 mt-1">•</span>
											<span>Creative minds + technical execution = pure magic</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-purple-400 mt-1">•</span>
											<span>Sometimes "just make it pop" actually means something specific</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-purple-400 mt-1">•</span>
											<span>Good communication beats perfect code every single time</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
				<a href="#slide4" class="btn btn-circle">❮</a>
				<a href="#slide2" class="btn btn-circle">❯</a>
			</div>
		</div>
		<!-- SLIDE 2 -->
		<div
			id="slide2"
			class="carousel-item relative flex w-full flex-row items-center justify-center"
		>
			<div class="flex flex-row items-center justify-between gap-42">
				<div class="mockup-phone">
					<div class="mockup-phone-camera bg-white/10 shadow-2xl"></div>
					<div class="mockup-phone-display p-0 m-0">
						<iframe
							src="https://soldr.pro"
							title="Soldr.pro Live Mobile Preview"
							class="h-full w-full border-0 bg-white rounded-lg"
							loading="lazy"
							scrolling="yes"
						></iframe>
					</div>
				</div>

				<div class="flex flex-col items-center justify-center">
					<div class="flex max-w-2xl flex-col items-start justify-start text-left">
						<div class="flex flex-col items-center justify-center text-center max-w-2xl">
							<h1
								class="mt-8 mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl font-extrabold tracking-tight"
							>
								Soldr.pro
							</h1>

							<div class="mb-8 space-y-2">
								<p class="text-lg font-medium text-white/90">Launch Support & E‑commerce Foundations</p>
								<div class="flex flex-wrap justify-center gap-2 text-sm text-white/70">
									<span class="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">HTML</span>
									<span class="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">CSS</span>
									<span class="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">GitHub</span>
									<span class="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Shopify</span>
								</div>
								<p class="text-sm text-white/60 italic">At SNRGY Studios, innovation doesn't just glow — it solders</p>
							</div>
							
							<div class="space-y-8 text-left">
								<div>
									<h2 class="mb-4 text-xl font-bold text-white/90 flex items-center gap-2">
										<span class="w-2 h-2 bg-blue-400 rounded-full"></span>
										The Mission
									</h2>
									<p class="text-base leading-relaxed text-white/80">
										As part of the internal dev team, I supported the early stages of Soldr.pro, a
										sleek, open-source soldering kit built for creators, tinkerers, and field
										engineers. From pre-Kickstarter landing page improvements to kickstarting the
										e-commerce foundation, I helped shape the digital launchpad for this portable
										piece of hardware.
									</p>
								</div>

								<div>
									<h2 class="mb-4 text-xl font-bold text-white/90 flex items-center gap-2">
										<span class="w-2 h-2 bg-green-400 rounded-full"></span>
										What happened
									</h2>
									<ul class="space-y-2 text-sm text-white/80">
										<li class="flex items-start gap-2">
											<span class="text-green-400 mt-1">•</span>
											<span>Maintained and optimized the site during the live Kickstarter campaign</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-green-400 mt-1">•</span>
											<span>Laid down the first structural version of their e‑commerce site</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-green-400 mt-1">•</span>
											<span>Worked side-by-side with the design team on improvements</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-green-400 mt-1">•</span>
											<span>Handed off to their lead fullstack dev for the next phase</span>
										</li>
									</ul>
								</div>

								<div>
									<h2 class="mb-4 text-xl font-bold text-white/90 flex items-center gap-2">
										<span class="w-2 h-2 bg-purple-400 rounded-full"></span>
										Secret ingredients
									</h2>
									<ul class="space-y-2 text-sm text-white/80">
										<li class="flex items-start gap-2">
											<span class="text-purple-400 mt-1">•</span>
											<span>HTML, CSS, GitHub, Shopify</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-purple-400 mt-1">•</span>
											<span>Curiosity, less is more mindset and a lot of coffee</span>
										</li>
										<li class="flex items-start gap-2">
											<span class="text-purple-400 mt-1">•</span>
											<span>Real-time campaign support under pressure</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
				<a href="#slide1" class="btn btn-circle">❮</a>
				<a href="#slide1" class="btn btn-circle">❯</a>
			</div>
			</div>
		</div>
	</section>

  <article class="flex flex-col items-center justify-center w-full h-screen gap-10">
    <div class="flex flex-col items-center ">
      <h1 class="text-2xl font-bold mb-4">Tech Stack</h1>
    </div>
    <LineDividerCarousel />


  </article>
  
</main>
