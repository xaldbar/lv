import styles from './header.module.css'
import headerMenuButton from '../../assets/header-menu-button.svg'
import logo from '../../assets/logo/logosvg.svg'

import {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

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
		setIsMenuOpen(!isMenuOpen);
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

	return (
		<div className={styles.menuContainer}>
			<button onClick={toggleMenu} className={styles.menuButton}>
				<img src={headerMenuButton} className={styles.menuButtonImg}/>
			</button>
			{isMenuOpen && (
				<div ref={menuRef} className={styles.menuOptions}>
					<button onClick={toHowToWork} className={styles.menuOptionsButton}>Как мы работаем</button>
					<button onClick={toAbout} className={styles.menuOptionsButton}>О компании</button>
					<button onClick={toPortfolio} className={styles.menuOptionsButton}>Портфолио</button>
					<button onClick={toFaq} className={styles.menuOptionsButton}>FAQ</button>
				</div>
			)}
		</div>
	);
};

const Header = () => {
	const navigate = useNavigate()
	const toInvest = () => {

		const element = document.getElementById('footer_invoice');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
	const toHome = () => {
		navigate('/')
	}



	return (
		<div className={styles.header}>
			<div className={styles.headerWrapper}>
				<button onClick={toInvest} className={styles.menuButton}>
					Инвестировать
				</button>
				<button onClick={toHome} className={styles.logo}>
					<img src={logo} className={styles.logo}/>
				</button>
				<MenuButton/>
			</div>
		</div>
	);
};

export default Header;