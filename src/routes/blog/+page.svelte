<script lang="ts">
	import Card from '../../components/Card.svelte';
	export let data;
	data.posts = data.posts.slice(0, 10);
	let clientWidth: number;
	$: isMobile = clientWidth > 768;
</script>

<svelte:head>
	<title>merez.dev | blog</title>
</svelte:head>

<svelte:window bind:innerWidth={clientWidth} />

<section>
	<!-- <div class="blank" /> -->
	<div>
		{#each data.posts as post (post.id)}
			<Card data={{ ...post, img: 'https://picsum.photos/600/600', body: '<h4>teste</h4>' }} />
		{/each}
	</div>
	{#if isMobile}
		<div class="blog-sidebar">
			<h4>Tags</h4>
			<hr />
		</div>
	{/if}
</section>

<style lang="scss">
	@use '../../app.scss';

	.blog-sidebar {
		margin-left: auto;
		max-width: 15rem;
	}

	.blank {
		width: 4px;
		border-radius: 2px;
		background-image: linear-gradient(to bottom, app.$accent, app.$accent2);
	}
	section {
		display: flex;
		gap: 1rem;
	}
	div {
		@media (min-width: 768px) {
			width: clamp(500px, 60%, 700px);
		}
	}
</style>
