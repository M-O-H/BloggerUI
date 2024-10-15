import styles from "./form.module.css";

const message = "Email/password inccorrect";

const ValidationMessage = () => (
	<div className={styles.messageContainer} >
		<p className={styles.errorMessage} role="alert">
			{message}
		</p>
	</div >
);

export default ValidationMessage;
