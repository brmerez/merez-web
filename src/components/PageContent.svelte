<main>
	<slot />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		min-height: calc(100vh - 80px - 3em);
		flex: 1;
		max-width: 80rem;
		margin: 0 auto;
		padding: 2em;
	}
</style>
