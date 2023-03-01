import type { Page } from '@playwright/test';
import { expect } from './baseFixtures';

// Languager

export async function selectLanguage(page: Page, position: number) {
	const languageSelector = page.locator('.language-selector');
	await expect(languageSelector).toBeVisible();
	await languageSelector.click({ force: true });

	const languageDropdown = page.locator('.language-dropdown');
	await expect(languageDropdown).toBeVisible();

	const language = page.locator('input.language-flag').nth(position);
	await expect(language).toBeVisible();
	await language.click({ force: true });
}

// Emailer

export async function writeMessage(page: Page, message: string) {
	let formMessageContainer = page.locator('.form-message');
	await expect(formMessageContainer).toBeVisible();
	await formMessageContainer.type(message);
	formMessageContainer = page.locator('.form-message');
	await expect(formMessageContainer).toHaveValue(message);
}

export async function writeEmail(page: Page, email: string) {
	let formEmailContainer = page.locator('.form-email');
	await expect(formEmailContainer).toBeVisible();
	await formEmailContainer.type(email);
	formEmailContainer = page.locator('.form-email');
	await expect(formEmailContainer).toHaveValue(email);
}

export async function submitForm(page: Page) {
	const formSubmitButton = page.locator('.form-submit-button');
	await expect(formSubmitButton).toBeVisible();
	await formSubmitButton.click({ force: true });
}

export async function validateFormButton(page: Page, buttonMessage: string) {
	const formSubmitButton = page.locator('.form-submit-button');
	await expect(formSubmitButton).toBeVisible();
	await expect(formSubmitButton).toContainText(buttonMessage);
}

// Spinner

export async function spin(page: Page) {
	const spinButton = page.locator('.spin-button');
	await expect(spinButton).toBeVisible();
	await spinButton.click({ force: true });
	// animation takes 3 seconds
	await page.waitForTimeout(3000);
}

export async function toggleSpinnerLock(page: Page, spinnerIndex: number) {
	const spinnerContainer = page.locator('.spinner').nth(spinnerIndex);
	await spinnerContainer.hover({ force: true });

	page.waitForSelector('.locker .switch');
	const spinnerLock = page.locator('.locker .switch');
	await expect(spinnerLock).toBeVisible();
	await spinnerLock.click({ force: true });
}

export async function validateSpinner(
	page: Page,
	spinnerIndex: number,
	contentText: string,
) {
	const spinnerContainer = page
		.locator('.spinner .spinner-boxes .spinner-box:last-child span')
		.nth(spinnerIndex);
	await expect(spinnerContainer).toBeVisible();
	await expect(spinnerContainer).toContainText(contentText);
}

export async function getSpinnerText(page: Page, spinnerIndex: number) {
	const spinnerContainer = page.locator('.spinner').nth(spinnerIndex);
	await spinnerContainer.hover({ force: true });
	return (
		await page
			.locator('.spinner .spinner-boxes .spinner-box:first-child span')
			.nth(spinnerIndex)
			.innerText()
	).valueOf();
}
