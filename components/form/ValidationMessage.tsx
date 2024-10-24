import styles from "./form.module.css";

interface ValidationMessage {
	message: string,
}

const ValidationMessage: React.FC<ValidationMessage> = ({ message }) => (
	<div className={styles.messageContainer} >
		<p className={styles.errorMessage} role="alert">
			{message}
		</p>
	</div >
);

export default ValidationMessage;
