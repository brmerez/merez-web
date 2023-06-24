<script lang="ts">
	import '../app.css';
	import '../app.scss';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Sidebar from '../components/Sidebar.svelte';

	let open = false;
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700&family=Dosis:wght@200;300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div id="container">
	<Sidebar bind:open />
	<Header bind:open />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	@use '../app.scss';

	#container {
		position: relative;
		color: #fff;
		background-color: app.$background;
		font-family: sans-serif;
	}

	main {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		min-height: calc(100vh - 80px - 3em);
		max-width: 65rem;
		margin: 0 auto;
		padding: 2em;
	}
</style>
