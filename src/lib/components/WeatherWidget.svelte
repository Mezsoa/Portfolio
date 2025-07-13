<script lang="ts">
	import { onMount } from 'svelte';

	let weather = {
		temperature: 0,
		description: '',
		icon: '',
		location: 'Gothenburg'
	};

	let loading = true;
	let error = false;

	async function fetchWeather() {
		try {
			const API_KEY = 'be4a92e943ffc6382dc4ab98f801fca3';
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather.location}&appid=${API_KEY}&units=metric`);
			
			if (!response.ok) {
				throw new Error(`Weather API error: ${response.status}`);
			}
			
			const data = await response.json();
			
			// Map weather conditions to emojis
			const weatherIcons: { [key: string]: string } = {
				'01d': '☀️', // clear sky day
				'01n': '🌙', // clear sky night
				'02d': '⛅', // few clouds day
				'02n': '☁️', // few clouds night
				'03d': '☁️', // scattered clouds
				'03n': '☁️',
				'04d': '☁️', // broken clouds
				'04n': '☁️',
				'09d': '🌧️', // shower rain
				'09n': '🌧️',
				'10d': '🌦️', // rain day
				'10n': '🌧️', // rain night
				'11d': '⛈️', // thunderstorm
				'11n': '⛈️',
				'13d': '❄️', // snow
				'13n': '❄️',
				'50d': '🌫️', // mist
				'50n': '🌫️'
			};
			
			weather = {
				temperature: Math.round(data.main.temp),
				description: data.weather[0].description,
				icon: weatherIcons[data.weather[0].icon] || '🌤️',
				location: data.name
			};
		} catch (err) {
			console.error('Error fetching weather:', err);
			
			error = false; // Don't show error, use fallback data
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		fetchWeather();
	});
</script>

<div class="stats h-[640px] shadow">
	<div class="stat">
		<div class="stat-title">Current Weather</div>
		{#if loading}
			<div class="stat-value animate-pulse">...</div>
		{:else if error}
			<div class="stat-value text-error">Error</div>
		{:else}
			<div class="stat-value text-4xl">{weather.icon}</div>
			<div class="stat-value">{weather.temperature}°C</div>
			<div class="stat-desc">{weather.description}</div>
			<div class="stat-desc text-sm">{weather.location}</div>
		{/if}
	</div>
</div> 