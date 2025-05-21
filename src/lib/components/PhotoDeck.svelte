<script lang="js">
	export let photos = [
		{
			src: '/images/Nor_1.webp',
			alt: 'Portrait',
			caption: "That's me! Always ready for a new adventure on the web or outdoors."
		},
		{
			src: '/images/5.jpg',
			alt: 'Hiking',
			caption: 'Exploring nature trails and finding new perspectives.'
		},
		{
			src: '/images/Nor_2.webp',
			alt: 'Fishing',
			caption: 'Finding peace and patience by the water.'
		},
		{
			src: '/images/Nor_4.webp',
			alt: 'Skateboarding',
			caption: 'Keeping the balance between work and play.'
		}
	];

	let currentIndex = 0;
	let isTransitioning = false;

	function next() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentIndex = (currentIndex + 1) % photos.length;
		setTimeout(() => (isTransitioning = false), 500);
	}

	function previous() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentIndex = (currentIndex - 1 + photos.length) % photos.length;
		setTimeout(() => (isTransitioning = false), 500);
	}
</script>

<div class="relative">
	<div class="relative h-[500px] w-full overflow-hidden">
		{#each photos as photo, i}
			<div
				class="absolute h-full w-full transition-all duration-500"
				style="transform: translateX({(i - currentIndex) * 100}%) rotate({(i - currentIndex) *
					15}deg); opacity: {Math.abs(i - currentIndex) < 2 ? 1 : 0};"
			>
				<figure class="h-full w-full">
					<img
						src={photo.src}
						alt={photo.alt}
						class="h-full w-full rounded-2xl object-cover shadow-lg"
					/>
					<figcaption class="mt-4 text-center text-sm text-gray-400">
						{photo.caption}
					</figcaption>
				</figure>
			</div>
		{/each}
	</div>

	<button
		on:click={previous}
		class="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>

	<button
		on:click={next}
		class="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>

	<div class="mt-4 flex justify-center gap-2">
		{#each photos as _, i}
			<button
				on:click={() => (currentIndex = i)}
				class={`h-2 w-2 rounded-full transition-all ${i === currentIndex ? 'bg-white' : 'bg-white/30'}`}
			/>
		{/each}
	</div>
</div>
