<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '@lib/firebase';
	import user from '@stores/user';
	import { signOut } from 'firebase/auth';

	async function doLogout() {
		if (!user) throw new Error('Trying to signout but no valid user! (???)');
		signOut(auth);
		goto('/');
	}
</script>

<header>
	<div class="header-inner">
		<div id="logo">
			<a href="/">
				<h4>merez<span class="accent">.dev</span> <span class="accent-alt">// admin</span></h4>
			</a>
		</div>
		<button>blog</button>
		<button on:click={doLogout}>sair</button>
	</div>
</header>

<style lang="scss">
	@use '@styles/app.scss';

	.accent-alt {
		color: lime;
	}

	.header-inner {
		align-items: center;
		overflow: hidden;
		display: flex;
		height: 100%;
		gap: 0.5em;
		max-width: 61rem;
		margin: 0 auto;
	}

	header {
		width: 100%;
		height: 80px;
		font-family: monospace;
		border-bottom: 1px solid #888;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 2;
		background-color: app.$background;
		transition: all 0.1s ease-in;
		padding: 0 2em;

		#logo {
			display: flex;
			align-items: center;
			gap: 0.5em;
			flex: 1;

			h4 {
				font-family: monospace;
				font-size: 1.5em;
				font-weight: 300;
			}
		}
	}
</style>
