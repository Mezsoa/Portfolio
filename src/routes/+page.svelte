<script>
	import LineDivider from '$lib/components/LineDivider.svelte';

	// personlig information om mig.
	const name = 'John Gunnarsson';
</script>

<section
	class="flex min-h-screen flex-col items-center justify-start space-y-4 px-2 text-center sm:space-y-6 sm:px-4"
>
	<div class="hero bg-transparent">
		<div class="hero-content flex-col gap-8 lg:flex-row lg:gap-16">
			<img
				src="/images/sideprofile.webp"
				class="h-48 w-48 rounded-full border-2 border-white/20 object-cover object-bottom shadow-2xl sm:h-64 sm:w-64 lg:h-80 lg:w-80"
				alt="John Gunnarsson"
			/>
			<div class="max-w-md lg:max-w-none">
				<h1
					class="font-poppins mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-transparent drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
				>
					{name}
				</h1>
				<p class="py-4 text-sm leading-relaxed sm:py-6 sm:text-base">
					John here — fullstack dev by day, bug hunter by night.
					<br class="hidden sm:block" />
					I turn ideas into slick, functional web apps with clean code and a focus on what matters.
					<br class="hidden sm:block" />
					<br class="hidden sm:block" />
					Let's make something great. Or at least something that doesn't break on launch.
				</p>
				<p class="font-poppins mt-2 mb-8 px-2 text-xs sm:mt-4 sm:mb-16 sm:text-sm">
					"Powered by Freyk &mdash; Nordic precision, global impact"
				</p>
				<div class="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
					<a href="/projects" class="btn btn-neutral-content w-full sm:w-auto"
						>Check out my work →</a
					>
					<a href="/contact" class="btn btn-neutral-content w-full sm:w-auto">Let's talk →</a>
				</div>
			</div>
		</div>
	</div>
	<LineDivider />
</section>

