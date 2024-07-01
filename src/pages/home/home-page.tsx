import styles from './home-page.module.css'
import bloom3 from '../../assets/intro/intro_bloom3.svg'
import bloom2 from '../../assets/intro/intro_bloom2.svg'
import bloom1 from '../../assets/intro/intro_bloom1.svg'
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useInView} from "framer-motion";


function useCounterAnimation(value: number, time: number, start: boolean, toFixed?: number) {
	const [number, setNumber] = useState(10)

	const delta = (value - 10) / time

	useEffect(() => {
		if (!start) {
			return
		}
		Number(number.toFixed(2)) !== value && setTimeout(setNumber, time, number + delta)
	}, [number, start])

	return number.toFixed(toFixed ?? 1)
}

const Intro = () => {
	const bwRef = useRef(null)
	const bwInView = useInView(bwRef)
	const firstCounter = useCounterAnimation(65.3, 30, bwInView)
	const secondCounter = useCounterAnimation(153, 25, bwInView, 0)
	const thirdCounter = useCounterAnimation(80, 28, bwInView, 0)
	const navigate = useNavigate()


	const toHww = () => {
		navigate('/how-we-work')
	}

	const toAbout = () => {
		navigate('/about')
	}

	const toPortfolio = () => {
		navigate('/portfolio')
	}

	return (
		<div className={styles.intro}>
			<div>
				<div className={styles.introTitle}>
					<div className={styles.titleText}>
						<div className={styles.ttt}>LOONA VENTURES</div>
						<motion.div
							animate={{
								top: ['-110px', '-120px', '-110px'],
							}}
							transition={{ repeat: Infinity, duration: 4 }}
							className={`${styles.bubble} ${styles.lb}`}
						></motion.div>
						<div className={`${styles.bubble} ${styles.rb}`}></div>
					</div>
				</div>
				<div className={styles.introCaption}>
					<div>Венчур с нами —</div>
					<div className={styles.introCapBtm}>
						<div className={styles.www}>
							удобно, понятно, прибыльно
							<div className={`${styles.bubble} ${styles.mb}`}></div>
						</div>
					</div>

				</div>


			</div>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ amount: 0.5, once: true }}
				className={styles.introInfo}
			>
				<div className={styles.introText}>
					<div className={styles.itf}>
						<span>Loona Ventures</span> - это <span>прибыль и индивидуальный подход</span> для каждого
						клиента
					</div>
					<div>
						Мы проверили стратегии на своих деньгах и <span>готовы представить</span> их всем
					</div>
					<div>
						Нас выбирают за <span>качественную работу и свежий взгляд</span> на рынок
					</div>
				</div>
				<motion.div ref={bwRef} className={styles.introBlocks}>
					<div className={styles.blocksWrapper}>
						<div className={styles.block1}>
							<div className={styles.b1h}>{firstCounter}%</div>
							<div className={styles.b1c}>Среднегодовая доходность</div>
						</div>
						<div className={styles.block2}>
							<div className={styles.b2h}>${secondCounter}k</div>
							<div className={styles.b2c}>Средств под управлением</div>
						</div>
					</div>
					<div className={styles.block3}>
						<div className={styles.b1h}>{thirdCounter}+</div>
						<div className={styles.b1c}>Проектов</div>
					</div>
				</motion.div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ amount: 0.5, once: true }}
				className={styles.aboutB}>
				<div className={styles.aboutBL}>
					<button onClick={toHww} className={`${styles.aboutBtn} ${styles.invert}`}>Как мы работаем?</button>
					<button onClick={toAbout} className={`${styles.aboutBtn} ${styles.aboutBtnS}`}>О компании</button>
					<button onClick={toPortfolio} className={`${styles.aboutBtn} ${styles.aboutBtnT}`}>Портфолио</button>
					<div className={styles.bloom3}>
						<img src={bloom3} alt=""/>
					</div>
				</div>
				<div className={styles.aboutBR}>
					<div className={styles.aboutBRT}><span>Развитие альтернативных инвестиций</span> – наша миссия</div>
					<div className={`${styles.aboutBRT} ${styles.aboutBRTS}`}><span>Индивидуальный подход</span> – наш принцип</div>
				</div>
			</motion.div>
			<div className={styles.bloom1}>
				<img src={bloom1} alt=""/>
			</div>
			<div className={styles.bloom2}>
				<img src={bloom2} alt=""/>
			</div>
		</div>
	)
}




const HomePage = () => {
	return (
		<div className={styles.homePage}>
			<Intro/>
		</div>
	);
};

export default HomePage;