import {FC} from "react";
import styles from './footer.module.css'
import logo from '../../assets/logo/logosvg.svg'
import bloom from '../../assets/footer/bloom.svg'
import PhoneIcon from '../../assets/footer/icons/Phone.svg'
import EmailIcon from '../../assets/footer/icons/Email.svg'
import {motion} from "framer-motion";

export interface InputProps {
	type: 'text' | 'tel'
	placeholder: string
	name: string
	htmlFor: string
	label: string
	pattern?: string
}

export interface FooterProps {
	title: string
}

const FooterInput: FC<InputProps> = (props: InputProps) => {
	return (
		<div className={`${styles.inputGroup} ${styles.field}`}>
			<input type={props.type} className={styles.formField} placeholder={props.placeholder} name={props.name} id={props.name} pattern={props.pattern} required/>
			<label htmlFor={props.htmlFor} className={`${styles.formLabel}`}>{props.label}</label>
		</div>
	)
}

const Footer: FC<FooterProps> = (props) => {
	return (
		<div id={'footer_invoice'} className={styles.footer}>
			<div className={styles.footerTop}>
				<div className={styles.footerTitle}>{props.title}</div>
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
							<img src={logo} alt=""/>
						</div>
					</div>
				</form>
				<div className={styles.separator}></div>
				<div className={styles.bloom}>
					<img src={bloom}/>
				</div>
				<motion.div
					animate={{
						top: ['195px', '205px', '195px'],
					}}
					transition={{ repeat: Infinity, duration: 4 }}
					className={`${styles.bubble} ${styles.lb}`}
				></motion.div>
				<motion.div
					animate={{
						top: ['200px', '215px', '200px'],
					}}
					transition={{ repeat: Infinity, duration: 4 }}
					className={`${styles.bubble} ${styles.mb}`}
				></motion.div>
				<motion.div
					animate={{
						top: ['195px', '205px', '195px'],
					}}
					transition={{ repeat: Infinity, duration: 4 }}
					className={`${styles.bubble} ${styles.rb}`}
				></motion.div>
				<motion.div
					animate={{
						bottom: ['-55px', '-66px', '-55px'],
						left: ['-171px', '-171px', '-171px']
					}}
					transition={{ repeat: Infinity, duration: 4 }}
					className={`${styles.bubble} ${styles.bb}`}
				></motion.div>
			</div>
			<div className={styles.footerBottom}>
				<div className={styles.fbCol}>
					<div className={styles.footerLogo}>
						<img src={logo} alt=""/>
					</div>
					<div className={`${styles.separator} ${styles.separatorF} ${styles.inv}`}></div>
					<div>© 2024 OOO "Loona Ventures", все права защищены</div>
				</div>
				<div className={styles.fbCol}>
					<div className={styles.foolterColTitle}>Компания:</div>
					<div className={`${styles.separator} ${styles.separatorF}`}></div>
					<div>Как мы работаем</div>
					<div>О компании</div>
					<div>Портфолио</div>
				</div>
				<div className={styles.fbCol}>
					<div className={styles.foolterColTitle}>Контакты:</div>
					<div className={`${styles.separator} ${styles.separatorF}`}></div>
					<div className={styles.footerContact}>
						<img src={PhoneIcon} alt=""/>
						<div>8 (800) 555 35 35</div>
					</div>
					<div className={styles.footerContact}>
						<img src={EmailIcon} alt=""/>
						<div>почта@почта.ком </div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer;