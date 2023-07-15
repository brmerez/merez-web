<script lang="ts">
	import { auth } from '@lib/firebase';
	import user from '@stores/user';
	import { onMount } from 'svelte';

	onMount(() => {
		const unsub = auth.onAuthStateChanged((newUser) => {
			// @ts-ignore
			console.log(
				'Mudando usuário para ' +
					newUser?.uid +
					' | ' +
					newUser?.email +
					' | ' +
					newUser?.displayName
			);
			if (newUser && newUser.email) {
				$user = { uid: newUser.uid, email: newUser.email, displayName: newUser.displayName };
			} else {
				$user = undefined;
			}
		});

		return unsub;
	});
</script>

<slot />
