<script lang="ts">
	import Card from '@components/Card.svelte';
	export let data;
	data.posts = data.posts.slice(0, 10);
	let clientWidth: number;
</script>

<svelte:head>
	<title>merez.dev | blog</title>
</svelte:head>

<svelte:window bind:innerWidth={clientWidth} />

<section>
	<div>
		{#each data.posts as post (post.id)}
			<Card data={{ ...post, img: 'https://picsum.photos/600/600', body: '<h4>teste</h4>' }} />
		{/each}
	</div>
</section>

<style lang="scss">
	@use '@styles/app.scss';

	section {
		display: flex;
		gap: 1rem;
	}
	div {
		align-self: self-start;
		@media (min-width: 768px) {
			width: clamp(500px, 60%, 700px);
		}
	}
</style>
