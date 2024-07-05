import {FC, useState} from "react";
import styles from './footer.module.css'
import logo from '../../assets/logo/logosvg.svg'
import logoS from '../../assets/logo/logo_s.svg'
import bloom from '../../assets/footer/bloom.svg'
import PhoneIcon from '../../assets/footer/icons/Phone.svg'
import EmailIcon from '../../assets/footer/icons/Email.svg'
import {motion} from "framer-motion";
import {useWidth} from "../../hooks/use-width.ts";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const CONNECTION_URL = 'https://sheet.best/api/sheets/ceb572e9-2490-4cba-9f06-401c98fe3d30'

export interface InputProps {
	type: 'text' | 'tel'
	placeholder: string
	name: string
	htmlFor: string
	label: string
	pattern?: string
	value: string
	whenChange: (value: string) => void
}

export interface FooterProps {
	title: string
}

const FooterInput: FC<InputProps> = (props: InputProps) => {
	return (
		<div className={`${styles.inputGroup} ${styles.field}`}>
			<input value={props.value} onChange={(e) => props.whenChange(e.target.value)} type={props.type} className={styles.formField} placeholder={props.placeholder} name={props.name} id={props.name} pattern={props.pattern} required/>
			<label htmlFor={props.htmlFor} className={`${styles.formLabel}`}>{props.label}</label>
		</div>
	)
}

const Footer: FC<FooterProps> = (props) => {
	const width = useWidth()
	const navigate = useNavigate()


	const toHowToWork = () => {
		navigate('/how-we-work')
	}

	const toAbout = () => {
		navigate('/about')
	}

	const toPortfolio = () => {
		navigate('/portfolio')
	}

	const isMobile = (): boolean => width < 769

	const getLogo = (): string => {
		if (width < 769) {
			return logoS as string
		}

		return logo as string
	}

	const [name, setName] = useState('' )
	const [tel, setTel] = useState('' )

	const getPayload = () => {
		return ({
			'Имя': name,
			'Телефон': tel,
		})
	}

	const resetForm = () => {
		setName('')
		setTel('')
	}

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		axios.post(CONNECTION_URL, getPayload())
		.then(() => {
			resetForm()
		})
	}

	const whenNameChange = (value: string) => {
		setName(value)
	}

	const whenTelChange = (value: string) => {
		setTel(value)
	}

	return (
		<div id={'footer_invoice'} className={styles.footer}>
			<div className={styles.footerTop}>
				<div className={styles.footerTitle}>{props.title}</div>
				{!isMobile() ? <div className={styles.separator}></div> : null}
				<div className={styles.footerCaption}>
					Оставьте заявку и менеджер свяжется {isMobile() ? <br/> : null} с вами в ближайшее время
				</div>
				<form onSubmit={(e) => submitForm(e)} className={styles.footerForm}>
					<div className={styles.inputs}>
						<FooterInput
							type={'text'}
							value={name}
							whenChange={whenNameChange}
							placeholder={'Ваше имя'}
							name={'name'}
							htmlFor={'name'}
							label={'Ваше имя'}
						/>
						<FooterInput
							type={'tel'}
							value={tel}
							whenChange={whenTelChange}
							placeholder={'Номер телефона'}
							name={'phone'}
							htmlFor={'phone'}
							label={'Номер телефона'}
							pattern={'[0-9]{11}'}
						/>
					</div>
					<div className={styles.bottom}>
						<button type={'submit'} className={styles.submit}>Получить консультацию</button>
						{!isMobile() ? (
							<div className={styles.logo}>
								<img src={logo} alt=""/>
							</div>
						) : null}
					</div>
				</form>
				{!isMobile() ? <div className={styles.separator}></div> : null}
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
						<img src={getLogo()} alt=""/>
					</div>
					<div className={`${styles.separator} ${styles.separatorF} ${styles.inv}`}></div>
					<div>© 2024 ООО «Луна Венчурс», все права защищены</div>
				</div>
				<div className={styles.fbCol}>
					<div className={styles.foolterColTitle}>Компания:</div>
					<div className={`${styles.separator} ${styles.separatorF}`}></div>
					<div onClick={toHowToWork} className={`${styles.footerLink} ${styles.ts}`}>Как мы работаем</div>
					<div onClick={toAbout} className={styles.footerLink}>О компании</div>
					<div onClick={toPortfolio} className={styles.footerLink}>Портфолио</div>
				</div>
				<div className={styles.fbCol}>
					<div className={styles.foolterColTitle}>Контакты:</div>
					<div className={`${styles.separator} ${styles.separatorF}`}></div>
					<div className={styles.footerContact}>
						<img src={PhoneIcon} alt=""/>
						<div>+7 (977) 102-10-57</div>
					</div>
					<div className={styles.footerContact}>
						<img src={EmailIcon} alt=""/>
						<div>loonaventures@yandex.ru</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer;