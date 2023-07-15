<script lang="ts">
	import '@styles/app.css';
	import '@styles/app.scss';
	import UserAuth from './UserAuth.svelte';
</script>

<div id="container">
	<UserAuth />
	<slot />
</div>

<style lang="scss">
	@use '@styles/app.scss';

	#container {
		position: relative;
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		color: #fff;
		background-color: app.$background;
		font-family: sans-serif;
	}
</style>
