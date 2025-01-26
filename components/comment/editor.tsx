"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from './Comment.module.css';
import { createComment, getUserProfile } from '@/utils/FetchData';
import Link from 'next/link';

interface commentProps {
	postId: number,
	CommentList: React.ReactNode
}

const CommentEditor: React.FC<commentProps> = ({ postId, CommentList }) => {
	const [auth, setAuth] = useState<boolean>(false)
	const editor = useRef<string | null>("")

	useEffect(() => {
		(async () => {
			const user = await getUserProfile()
			if (user) setAuth(true)
		})()
	})

	async function submit() {
		// TODO: Redirect user to login page
		const text = editor.current.value
		if (!auth) {
			return
		}
		if (!text)
			return
		const isCreated = await createComment(postId, text)
		if (!isCreated)
			return
		console.log("comment created")
	}
	return (
		<>
			<textarea ref={editor} className={styles.editor} placeholder="Write comments..." id="w3review" name="w3review" >
			</textarea>
			<div>
				{
					auth ?
						<button onClick={() => submit()} className={styles.btn}>Add</button> :
						<Link href={'auth/signin'} className={styles.btn}>Add</Link>

				}
			</div>
			{CommentList}
		</>
	)
}

export default CommentEditor;
