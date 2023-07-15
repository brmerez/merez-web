import { writable } from 'svelte/store';

interface IUserStore {
	uid: string;
	email: string;
	displayName: string | null;
}

const user = writable<IUserStore | undefined>();

export default user;
