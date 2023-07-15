<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '@lib/firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';

	let email: string;
	let senha: string;

	async function doLogin() {
		if (!(email && senha)) return;

		const res = await signInWithEmailAndPassword(auth, email, senha);
		console.log(`Logando usuário ${res.user.email} | ${res.user.uid}`);
		goto('/');
	}
</script>

<form on:submit|preventDefault={doLogin}>
	<label for="emailInput">Email:</label>
	<input id="emailInput" type="text" bind:value={email} />
	<br />
	<label for="pswdInput">Senha:</label>
	<input id="pswdInput" type="password" bind:value={senha} />
	<br />
	<button disabled={!(email && senha)}>Entrar</button>
</form>
