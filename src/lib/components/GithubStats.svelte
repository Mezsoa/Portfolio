<script lang="ts">
	import { onMount } from 'svelte';

	let githubStats = {
		repos: 0,
		stars: 0,
		followers: 0,
		following: 0,
		gists: 0
	};

	let loading = true;
	let error = false;

	async function fetchGithubStats() {
		try {
			// Fetch user data
			const userResponse = await fetch('https://api.github.com/users/Mezsoa');
			if (!userResponse.ok) throw new Error('Failed to fetch user data');
			
			const userData = await userResponse.json();
			
			// Fetch repositories to calculate total stars
			const reposResponse = await fetch('https://api.github.com/users/Mezsoa/repos?per_page=100');
			if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
			
			const reposData = await reposResponse.json();
			const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
			
			githubStats = {
				repos: userData.public_repos,
				stars: totalStars,
				followers: userData.followers,
				following: userData.following,
				gists: userData.public_gists
			};
		} catch (err) {
			console.error('Error fetching GitHub stats:', err);
			error = true;
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		fetchGithubStats();
	});
</script>

<div class="stats h-[250px] shadow w-[200px] flex flex-row items-center justify-center">
	<div class="stat">
		<div class="stat-title">GitHub Stats</div>
		{#if loading}
			<div class="stat-value animate-pulse">...</div>
			<div class="stat-desc">Loading...</div>
		{:else if error}
			<div class="stat-value text-error">Error</div>
			<div class="stat-desc">Failed to load</div>
		{:else}
			<div class="stat-value">{githubStats.repos}</div>
			<div class="stat-desc">Repositories</div>
			<div class="stat-value text-lg">{githubStats.stars}</div>
			<div class="stat-desc">Total Stars</div>
		{/if}
	</div>
</div> 