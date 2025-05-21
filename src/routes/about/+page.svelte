<script lang="js">
	import PhotoDeck from '$lib/components/PhotoDeck.svelte';

	/** @type {string[]} */
	const skills = [
		'Web Development',
		'UI/UX Design',
		'Mobile Development',
		'Frontend Development',
		'Backend Development',
		'Database Management',
		'API Development',
		'Responsive Design',
		'Version Control',
		'Testing & Debugging',
		'Performance Optimization',
		'Cloud Services'
		// Add more skills
	];
</script>

<div class="mx-auto max-w-5xl px-4">
	<!-- Hero Section -->
	<div class="mb-16 flex h-full w-full flex-col items-start gap-12 py-8 md:flex-row">
		<div class="w-full md:w-1/2">
			<PhotoDeck />
		</div>
		<div class="flex-1">
			<div class="mb-6 flex-1 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
				<h2 class="mb-6 text-4xl font-bold text-white">So, who am I?</h2>
				<p class="text-lg leading-relaxed text-gray-200">
					Hey! I'm a 29-year-old developer who's passionate about both technology and the great
					outdoors. When I'm not coding, you'll find me exploring nature through hiking trails,
					casting a line while fishing, or cruising around on my skateboard. I believe in staying
					active and balanced—whether that's through training, outdoor adventures, or building cool
					web applications.
				</p>
			</div>
			<div class="flex-1 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
				<p class="text-lg leading-relaxed text-gray-200">
					I love the intersection of creativity and logic that comes with development. It's not just
					about writing code—it's about solving puzzles, creating solutions, and helping businesses
					grow. I'm all about clear communication, honest feedback, and building things that make a
					real difference.
				</p>
			</div>
		</div>
	</div>

	<!-- Journey Section -->
	<section class="mb-16">
		<h2 class="mb-6 text-3xl font-bold text-white">My Journey</h2>
		<div class="rounded-2xl bg-black/40 p-6 backdrop-blur-md">
			<p class="text-lg leading-relaxed text-white/80">
				I've always been drawn to both technology and nature. Growing up, I spent as much time
				outdoors as I did tinkering with computers. This unique combination has shaped how I
				approach development—with both technical precision and creative problem-solving.
				<br /><br />
				My love for the outdoors keeps me grounded and brings fresh perspectives to my work. Whether
				I'm coding or conquering a new hiking trail, I'm always up for a challenge and ready to learn
				something new. I believe in continuous growth, both personally and professionally.
			</p>
		</div>
	</section>

	<!-- Skills Section -->
	<section class="mb-16">
		<h2 class="mb-6 text-3xl font-bold text-white">Skills</h2>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			{#each skills as skill}
				<div
					class="rounded-xl bg-white/10 p-4 text-center text-white backdrop-blur-sm transition-colors hover:bg-white/20"
				>
					{skill}
				</div>
			{/each}
		</div>
	</section>
</div>
