const BASE_URL = "http://localhost:3003/api/v1"

function expensiveCall() {
	return new Promise((resolve) => {
		setTimeout(() => {
			const data = { message: "Data fetched after 2 seconds" };
			resolve(data);
		}, 3000); // Delay of 2 seconds
	});
}
export const getPublicArtilces = async ({ query, currentPage }: { query: string, currentPage: number }) => {
	try {
		const res = await fetch(`${BASE_URL}/posts?query=${query}&page=${currentPage}&limit=2`, { cache: 'no-store' });
		if (!res.ok) throw new Error("Bad Response", {
			cause: {
				res,
			},
		})
		return res.json();
	}
	catch (err) {
	}
}

export const updatedPost = async (id: number) => {
	expensiveCall();
	try {
		const res = await fetch(`${BASE_URL}/posts/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title: 'updated with nextjs client' }),
			credentials: 'include', // Include the cookie with the request
		});
		if (!res.ok) throw new Error("Bad Response", {
			cause: {
				res,
			},
		})
		return res.json();
	}
	catch (err) {
		console.log(err);
	}
}

interface userData {
	username: string,
	email?: string,
	password: string,
}
export const authUser = async (data: userData, route: string) => {
	try {
		const res = await fetch(`${BASE_URL}/auth/${route}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include', // Important: This ensures cookies are sent with the request!
			body: JSON.stringify(data),
		}
		); if (!res.ok) throw new Error("Bad Response", {
			cause: {
				res,
			},
		})
		return await res.json();
	}
	catch (err) {
		console.log(err);
	}
}

export const logout = async () => {
	try {
		const res = await fetch(`${BASE_URL}/auth/logout`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include', // Important: This ensures cookies are sent with the request!
		}
		); if (!res.ok) throw new Error("Bad Response", {
			cause: {
				res,
			},
		})
		return await res.json();
	}
	catch (err) {
	}
}


