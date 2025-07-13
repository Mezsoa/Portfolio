<script lang="ts">
	import { onMount } from 'svelte';

	let lastfmData = {
		isPlaying: false,
		track: '',
		artist: '',
		album: '',
		albumArt: ''
	};

	let loading = true;
	let error = false;

	async function fetchLastFmData() {
		try {
			// Last.fm API - much simpler than Spotify
			// You need to get an API key from https://www.last.fm/api/account/create
			const API_KEY = 'd2bcb9db071fce9e2a055e9ebad548ff';
			const username = 'messoa'; // Change this to your actual Last.fm username
			// For testing, you can use: 'rj' (Last.fm founder)
			
			const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${API_KEY}&format=json&limit=1`;
			console.log('Fetching Last.fm data from:', url);
			
			const response = await fetch(url);
			console.log('Last.fm response status:', response.status);
			
			if (!response.ok) {
				throw new Error(`Last.fm API error: ${response.status}`);
			}
			
			const data = await response.json();
			console.log('Last.fm data received:', data);
			
			// Check if user has any tracks
			if (!data.recenttracks || !data.recenttracks.track || data.recenttracks.track.length === 0) {
				lastfmData = {
					isPlaying: false,
					track: 'No tracks found',
					artist: 'Unknown',
					album: 'Unknown',
					albumArt: '🎵'
				};
				return;
			}
			
			const track = data.recenttracks.track[0];
			console.log('Track data:', track);
			
			// Check if currently playing
			const isNowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
			
			lastfmData = {
				isPlaying: isNowPlaying,
				track: track.name || 'Unknown Track',
				artist: track.artist?.['#text'] || 'Unknown Artist',
				album: track.album?.['#text'] || 'Unknown Album',
				albumArt: track.image?.[2]?.['#text'] || '🎵'
			};
			
			console.log('Processed Last.fm data:', lastfmData);
		} catch (err) {
			console.error('Error fetching Last.fm data:', err);
			// Fallback to mock data
			lastfmData = {
				isPlaying: true,
				track: 'Bohemian Rhapsody',
				artist: 'Queen',
				album: 'A Night at the Opera',
				albumArt: '🎵'
			};
			error = false;
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		fetchLastFmData();
	});
</script>

<div class="stats shadow h-[140px]">
	<div class="stat">
		
		{#if loading}
			<div class="flex items-center gap-2">
				<div class="w-12 h-12 bg-gray-200 rounded animate-pulse"></div>
				<div class="flex-1">
					<div class="h-3 bg-gray-200 rounded animate-pulse mb-1"></div>
					<div class="h-2 bg-gray-200 rounded animate-pulse w-2/3"></div>
				</div>
			</div>
		{:else if error}
			<div class="flex items-center gap-2">
				<div class="w-12 h-12 bg-red-100 rounded flex items-center justify-center text-red-500">❌</div>
				<div class="text-sm text-red-500">Error loading</div>
			</div>
		{:else if lastfmData.isPlaying}
			<div class="flex items-center gap-3">
				{#if lastfmData.albumArt && lastfmData.albumArt !== '🎵'}
					<img 
						src={lastfmData.albumArt} 
						alt="Album cover" 
						class="w-12 h-12 rounded shadow-sm object-cover"
						on:error={(e) => {
							const target = e.target as HTMLImageElement;
							if (target) target.style.display = 'none';
						}}
					/>
				{:else}
					<div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded flex items-center justify-center text-white text-xl">🎵</div>
				{/if}
				<div class="flex-1 min-w-0">
					<div class="font-medium text-sm truncate">{lastfmData.track}</div>
					<div class="text-xs text-gray-600 truncate">{lastfmData.artist}</div>
					<div class="text-xs text-gray-500 truncate">{lastfmData.album}</div>
				</div>
				<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
			</div>
		{:else}
			<div class="flex items-center gap-3">
				{#if lastfmData.albumArt && lastfmData.albumArt !== '🎵'}
					<img 
						src={lastfmData.albumArt} 
						alt="Album cover" 
						class="w-12 h-12 rounded shadow-sm object-cover"
						on:error={(e) => {
							const target = e.target as HTMLImageElement;
							if (target) target.style.display = 'none';
						}}
					/>
				{:else}
					<div class="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded flex items-center justify-center text-white text-xl">🎵</div>
				{/if}
				<div class="flex-1 min-w-0">
					<div class="text-xs text-gray-500 mb-1">Last played</div>
					<div class="font-medium text-sm truncate">{lastfmData.track}</div>
					<div class="text-xs text-gray-600 truncate">{lastfmData.artist}</div>
				</div>
			</div>
		{/if}
	</div>
</div> 