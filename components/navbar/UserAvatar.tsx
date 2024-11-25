"use client"
import styles from './Navigation.module.css'
import { getUserProfile, logout } from "@/utils/FetchData";
import Link from 'next/link';
import { useEffect, useState } from "react";
import ProfileIcon from './profileIcon';
import { useRouter } from 'next/navigation';

const UserAvatar = () => {
	const [user, setUser] = useState();
	const router = useRouter()

	const handleLogout = async () => {
		await logout();
		router.push('/auth/signin')
	}

	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				const userData = await getUserProfile();
				if (userData) {
					setUser(userData);
				}
			} catch (error) {
				console.error("Error fetching user profile:", error);
			}
		};

		fetchUserProfile();
	}, []);

	return <>
		{
			user ?
				<div className={styles.avatarLink} >
					<ProfileIcon />
					<span className={styles.username}>{user?.username || 'Yasuo'}</span>
					<div className={styles.dropdownMenu}>
						<Link className={styles.menuItem} href="#">Profile</Link>
						<Link className={styles.menuItem} href="#" onClick={handleLogout}>Logout</Link>
					</div>
				</div >
				: <div className={styles.ButtonWrapper}>
					<Link href="/auth/signin" className={styles.loginButton}>
						Login
					</Link>

					<Link href="/auth/signup" className={styles.registerButton}>
						Register
					</Link>
				</div>
		}


	</>

}

export default UserAvatar;
