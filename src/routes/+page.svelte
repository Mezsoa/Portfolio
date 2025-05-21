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
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		<div class="rounded-lg bg-white/90 p-6 shadow-lg backdrop-blur-sm">
			<h3 class="mb-2 text-xl font-bold">SnrgyStudios.com</h3>
			<p class="text-gray-600">
				During my internship at SNRGY Studios, I contributed to their website development. SNRGY
				Studios is a dynamic team of engineers, designers, and entrepreneurs dedicated to creating
				innovative luminous experiences. Their mission is to illuminate lives through purposeful
				design and cutting-edge technology.
			</p>
			<div class="mt-4">
				<a
					href="https://snrgystudios.com"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-600 hover:text-blue-800"
				>
					Visit Website →
				</a>
			</div>
		</div>
		<!-- Add more project cards as needed -->
		<div class="rounded-lg bg-white/90 p-6 shadow-lg backdrop-blur-sm">
			<h3 class="mb-2 text-xl font-bold">Soldr.pro</h3>
			<p class="text-gray-600">
				During my internship at SNRGY Studios, I contributed to their website development. Soldr.pro
				is a mobile easy to use open source soldering kit with all the tools that you would need for
				the job.	
			</p>
			<div class="mt-4">
				<a
					href="https://soldr.pro"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-600 hover:text-blue-800"
				>
				<img src="" alt="">
					Visit Website →
				</a>
			</div>
		</div>
		<!-- Add more project cards as needed -->
	</div>
</section>
