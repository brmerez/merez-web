<script>
	import LinkedIcon from './LinkedIcon.svelte';
</script>

<footer>
	<div class="footer-inner">
		<small>&copy; Bruno Merez 2023 | Todos os direitos reservados.</small>
		<div class="socials">
			<LinkedIcon icon="bi:github" link="https://github.com/brmerez" />
			<LinkedIcon icon="bi:linkedin" link="https://github.com/brmerez" />
			<LinkedIcon icon="bi:twitter" link="https://github.com/brmerez" />
		</div>
	</div>
</footer>

<style lang="scss">
	@use '@styles/app.scss';

	.footer-inner {
		display: flex;
		align-items: center;
		flex-direction: column;
		max-width: 61rem;
		margin: auto;
		gap: 1em;
		height: 100%;

		@media (min-width: 768px) {
			flex-direction: row;
			justify-content: start;
		}
	}

	footer {
		background-color: #111;
		justify-content: center;
		padding: 0.5em 2em;

		.socials {
			display: flex;
			gap: 1em;
		}

		small {
			font-family: monospace;
			font-size: 1.2em;
			flex: 1;
		}
	}
</style>
