'use client'
import { authUser, getUserProfile } from '@/utils/FetchData';
import styles from './form.module.css';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

// TODO: chnage to appropriate types
interface SubmitFormProps {
	nameInputField?: any;
	emailInputField?: any;
	passInputField: any;
	Options: any;
	SubmitButton: any;
	ValidationMsg: any;
	route: string,
}

const SubmitForm: React.FC<SubmitFormProps> = ({ nameInputField, emailInputField, passInputField, Options, SubmitButton, ValidationMsg, route }) => {

	const [showMsg, setShowMsg] = useState(false);
	const router = useRouter();
	const handleSUbmit = async (e: React.FormEvent) => {
		e.preventDefault();
		let credentials;
		if (emailInputField) {
			const [usernameField, emailField, passwordField]: any = e.target;
			const [username, email, password] = [usernameField.value, emailField.value, passwordField.value];
			credentials = { username, email, password }
		} else {
			const [usernameField, passwordField]: any = e.target;
			const [username, password] = [usernameField.value, passwordField.value];
			credentials = { username, password }
		}


		const response = await authUser(credentials, route);

		if (!response) setShowMsg(true);
		else router.push('/blog')

	}

	useEffect(() => {
		(async () => {
			const userData = await getUserProfile()
			if (userData) router.push('/blog')

		})();
	}, [])

	return (
		<form onSubmit={handleSUbmit} onFocus={() => setShowMsg(false)} className={styles.formContainer} >
			{nameInputField || <></>}
			{emailInputField}
			{passInputField}
			{Options}
			{showMsg && ValidationMsg}
			{SubmitButton}
		</form>

	);
};

export default SubmitForm;
