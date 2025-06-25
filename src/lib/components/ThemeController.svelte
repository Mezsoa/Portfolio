<script lang="ts">
	// No custom JavaScript needed - daisyUI handles everything!
	const themes = [
		{ name: 'Light', value: 'light' },
		{ name: 'Dark', value: 'dark' },
		{ name: 'Cupcake', value: 'cupcake' },
		{ name: 'Bumblebee', value: 'bumblebee' },
		{ name: 'Emerald', value: 'emerald' },
		{ name: 'Corporate', value: 'corporate' },
		{ name: 'Synthwave', value: 'synthwave' },
		{ name: 'Retro', value: 'retro' },
		{ name: 'Cyberpunk', value: 'cyberpunk' },
		{ name: 'Valentine', value: 'valentine' },
		{ name: 'Halloween', value: 'halloween' },
		{ name: 'Garden', value: 'garden' },
		{ name: 'Forest', value: 'forest' },
		{ name: 'Aqua', value: 'aqua' },
		{ name: 'Lofi', value: 'lofi' },
		{ name: 'Pastel', value: 'pastel' },
		{ name: 'Fantasy', value: 'fantasy' },
		{ name: 'Wireframe', value: 'wireframe' },
		{ name: 'Black', value: 'black' },
		{ name: 'Luxury', value: 'luxury' },
		{ name: 'Dracula', value: 'dracula' },
		{ name: 'CMYK', value: 'cmyk' },
		{ name: 'Autumn', value: 'autumn' },
		{ name: 'Business', value: 'business' },
		{ name: 'Acid', value: 'acid' },
		{ name: 'Lemonade', value: 'lemonade' },
		{ name: 'Night', value: 'night' },
		{ name: 'Coffee', value: 'coffee' },
		{ name: 'Winter', value: 'winter' },
		{ name: 'Dim', value: 'dim' },
		{ name: 'Nord', value: 'nord' },
		{ name: 'Sunset', value: 'sunset' }
	];
</script>

<div class="dropdown">
	<div tabindex="0" role="button" class="btn btn-ghost">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<circle cx="12" cy="12" r="5" />
			<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
		</svg>
		Theme
		<svg
			width="12px"
			height="12px"
			class="inline-block h-2 w-2 fill-current opacity-60"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048"
		>
			<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
		</svg>
	</div>
	<ul class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
		{#each themes as theme}
			<li>
				<input
					type="radio"
					name="theme-dropdown"
					class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
					aria-label={theme.name}
					value={theme.value}
				/>
			</li>
		{/each}
	</ul>
</div> 