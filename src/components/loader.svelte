<script lang="ts">
</script>

<div class="loader" />

<style lang="scss">
	:root {
		--size: 30px;
	}

	.loader {
		display: inline-block;
		width: var(--size);
		height: var(--size);

		&:after {
			content: ' ';
			display: block;
			width: var(--size);
			height: var(--size);
			border-radius: 50%;
			border: 4px solid #fff;
			border-color: #fff transparent #fff transparent;
			animation: loader 1.2s linear infinite;
		}
	}
	@keyframes loader {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
