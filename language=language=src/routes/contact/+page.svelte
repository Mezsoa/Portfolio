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
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                data,
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
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

<form on:submit={handleSubmit} class="mx-auto max-w-2xl space-y-6">
    <!-- Existing form fields remain the same -->
    
    {#if submitStatus === 'success'}
        <div class="rounded-md bg-green-50 p-4 text-green-700">
            Message sent successfully! I'll get back to you soon.
        </div>
    {/if}
    
    {#if submitStatus === 'error'}
        <div class="rounded-md bg-red-50 p-4 text-red-700">
            Failed to send message. Please try again later.
        </div>
    {/if}

    <button
        type="submit"
        disabled={isSubmitting}
        class="w-full rounded-lg bg-[#1b6f65] px-6 py-3 text-white transition-colors hover:bg-[#720000] disabled:opacity-50"
    >
        {isSubmitting ? 'Sending...' : 'Send Message'}
    </button>
</form> 