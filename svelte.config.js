import nodeAdapter from '@sveltejs/adapter-node';
import netlifyadapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';
let adapterVar;

if (process.env.PUBLIC_ENV == 'PROD') {
	adapterVar = netlifyadapter();
} else {
	adapterVar = nodeAdapter();
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapterVar,
		alias: {
			'@components': path.resolve('src/components'),
			'@i18n': path.resolve('src/i18n'),
			'@routes': path.resolve('src/routes'),
			'@static': path.resolve('static'),
		},
	},
};

export default config;
