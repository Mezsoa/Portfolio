<script>
	import LineDivider from '$lib/components/LineDivider.svelte';

	// personlig information om mig.
	const name = 'John Gunnarsson';

	
</script>

<section class="flex flex-col items-center justify-start min-h-screen space-y-4 px-2 sm:px-4 text-center sm:space-y-6">
	<div class="hero bg-transparent">
		<div class="hero-content flex-col lg:flex-row gap-8 lg:gap-16">
		  <img
			src="/images/sideprofile.webp"
			class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full shadow-2xl border-2 border-white/20 object-cover  object-bottom"
			alt="John Gunnarsson"
		  />
		  <div class="max-w-md lg:max-w-none">
			<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl font-poppins tracking-tight leading-tight mb-4">
				{name}
			</h1>
			<p class="py-4 sm:py-6 text-sm sm:text-base leading-relaxed">
				Hey, I'm John. I build fullstack web apps that just work — no fuss, no fluff.
				<br class="hidden sm:block" />
				I care about clean code, smart solutions, and making your ideas come to life.
				<br class="hidden sm:block" />
				<br class="hidden sm:block" />
				If you want someone who's easy to work with and gets the job done, you're in the right place.
			</p>
			<p class="text-xs sm:text-sm mt-2 sm:mt-4 font-poppins mb-8 sm:mb-16 px-2">"Powered by Freyk &mdash; Nordic precision, global impact"</p>
			<div class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
				<a href="/projects" class="btn btn-neutral-content w-full sm:w-auto">Check out my work →</a>
				<a href="/contact" class="btn btn-neutral-content w-full sm:w-auto">Let's talk →</a>
			</div>
		  </div>
		</div>
	  </div>
	<LineDivider />
</section>

<section class="py-12 sm:py-16 lg:py-24 bg-base-100">
	<div class="container mx-auto px-2 sm:px-4">
		<div class="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
			<div class="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105">
				<div class="relative">
					<img
						src="https://image.thum.io/get/https://snrgystudios.com"
						alt="SnrgyStudios.com homepage"
						class="h-48 sm:h-56 lg:h-64 w-full object-cover transition-transform duration-300 group-hover:scale-100"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
					<span class="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-primary/80 px-2 py-1 sm:px-3 text-xs font-semibold text-primary-content shadow-lg">Web Project</span>
				</div>
				<div class="p-4 sm:p-6 lg:p-8">
					<h3 class="mb-2 text-xl sm:text-2xl font-bold text-base-content drop-shadow">SnrgyStudios.com</h3>
					<p class="mb-4 text-sm sm:text-base text-base-content/80 leading-relaxed">
						Built the company's website from scratch, collaborating closely with designers Donnie Mastromonaco and Hannes Lövbacka.
					</p>
					<a
						href="https://snrgystudios.com"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block rounded-lg bg-primary px-4 py-2 sm:px-5 text-sm sm:text-base text-primary-content font-semibold shadow-md transition-colors hover:bg-primary-focus hover:scale-105"
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
						class="h-48 sm:h-56 lg:h-64 w-full object-cover transition-transform duration-300 group-hover:scale-100"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
					<span class="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-primary/80 px-2 py-1 sm:px-3 text-xs font-semibold text-primary-content shadow-lg">Web Project</span>
				</div>
				<div class="p-4 sm:p-6 lg:p-8">
					<h3 class="mb-2 text-xl sm:text-2xl font-bold text-base-content drop-shadow">Soldr.pro</h3>
					<p class="mb-4 text-sm sm:text-base text-base-content/80 leading-relaxed">
						Supported maintenance and development of the landing page before and during the Kickstarter launch. Initiated the e-commerce site before handing off to the main developer.	
					</p>
					<a
						href="https://soldr.pro"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block rounded-lg bg-primary px-4 py-2 sm:px-5 text-sm sm:text-base text-primary-content font-semibold shadow-md transition-colors hover:bg-primary-focus hover:scale-105"
					>
					Visit Website →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
