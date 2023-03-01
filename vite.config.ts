import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		tsconfigPaths(),
		istanbul({
			include: 'src/*',
			exclude: ['node_modules', 'test', 'coverage'],
			extension: ['.ts', '.svelte'],
			requireEnv: false,
			forceBuildInstrument: true,
		}),
	],
	test: {
		include: ['tests/*.spec.ts'],
	},
	server: {
		fs: {
			allow: ['static'],
		},
		port: 8080,
	},
	build: {
		sourcemap: true,
	},
	resolve: {
		alias: {
			'@components': path.resolve('src/components'),
			'@i18n': path.resolve('src/i18n'),
			'@routes': path.resolve('src/routes'),
			'@static': path.resolve('static'),
		},
	},
});
