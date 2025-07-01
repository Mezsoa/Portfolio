<script lang="ts">
	export let photos = [
		{
			src: '/images/sideprofile.webp',
			alt: 'Portrait',
			caption: "That's me! Always ready for a new adventure on the web"
		},
		{
			src: '/images/Nor_2.webp',
			alt: 'Hiking',
			caption: 'Exploring nature trails and finding peace in the distance.'
		},
		{
			src: '/images/icebath.webp',
			alt: 'Ice bath',
			caption: 'Finding peace and patience in the winter water.'
		},
		{
			src: '/images/familia.webp',
			alt: 'Family',
			caption: 'Keeping balance between work and no work.'
		}
	];

	let currentIndex = 0;
	let isTransitioning = false;

	function next() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentIndex = (currentIndex + 1) % photos.length;
		setTimeout(() => (isTransitioning = false), 600);
	}

	function previous() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentIndex = (currentIndex - 1 + photos.length) % photos.length;
		setTimeout(() => (isTransitioning = false), 600);
	}

	function getCardStyle(index: number, currentIndex: number, isTransitioning: boolean) {
		const diff = (index - currentIndex + photos.length) % photos.length;
		
		if (diff === 0) {
			// Current card - on top
			return {
				zIndex: 20,
				transform: 'translateY(0px) rotate(0deg) scale(1)',
				opacity: 1
			};
		} else if (diff === 1) {
			// Next card - slightly behind and to the right
			return {
				zIndex: 19,
				transform: 'translateY(8px) translateX(8px) rotate(2deg) scale(0.95)',
				opacity: 0.9
			};
		} else if (diff === 2) {
			// Second card - further behind
			return {
				zIndex: 18,
				transform: 'translateY(16px) translateX(16px) rotate(4deg) scale(0.9)',
				opacity: 0.7
			};
		} else {
			// Rest of cards - at the bottom of stack
			return {
				zIndex: 17,
				transform: 'translateY(24px) translateX(24px) rotate(6deg) scale(0.85)',
				opacity: 0.5
			};
		}
	}
</script>

<div class="relative">
	<div class="relative h-[500px] w-full flex items-center justify-center mt-6">
		{#each photos as photo, i}
			{@const style = getCardStyle(i, currentIndex, isTransitioning)}
			<div
				class="absolute h-[500px] w-[400px] transition-all duration-600 ease-out"
				style="z-index: {style.zIndex}; transform: {style.transform}; opacity: {style.opacity};"
			>
				<figure class="h-full w-full">
					<img
						src={photo.src}
						alt={photo.alt}
						class="h-full w-full rounded-2xl object-cover shadow-2xl border-1 border-none"
					/>
				</figure>
			</div>
		{/each}
		
		<!-- Caption for current photo -->
		<div class="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-full">
			<figure>
			<figcaption class="text-center text-sm text-base-content/70">
				{photos[currentIndex].caption}
			</figcaption>
			</figure>
		</div>
	</div>

	<button aria-label="Previous photo"
		on:click={previous}
		class="absolute top-1/2 left-[-20px] -translate-y-1/2 rounded-full bg-base-100/80 p-3 text-base-content backdrop-blur-sm transition-all hover:bg-base-100 shadow-lg border border-base-300 z-30"
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

	<button aria-label="Next photo"
		on:click={next}
		class="absolute top-1/2 right-[-20px] -translate-y-1/2 rounded-full bg-base-100/80 p-3 text-base-content backdrop-blur-sm transition-all hover:bg-base-100 shadow-lg border border-base-300 z-30"
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

	<div class="mt-16 flex justify-center gap-2">
		{#each photos as _, i}
			<button
				aria-label="Go to photo"
				on:click={() => (currentIndex = i)}
				class={`h-3 w-3 rounded-full transition-all border-2 ${i === currentIndex ? 'bg-primary border-primary' : 'bg-base-300 border-base-300 hover:border-primary/50'}`}
			>
			</button>
		{/each}
	</div>
</div>
