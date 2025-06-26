<script>
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
	class="mx-auto flex h-[150vh] min-h-screen w-full flex-col items-center justify-center gap-42"
>
	<div class="carousel h-full w-full bg-black/50">
		<div
			id="slide1"
			class="carousel-item relative flex w-full flex-row items-center justify-center"
		>
			<div class="flex flex-row items-center justify-between gap-42">
				<div class="mockup-phone">
					<div class="mockup-phone-camera bg-white/10 shadow-2xl"></div>
					<div class="mockup-phone-display grid place-content-center text-white">
						<div class="flex flex-col items-center justify-center">
							<img
								src={currentProject.image}
								alt={currentProject.name}
								class="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>

				<div class="flex flex-col items-center justify-center">
					<div class="flex max-w-2xl flex-col items-start justify-start text-left">
						<div class="stack stack-start size-[700px]">
							<div
								class="border-base-content card border border-white/30 bg-gradient-to-br from-white/20 via-black/20 to-white/20 text-center shadow-2xl backdrop-blur-lg"
							>
								<h1
									class="mt-14 mb-4 bg-gradient-to-r from-white/80 to-black/80 bg-clip-text text-3xl font-bold"
								>
									SnrgyStudios.com
								</h1>

								<div class="mb-4 space-y-1 text-sm">
									<p>The guy who turned dreams into pixels</p>
									<p>SvelteKit, Tailwind CSS, GitHub, Figma</p>
									<p>Donnie & Hannes crafted the vision, I brought it to life</p>
								</div>
								<div class="card-body">
									<div class="mb-4">
										<h2 class="mb-2 text-lg font-semibold">The Story:</h2>
										<p class="text-sm leading-relaxed">
											Picture this: a creative studio with wild ideas and stunning designs, but they
											needed someone to make it all work on the web. That's where I came in –
											turning their beautiful Figma mockups into a living, breathing website that
											actually does what it's supposed to do.
										</p>
									</div>

									<div class="mb-4">
										<h2 class="mb-2 text-lg font-semibold">What went down:</h2>
										<ul class="list-none space-y-1 text-xs">
											<li>• Pixel-perfect code that would make designers weep tears of joy</li>
											<li>• Built a lightning-fast SvelteKit site that just works</li>
											<li>• Added smooth animations that make users go "ooh, nice"</li>
											<li>• Daily design sync sessions (aka "is this shade of blue right?")</li>
										</ul>
									</div>

									<div>
										<h2 class="mb-3 text-xl font-semibold">Plot twist learnings:</h2>
										<ul class="list-none space-y-1 text-sm">
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
					<div class="mockup-phone-display grid place-content-center text-white">
						<div class="flex flex-col items-center justify-center">
							<video
								src="/videos/soldr-phone-video.webm"
								class="h-full w-full object-cover"
								autoplay
								muted
								loop
							></video>
						</div>
					</div>
				</div>

				<div class="flex flex-col items-center justify-center">
					<div class="flex max-w-2xl flex-col items-start justify-start text-left">
						<div class="stack stack-start size-[700px]">
							<div
								class="border-base-content card border border-white/30 bg-gradient-to-br from-white/20 via-black/20 to-white/20 text-center shadow-2xl backdrop-blur-lg"
							>
								<h1
									class="mt-14 mb-4 bg-gradient-to-r from-white/80 to-black/80 bg-clip-text text-3xl font-bold"
								>
									Soldr.pro
								</h1>

								<div class="mb-4 space-y-1 text-sm">
									<p>Launch Support & E‑commerce Foundations</p>
									<p>HTML, CSS, GitHub, Shopify</p>
									<p>At SNRGY Studios, innovation doesn't just glow — it solders</p>
								</div>
								<div class="card-body">
									<div class="mb-4">
										<h2 class="mb-2 text-lg font-semibold">The Mission:</h2>
										<p class="text-sm leading-relaxed">
											As part of the internal dev team, I supported the early stages of Soldr.pro, a
											sleek, open-source soldering kit built for creators, tinkerers, and field
											engineers. From pre-Kickstarter landing page improvements to kickstarting the
											e-commerce foundation, I helped shape the digital launchpad for this portable
											piece of hardware.
										</p>
									</div>

									<div class="mb-4">
										<h2 class="mb-2 text-lg font-semibold">What happened:</h2>
										<ul class="list-none space-y-1 text-xs">
											<li>
												• Maintained and optimized the site during the live Kickstarter campaign
											</li>
											<li>• Laid down the first structural version of their e‑commerce site</li>
											<li>• Worked side-by-side with the design team on improvements</li>
											<li>• Handed off to their lead fullstack dev for the next phase</li>
										</ul>
									</div>

									<div>
										<h2 class="mb-3 text-xl font-semibold">Secret ingredients:</h2>
										<ul class="list-none space-y-1 text-sm">
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
