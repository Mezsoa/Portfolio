<script lang="ts">
	import '../app.css';
	import VideoBackground from '$lib/components/VideoBackground.svelte';
	import ThemeController from '$lib/components/ThemeController.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	// Define video sources for different routes
	const videoMap = {
		'/': '/videos/one.mp4',
		'/about': '/videos/2.mp4',
		'/projects': '/videos/3.mp4',
		'/contact': '/videos/4.mp4'
	};

	// Create a reactive variable for the current video
	let currentVideo = $derived(
		videoMap[$page.url.pathname as keyof typeof videoMap] || videoMap['/']
	);

	// Check if we should show video background (only on home page first section)
	let showVideoBackground = $derived($page.url.pathname === '/');
</script>

{#if showVideoBackground}
	<VideoBackground videoSrc={currentVideo} />
{/if}

<nav class="relative bg-transparent px-2 sm:px-4 py-4 sm:py-6 overflow-visible">
	<div class="container mx-auto max-w-7xl flex items-center justify-between overflow-visible">
		<a href="/" class="font-poppins text-xl sm:text-2xl font-bold tracking-tight">Freyk</a>
		
		<!-- Desktop Navigation -->
		<div class="hidden md:flex items-center space-x-6 lg:space-x-8">
			<a href="/" class="font-inter text-base lg:text-lg transition-colors hover:text-gray-300">Home</a>
			<a href="/projects" class="font-inter text-base lg:text-lg transition-colors hover:text-gray-300">Projects</a>
			<a href="/about" class="font-inter text-base lg:text-lg transition-colors hover:text-gray-300">About</a>
			<a href="/contact" class="font-inter text-base lg:text-lg transition-colors hover:text-gray-300">Contact</a>
			<ThemeController />
		</div>

		<!-- Mobile Navigation -->
		<div class="flex md:hidden items-center space-x-2">
			<ThemeController />
			<div class="drawer drawer-end">
				<input id="mobile-drawer" type="checkbox" class="drawer-toggle" />
				<div class="drawer-content">
					<label for="mobile-drawer" class="btn btn-square btn-ghost btn-sm drawer-button">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</label>
				</div>
				<div class="drawer-side z-50">
					<label for="mobile-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
					<ul class="menu bg-base-200 text-base-content min-h-full w-64 sm:w-80 p-4">
						<li><a href="/" class="text-lg py-3">Home</a></li>
						<li><a href="/projects" class="text-lg py-3">Projects</a></li>
						<li><a href="/about" class="text-lg py-3">About</a></li>
						<li><a href="/contact" class="text-lg py-3">Contact</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Tagline - Responsive -->
	<div class="container mx-auto max-w-7xl mt-2 sm:mt-4">
		<p class="text-xs sm:text-sm text-gray-300 font-normal px-2 sm:px-0">
			Powered by Freyk — <span class="hidden xs:inline"><br class="sm:hidden" /></span>
			<span class="xs:block">Nordic precision, global impact.</span>
		</p>
	</div>
</nav>

<main class="relative z-10">
	{@render children()}
</main>

<Footer />