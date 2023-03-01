import { expect, test } from './baseFixtures';
import * as utils from './baseUtilities';

const SPANISH = 1,
	FRENCH = 2,
	PORTUGUESE = 3,
	CHINESE = 4;

test.beforeEach(async ({ page }) => {
	await page.goto('/');

	await page.waitForSelector('.spinner');

	await expect(page).toHaveTitle('Game Genre Generator');
});

test.describe('Should be able spin', () => {
	test('should spin', async ({ page }) => {
		await expect(page.locator('.loader')).toHaveCount(0);
		await expect(page.locator('.spinner')).toHaveCount(5);

		await utils.spin(page);

		expect(await utils.getSpinnerText(page, 0)).not.toEqual('Adversary');
	});

	test('should lock options', async ({ page }) => {
		await utils.spin(page);
		await utils.toggleSpinnerLock(page, 0);
		const firstResult = await utils.getSpinnerText(page, 0);

		await utils.spin(page);
		const secondResult = await utils.getSpinnerText(page, 0);

		expect(firstResult).toEqual(secondResult);
	});
});

test.describe('Should be able to send emails', () => {
	test('should send email correctly', async ({ page }) => {
		await utils.writeMessage(page, 'This is a message');
		await utils.writeEmail(page, 'test@test.com');
		await utils.submitForm(page);
		await utils.validateFormButton(page, 'Message sent!');
	});

	test('should send email correctly without from', async ({ page }) => {
		await utils.writeMessage(page, 'This is a message');
		await utils.writeEmail(page, '');
		await utils.submitForm(page);
		await utils.validateFormButton(page, 'Message sent!');
	});

	test('should give an error with empty message', async ({ page }) => {
		await utils.writeMessage(page, '');
		await utils.writeEmail(page, 'test@test.com');
		await utils.submitForm(page);
		await utils.validateFormButton(page, 'Message is required!');
		await utils.submitForm(page);
		await utils.validateFormButton(page, 'Message is required!');
	});

	test('should give an error with improper email', async ({ page }) => {
		await utils.writeMessage(page, 'This is a message');
		await utils.writeEmail(page, 'Improper Email');
		await utils.submitForm(page);
		await utils.validateFormButton(page, 'Valid email is required!');
	});
});

test.describe('Should be able to switch language', () => {
	test('should default to english', async ({ page }) => {
		await utils.validateSpinner(page, 0, 'Adversary');
		await utils.validateSpinner(page, 1, 'Setting');
		await utils.validateSpinner(page, 2, 'Goal');
		await utils.validateSpinner(page, 3, 'Element');
		await utils.validateSpinner(page, 4, 'Feeling');
	});

	test('should be able to change to spanish', async ({ page }) => {
		await utils.selectLanguage(page, SPANISH);
		await utils.validateSpinner(page, 0, 'Adversario');
		await utils.validateSpinner(page, 1, 'Escenario');
		await utils.validateSpinner(page, 2, 'Objetivo');
		await utils.validateSpinner(page, 3, 'Elemento');
		await utils.validateSpinner(page, 4, 'Sentimiento');
	});

	test('should be able to change to french', async ({ page }) => {
		await utils.selectLanguage(page, FRENCH);
		await utils.validateSpinner(page, 0, 'Adversaire');
		await utils.validateSpinner(page, 1, 'Environnement');
		await utils.validateSpinner(page, 2, 'But');
		await utils.validateSpinner(page, 3, 'Élément');
		await utils.validateSpinner(page, 4, 'Sensation');
	});

	test('should be able to change to portuguese', async ({ page }) => {
		await utils.selectLanguage(page, PORTUGUESE);
		await utils.validateSpinner(page, 0, 'Adversário');
		await utils.validateSpinner(page, 1, 'Ambiente');
		await utils.validateSpinner(page, 2, 'Objetivo');
		await utils.validateSpinner(page, 3, 'Elemento');
		await utils.validateSpinner(page, 4, 'Sensação');
	});

	test('should be able to change to chinese', async ({ page }) => {
		await utils.selectLanguage(page, CHINESE);
		await utils.validateSpinner(page, 0, '对手');
		await utils.validateSpinner(page, 1, '场景');
		await utils.validateSpinner(page, 2, '目标');
		await utils.validateSpinner(page, 3, '元素');
		await utils.validateSpinner(page, 4, '感觉');
	});
});
