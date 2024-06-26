import {FC} from "react";
import styles from './footer.module.css'
export interface InputProps {
	type: 'text' | 'tel'
	placeholder: string
	name: string
	htmlFor: string
	label: string
	pattern?: string
}


const FooterInput: FC<InputProps> = (props: InputProps) => {
	return (
		<div className={`${styles.inputGroup} ${styles.field}`}>
			<input type={props.type} className={styles.formField} placeholder={props.placeholder} name={props.name} id={props.name} pattern={props.pattern} required/>
			<label htmlFor={props.htmlFor} className={`${styles.formLabel}`}>{props.label}</label>
		</div>
	)
}

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerTitle}>Зарабатывайте вместе с нами</div>
			<div className={styles.separator}></div>
			<div className={styles.footerCaption}>
				Оставьте заявку и менеджер свяжется с вами в ближайшее время
			</div>
			<form action="" className={styles.footerForm}>
				<div className={styles.inputs}>
					<FooterInput
						type={'text'}
						placeholder={'Ваше имя'}
						name={'name'}
						htmlFor={'name'}
						label={'Ваше имя'}
					/>
					<FooterInput
						type={'tel'}
						placeholder={'Номер телефона'}
						name={'phone'}
						htmlFor={'phone'}
						label={'Номер телефона'}
						pattern={'[0-9]{10}'}
					/>
				</div>
				<div className={styles.bottom}>
					<button className={styles.submit}>Получить консультацию</button>
					<div className={styles.logo}>
						<img src="/src/assets/logo/logosvg.svg" alt=""/>
					</div>
				</div>
			</form>
			<div className={styles.separator}></div>
			<div className={styles.bloom}>
				<img src="/src/assets/footer/bloom.svg"/>
			</div>
			<div className={`${styles.bubble} ${styles.lb}`}></div>
			<div className={`${styles.bubble} ${styles.mb}`}></div>
			<div className={`${styles.bubble} ${styles.rb}`}></div>
			<div className={`${styles.bubble} ${styles.bb}`}></div>
		</div>
	)
}
export default Footer;