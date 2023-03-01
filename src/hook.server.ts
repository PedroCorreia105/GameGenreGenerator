import type { Handle } from '@sveltejs/kit';
import { locale, locales } from './i18n/i18n';

export const handle: Handle = async ({ event, resolve }) => {
	const languageCode = event.request.headers.get('accept-language')?.split(',')[0];

	if (languageCode && locales.includes(languageCode)) {
		locale.set(languageCode);
	}

	return resolve(event);
};
