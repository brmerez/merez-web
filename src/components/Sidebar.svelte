<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onDestroy } from 'svelte';

	export let open = false;

	onDestroy(() => {
		open = false;
	});
</script>

<aside class:hidden={!open}>
	<div class="sidebar-header">
		<h4>menu.md</h4>
		<!-- <Icon icon="gg:close" on:click={() => (open = !open)} /> -->
		<button on:click={() => (open = !open)}><Icon icon="gg:close" /></button>
	</div>
	<div class="sidebar-content">
		<a href="/" on:click={() => (open = !open)}>~/</a>
		<a href="/blog" on:click={() => (open = !open)}>~/blog/</a>
		<a href="/projetos" on:click={() => (open = !open)}>~/projetos/</a>
	</div>
</aside>

<style lang="scss">
	@use '../app.scss';

	aside {
		height: 100vh;
		width: 100vw;
		position: fixed;
		z-index: 5;
		top: 0;
		left: 0;
		background-color: rgba(85, 85, 85, 0.95);
		padding: 1.5em;
		transition: all 0.3s ease;
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

	.sidebar-content {
		display: flex;
		flex-direction: column;
		gap: 1em;
		a {
			font-weight: bolder;
			font-family: monospace;
			font-size: 2em;
		}
	}

	.sidebar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 1em;
		margin-bottom: 1em;
		border-bottom: 2px solid #fff;
	}

	.hidden {
		left: -100%;
		transition: left 0.3s ease;
	}
</style>
