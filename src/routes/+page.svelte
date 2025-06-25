<script>
	// You can add your personal information here
	const name = 'John Andersson';
	const title = 'Freelance Developer';
	const description = 'I create beautiful and functional web applications';
</script>

<section class="flex min-h-[70vh] flex-col items-center justify-center space-y-6 text-center">
	<img
		src="/images/IMG_5151-removebg-preview.png"
		alt="Portrait"
		class="mb-4 h-40 w-40 rounded-full border-4 border-white/30 bg-white/10 object-cover shadow-xl"
	/>
	<div class="space-y-4 text-white">
		<h1 class="text-5xl font-bold">{name}</h1>
		<h2 class="text-2xl text-gray-200">{title}</h2>
		<p class="mx-auto max-w-2xl text-xl text-gray-200">{description}</p>
		<div class="mt-8">
			<a
				href="/contact"
				class="rounded-lg bg-[#1b6f65] px-6 py-3 text-white transition-colors hover:bg-[#720000]"
			>
				Get in Touch
			</a>
		</div>
	</div>
</section>

<section class="py-16">
	<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
		<div class="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105">
			<div class="relative">
				<img
					src="https://image.thum.io/get/https://snrgystudios.com"
					alt="SnrgyStudios.com homepage"
					class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
				<span class="absolute top-4 left-4 rounded-full bg-[#1b6f65]/80 px-3 py-1 text-xs font-semibold text-white shadow-lg">Web Project</span>
			</div>
			<div class="p-8">
				<h3 class="mb-2 text-2xl font-bold text-white drop-shadow">SnrgyStudios.com</h3>
				<p class="mb-4 text-gray-200">
					During my internship at SNRGY Studios, I contributed to their website development. SNRGY
					Studios is a dynamic team of engineers, designers, and entrepreneurs dedicated to creating
					innovative luminous experiences. Their mission is to illuminate lives through purposeful
					design and cutting-edge technology.
				</p>
				<a
					href="https://snrgystudios.com"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block rounded-lg bg-[#1b6f65] px-5 py-2 text-white font-semibold shadow-md transition-colors hover:bg-[#720000] hover:scale-105"
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
				<span class="absolute top-4 left-4 rounded-full bg-[#1b6f65]/80 px-3 py-1 text-xs font-semibold text-white shadow-lg">Web Project</span>
			</div>
			<div class="p-8">
				<h3 class="mb-2 text-2xl font-bold text-white drop-shadow">Soldr.pro</h3>
				<p class="mb-4 text-gray-200">
					During my internship at SNRGY Studios, I contributed to their website development. Soldr.pro
					is a mobile easy to use open source soldering kit with all the tools that you would need for
					the job.	
				</p>
				<a
					href="https://soldr.pro"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block rounded-lg bg-[#1b6f65] px-5 py-2 text-white font-semibold shadow-md transition-colors hover:bg-[#720000] hover:scale-105"
				>
					Visit Website →
				</a>
			</div>
		</div>
	</div>
</section>
