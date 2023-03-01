<script lang="ts">
	export let isVisible: boolean;
	export let isLocked: boolean;
</script>

{#if isVisible}
	<div class="locker">
		<label class="switch">
			<input class="locker-button" type="checkbox" bind:checked={isLocked} />
			<span>
				<em />
			</span>
		</label>
	</div>
{/if}

<style lang="scss">
	$primary: #2d4bf0;
	$lightGrey: #99a3ba;

	.locker {
		position: sticky;
		bottom: 5px;

		.switch {
			display: block;
			cursor: pointer;
			height: 24px;
			width: 42px;
			margin: 12px auto;
			position: relative;

			.locker-button {
				display: none;

				& + span {
					min-height: 24px;
					line-height: 24px;
					display: block;
					color: $lightGrey;
					position: relative;
					// vertical-align: middle;
					white-space: nowrap;
					transition: color 0.3s ease;

					&:before,
					&:after {
						content: '';
						display: block;
						position: absolute;
						border-radius: 12px;
					}
					&:before {
						top: 0;
						left: 0;
						width: 42px;
						height: 24px;
						background: #e4ecfa;
						transition: all 0.3s ease;
					}
					&:after {
						width: 18px;
						height: 18px;
						background: #fff;
						top: 3px;
						left: 3px;
						box-shadow: 0 1px 3px rgba(#121621, 0.1);
						transition: all 0.45s ease;
					}
					em {
						width: 8px;
						height: 7px;
						background: $lightGrey;
						position: absolute;
						left: 8px;
						bottom: 7px;
						border-radius: 2px;
						display: block;
						z-index: 1;
						transition: all 0.45s ease;
						&:before {
							content: '';
							width: 2px;
							height: 2px;
							border-radius: 1px;
							background: #fff;
							position: absolute;
							display: block;
							left: 50%;
							top: 50%;
							margin: -1px 0 0 -1px;
						}
						&:after {
							content: '';
							display: block;
							border-top-left-radius: 4px;
							border-top-right-radius: 4px;
							border: 1px solid $lightGrey;
							border-bottom: 0;
							width: 6px;
							height: 4px;
							left: 1px;
							bottom: 6px;
							position: absolute;
							z-index: 1;
							transform-origin: 0 100%;
							transition: all 0.45s ease;
							transform: rotate(-35deg) translate(0, 1px);
						}
					}
				}
				&:checked + span {
					&:before {
						background: rgba($primary, 0.35);
					}
					&:after {
						background: #fff;
						transform: translate(18px, 0);
					}
					em {
						transform: translate(18px, 0);
						background: $primary;
						&:after {
							border-color: $primary;
							transform: rotate(0deg) translate(0, 0);
							width: 4px;
						}
					}
				}
			}
		}
	}
</style>
