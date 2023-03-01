<script lang="ts">
	import '../styles.css';
	import Footer from '@components/footer.svelte';
	import Header from '@components/header.svelte';
</script>

<div id="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style lang="scss">
	#app {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		background: var(--color-body-background);
		background-image: radial-gradient(currentColor 1px, transparent 1px),
			radial-gradient(currentColor 1px, transparent 1px);
		background-size: calc(20 * 1px) calc(20 * 1px);
		background-position:
			0 0,
			calc(10 * 5px) calc(10 * 5px);
		height: 100%;
		min-height: 100vh;
		width: 100%;

		main {
			padding: 1rem;
			box-sizing: border-box;
		}
	}
</style>
