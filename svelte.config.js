import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';
import sequencial from 'svelte-sequential-preprocessor';
import { svelteShiki as shiki } from 'svelte-shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// If you want to use shiki syntax highlighting, you need to run in the correct order
	// So it doesn't break when it sees typescript code in your <script> tags
	// Thats why we use svelte-sequential-preprocessor
	preprocess: [
		sequencial([preprocess(), shiki({ theme: 'Material-Theme-Palenight' })]),
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					// '$pages': path.resolve('./src/pages'),
					$styles: path.resolve('./src/styles')
				}
			}
		}
	}
};

export default config;
