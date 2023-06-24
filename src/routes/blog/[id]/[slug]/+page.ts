export async function load({ params }) {
	const { id, slug } = params;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const data = res.json();
	return data;
}
