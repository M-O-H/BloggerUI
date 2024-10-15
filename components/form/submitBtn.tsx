import styles from './form.module.css';

interface SubmitBtnProps {
	text: string,
}


const SubmitBtn: React.FC<SubmitBtnProps> = ({ text }) => {
	return (
		<>
			<button type='submit'>
				{text}
			</button>
		</>

	);
};


export default SubmitBtn;

