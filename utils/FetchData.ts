const PORT = process.env.NEXT_PUBLIC_API_PORT || 3000
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || `http://localhost:${PORT}/api/v1`

export const userLogout = async () => {
	try {
		const res = await fetch(`${BASE_URL}/auth/signout`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		});

		if (!res.ok) {
			throw new Error(`Failed to logout: ${res.status} ${res.statusText}`);
		}

		return await res.json();
	} catch (err) {
		console.error('Logout error:', err);

	}
}

export const getPosts = async () => {
	try {
		const res = await fetch(`${BASE_URL}/posts`);

		if (!res.ok) {
			throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
		}

		return await res.json();
	} catch (err) {
		console.error('Error fetching posts:', err);

	}
}

export const getPublicArtilces = async ({ query, currentPage }: { query: string, currentPage: number }) => {
	try {
		const res = await fetch(
			`${BASE_URL}/posts?query=${query}&page=${currentPage}`,
			{ cache: 'no-store' }
		);

		if (!res.ok) {
			throw new Error(`Failed to fetch public articles: ${res.status} ${res.statusText}`);
		}

		return await res.json();
	} catch (err) {
		console.error('Error fetching public articles:', err);
	}
}

interface articleData {
	title: string | undefined
	content: string
	tags: string[]
	cover: string | undefined
	published: boolean
}

export const createPost = async (data: articleData) => {
	try {
		const res = await fetch(`${BASE_URL}/posts/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify(data)
		});

		if (!res.ok) {
			throw new Error(`Failed to create post: ${res.status} ${res.statusText}`);
		}

		return await res.json();
	} catch (err) {
		console.error('Error creating post:', err);

	}
}

export const getarticleById = async (articleId: string) => {
	try {
		const res = await fetch(
			`${BASE_URL}/posts/search/${articleId}`,
			{ cache: 'no-store' }
		);

		if (!res.ok) {
			throw new Error(`Failed to fetch article ${articleId}: ${res.status} ${res.statusText}`);
		}

		return await res.json();
	} catch (err) {
		console.error(`Error fetching article ${articleId}:`, err);

	}
}

export const updatedPost = async (id: number, title: string) => {
	try {
		const res = await fetch(`${BASE_URL}/posts/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({ title })
		});

		if (!res.ok) {
			throw new Error(`Failed to update post ${id}: ${res.status} ${res.statusText}`);
		}

		return await res.json();
	} catch (err) {
		console.error(`Error updating post ${id}:`, err);

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
			credentials: 'include',
			body: JSON.stringify(data)
		});

		if (!res.ok) {
			throw new Error(`Authentication failed for ${route}: ${res.status} ${res.statusText}`);
		}

		return await res.json();
	} catch (err) {
		console.error(`Authentication error for ${route}:`, err);

	}
}

export const logout = async () => {
	try {
		const res = await fetch(`${BASE_URL}/auth/signout`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			cache: 'no-cache'
		});

		if (!res.ok) {
			throw new Error(`Logout failed: ${res.status} ${res.statusText}`);
		}

		return await res.json();
	} catch (err) {
		console.error('Logout error:', err);

	}
}

export const getUserProfile = async () => {
	try {
		const res = await fetch(`${BASE_URL}/users/profile`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			cache: 'no-store'
		});

		if (!res.ok) {
			throw new Error(`Failed to fetch user profile: ${res.status} ${res.statusText}`);
		}

		return await res.json();
	} catch (err) {
		console.error('Error fetching user profile:', err);

	}
}

export const createComment = async (postId: number, text: string) => {
	try {
		const res = await fetch(`${BASE_URL}/comments/create`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({ postId, text })
		});

		if (!res.ok) {
			throw new Error(`Failed to create comment on post ${postId}: ${res.status} ${res.statusText}`);
		}

		return await res.json();
	} catch (err) {
		console.error(`Error creating comment on post ${postId}:`, err);

	}
}

export const getCommentsByPostId = async (postId: number) => {
	try {
		const res = await fetch(`${BASE_URL}/comments?postId=${postId}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include'
		});

		if (!res.ok) {
			throw new Error(`Failed to fetch comments for post ${postId}: ${res.status} ${res.statusText}`);
		}

		return await res.json();
	} catch (err) {
		console.error(`Error fetching comments for post ${postId}:`, err);

	}
}

export const likeComment = async (commentId: number, likeType: string) => {
	try {
		const res = await fetch(`${BASE_URL}/like/comment/${commentId}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({ likableType: likeType })
		});

		if (!res.ok) {
			throw new Error(`Failed to like comment ${commentId}: ${res.status} ${res.statusText}`);
		}

		return await res.json();
	} catch (err) {
		console.error(`Error liking comment ${commentId}:`, err);

	}
}
