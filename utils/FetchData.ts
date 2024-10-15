import { throws } from "assert";
import { error } from "console";
import { type } from "os";

const BASE_URL = "http://localhost:3003/api/v1"

export const getPublicArtilces = async () => {
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

export const updatedPost = async (id: number) => {
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

export const authUser = async ({ username, password }: { username: string, password: string }) => {
	try {
		const res = await fetch(`${BASE_URL}/auth/signin`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include', // Important: This ensures cookies are sent with the request!
			body: JSON.stringify({ username, password }),
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


