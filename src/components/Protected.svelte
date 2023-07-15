<script lang="ts">
	import user from '@stores/user';
</script>

{#if $user}
	<slot />
{:else}
	<section>
		<h4>Não autorizado.</h4>
		<p>Por favor <a href="/login">faça login</a> para acessar este conteúdo.</p>
	</section>
{/if}

<style lang="scss">
	@use '@styles/app.scss';

	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		height: 100vh;

		a {
			color: app.$accent;
			text-decoration: underline;
		}

		h4 {
			font-size: x-large;
		}
	}
</style>
