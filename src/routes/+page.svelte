<script lang="ts">
</script>

<svelte:head>
	<title>merez.dev</title>
</svelte:head>

<div class="present">
	<div class="sobre">
		<div class="legenda">
			<h4 id="heading">Olá!</h4>
			<p>Meu nome é Bruno, e esse é meu site pessoal!</p>
		</div>
		<img class="foto" src="eo.jpeg" alt="" />
	</div>
</div>

<style lang="scss">
	@use '../app.scss';

	.present {
		flex: 1;
		font-family: 'Catamaran';
		text-align: center;
		@media (min-width: 768px) {
			text-align: start;
		}
	}

	.legenda {
		flex: 1;
	}

	.foto {
		width: clamp(5em, 40vw, 8em);
		border-radius: 16px;
		object-fit: cover;
		aspect-ratio: 1/1;
		border-right: 8px solid app.$accent;
		border-bottom: 10px solid app.$accent;
		border-top: 4px solid app.$accent;
		border-left: 4px solid app.$accent;
		border-bottom-right-radius: 2px;
	}

	.sobre {
		display: flex;
		font-size: clamp(1em, 5vw, 2em);
		flex-direction: column-reverse;
		align-items: center;
		@media (min-width: 768px) {
			flex-direction: row;
		}
	}

	#heading {
		font-size: clamp(1.3em, 14vw, 2em);
		font-weight: bolder;
		color: app.$accent;
	}
</style>