<section class="bg-base-100 py-12 sm:py-16 lg:py-24">
	<div class="container mx-auto px-2 sm:px-4">
		<div class="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
			<div
				class="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105"
			>
				<div class="relative">
					<img
						src="https://image.thum.io/get/https://snrgystudios.com"
						alt="SnrgyStudios.com homepage"
						class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-100 sm:h-56 lg:h-64"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"
					></div>
					<span
						class="bg-primary/80 text-primary-content absolute top-3 left-3 rounded-full px-2 py-1 text-xs font-semibold shadow-lg sm:top-4 sm:left-4 sm:px-3"
						>Web Project</span
					>
				</div>
				<div class="p-4 sm:p-6 lg:p-8">
					<h3 class="text-base-content mb-2 text-xl font-bold drop-shadow sm:text-2xl">
						SnrgyStudios.com
					</h3>
					<p class="text-base-content/80 mb-4 text-sm leading-relaxed sm:text-base">
						Built the company's website from scratch, collaborating closely with designers Donnie
						Mastromonaco and Hannes Lövbacka.
					</p>
					<a
						href="https://snrgystudios.com"
						target="_blank"
						rel="noopener noreferrer"
						class="bg-primary text-primary-content hover:bg-primary-focus inline-block rounded-lg px-4 py-2 text-sm font-semibold shadow-md transition-colors hover:scale-105 sm:px-5 sm:text-base"
					>
						Visit Website →
					</a>
				</div>
			</div>
			<div
				class="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105"
			>
				<div class="relative">
					<img
						src="https://image.thum.io/get/https://soldr.pro"
						alt="Soldr.pro homepage"
						class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-100 sm:h-56 lg:h-64"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"
					></div>
					<span
						class="bg-primary/80 text-primary-content absolute top-3 left-3 rounded-full px-2 py-1 text-xs font-semibold shadow-lg sm:top-4 sm:left-4 sm:px-3"
						>Web Project</span
					>
				</div>
				<div class="p-4 sm:p-6 lg:p-8">
					<h3 class="text-base-content mb-2 text-xl font-bold drop-shadow sm:text-2xl">
						Soldr.pro
					</h3>
					<p class="text-base-content/80 mb-4 text-sm leading-relaxed sm:text-base">
						Supported maintenance and development of the landing page before and during the
						Kickstarter launch. Initiated the e-commerce site before handing off to the main
						developer.
					</p>
					<a
						href="https://soldr.pro"
						target="_blank"
						rel="noopener noreferrer"
						class="bg-primary text-primary-content hover:bg-primary-focus inline-block rounded-lg px-4 py-2 text-sm font-semibold shadow-md transition-colors hover:scale-105 sm:px-5 sm:text-base"
					>
						Visit Website →
					</a>
				</div>
			</div>
			<div
				class="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105"
			>
				<div class="relative">
					<img
						src="/project/crewmate.webp"
						alt="Crewmate.se homepage"
						class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-100 sm:h-56 lg:h-64"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"
					></div>
					<span
						class="bg-primary/80 text-primary-content absolute top-3 left-3 rounded-full px-2 py-1 text-xs font-semibold shadow-lg sm:top-4 sm:left-4 sm:px-3"
						>Web Project</span
					>
				</div>
				<div class="p-4 sm:p-6 lg:p-8">
					<h3 class="text-base-content mb-2 text-xl font-bold drop-shadow sm:text-2xl">
						Crewmate.se
					</h3>
					<p class="text-base-content/80 mb-4 text-sm leading-relaxed sm:text-base">
						Built a modern web application for a company that provides crew management and
						scheduling specifically for the expo & event industry. Features include user
						authentication, real-time updates, real-time chat, fully functional booking system, and
						responsive design for mobile and desktop use.
					</p>
					<a
						href="https://crewmate.se"
						target="_blank"
						rel="noopener noreferrer"
						class="bg-primary text-primary-content hover:bg-primary-focus inline-block rounded-lg px-4 py-2 text-sm font-semibold shadow-md transition-colors hover:scale-105 sm:px-5 sm:text-base"
					>
						Visit Website →
					</a>
				</div>
			</div>

			<!-- Noora Design A/B Testing -->
			<div
				class="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105"
			>
				<div class="relative">
					<img
						src="https://image.thum.io/get/https://www.noora.design"
						alt="Noora.design homepage"
						class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-100 sm:h-56 lg:h-64"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"
					></div>
					<span
						class="bg-secondary/80 text-secondary-content absolute top-3 left-3 rounded-full px-2 py-1 text-xs font-semibold shadow-lg sm:top-4 sm:left-4 sm:px-3"
						>A/B Testing</span
					>
				</div>
				<div class="p-4 sm:p-6 lg:p-8">
					<h3 class="text-base-content mb-2 text-xl font-bold drop-shadow sm:text-2xl">
						Noora Design
					</h3>
					<p class="text-base-content/80 mb-4 text-sm leading-relaxed sm:text-base">
						Created two landing pages for A/B testing of Noora's wall-mounted lamp. Both pages were
						designed to optimize conversion rates and user experience.
					</p>
					<div class="flex flex-wrap gap-2">
						<a
							href="https://www.noora.design"
							target="_blank"
							rel="noopener noreferrer"
							class="bg-secondary text-secondary-content hover:bg-secondary-focus inline-block rounded-lg px-3 py-2 text-xs font-semibold shadow-md transition-colors hover:scale-105 sm:text-sm"
						>
							Version A →
						</a>
						<a
							href="https://nooradesign.se"
							target="_blank"
							rel="noopener noreferrer"
							class="bg-accent text-accent-content hover:bg-accent-focus inline-block rounded-lg px-3 py-2 text-xs font-semibold shadow-md transition-colors hover:scale-105 sm:text-sm"
						>
							Version B →
						</a>
					</div>
				</div>
			</div>

			<!-- Glorb.me E-commerce -->
			<div
				class="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105"
			>
				<div class="relative">
					<img
						src="https://image.thum.io/get/https://www.glorb.me"
						alt="Glorb.me e-commerce homepage"
						class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-100 sm:h-56 lg:h-64"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"
					></div>
					<span
						class="bg-accent/80 text-accent-content absolute top-3 left-3 rounded-full px-2 py-1 text-xs font-semibold shadow-lg sm:top-4 sm:left-4 sm:px-3"
						>E-commerce</span
					>
				</div>
				<div class="p-4 sm:p-6 lg:p-8">
					<h3 class="text-base-content mb-2 text-xl font-bold drop-shadow sm:text-2xl">Glorb.me</h3>
					<p class="text-base-content/80 mb-4 text-sm leading-relaxed sm:text-base">
						Acquired and maintained this e-commerce platform, implementing various updates and
						improvements over time to enhance user experience and functionality.
					</p>
					<a
						href="https://www.glorb.me"
						target="_blank"
						rel="noopener noreferrer"
						class="bg-accent text-accent-content hover:bg-accent-focus inline-block rounded-lg px-4 py-2 text-sm font-semibold shadow-md transition-colors hover:scale-105 sm:px-5 sm:text-base"
					>
						Visit Store →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Certificate & Reviews Section -->
