<script>
	// You can add your personal information here
	const name = 'John Gunnarsson';
	const title = 'Freelance Developer';
	const description = 'I create beautiful and functional web applications';
</script>

<section class="flex min-h-screen flex-col items-center justify-center space-y-4 px-4 text-center sm:space-y-6">
	<img
		src="/images/IMG_5151-removebg-preview.png"
		alt="Portrait"
		class="mb-2 h-32 w-32 rounded-full border-4 border-white/30 bg-white/10 object-cover shadow-xl sm:mb-4 sm:h-40 sm:w-40"
	/>
	<div class="space-y-3 text-white sm:space-y-4">
		<h1 class="text-3xl font-bold sm:text-4xl lg:text-5xl">{name}</h1>
		<h2 class="text-lg text-gray-200 sm:text-xl lg:text-2xl">{title}</h2>
		<p class="mx-auto max-w-2xl text-base text-gray-200 sm:text-lg lg:text-xl">{description}</p>
		<div class="mt-6 sm:mt-8">
			<a
				href="/contact"
				class="rounded-lg bg-[#1b6f65] px-4 py-2 text-sm text-white transition-colors hover:bg-[#720000] sm:px-6 sm:py-3 sm:text-base"
			>
				Get in Touch
			</a>
		</div>
	</div>
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
						During my internship at SNRGY Studios, I contributed to their website development. SNRGY
						Studios is a dynamic team of engineers, designers, and entrepreneurs dedicated to creating
						innovative luminous experiences. Their mission is to illuminate lives through purposeful
						design and cutting-edge technology.
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
						During my internship at SNRGY Studios, I contributed to their website development. Soldr.pro
						is a mobile easy to use open source soldering kit with all the tools that you would need for
						the job.	
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
