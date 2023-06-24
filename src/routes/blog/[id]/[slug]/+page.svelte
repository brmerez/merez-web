<script lang="ts">
	import type { Card } from '../../../../types/Card';

	export let data: Card;
	data = { ...data, img: 'https://picsum.photos/1200/1200' };
	const dt = Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
	data.title = 'Sobre a prática e a contradição';
</script>

<svelte:head>
	<title>merez.dev | {data.title}</title>
</svelte:head>

<article>
	<img class="hero" src={data.img} alt={data.title} />
	<h1 id="post-title">{data.title}</h1>
	<p><i>por Mao Zedong</i></p>
	<br />
	<small>{dt.format(new Date())}</small>
	<br />
	<hr />
	<div class="content">
		<p>
			Sobre essa lei, <a href="../../../dicionario/verbetes/l/lenin.htm" target="_blank">Lenine</a>
			dizia com frequência que era a essência da dialéctica, afirmando também que era o núcleo da dialéctica.
			É assim que, ao estudarmos tal lei, somos obrigados a abordar um amplo círculo de problemas, um
			grande número de questões filosóficas. Se formos capazes de esclarecer todas essas questões, nós
			compreenderemos nos seus verdadeiros fundamentos a dialéctica materialista. Essas questões são:
			as duas concepções do mundo, a universalidade da contradição, a particularidade da contradição,
			a contradição principal e o aspecto principal da contradição, a identidade e a luta dos aspectos
			da contradição, o lugar do antagonismo na contradição.
		</p>
		<p>
			A critica a que, nos círculos filosóficos soviéticos, foi submetido nestes últimos anos o
			idealismo da escola de Deborine, suscitou um grande interesse entre nós. O idealismo de
			Deborine exerctu uma influência das mais perniciosas no seio do Partido Comunista da China,
			não se podendo dizer que as concepções dogmáticas existentes no nosso Partido não tenham coisa
			alguma a ver com tal escola. É por isso que, actualmente, o objectivo principal do nosso
			estudo da filosofia é extirpar as concepções dogmáticas.
		</p>
		<blockquote>De novo, essas referências já se encontram em Marx.</blockquote>
		<p>
			{@html data.body}
		</p>
		<h3>I. Sobre a Prática</h3>
		<p>
			A critica a que, nos círculos filosóficos soviéticos, foi submetido nestes últimos anos o
			idealismo da escola de Deborine, suscitou um grande interesse entre nós. O idealismo de
			Deborine exerctu uma influência das mais perniciosas no seio do Partido Comunista da China,
			não se podendo dizer que as concepções dogmáticas existentes no nosso Partido não tenham coisa
			alguma a ver com tal escola. É por isso que, actualmente, o objectivo principal do nosso
			estudo da filosofia é extirpar as concepções dogmáticas.
		</p>
		<img src="https://picsum.photos/1200/1200" alt="" />
	</div>
	<br />
	<hr />
</article>

<style lang="scss">
	@use '../../../../app.scss';

	article {
		::selection {
			background-color: app.$accent2;
		}
		padding-top: 1rem;
		padding-bottom: 15rem;
		@media screen and (min-width: 768px) {
			width: clamp(300px, 80%, 800px);
			margin: 0 auto;
		}
	}

	small {
		font-style: italic;
		color: app.$accent;
		font-size: clamp(0.8rem, 1vw, 1rem);
		font-family: monospace;
	}

	blockquote {
		margin-inline: 1em;
		border-left: 0.3em solid app.$accent;
		background-color: #111;
		padding: 1.5em;
		font-style: italic;
		border-radius: 0.15em;
	}

	.content {
		line-height: 2em;
		font-size: clamp(0.7em, 4vw, 1.1em);

		img {
			padding: 1.5em 2%;
			object-fit: cover;
		}

		a {
			color: app.$accent;
		}
		p {
			margin: 1.5em 0;
		}
	}

	#post-title {
		font-family: 'Catamaran';
		font-size: clamp(1.2rem, 10vw, 2.5rem);
	}

	.hero {
		width: 100%;
		object-fit: cover;
		object-position: center;
		height: clamp(100px, 40vh, 500px);
		margin-bottom: 2rem;
		border: 3px solid #fff;
		border-bottom: 1rem solid #fff;
	}
</style>
