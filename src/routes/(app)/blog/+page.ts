// @ts-ignore
import type { Card } from '@types/Card';

export async function load() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data: Card[] = await res.json();
	return { posts: data };
}
