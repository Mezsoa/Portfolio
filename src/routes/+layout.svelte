<script lang="ts">
	import '../app.css';
	import VideoBackground from '$lib/components/VideoBackground.svelte';
	import ThemeController from '$lib/components/ThemeController.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
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

<nav class="relative z-10 bg-transparent px-4 py-6 text-white">
	<div class="container mx-28 flex items-center justify-between">
		<a href="/" class="font-poppins text-2xl font-bold tracking-tight">Freyk</a>
		
		<!-- Desktop Navigation -->
		<div class="hidden md:flex items-center space-x-8">
			<a href="/" class="font-inter text-lg transition-colors hover:text-gray-300">Home</a>
			<a href="/projects" class="font-inter text-lg transition-colors hover:text-gray-300">Projects</a>
			<a href="/about" class="font-inter text-lg transition-colors hover:text-gray-300">About</a>
			<a href="/contact" class="font-inter text-lg transition-colors hover:text-gray-300">Contact</a>
			
		</div>

		<!-- Mobile Navigation -->
		<div class="flex md:hidden items-center space-x-4">
			<ThemeController />
			<div class="drawer drawer-end">
				<input id="mobile-drawer" type="checkbox" class="drawer-toggle" />
				<div class="drawer-content">
					<label for="mobile-drawer" class="btn btn-square btn-ghost drawer-button">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</label>
				</div>
				<div class="drawer-side">
					<label for="mobile-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
					<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
						<li><a href="/">Home</a></li>
						<li><a href="/projects">Projects</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="/contact">Contact</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<p class="text-sm text-gray-300 font-normal mt-4 ml-28">Code with calm power</p>
</nav>

<div class="absolute z-11 bottom-16 w-34 right-2 top-4 flex flex-row justify-center items-start">
	<ThemeController />
</div>
<main class="relative z-10">
	{@render children()}
</main>

<Footer />