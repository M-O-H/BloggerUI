import styles from './form.module.css';

interface InputFieldProps {
	label: string;
	type: string;
	id: string;
	placeholder: string;
}


const InputField: React.FC<InputFieldProps> = ({ label, type, id, placeholder }) => {
	return (
		<div className={styles.inputWrapper}>
			<label htmlFor={id} className={styles.inputLabel}>{label}</label>

			<input
				type={type}
				id={id}
				placeholder={placeholder}
				className={styles.inputField}
				aria-label={label}
			/>

		</div>

	);
};


export default InputField;

