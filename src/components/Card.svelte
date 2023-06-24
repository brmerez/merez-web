<script lang="ts">
	import type { Card } from '../types/Card';
	export let data: Card;
	const dt = Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

	const slugify = (name: string) => name.toLowerCase().split(' ').join('-');
	const url = `/blog/${data.id}/${slugify(data.title)}/`;
</script>

<card class="card">
	<a href={url}>
		<img class="card-img" src={data.img} alt={data.title} />
	</a>
	<div class="card-text">
		<a href={url}>
			<h4 class="card-title">{data.title}</h4>
		</a>
		<small class="card-sub">{dt.format(data.createdAt)}</small>
	</div>
</card>

<style lang="scss">
	@use '../app.scss';

	a {
		flex-shrink: 0;
		:hover {
			transition: all 0.2s ease;
			border-color: app.$accent;
		}
	}

	.card-img {
		height: 8rem;
		width: 100%;
		border: 2px solid #fff;
		border-bottom: 0.75rem solid #fff;
	}

	.card-sub {
		font-family: monospace;
		font-size: 1em;
	}

	.card-text {
		display: flex;
		flex-direction: column;
		text-overflow: ellipsis;
		a:hover {
			h4 {
				transition: all 0.2s ease;
				/* background-color: app.$accent; */
				color: #fff;
			}
		}
	}

	.card-title {
		font-family: 'Catamaran';
		font-size: clamp(1.2rem, 4vw, 1.5rem);
		color: app.$accent;
		transition: all 0.2s ease;
	}

	.card {
		display: flex;
		align-items: center;
		padding: 1rem 0;
		gap: 1rem;
		border-bottom: 1px solid #888;
	}
</style>
