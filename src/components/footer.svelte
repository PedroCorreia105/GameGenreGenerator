<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import Languager from './languager.svelte';
	import Emailer from './emailer.svelte';
	import { t } from '@i18n/i18n';
</script>

<footer>
	<div class="top-bar">
		<div class="footer-info">
			<h2 class="footer-title">
				<span class="upper-case">G</span>ame <span class="upper-case">G</span>enre
				<span class="upper-case">G</span>enerator
			</h2>
			<br />
			<p>{$t('footer.description1')}</p>
			<br />
			<p>{$t('footer.description2')}</p>
			<Languager />
		</div>
		<div class="contact-me">
			<h2 class="footer-title">
				{$t('footer.leave.message')}
			</h2>
			<Emailer />
		</div>
	</div>
	<div class="bottom-bar">
		<img src="/img/logo2.png" alt="Controller" />
		<span>
			{$t('footer.madein')} -
			<a href="https://github.com/PedroCorreia105/GameGenreGenerator"
				>{$t('footer.opensource')} <Fa icon={faGithub} /></a
			>
		</span>
		<img src="/img/logo2.png" alt="Controller" />
	</div>
</footer>

<style lang="scss">
	footer {
		background-image: url(/img/footer.png);
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: right bottom;
		background-size: 700px 350px;
		background-color: var(--color-header-background);
		position: relative;
		color: white;
		width: 100%;
		border-top: 3px var(--color-header-border) solid;

		.top-bar {
			padding: 30px 100px;
			display: flex;
			justify-content: space-evenly;
			flex-flow: row wrap;
			gap: 30px;

			.footer-info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			& > div {
				width: 40%;
				max-width: 500px;
				min-width: 250px;

				.footer-title {
					border-left: 4px solid var(--color-footer-theme);
					padding-left: 10px;
					padding-bottom: 10px;
					line-height: 2.25rem;
					font-weight: 700;

					&::first-letter,
					.upper-case {
						color: var(--color-footer-theme);
						font-size: inherit;
					}
				}
			}
		}

		.bottom-bar {
			background-color: #232127;
			padding: 8px;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-evenly;

			img {
				height: 25px;
				margin: 0 5px;
			}
		}

		@media (max-width: 480px) {
			.bottom-bar {
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;

				img {
					margin: 15px;
				}
			}
		}
	}
</style>