<section class="bg-transparent py-12 sm:py-16 lg:py-24">
	<div class="container mx-auto px-2 sm:px-4">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
			<!-- Certificate Section -->
			<div class="group relative">
				<div class="relative overflow-hidden bg-transparent shadow-2xl">
					<!-- PDF Preview -->
					<div class="w-full overflow-hidden" style="height: 1020px; background: transparent;">
						<iframe
							src="/certificate/CertificateOfCompletion_JohnGunnarsson.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit"
							class="h-full w-full border-0 bg-transparent"
							title="John Gunnarsson Certificate"
						></iframe>
					</div>

					<!-- Overlay with download button -->
					<div
						class="absolute inset-0 flex items-start justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						<a
							href="/certificate/CertificateOfCompletion_JohnGunnarsson.pdf"
							download="John_Gunnarsson_Certificate.pdf"
							class="btn btn-primary btn-sm m-4 bg-transparent shadow-xl transition-transform hover:scale-105"
						>
							<svg class="mr-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								></path>
							</svg>
							Download Certificate
						</a>
					</div>
				</div>
				<div class="mb-12 text-center">
					<!-- Certificate Info -->
					<div class="mt-6 text-center">
						<h3 class="mb-2 text-xl font-semibold">Certificate of Completion</h3>
						<div class="text-base-content/60 flex flex-wrap justify-center gap-4 text-sm">
							<span class="flex items-center gap-1">
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									></path>
								</svg>
								Verified Certificate
							</span>
							<span class="flex items-center gap-1">
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									></path>
								</svg>
								Completion Date
							</span>
						</div>
						<p class="text-base-content/70 mb-1">
							John Gunnarsson has successfully completed the course requirements and demonstrated
							proficiency in the subject matter.
						</p>
					</div>
				</div>
			</div>

			<!-- Premium Auto-Scroll Reviews Carousel -->
			<div class="flex h-full min-h-[500px] flex-col items-center justify-start">
				<div class="mb-8 text-center">
					<h3 class="text-2xl font-bold tracking-tight text-white mb-4">
						Client Reviews
					</h3>
					<div class="h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-4"></div>
					<p class="text-white/70 text-sm max-w-sm mx-auto">
						Trusted by designers, entrepreneurs, and creative professionals
					</p>
				</div>
				
				<div class="relative w-full max-w-md mt-4">
					<!-- Glassmorphism container -->
					<div class="relative h-[750px] w-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
						<!-- Gradient overlays -->
						<div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none z-10"></div>
						
						<!-- Auto-scrolling content -->
						<div class="reviews-container h-full w-full overflow-hidden">
							<div class="reviews-track animate-scroll-up">
								<!-- Review Item 1 -->
								<div class="review-item flex min-h-[200px] w-full flex-col items-center justify-center p-6">
									<div class="flex w-full flex-col items-center gap-4">
										<div class="avatar">
											<div class="flex h-16 w-16 items-center justify-center rounded-full ring-2 ring-white/20 shadow-lg">
												<img
													src="/Collabs/Donnie.webp"
													alt="Donnie Mastromonaco"
													class="h-full w-full rounded-full object-cover"
												/>
											</div>
										</div>
										<blockquote class="text-center text-sm font-medium italic leading-relaxed text-white/90 max-w-sm">
											"John is incredibly reliable and delivers exactly what you need. His attention to detail and clean code made our collaboration seamless."
										</blockquote>
										<div class="flex flex-col items-center gap-2">
											<span class="text-white font-semibold text-sm">Donnie Mastromonaco</span>
											<span class="text-white/60 text-xs">Designer, SnrgyStudios</span>
											<div class="flex gap-1">
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
											</div>
										</div>
									</div>
								</div>

								<!-- Review Item 2 -->
								<div class="review-item flex min-h-[200px] w-full flex-col items-center justify-center p-6">
									<div class="flex w-full flex-col items-center gap-4">
										<div class="avatar">
											<div class="flex h-16 w-16 items-center justify-center rounded-full ring-2 ring-white/20 shadow-lg">
												<img
													src="/Collabs/Hannes.webp"
													alt="Hannes Lövbacka"
													class="h-full w-full rounded-full object-cover"
												/>
											</div>
										</div>
										<blockquote class="text-center text-sm font-medium italic leading-relaxed text-white/90 max-w-sm">
											"Working with John was a pleasure. He understands design intent and translates it perfectly into functional code."
										</blockquote>
										<div class="flex flex-col items-center gap-2">
											<span class="text-white font-semibold text-sm">Hannes Lövbacka</span>
											<span class="text-white/60 text-xs">Designer, SnrgyStudios</span>
											<div class="flex gap-1">
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
											</div>
										</div>
									</div>
								</div>

								<!-- Review Item 3 -->
								<div class="review-item flex min-h-[200px] w-full flex-col items-center justify-center p-6">
									<div class="flex w-full flex-col items-center gap-4">
										<div class="avatar">
											<div class="flex h-16 w-16 items-center justify-center rounded-full ring-2 ring-white/20 shadow-lg">
												<img
													src="/Collabs/Noora.webp"
													alt="Noora Team"
													class="h-full w-full rounded-full object-cover"
												/>
											</div>
										</div>
										<blockquote class="text-center text-sm font-medium italic leading-relaxed text-white/90 max-w-sm">
											"John helped us set up A/B testing for our product launch. He was patient with our questions and delivered exactly what we needed."
										</blockquote>
										<div class="flex flex-col items-center gap-2">
											<span class="text-white font-semibold text-sm">Noora Team</span>
											<span class="text-white/60 text-xs">Product Launch</span>
											<div class="flex gap-1">
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
											</div>
										</div>
									</div>
								</div>

								<!-- Review Item 4 -->
								<div class="review-item flex min-h-[200px] w-full flex-col items-center justify-center p-6">
									<div class="flex w-full flex-col items-center gap-4">
										<div class="avatar">
											<div class="flex h-16 w-16 items-center justify-center rounded-full ring-2 ring-white/20 shadow-lg">
												<img
													src="/Collabs/crewmate1.webp"
													alt="Crewmate.se Client"
													class="h-full w-full rounded-full object-cover"
												/>
											</div>
										</div>
										<blockquote class="text-center text-sm font-medium italic leading-relaxed text-white/90 max-w-sm">
											"John built our crew management system and it's working well for us. He understood my needs and delivered a solid solution."
										</blockquote>
										<div class="flex flex-col items-center gap-2">
											<span class="text-white font-semibold text-sm">Crewmate.se Client</span>
											<span class="text-white/60 text-xs">Crew Management</span>
											<div class="flex gap-1">
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
											</div>
										</div>
									</div>
								</div>

								<!-- Review Item 5 -->
								<div class="review-item flex min-h-[200px] w-full flex-col items-center justify-center p-6">
									<div class="flex w-full flex-col items-center gap-4">
										<div class="avatar">
											<div class="flex h-16 w-16 items-center justify-center rounded-full ring-2 ring-white/20 shadow-lg">
												<img
													src="/Collabs/Glorb.webp"
													alt="Glorb.me Owner"
													class="h-full w-full rounded-full object-cover"
												/>
											</div>
										</div>
										<blockquote class="text-center text-sm font-medium italic leading-relaxed text-white/90 max-w-sm">
											"John has been helping us maintain our e-commerce site. He's reliable and gets things done when we need updates."
										</blockquote>
										<div class="flex flex-col items-center gap-2">
											<span class="text-white font-semibold text-sm">Glorb.me Owner</span>
											<span class="text-white/60 text-xs">E-commerce</span>
											<div class="flex gap-1">
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
												<svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
	
	:global(html) {
		font-family: 'Poppins', sans-serif;
	}

	/* Auto-scroll animation for reviews */
	@keyframes scroll-up {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-1000px);
		}
	}

	.animate-scroll-up {
		animation: scroll-up 40s linear infinite;
	}

	.reviews-container:hover .animate-scroll-up {
		animation-play-state: paused;
	}

	/* Review item transitions */
	.review-item {
		transition: all 0.3s ease;
	}

	.review-item:hover {
		transform: translateY(-4px);
	}
</style>