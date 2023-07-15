<script lang="ts">
	// import LinkedIcon from './LinkedIcon.svelte';
	import Icon from '@iconify/svelte';
	import user from '@stores/user';

	export let open = false;
	let prevY: number;
	let currY: number;
	let clientHeight: number;
	let clientWidth: number;
	$: showMenu = clientWidth < 768;

	const deriveDirection = (y: number) => {
		const direction = !prevY || prevY < y ? 'down' : 'up';
		prevY = currY;

		return direction;
	};

	$: direction = deriveDirection(currY);
	$: hide = direction === 'down' && currY > clientHeight * 3;
</script>

<svelte:window bind:scrollY={currY} />

<header class:hide bind:clientHeight bind:clientWidth>
	<div class="header-inside">
		<div id="logo">
			<a href="/">
				<h4>merez<span>.dev</span></h4>
			</a>
		</div>
		{#if showMenu}
			<!-- <Icon icon="gg:menu" /> -->
			<button on:click={() => (open = !open)}><Icon icon="gg:menu" /></button>
		{:else}
			<nav>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<ul role="list">
					<li>
						<a href="/blog"> blog </a>
					</li>
					<li>
						<a href="/projetos"> projetos </a>
					</li>
					{#if $user}
						<li class="special">
							<a href="/admin"> admin </a>
						</li>
					{/if}
				</ul>
			</nav>
		{/if}
	</div>
</header>

<style lang="scss">
	@use '@styles/app.scss';

	.special {
		color: yellow;
		:hover {
			color: lime;
		}
	}

	.hide {
		top: -80px;
		transition: all 0.1s ease-in;
	}

	button {
		background-color: transparent;
		font-size: 2em;
		color: app.$accent;
		border: 0;
		&:hover {
			cursor: pointer;
		}
	}

	.header-inside {
		align-items: center;
		overflow: hidden;
		display: flex;
		height: 100%;
		gap: 0.5em;
		max-width: 61rem;
		margin: 0 auto;
	}

	header {
		width: 100%;
		height: 80px;
		font-family: monospace;
		border-bottom: 1px solid #888;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 2;
		background-color: app.$background;
		transition: all 0.1s ease-in;
		padding: 0 2em;

		#logo {
			display: flex;
			align-items: center;
			gap: 0.5em;
			flex: 1;

			h4 {
				font-family: monospace;
				font-size: 1.5em;
				font-weight: 300;
				span {
					color: app.$accent;
				}
			}
		}

		nav {
			ul {
				li {
					/* a {
						padding: 0.5rem 1rem;
					} */
					transition: all 0.3s ease;
					:hover {
						color: app.$accent;
						transition: all 0.2s ease;
					}
				}
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 1rem;
				font-weight: bold;
				gap: 0.8em;
			}
		}
	}
</style>
