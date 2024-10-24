
import type { Metadata } from 'next'
import styles from '../auth.module.css';
import InputField from '@/components/form/inputField';
import { roboto } from '@/utils/fonts';
import ValidationMessage from '@/components/form/ValidationMessage';
import Link from 'next/link';
import SubmitForm from '@/components/form/submitForm';

export const metadata: Metadata = {
	title: 'Sign In |  Blogger',
	description: 'Welcome! - DEV community',
	keywords: ['sign in', 'login', 'authentication', 'Blogger'],
};

const Options = () =>
	<div className={styles.optionsContainer}>

		<div className={styles.rememberMeContainer}>


		</div>

		<a href="#forgot-password">Forget password</a>

	</div>

const SubmitBtn = () =>
	<button type="submit" className={styles.signInButton}>Sign In</button>





const SignUpPage: React.FC = () => {

	return (
		<main className={`${styles.signInContainer} ${roboto.className}`}>
			<section aria-labelledby="signin-heading">
				<h1 className={styles.header} id="signin-heading">Create account!</h1>
				<p className={styles.subHeader}>create your account and share to community</p>
			</section>

			<SubmitForm
				nameInputField={<InputField label="username" type="username" id="username" placeholder="Enter your username" />}

				emailInputField={<InputField label="Email" type="email" id="email" placeholder="Enter your email" />}

				passInputField={<InputField label="Password" type="Password" id="password" placeholder="Enter your password" />}

				Options={<Options />}

				SubmitButton={<SubmitBtn />}

				ValidationMsg={<ValidationMessage message="email already exist" />}

				route='signup'
			/>

			<p className={styles.signUpPrompt}>
				Don't have an account? <Link href="signin">Sign In</Link>
			</p>

		</main >

	);
}
export default SignUpPage;
