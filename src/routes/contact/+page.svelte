<script>
	let formData = {
		name: '',
		email: '',
		message: ''
	};

	function handleSubmit() {
		// Add form submission logic here
		console.log(formData);
	}
</script>

<div class="max-w-2xl mx-auto">
	<h1 class="text-4xl font-bold mb-8">Contact Me</h1>
	
	<form on:submit|preventDefault={handleSubmit} class="space-y-6">
		<div>
			<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
			<input
				type="text"
				id="name"
				bind:value={formData.name}
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				required
			/>
		</div>

		<div>
			<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
			<input
				type="email"
				id="email"
				bind:value={formData.email}
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				required
			/>
		</div>

		<div>
			<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
			<textarea
				id="message"
				bind:value={formData.message}
				rows="4"
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
				required
			></textarea>
		</div>

		<button
			type="submit"
			class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
		>
			Send Message
		</button>
	</form>
</div> 