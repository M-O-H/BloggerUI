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

		<Link href="#forgot-password">Forget password</Link>

	</div>

const SubmitBtn = () =>
	<button type="submit" className={styles.signInButton}>Sign In</button>





const SignInPage: React.FC = () => {

	return (
		<main className={`${styles.signInContainer} ${roboto.className}`}>
			<section aria-labelledby="signin-heading">
				<h1 className={styles.header} id="signin-heading">Welcome back!</h1>
				<p className={styles.subHeader}>Sign in to access your account and to share blogs.</p>
			</section>

			<SubmitForm
				nameInputField={<InputField label="username" type="username" id="username" placeholder="Enter your username" />}

				passInputField={<InputField label="Password" type="Password" id="password" placeholder="Enter your password" />}

				Options={<Options />}

				SubmitButton={<SubmitBtn />}

				ValidationMsg={<ValidationMessage message='incorrect Email/password' />}

				route='signin'

			/>

			<p className={styles.signUpPrompt}>
				Don't have an account? <Link href='/auth/signup'>Sign Up</Link>
			</p>

		</main >

	);
}
export default SignInPage;
