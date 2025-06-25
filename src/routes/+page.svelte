<script>
	import LineDivider from '$lib/components/LineDivider.svelte';

	// personlig information om mig.
	const name = 'John Gunnarsson';
	const title = 'Freelance Developer';
	const description = 'I create beautiful and functional web applications';
</script>

<section class="flex flex-col items-center justify-start min-h-screen space-y-4 px-4 text-center sm:space-y-6">
	<div class="hero bg-transparent">
		<div class="hero-content flex-col lg:flex-row gap-16">
		  <img
			src="/images/IMG_5151-removebg-preview.png"
			class="max-w-sm rounded-lg shadow-2xl"
			alt="John Gunnarsson"
		  />
		  <div>
			<h1 class="text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl font-poppins tracking-tight leading-tight mb-4">
				{name}
			</h1>
			<p class="py-6">
				Hey, I'm John. I build fullstack web apps that just work — no fuss, no fluff.
				<br />
				I care about clean code, smart solutions, and making your ideas come to life.
				<br />
				<br />
				If you want someone who's easy to work with and gets the job done, you're in the right place.
			</p>
			<p class="text-sm mt-4 font-poppins mb-16">"Powered by Freyk — Nordic precision, global impact"</p>
			<a href="/projects" class="btn btn-neutral-content mr-16">Check out my work →</a>
			<a href="/contact" class="btn btn-neutral-content">Let's talk →</a>
		  </div>
		</div>
	  </div>
	<LineDivider />
</section>

<section class="py-24 bg-base-100">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
			<div class="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105">
				<div class="relative">
					<img
						src="https://image.thum.io/get/https://snrgystudios.com"
						alt="SnrgyStudios.com homepage"
						class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
					<span class="absolute top-4 left-4 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-primary-content shadow-lg">Web Project</span>
				</div>
				<div class="p-8">
					<h3 class="mb-2 text-2xl font-bold text-base-content drop-shadow">SnrgyStudios.com</h3>
					<p class="mb-4 text-base-content/80">
						Built the company’s website from scratch, collaborating closely with designers Donnie Mastromonaco and Hannes Lövbacka.
					</p>
					<a
						href="https://snrgystudios.com"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block rounded-lg bg-primary px-5 py-2 text-primary-content font-semibold shadow-md transition-colors hover:bg-primary-focus hover:scale-105"
					>
						Visit Website →
					</a>
				</div>
			</div>
			<div class="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105">
				<div class="relative">
					<img
						src="https://image.thum.io/get/https://soldr.pro"
						alt="Soldr.pro homepage"
						class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
					<span class="absolute top-4 left-4 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-primary-content shadow-lg">Web Project</span>
				</div>
				<div class="p-8">
					<h3 class="mb-2 text-2xl font-bold text-base-content drop-shadow">Soldr.pro</h3>
					<p class="mb-4 text-base-content/80">
						Supported maintenance and development of the landing page before and during the Kickstarter launch. Initiated the e-commerce site before handing off to the main developer.	
					</p>
					<a
						href="https://soldr.pro"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block rounded-lg bg-primary px-5 py-2 text-primary-content font-semibold shadow-md transition-colors hover:bg-primary-focus hover:scale-105"
					>
						Visit Website →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
