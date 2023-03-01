<script lang="ts">
	import { t } from '@i18n/i18n';
	import validator from 'validator';
	import {
		PUBLIC_MAILGUN_RECEIVING_EMAIL,
		PUBLIC_MAILGUN_DOMAIN,
		PUBLIC_MAILGUN_API_KEY,
		PUBLIC_ENV,
	} from '$env/static/public';
	import Loader from '@components/loader.svelte';

	const url = `https://api.mailgun.net/v3/${PUBLIC_MAILGUN_DOMAIN}/messages`;
	let buttonMessage = $t('emailer.button.send.email');
	let error = false,
		success = false,
		loading = false;
	let formData = {
		message: '',
		email: '',
	};

	// Clear the button messages when input changes
	function textAreaUpdated() {
		buttonMessage = $t('emailer.button.send.email');
		error = false;
		success = false;
	}

	function formSubmitted() {
		if (!isValidForm()) {
			return;
		}

		if (PUBLIC_ENV != 'PROD') {
			buttonMessage = $t('emailer.message.sent');
			success = true;
			return;
		}

		/* istanbul ignore next -- @preserve */
		sendEmail();
	}

	/* istanbul ignore next -- @preserve */
	async function sendEmail() {
		loading = true;

		const emailData = new FormData();
		emailData.append('from', formData.email || 'noreply@ggg.com');
		emailData.append('to', PUBLIC_MAILGUN_RECEIVING_EMAIL || 'failedToLoadEmail');
		emailData.append('subject', 'GameGenreGenerator Message');
		emailData.append('text', formData.message);

		const options = {
			method: 'POST',
			headers: {
				Authorization: `Basic ${btoa(`api:${PUBLIC_MAILGUN_API_KEY}`)}`,
			},
			body: emailData,
		};

		try {
			let response = await fetch(url, options);
			if (response.ok) {
				buttonMessage = $t('emailer.message.sent');
				success = true;
			} else {
				buttonMessage = $t('emailer.message.error');
				error = true;
			}
		} catch (err) {
			buttonMessage = $t('emailer.message.error');
			error = true;
		}

		loading = false;
	}

	function isValidForm() {
		if (error) {
			return false;
		}

		if (formData.message.trim() === '') {
			buttonMessage = $t('emailer.invalid.message');
			error = true;
			return false;
		}
		if (formData.email.length != 0 && !validator.isEmail(formData.email)) {
			buttonMessage = $t('emailer.invalid.email');
			error = true;
			return false;
		}
		return true;
	}
</script>

<form data-test-id="form" on:submit|preventDefault={formSubmitted}>
	<fieldset>
		<textarea
			name="message"
			class="form-message"
			rows="2"
			placeholder={$t('emailer.placeholder.message')}
			bind:value={formData.message}
			on:input={textAreaUpdated}
		/>
		<textarea
			name="email"
			class="form-email"
			rows="1"
			placeholder={$t('emailer.email.placeholder')}
			bind:value={formData.email}
			on:input={textAreaUpdated}
		/>

		{#if loading}
			<Loader />
		{:else}
			<button type="submit" class="form-submit-button" class:error class:success
				>{buttonMessage}</button
			>
		{/if}
	</fieldset>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		text-align: center;

		fieldset {
			min-width: 150px;

			.form-message {
				padding: 10px;
				resize: vertical;
				margin-top: 20px;
				width: calc(100% - 20px);
			}

			.form-email {
				padding: 10px;
				resize: vertical;
				margin: 20px 0;
				width: calc(100% - 20px);
				resize: none;
				height: 20px;
			}

			.form-submit-button {
				padding: 5px 20px;
				background-color: var(--color-footer-theme);
				border-radius: 5px;
				color: white;
				font-weight: 500;

				&:hover {
					background-color: var(--color-dark-footer-theme);
				}

				&:active {
					background-color: var(--color-dark-footer-theme);
					transform: translateY(4px);
				}
			}

			.error {
				animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
				transform: translate3d(0, 0, 0);
				perspective: 1000px;
				background-color: red !important;
			}

			.success {
				animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
				transform: translate3d(0, 0, 0);
				perspective: 1000px;
				background-color: green !important;
			}

			@keyframes shake {
				10%,
				90% {
					transform: translate3d(-1px, 0, 0);
				}
				20%,
				80% {
					transform: translate3d(2px, 0, 0);
				}
				30%,
				50%,
				70% {
					transform: translate3d(-4px, 0, 0);
				}
				40%,
				60% {
					transform: translate3d(4px, 0, 0);
				}
			}
		}
	}
</style>
