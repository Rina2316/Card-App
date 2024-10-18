
export async function getData() {	
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7');

		if (!res.ok) {
			throw new Error(`Error: ${res.status}`);
		}
		const data = await res.json();
		return data
	} catch (error) {
		console.error('Error query: ', error);
	}
}

