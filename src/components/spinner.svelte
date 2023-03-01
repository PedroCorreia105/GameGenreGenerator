<script lang="ts">
	import Locker from '@components/locker.svelte';
	import { fit } from '@leveluptuts/svelte-fit';
	import Fa from 'svelte-fa';
	import { faEye } from '@fortawesome/free-solid-svg-icons';

	export let spinnerObject: { [key: string]: string };
	export let categoryName: string;
	export let categoryDescription: string;

	const NUMBER_OF_VALUES = 8;
	let result: string;
	let spinnerValues: string[] = shuffle(Object.keys(spinnerObject));
	let numberOfValues: number = Math.min(NUMBER_OF_VALUES, spinnerValues.length - 1);
	let isLocked = false;
	let isVisible = false;
	let tooltipText: string = categoryDescription;

	$: transform = `translateY(-${110 * numberOfValues}px)`;
	$: transitionDuration = '1ms';

	export async function reset() {
		if (!isLocked) {
			isVisible = false;
			spinnerValues = shuffle(Object.keys(spinnerObject));
			transform = `translateY(-${110 * numberOfValues}px)`;
			await new Promise((resolve) => setTimeout(resolve, 1));
			transitionDuration = '2s';
			tooltipText = categoryDescription;
		}
	}

	export async function spin() {
		if (!isLocked) {
			transform = 'translateY(0)';
			isVisible = false;
			await new Promise((resolve) => setTimeout(resolve, 2000));
			transitionDuration = '1ms';
			tooltipText = spinnerObject[result];
		}
	}

	function shuffle(arr: string[]) {
		let m = arr.length;
		while (m) {
			const i = Math.floor(Math.random() * m--);
			[arr[m], arr[i]] = [arr[i], arr[m]];
		}
		result = arr[0];
		let resultArray = [...arr].slice(0, NUMBER_OF_VALUES);
		resultArray.push(categoryName);
		return resultArray;
	}

	function showLocker() {
		if (tooltipText == spinnerObject[result]) isVisible = true;
	}

	function hideLocker() {
		if (!isLocked) isVisible = false;
	}
</script>

<div class="tooltip">
	<div
		class="spinner"
		on:mouseenter={showLocker}
		on:mouseleave={hideLocker}
		role="tooltip"
	>
		<div
			class="spinner-boxes"
			style="transition-duration: {transitionDuration}; transform: {transform}"
		>
			{#each spinnerValues as value (value)}
				<div class="spinner-box">
					<span use:fit={{ max_size: 45 }}>
						{value}
					</span>
				</div>
			{/each}
		</div>
		<Locker bind:isLocked {isVisible} />
	</div>
	<span class="tooltip-text">{tooltipText}</span>

	<i class="tooltip-icon">
		<Fa icon={faEye} size="xs" />
	</i>
</div>

<style lang="scss">
	.tooltip {
		position: relative;
		display: inline-block;

		.spinner {
			background: #fafafa;
			width: 200px;
			height: 110px;
			overflow: hidden;
			border-radius: 5px;
			margin: 5px;

			.spinner-boxes {
				transition: transform 2s ease-in-out;
				display: flex;
				flex-direction: column;
				gap: 40px;
				padding-top: 20px;

				.spinner-box {
					height: 70px;
					margin: 0 20px;
					width: 160px;
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: default;

					span {
						white-space: nowrap;
						text-align: center;
					}
				}
			}
		}

		.tooltip-text {
			visibility: hidden;
			width: 190px;
			background-color: #555;
			color: #fff;
			text-align: center;
			border-radius: 6px;
			padding: 15px 5px;
			position: absolute;
			z-index: 1;
			bottom: 100%;
			margin-left: 5px;
			margin-bottom: 5px;
			opacity: 0;
			transition: opacity 1s;
			border: 1px black solid;

			&::after {
				content: '';
				position: absolute;
				top: 100%;
				left: 50%;
				margin-left: -5px;
				border-width: 5px;
				border-style: solid;
				border-color: #555 transparent transparent transparent;
			}
		}

		&:hover .tooltip-text {
			visibility: visible;
			opacity: 1;
		}

		.tooltip-icon {
			color: grey;
			position: absolute;
			top: 3px;
			right: 12px;
		}
	}
</style>
