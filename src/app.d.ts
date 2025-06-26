// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}

	interface ImportMetaEnv {
		readonly VITE_EMAILJS_PUBLIC_KEY: string;
		readonly VITE_EMAILJS_SERVICE_ID: string;
		readonly VITE_EMAILJS_TEMPLATE_ID: string;
	}
}

export {};
