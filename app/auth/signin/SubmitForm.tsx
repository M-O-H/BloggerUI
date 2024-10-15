'use client'
import { authUser, updatedPost, logout } from '@/utils/FetchData';
import styles from './signin.module.css';
import React, { useState } from "react";
import ValidationMessage from '@/components/form/ValidationMessage';

interface SubmitFormProps {
	nameInputField: any;
	emailInputField: any;
	passInputField: any;
	Options: any;
	SubmitButton: any;
	ValidationMsg: any;
}

const SubmitForm: React.FC<SubmitFormProps> = ({ nameInputField, emailInputField, passInputField, Options, SubmitButton, ValidationMsg }) => {

	const [toggleAuth, setToggle] = useState(false);
	const [showMsg, setShowMsg] = useState(false);

	const handleSUbmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const [emailField, passwordField]: any = e.target;
		const [username, password] = [emailField.value, passwordField.value]

		const response = await authUser({ username, password });

		if (!response) setShowMsg(true);
		console.log(response);

	}


	return (
		<form onSubmit={handleSUbmit} onFocus={() => setShowMsg(false)} className={styles.formContainer} >
			{toggleAuth && { nameInputField }}
			{emailInputField}
			{passInputField}
			{Options}
			{showMsg && <ValidationMessage />}
			{SubmitButton}
		</form>

	);
};

export default SubmitForm;
