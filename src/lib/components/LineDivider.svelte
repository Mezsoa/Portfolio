<script lang="ts">
	import GithubStats from './GithubStats.svelte';
	import WeatherWidget from './WeatherWidget.svelte';
	import LastFmWidget from './LastFmWidget.svelte';

</script>

<div class="flex h-[45vh] w-full items-center justify-evenly">
	<div class="divider divider-horizontal divider-start">
		<GithubStats />
	</div>
	<div class="divider divider-horizontal">
		<WeatherWidget />
	</div>
	<div class="divider divider-horizontal divider-end">
		<LastFmWidget />
	</div>
</div>
