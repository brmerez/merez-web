<script lang="ts">
	import '@styles/app.css';
	import '@styles/app.scss';
	import Footer from '@components/Footer.svelte';
	import Header from '@components/Header.svelte';
	import Sidebar from '@components/Sidebar.svelte';
	import PageLayout from '@components/PageLayout.svelte';
	import PageContent from '@components/PageContent.svelte';
	let open = false;
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700&family=Dosis:wght@200;300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<PageLayout>
	<Sidebar bind:open />
	<Header bind:open />
	<PageContent>
		<slot />
	</PageContent>
	<Footer />
</PageLayout>
