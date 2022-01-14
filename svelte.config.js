import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
            resolve: {
                alias: {
                    '$lib': path.resolve('./src/lib'),
                    '$components': path.resolve('./src/lib/components'),
                    '$scss': path.resolve('./src/lib/scss'),
                }
            }
        }
	}
};

export default config;
