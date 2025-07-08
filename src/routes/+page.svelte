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
		<div class="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
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
			<div class="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105">
				<div class="relative">
					<img
						src="https://shot.screenshotapi.net/v3/screenshot?token=273KNVX-HWA4NYD-MQT5CVN-W92CDEC&fresh=true&url=https%3A%2F%2Fcrewmate.se&output=image&file_type=png&wait_for_event=load	"
						alt="Crewmate.se homepage"
						class="h-48 sm:h-56 lg:h-64 w-full object-cover transition-transform duration-300 group-hover:scale-100"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
					<span class="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-primary/80 px-2 py-1 sm:px-3 text-xs font-semibold text-primary-content shadow-lg">Web Project</span>
				</div>
				<div class="p-4 sm:p-6 lg:p-8">
					<h3 class="mb-2 text-xl sm:text-2xl font-bold text-base-content drop-shadow">Crewmate.se</h3>
					<p class="mb-4 text-sm sm:text-base text-base-content/80 leading-relaxed">
						Built a modern web application for crew management and scheduling. Features include user authentication, real-time updates, and responsive design for mobile and desktop use.
					</p>
					<a
						href="https://crewmate.se"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block rounded-lg bg-primary px-4 py-2 sm:px-5 text-sm sm:text-base text-primary-content font-semibold shadow-md transition-colors hover:bg-primary-focus hover:scale-105"
					>
					Visit Website →
					</a>
				</div>
			</div>
			
			<!-- Noora Design A/B Testing -->
			<div class="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105">
				<div class="relative">
					<img
						src="https://shot.screenshotapi.net/v3/screenshot?token=273KNVX-HWA4NYD-MQT5CVN-W92CDEC&fresh=true&url=https%3A%2F%2Fwww.noora.design&output=image&file_type=png&wait_for_event=load"
						alt="Noora.design homepage"
						class="h-48 sm:h-56 lg:h-64 w-full object-cover transition-transform duration-300 group-hover:scale-100"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
					<span class="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-secondary/80 px-2 py-1 sm:px-3 text-xs font-semibold text-secondary-content shadow-lg">A/B Testing</span>
				</div>
				<div class="p-4 sm:p-6 lg:p-8">
					<h3 class="mb-2 text-xl sm:text-2xl font-bold text-base-content drop-shadow">Noora Design</h3>
					<p class="mb-4 text-sm sm:text-base text-base-content/80 leading-relaxed">
						Created two landing pages for A/B testing of Noora's wall-mounted lamp. Both pages were designed to optimize conversion rates and user experience.
					</p>
					<div class="flex flex-wrap gap-2">
						<a
							href="https://www.noora.design"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-block rounded-lg bg-secondary px-3 py-2 text-xs sm:text-sm text-secondary-content font-semibold shadow-md transition-colors hover:bg-secondary-focus hover:scale-105"
						>
							Version A →
						</a>
						<a
							href="https://nooradesign.se"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-block rounded-lg bg-accent px-3 py-2 text-xs sm:text-sm text-accent-content font-semibold shadow-md transition-colors hover:bg-accent-focus hover:scale-105"
						>
							Version B →
						</a>
					</div>
				</div>
			</div>
			
			<!-- Glorb.me E-commerce -->
			<div class="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105">
				<div class="relative">
					<img
						src="https://shot.screenshotapi.net/v3/screenshot?token=273KNVX-HWA4NYD-MQT5CVN-W92CDEC&fresh=true&url=https%3A%2F%2Fwww.glorb.me&output=image&file_type=png&wait_for_event=load"
						alt="Glorb.me e-commerce homepage"
						class="h-48 sm:h-56 lg:h-64 w-full object-cover transition-transform duration-300 group-hover:scale-100"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
					<span class="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-accent/80 px-2 py-1 sm:px-3 text-xs font-semibold text-accent-content shadow-lg">E-commerce</span>
				</div>
				<div class="p-4 sm:p-6 lg:p-8">
					<h3 class="mb-2 text-xl sm:text-2xl font-bold text-base-content drop-shadow">Glorb.me</h3>
					<p class="mb-4 text-sm sm:text-base text-base-content/80 leading-relaxed">
						Acquired and maintained this e-commerce platform, implementing various updates and improvements over time to enhance user experience and functionality.
					</p>
					<a
						href="https://www.glorb.me"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block rounded-lg bg-accent px-4 py-2 sm:px-5 text-sm sm:text-base text-accent-content font-semibold shadow-md transition-colors hover:bg-accent-focus hover:scale-105"
					>
						Visit Store →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Certificate Section -->
<section class="py-12 sm:py-16 lg:py-24 bg-base-200/50">
	<div class="container mx-auto px-2 sm:px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
			<p class="text-lg text-base-content/80 max-w-2xl mx-auto">
				Continuous learning is key to staying ahead in tech. Here's my latest achievement.
			</p>
		</div>
		
		<div class="flex justify-center">
			<div class="group relative max-w-4xl w-full">
				<div class="relative overflow-hidden shadow-2xl">
					<!-- PDF Preview -->
					<div class="w-full overflow-hidden" style="height: 1250px; background: transparent;">
						<iframe
							src="/certificate/CertificateOfCompletion_JohnGunnarsson.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit"
							class="w-full h-full border-0 bg-transparent"
							title="John Gunnarsson Certificate"
						></iframe>
					</div>
					
					<!-- Overlay with download button -->
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end">
						<a
							href="/certificate/CertificateOfCompletion_JohnGunnarsson.pdf"
							download="John_Gunnarsson_Certificate.pdf"
							class="btn btn-primary btn-lg shadow-xl hover:scale-105 transition-transform"
						>
							<svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
							</svg>
							Download Certificate
						</a>
					</div>
				</div>
				
				<!-- Certificate Info -->
				<div class="mt-6 text-center">
					<h3 class="text-xl font-semibold mb-2">Certificate of Completion</h3>
					<p class="text-base-content/70 mb-4">
						John Gunnarsson has successfully completed the course requirements and demonstrated proficiency in the subject matter.
					</p>
					<div class="flex flex-wrap justify-center gap-4 text-sm text-base-content/60">
						<span class="flex items-center gap-1">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							Verified Certificate
						</span>
						<span class="flex items-center gap-1">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
							</svg>
							Completion Date
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
