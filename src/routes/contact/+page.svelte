<script lang="ts">
	import emailjs from '@emailjs/browser';
    let { form } = $props();
    let showAdditionalFields = $state(false);
	let isSubmitting = $state(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		submitStatus = 'idle';

		const formData = new FormData(event.target as HTMLFormElement);
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			message: formData.get('message'),
			phone: formData.get('phone') || '',
			company: formData.get('company') || '',
			website: formData.get('website') || ''
		};

		try {
			await emailjs.send(
				'YOUR_SERVICE_ID', // This is where the service ID goes 
				'YOUR_TEMPLATE_ID',// This is where the template ID goes
				data,
				'YOUR_PUBLIC_KEY' // This is where the public key goes
			);
			submitStatus = 'success';
			(event.target as HTMLFormElement).reset();
			showAdditionalFields = false;
		} catch (error) {
			console.error('Error sending email:', error);
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<form onsubmit={handleSubmit} class="mx-auto max-w-2xl space-y-6">
    <div class="space-y-4">
        <div>
            <label for="name" class="block text-sm font-medium text-white">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                required
                class="mt-1 block w-full rounded-md border-gray-300 bg-white/10 px-4 py-2 text-white shadow-sm focus:border-[#1b6f65] focus:ring-[#1b6f65]"
            />
        </div>

        <div>
            <label for="email" class="block text-sm font-medium text-white">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                required
                class="mt-1 block w-full rounded-md border-gray-300 bg-white/10 px-4 py-2 text-white shadow-sm focus:border-[#1b6f65] focus:ring-[#1b6f65]"
            />
        </div>

        <div>
            <label for="message" class="block text-sm font-medium text-white">Message</label>
            <textarea
                id="message"
                name="message"
                rows="4"
                required
                class="mt-1 block w-full rounded-md border-gray-300 bg-white/10 px-4 py-2 text-white shadow-sm focus:border-[#1b6f65] focus:ring-[#1b6f65]"
            ></textarea>
        </div>

        <div class="flex items-center">
            <input
                type="checkbox"
                id="showAdditional"
                bind:checked={showAdditionalFields}
                class="h-4 w-4 rounded border-gray-300 text-[#1b6f65] focus:ring-[#1b6f65]"
            />
            <label for="showAdditional" class="ml-2 block text-sm text-white">
                Add additional information
            </label>
        </div>

        {#if showAdditionalFields}
            <div class="space-y-4">
                <div>
                    <label for="phone" class="block text-sm font-medium text-white">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        class="mt-1 block w-full rounded-md border-gray-300 bg-white/10 px-4 py-2 text-white shadow-sm focus:border-[#1b6f65] focus:ring-[#1b6f65]"
                    />
                </div>

                <div>
                    <label for="company" class="block text-sm font-medium text-white">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        class="mt-1 block w-full rounded-md border-gray-300 bg-white/10 px-4 py-2 text-white shadow-sm focus:border-[#1b6f65] focus:ring-[#1b6f65]"
                    />
                </div>

                <div>
                    <label for="website" class="block text-sm font-medium text-white">Website</label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        class="mt-1 block w-full rounded-md border-gray-300 bg-white/10 px-4 py-2 text-white shadow-sm focus:border-[#1b6f65] focus:ring-[#1b6f65]"
                    />
                </div>
            </div>
        {/if}
    </div>
	{#if submitStatus === 'success'}
	<div class="rounded-md bg-green-50 p-4 text-green-700">
		Message sent successfully! I'll get back to you soon.
	</div>
	{/if}
	{#if submitStatus === 'error'}
	<div class="rounded-md bg-red-50 p-4 text-red-700">
		Error sending message. Please try again.
	</div>
	{/if}

    <button
        type="submit"
        class="w-full rounded-lg bg-[#1b6f65] px-6 py-3 text-white transition-colors hover:bg-[#720000]"
    >
        Send Message
    </button>
</form>