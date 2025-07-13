<script lang="ts">
	import emailjs from '@emailjs/browser';
	import { onMount } from 'svelte';

	let showAdditionalFields = $state(false);
	let isSubmitting = $state(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');
	let focusedField = $state<string | null>(null);

	onMount(() => {
		emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
	});

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		submitStatus = 'idle';

		const formData = new FormData(event.target as HTMLFormElement);
		const templateParams = {
			from_name: formData.get('name'),
			from_email: formData.get('email'),
			message: formData.get('message'),
			phone: formData.get('phone') || 'Not provided',
			company: formData.get('company') || 'Not provided',
			website: formData.get('website') || 'Not provided'
		};

		try {
			const response = await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				templateParams
			);
			
			console.log('Email sent successfully:', response);
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

<div class="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-2xl">
		<!-- Header Section -->
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold text-white mb-4 tracking-tight">
				Let's Build Something Amazing
			</h1>
			<p class="text-lg text-gray-300 max-w-md mx-auto leading-relaxed">
				Ready to bring your vision to life? I'd love to hear about your project and discuss how we can work together.
			</p>
		</div>

		<!-- Form Container -->
		<div class="relative">
			<!-- Background Glow Effect -->
			<div class="absolute inset-0 bg-gradient-to-r from-[#1b6f65]/20 to-[#155a52]/20 rounded-3xl blur-3xl"></div>
			
			<!-- Form Card -->
			<div class="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
				<form onsubmit={handleSubmit} class="space-y-8">
					<!-- Required Fields Section -->
					<div class="space-y-6">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div class="group">
								<label for="name" class="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-[#1b6f65]">
									Name *
								</label>
								<div class="relative">
									<input
										type="text"
										id="name"
										name="name"
										required
										bind:this={focusedField}
										onfocus={() => focusedField = 'name'}
										onblur={() => focusedField = null}
										class="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:border-[#1b6f65] focus:ring-2 focus:ring-[#1b6f65]/20 focus:outline-none focus:bg-white/10"
										placeholder="Your full name"
									/>
									<div class="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1b6f65]/0 to-[#155a52]/0 transition-all duration-300 group-focus-within:from-[#1b6f65]/10 group-focus-within:to-[#155a52]/10 pointer-events-none"></div>
								</div>
							</div>

							<div class="group">
								<label for="email" class="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-[#1b6f65]">
									Email *
								</label>
								<div class="relative">
									<input
										type="email"
										id="email"
										name="email"
										required
										bind:this={focusedField}
										onfocus={() => focusedField = 'email'}
										onblur={() => focusedField = null}
										class="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:border-[#1b6f65] focus:ring-2 focus:ring-[#1b6f65]/20 focus:outline-none focus:bg-white/10"
										placeholder="your@email.com"
									/>
									<div class="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1b6f65]/0 to-[#155a52]/0 transition-all duration-300 group-focus-within:from-[#1b6f65]/10 group-focus-within:to-[#155a52]/10 pointer-events-none"></div>
								</div>
							</div>
						</div>

						<div class="group">
							<label for="message" class="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-[#1b6f65]">
								Message *
							</label>
							<div class="relative">
								<textarea
									id="message"
									name="message"
									rows="5"
									required
									bind:this={focusedField}
									onfocus={() => focusedField = 'message'}
									onblur={() => focusedField = null}
									class="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:border-[#1b6f65] focus:ring-2 focus:ring-[#1b6f65]/20 focus:outline-none focus:bg-white/10 resize-none"
									placeholder="Tell me about your project, goals, and timeline..."
								></textarea>
								<div class="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1b6f65]/0 to-[#155a52]/0 transition-all duration-300 group-focus-within:from-[#1b6f65]/10 group-focus-within:to-[#155a52]/10 pointer-events-none"></div>
							</div>
						</div>
					</div>

					<!-- Additional Fields Toggle -->
					<div class="flex items-center justify-center">
						<button
							type="button"
							onclick={() => showAdditionalFields = !showAdditionalFields}
							class="flex items-center gap-3 px-6 py-3 text-gray-300 hover:text-white transition-colors duration-200 group"
						>
							<div class="w-5 h-5 rounded-full border-2 border-gray-400 group-hover:border-[#1b6f65] transition-colors duration-200 flex items-center justify-center">
								{#if showAdditionalFields}
									<div class="w-2 h-2 bg-[#1b6f65] rounded-full"></div>
								{/if}
							</div>
							<span class="text-sm font-medium">Add additional information</span>
							<svg class="w-4 h-4 transition-transform duration-200 {showAdditionalFields ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
							</svg>
						</button>
					</div>

					<!-- Additional Fields -->
					{#if showAdditionalFields}
						<div class="space-y-6 animate-in slide-in-from-top-2 duration-300">
							<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div class="group">
									<label for="phone" class="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-[#1b6f65]">
										Phone
									</label>
									<div class="relative">
										<input
											type="tel"
											id="phone"
											name="phone"
											bind:this={focusedField}
											onfocus={() => focusedField = 'phone'}
											onblur={() => focusedField = null}
											class="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:border-[#1b6f65] focus:ring-2 focus:ring-[#1b6f65]/20 focus:outline-none focus:bg-white/10"
											placeholder="+1 (555) 123-4567"
										/>
										<div class="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1b6f65]/0 to-[#155a52]/0 transition-all duration-300 group-focus-within:from-[#1b6f65]/10 group-focus-within:to-[#155a52]/10 pointer-events-none"></div>
									</div>
								</div>

								<div class="group">
									<label for="company" class="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-[#1b6f65]">
										Company
									</label>
									<div class="relative">
										<input
											type="text"
											id="company"
											name="company"
											bind:this={focusedField}
											onfocus={() => focusedField = 'company'}
											onblur={() => focusedField = null}
											class="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:border-[#1b6f65] focus:ring-2 focus:ring-[#1b6f65]/20 focus:outline-none focus:bg-white/10"
											placeholder="Your company name"
										/>
										<div class="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1b6f65]/0 to-[#155a52]/0 transition-all duration-300 group-focus-within:from-[#1b6f65]/10 group-focus-within:to-[#155a52]/10 pointer-events-none"></div>
									</div>
								</div>
							</div>

							<div class="group">
								<label for="website" class="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-[#1b6f65]">
									Website
								</label>
								<div class="relative">
									<input
										type="url"
										id="website"
										name="website"
										bind:this={focusedField}
										onfocus={() => focusedField = 'website'}
										onblur={() => focusedField = null}
										class="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:border-[#1b6f65] focus:ring-2 focus:ring-[#1b6f65]/20 focus:outline-none focus:bg-white/10"
										placeholder="https://yourwebsite.com"
									/>
									<div class="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1b6f65]/0 to-[#155a52]/0 transition-all duration-300 group-focus-within:from-[#1b6f65]/10 group-focus-within:to-[#155a52]/10 pointer-events-none"></div>
								</div>
							</div>
						</div>
					{/if}

					<!-- Status Messages -->
					{#if submitStatus === 'success'}
						<div class="rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-green-400 flex items-center gap-3">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="font-medium">Message sent successfully! I'll get back to you within 24 hours.</span>
						</div>
					{/if}
					{#if submitStatus === 'error'}
						<div class="rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-red-400 flex items-center gap-3">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
							</svg>
							<span class="font-medium">Something went wrong. Please try again or reach out directly.</span>
						</div>
					{/if}

					<!-- Submit Button -->
					<button
						type="submit"
						disabled={isSubmitting}
						class="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#1b6f65] to-[#155a52] px-8 py-4 text-white font-semibold transition-all duration-300 hover:from-[#155a52] hover:to-[#1b6f65] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-[#1b6f65] disabled:hover:to-[#155a52] transform hover:scale-[1.02] active:scale-[0.98]"
					>
						<div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
						<div class="relative flex items-center justify-center gap-3">
							{#if isSubmitting}
								<svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
								<span>Sending your message...</span>
							{:else}
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
								</svg>
								<span>Send Message</span>
							{/if}
						</div>
					</button>
				</form>
			</div>
		</div>

		<!-- Contact Info -->
		<div class="text-center mt-12">
			<p class="text-gray-400 text-sm">
				Prefer to reach out directly? 
				<a href="mailto:johngunnarsson_@hotmail.com" class="text-[#1b6f65] hover:text-[#155a52] transition-colors duration-200 font-medium">
					johngunnarsson_@hotmail.com
				</a>
			</p>
		</div>
	</div>
</div>

<style>
	/* Custom animations */
	@keyframes slide-in-from-top-2 {
		from {
			opacity: 0;
			transform: translateY(-1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-in {
		animation: slide-in-from-top-2 0.3s ease-out;
	}

	/* Smooth focus transitions */
	input:focus, textarea:focus {
		transform: translateY(-1px);
	}

	/* Custom scrollbar for textarea */
	textarea::-webkit-scrollbar {
		width: 6px;
	}

	textarea::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 3px;
	}

	textarea::-webkit-scrollbar-thumb {
		background: rgba(27, 111, 101, 0.5);
		border-radius: 3px;
	}

	textarea::-webkit-scrollbar-thumb:hover {
		background: rgba(27, 111, 101, 0.7);
	}
</style>