<script>
	import Footer from '@components/Footer.svelte';
	import Header from '@components/Header.svelte';
	import PageContent from '@components/PageContent.svelte';
	import PageLayout from '@components/PageLayout.svelte';
</script>

<PageLayout>
	<Header />
	<PageContent>
		<slot />
	</PageContent>
	<Footer />
</PageLayout>

<style lang="scss">
</style>
