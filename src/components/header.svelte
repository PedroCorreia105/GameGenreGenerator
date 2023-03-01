<script lang="ts">
</script>

<header>
	<div class="title">
		<h1>Game Genre Generator</h1>
	</div>
</header>

<style lang="scss">
	:root {
		--color-background: #000119;
		--stroke-width: calc(1em / 16);
		--font-size: 60px;
		--font-weight: 800;
		--letter-spacing: calc(1em / 8);
	}

	@media (max-width: 480px) {
		:root {
			--font-size: 40px;
		}
	}

	header {
		background-image: url(/img/header.png);
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: 550px 300px;
		background-position: left top;
		background-color: var(--color-header-background);
		position: relative;
		color: white;
		width: 100%;
		border-bottom: 3px var(--color-header-border) solid;

		.title {
			padding: 20px 0;
			text-align: center;
			box-sizing: border-box;
			display: grid;
			font-family: Poppins, sans-serif;
			margin: 0;
			place-items: center;
			padding: 5vmin;

			h1 {
				background-clip: text;
				-webkit-background-clip: text;
				background-image: linear-gradient(to right, #24d5e9, #b98def, #f9a93a, #a0e068);
				color: var(--color-background);
				font-size: var(--font-size);
				font-weight: var(--font-weight);
				letter-spacing: var(--letter-spacing);
				padding: calc(--stroke-width / 2);
				-webkit-text-stroke-color: transparent;
				-webkit-text-stroke-width: var(--stroke-width);
			}
		}
	}
</style>
