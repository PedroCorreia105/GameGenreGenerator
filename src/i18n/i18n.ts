import { derived, writable } from 'svelte/store';
import translations from './translations';

export const locale = writable('en');
export const locales = Object.keys(translations);

/* istanbul ignore next -- @preserve */
function translate(locale: string, key: string) {
	if (!key) throw new Error('No key provided to $t()');

	if (!locales.includes(locale)) throw new Error(`No translation for key "${key}"`);

	const allLanguageTranslations = translations[locale as keyof typeof translations];
	const specificTranslation =
		allLanguageTranslations[key as keyof typeof allLanguageTranslations];

	if (!specificTranslation) throw new Error(`No translation found for ${locale}.${key}`);

	return specificTranslation;
}

/* istanbul ignore next -- @preserve */
export const t = derived(locale, ($locale) => (key: string) => translate($locale, key));
