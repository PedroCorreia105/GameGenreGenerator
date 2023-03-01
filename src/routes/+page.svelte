<script lang="ts">
	import Spinner from '@components/spinner.svelte';
	import Loader from '@components/loader.svelte';
	import { t, locale } from '@i18n/i18n';

	let categories: {
		[key: string]: { description: string; options: { [key: string]: string } };
	};

	locale.subscribe(async (localeValue) => {
		categories = (await import(`@i18n/categories.${localeValue}.json`)).default;
	});

	let spinners: Spinner[] = [];
	let spinning = false;
	const delay = 175;

	async function spin() {
		spinning = true;

		spinners.forEach((spinner) => {
			spinner.reset();
		});

		await Promise.all(
			spinners.map(async (spinner, i) => {
				await new Promise((resolve) => setTimeout(resolve, delay * (i + 1))).then(() =>
					spinner.spin(),
				);
			}),
		);

		spinning = false;
	}
</script>

<svelte:head>
	<title>{$t('page.title')}</title>
	<meta name={$t('page.title')} content={$t('page.title')} />
</svelte:head>

{#if categories}
	<section>
		<div class="spinners">
			{#each Object.entries(categories) as [categoryName, categoryObject], i (categoryName)}
				<Spinner
					{categoryName}
					categoryDescription={categoryObject['description']}
					spinnerObject={categoryObject['options']}
					bind:this={spinners[i]}
				/>
			{/each}
		</div>

		<button on:click={spin} disabled={spinning} class="spin-button">
			{#if spinning}
				<img src="/img/egg.png" alt="Egg" class="egg" />
			{:else}
				{$t('spinner.button')}
			{/if}
		</button>
	</section>
{:else}
	<Loader />
{/if}

<style lang="scss">
	:root {
		--size: 25px;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		min-height: 300px;

		.spinners {
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			justify-content: center;
		}

		.spin-button {
			cursor: pointer;
			margin-top: 30px;
			border: none;
			border-radius: 5px;
			padding: 10px 15px;
			width: 100px;
			height: 40px;

			&:active {
				transform: translateY(4px);
			}

			.egg {
				height: var(--size);
				animation: egg 1.2s linear infinite;
				margin-top: -3px;
			}

			@keyframes egg {
				0% {
					transform: rotate(0deg);
				}
				100% {
					transform: rotate(360deg);
				}
			}
		}
	}
</style>
