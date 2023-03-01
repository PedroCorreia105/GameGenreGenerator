import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as os from 'os';

dotenv.config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	outputDir: 'output',
	testDir: 'tests',
	fullyParallel: true,
	retries: 1,
	workers: os.cpus().length - 1,
	timeout: 120 * 1000,
	globalTimeout: 60 * 60 * 1000,
	expect: {
		timeout: 120 * 1000,
	},
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: process.env.PUBLIC_ENV == 'CI',
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: [
		['html', { outputFolder: 'report' }],
		['junit', { outputFile: 'report/report.xml' }],
	],
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		baseURL: 'http://localhost:3000',
		actionTimeout: 120 * 1000,
		trace: 'on-first-retry',
		headless: true,
	},

	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},

		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
	],

	/* Run your local dev server before starting the tests */
	webServer: {
		command: 'npm run build && node ./build/index.js',
		port: 3000,
		timeout: 320 * 1000,
		reuseExistingServer: !!process.env.REUSE_SERVER,
		env: {
			USE_BABEL_PLUGIN_ISTANBUL: '1',
		},
	},
});
