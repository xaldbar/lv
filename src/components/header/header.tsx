import styles from './header.module.css'
import headerMenuButton from '../../assets/header-menu-button.svg'
import headerMenuButton_m from '../../assets/menu-btn_m.svg'
import logo from '../../assets/logo/logosvg.svg'
import logo_s from '../../assets/logo/logom.svg'

import {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useWidth} from "../../hooks/use-width.ts";

const isNode = (element: EventTarget | null): element is Node => {
	return element instanceof Node;
};

const MenuButton: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate()

	const handleClickOutside = (event: Event) => {
		if (menuRef.current && isNode(event.target) && !menuRef.current.contains(event.target)) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(open => !open	);
	};

	const toHowToWork = () => {
		navigate('/how-we-work')
		toggleMenu()
	}

	const toAbout = () => {
		navigate('/about')
		toggleMenu()
	}

	const toPortfolio = () => {
		navigate('/portfolio')
		toggleMenu()
	}

	const toFaq = () => {
		navigate('/faq')
		toggleMenu()
	}

	const width = useWidth()


	const getMenuBtnImage = (): string => {
		if (width < 769) {
			return headerMenuButton_m as string
		}

		return headerMenuButton as string
	}

	const toInvest = () => {

		const element = document.getElementById('footer_invoice');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	return (
		<div className={styles.menuContainer}>
			<button onClick={toggleMenu} className={styles.menuButton}>
				<img src={getMenuBtnImage()} className={styles.menuButtonImg}/>
			</button>
			{isMenuOpen && (
				<div ref={menuRef} className={styles.menuOptions}>
					<button onClick={toHowToWork} className={styles.menuOptionsButton}>Как мы работаем</button>
					<button onClick={toAbout} className={styles.menuOptionsButton}>О компании</button>
					<button onClick={toPortfolio} className={styles.menuOptionsButton}>Портфолио</button>
					<button onClick={toFaq} className={styles.menuOptionsButton}>FAQ</button>
					<button onClick={toInvest} className={`${styles.menuOptionsButton} ${styles.invOpt}`}>Инвестировать</button>
				</div>
			)}
		</div>
	);
};

const Header = () => {
	const navigate = useNavigate()
	const width = useWidth()
	const toInvest = () => {

		const element = document.getElementById('footer_invoice');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
	const toHome = () => {
		navigate('/')
	}

	const getLogo = (): string => {
		if (width < 769) {
			return logo_s as string
		}

		return logo as string
	}


	const handleScroll = () => {
		if (window.scrollY > 0) {
			setHeaderBackground('#2D2A2F'); // Change the color to your preference
		} else {
			setHeaderBackground('transparent'); // Change to initial state
		}
	};

	const [headerBackground, setHeaderBackground] = useState('transparent');
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.header} style={{ background: headerBackground }}>
			<div className={styles.headerWrapper}>
				<button onClick={toInvest} className={`${styles.menuButton} ${styles.investBtn}`}>
					Инвестировать
				</button>
				<button onClick={toHome} className={styles.logo}>
					<img src={getLogo()} className={styles.logoImg}/>
				</button>
				<MenuButton/>
			</div>
		</div>
	);
};

export default Header;