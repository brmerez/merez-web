<script>
	import AdminHeader from '@components/AdminHeader.svelte';
	import PageContent from '@components/PageContent.svelte';
	import PageLayout from '@components/PageLayout.svelte';
	import Protected from '@components/Protected.svelte';
</script>

<PageLayout>
	<Protected>
		<AdminHeader />
		<PageContent>
			<slot />
		</PageContent>
	</Protected>
</PageLayout>
