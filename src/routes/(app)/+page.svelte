<script lang="ts">
</script>

<svelte:head>
	<title>merez.dev</title>
</svelte:head>

<div>
	<div class="present">
		<div class="legenda">
			<h4 class="dst heading">Olá!</h4>
			<p>Meu nome é Bruno, e esse é meu site pessoal</p>
			<p>Sou, dentre outras coisas:</p>
			<ul>
				<li>Corinthiano</li>
				<li>Desenvolvedor <a href="/blog/tags/java" class="dst">Java</a></li>
				<li>Apreciador de <a href="/blog/tags/linux" class="dst">Linux</a></li>
				<li>Péssimo em escrever <a href="/sobre" class="dst">sobre mim</a> mesmo</li>
			</ul>
			<p>
				Escrevo ocasionalmente neste <a href="/blog" class="dst">blog</a> sobre assuntos diversos .
			</p>
		</div>
		<!-- <img class="foto" src="eo.jpeg" alt="" /> -->
	</div>
	<div />
	<hr />
</div>

<style lang="scss">
	@use '@styles/app.scss';

	.dst {
		color: app.$accent;
	}

	.heading {
		font-size: 3rem;
	}

	.legenda {
		font-size: 1.3rem;
	}

	.present {
		gap: 2rem;
		display: flex;
		padding: 2rem 0;
		align-items: center;
		flex-direction: column-reverse;
		justify-content: space-between;
		@media (min-width: 768px) {
			flex-direction: row;
		}
	}

	.foto {
		width: clamp(10rem, 50vw, 20rem);
		border-radius: 16px;
		object-fit: cover;
		aspect-ratio: 1/1;
		border-right: 8px solid app.$accent;
		border-bottom: 10px solid app.$accent;
		border-top: 4px solid app.$accent;
		border-left: 4px solid app.$accent;
		border-bottom-right-radius: 2px;
	}
</style>
