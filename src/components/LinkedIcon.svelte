<script lang="ts">
	import Icon from '@iconify/svelte';
	export let link: string;
	export let icon: string;
</script>

<a class="icon" href={link}>
	<Icon {icon} {...$$props} />
</a>

<style lang="scss">
	@use '../app.scss';

	.icon {
		&:hover {
			color: app.$accent;
		}
		font-size: 1.5rem;
	}
</style>
