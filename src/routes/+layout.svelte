<script lang="ts">
	import '../app.css';
	import VideoBackground from '$lib/components/VideoBackground.svelte';
	import ThemeController from '$lib/components/ThemeController.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	

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
</script>

<VideoBackground videoSrc={currentVideo} />

<nav class="relative z-10 bg-transparent px-4 py-6 text-white">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="font-poppins text-2xl font-bold tracking-tight">John</a>
		<div class="flex items-center space-x-8">
			<a href="/" class="font-inter text-lg transition-colors hover:text-gray-300">Home</a>
			<a href="/projects" class="font-inter text-lg transition-colors hover:text-gray-300"
				>Projects</a
			>
			<a href="/about" class="font-inter text-lg transition-colors hover:text-gray-300">About</a>
			<a href="/contact" class="font-inter text-lg transition-colors hover:text-gray-300">Contact</a
			>
			<ThemeController />
		</div>
	</div>
</nav>

<main class="relative z-10 container mx-auto px-4 py-8">
	{@render children()}
</main>

<footer class="relative z-10 mt-8 {$page.url.pathname === '/contact' ? 'text-black' : 'bg-black/80 text-white backdrop-blur-sm'} p-4">
	<div class="container mx-auto text-center">
		<p>&copy; {new Date().getFullYear()} John Andersson. All rights reserved.</p>
	</div>
</footer>
