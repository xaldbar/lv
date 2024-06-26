import styles from './header.module.css'


import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const MenuButton: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate()
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toHowToWork = () => {
		navigate('/how-to-work')
	}

	const toAbout = () => {
		navigate('/about')
	}

	const toPortfolio = () => {
		navigate('/portfolio')
	}

	return (
		<div className={styles.menuContainer}>
			<button onClick={toggleMenu} className={styles.menuButton}>
				<img src={'src/assets/header-menu-button.svg'} className={styles.menuButtonImg}/>
			</button>
			{isMenuOpen && (
				<div ref={menuRef} className={styles.menuOptions}>
					<button onClick={toHowToWork} className={styles.menuOptionsButton}>Как мы работаем</button>
					<button onClick={toAbout} className={styles.menuOptionsButton}>О компании</button>
					<button onClick={toPortfolio} className={styles.menuOptionsButton}>Портфолио</button>
				</div>
			)}
		</div>
	);
};

const Header = () => {
	const navigate = useNavigate()
	const toInvest = () => {
		navigate('/invest')
	}
	const toHome = () => {
		navigate('/')
	}
	return (
		<div className={styles.headerWrapper}>
			<button  onClick={toInvest} className={styles.menuButton}>
				Инвестировать
			</button>
			<button onClick={toHome} className={styles.logo}>
				<img src={'src/assets/logo/logosvg.svg'} className={styles.logo}/>
			</button>
			<MenuButton/>
		</div>
	);
};

export default Header;