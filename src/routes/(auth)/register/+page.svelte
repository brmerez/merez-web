<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '@lib/firebase';
	import user from '@stores/user';
	import { createUserWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth';

	let email: string;
	let senha: string;
	let displayName: string;

	async function doRegister() {
		// TODO: Validação e Erros
		if (!(email && senha)) return;
		const res = await createUserWithEmailAndPassword(auth, email, senha);

		if (res.user) {
			await updateProfile(res.user, {
				displayName: displayName
			});
		}

		// @ts-ignore
		$user = { ...$user, displayName: displayName };

		console.log(`Criando usuário ${res.user.email} | ${res.user.uid}`);
		goto('/');
	}
</script>

<form on:submit|preventDefault={doRegister}>
	<label for="emailInput">Nome:</label>
	<input id="emailInput" type="text" bind:value={displayName} />
	<br />
	<label for="emailInput">Email:</label>
	<input id="emailInput" type="text" bind:value={email} />
	<br />
	<label for="pswdInput">Senha:</label>
	<input id="pswdInput" type="password" bind:value={senha} />
	<br />
	<button disabled={!(email && senha)}>Cadastrar</button>
</form>
