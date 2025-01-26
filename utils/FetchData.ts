const PORT = 3002
const IP = "http://192.168.116.165:3002/api/v1"
const BASE_URL = `http://localhost:${PORT}/api/v1`

function expensiveCall() {
	return new Promise((resolve) => {
		setTimeout(() => {
			const data = { message: "Data fetched after 2 seconds" };
			resolve(data);
		}, 3001); // Delay of 2 seconds
	});
}

export const userLogout = async () => {
	try {
		const res = await fetch(`${BASE_URL}/auth/signout`, {


		});
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


export const getPosts = async () => {
	try {
		const res = await fetch(`${BASE_URL}/posts`);
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
export const getPublicArtilces = async ({ query, currentPage }: { query: string, currentPage: number }) => {
	try {
		const res = await fetch(`${BASE_URL}/posts?query=${query}&page=${currentPage}`, { cache: 'no-store' });
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

export const getarticleById = async (articleId: string) => {
	try {
		const res = await fetch(`${BASE_URL}/posts/search/${articleId}`, { cache: 'no-store' });
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
		const res = await fetch(`${BASE_URL}/auth/signout`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include', // Important: This ensures cookies are sent with the request!
			cache: 'no-cache'
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




export const getUserProfile = async () => {
	try {
		const res = await fetch(`${BASE_URL}/users/profile`, {
			method: 'GET',
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
		console.log(err);
	}
}

export const createComment = async (postId: number, text: string) => {
	try {
		const res = await fetch(`${BASE_URL}/comments/create`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include', // Important: This ensures cookies are sent with the request!
			body: JSON.stringify({ postId, text })
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

export const getCommentsByPostId = async (postId: number) => {
	try {
		const res = await fetch(`${BASE_URL}/comments?postId=${postId}`, {
			method: 'GET',
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
		console.log(err);
	}
}



export const likeComment = async (commentId: number, likeType: string) => {
	try {
		const res = await fetch(`${BASE_URL}/like/comment/${commentId}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include', // Important: This ensures cookies are sent with the request!
			body: JSON.stringify({ likableType: likeType }),
		}
		); if (!res.ok) throw new Error("Bad Response", {
			cause: {
				res,
			},
		})
		console.log(res)
		return await res.json();
	}
	catch (err) {
		console.log(err);
	}
}
