<script lang="ts">
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
	import { locale, locales } from '@i18n/i18n';
	import { fly } from 'svelte/transition';
	import { t } from '@i18n/i18n';

	let isVisible = false;
	let node: HTMLElement;

	onMount(() => {
		document.addEventListener('click', handleClick, true);
	});

	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', { detail: node }));
		}
	};

	function handleClickOutside() {
		isVisible = false;
	}

	function toggleDropdown() {
		isVisible = !isVisible;
	}
	function setLocale(languageCode: string) {
		locale.set(languageCode);
	}
</script>

<!-- https://stackoverflow.com/questions/64131176/svelte-custom-event-on-svelte-typescript -->
<div
	class="language-box language-selector"
	bind:this={node}
	on:keydown={() => {}}
	on:click={() => toggleDropdown()}
	on:click_outside={handleClickOutside}
	role="button"
	tabindex="-1"
>
	<i class="language-chevron">
		{#if isVisible}
			<Fa icon={faChevronUp} />
		{:else}
			<Fa icon={faChevronDown} />
		{/if}
	</i>
	<img
		class="language-flag"
		alt={$t('languager.select.language')}
		src="img/flags/{$locale}.png"
	/>
	{#if isVisible}
		<div class="language-box language-dropdown" transition:fly>
			{#each locales as languageCode (languageCode)}
				<input
					type="image"
					alt={$t(`languager.${languageCode}`)}
					src="img/flags/{languageCode}.png"
					class="language-flag"
					on:click={() => setLocale(languageCode)}
				/>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.language-box {
		width: 75px;
		border: 2px var(--color-header-border) solid;
		background-color: var(--color-header-background);
		border-radius: 5px;
		margin: 0 auto;
	}
	.language-selector {
		margin-top: 20px;
		position: relative;
		display: inline-block;
		cursor: pointer;

		.language-flag {
			width: 30px;
			height: 20px;
			padding: 10px 10px 10px 5px;
			float: left;
		}

		&:active {
			background-color: var(--color-dark-footer-theme);
			transform: translateY(4px);
		}
		.language-chevron {
			float: left;
			width: 20px;
			height: 20px;
			margin-left: 10px;
			margin-top: 9px;
		}

		.language-dropdown {
			display: block;
			position: absolute;
			top: -215px;
			left: -2px;
			z-index: 1;
			text-align: center;
			padding-bottom: 10px;

			&:active {
				background-color: var(--color-dark-footer-theme);
				transform: translateY(-4px);
			}

			.language-flag {
				width: 35px;
				height: 25px;
				padding: 10px 15px 0px 15px;
				float: none;
			}
		}
	}
</style>
