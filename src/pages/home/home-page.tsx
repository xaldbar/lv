import styles from './home-page.module.css'

const Intro = () => {
	return (
		<div className={styles.intro}>
			<div>
				<div className={styles.introTitle}>
					<span>LOONA VENTURES</span>
					<div className={`${styles.bubble} ${styles.lb}`}></div>
					<div className={`${styles.bubble} ${styles.mb}`}></div>
					<div className={`${styles.bubble} ${styles.rb}`}></div>

				</div>
				<div className={styles.introCaption}>
					<div>Венчур с нами —</div>
					<div> удобно, понятно, прибыльно</div>
				</div>


			</div>
			<div className={styles.introInfo}>
				<div className={styles.introText}>
					<div>
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
				<div className={styles.introBlocks}>
					<div className={styles.blocksWrapper}>
						<div className={styles.block1}>
							<div className={styles.b1h}>65,3%</div>
							<div className={styles.b1c}>Среднегодовая доходность</div>
						</div>
						<div className={styles.block2}>
							<div className={styles.b2h}>$153k</div>
							<div className={styles.b2c}>Средств под управлением</div>
						</div>
					</div>
					<div className={styles.block3}>
						<div className={styles.b1h}>80+</div>
						<div className={styles.b1c}>Проектов</div>
					</div>
				</div>
			</div>
			<div className={styles.aboutB}>
				<div className={styles.aboutBL}>
					<button className={`${styles.aboutBtn}`}>Как мы работаем?</button>
					<button className={`${styles.aboutBtn} ${styles.aboutBtnS}`}>О компании</button>
					<button className={`${styles.aboutBtn} ${styles.aboutBtnT}`}>Портфолио</button>
					<div className={styles.bloom3}>
						<img src="src/assets/intro/intro_bloom3.svg" alt=""/>
					</div>
				</div>
				<div className={styles.aboutBR}>
					<div className={styles.aboutBRT}><span>Развитие альтернативных инвестиций</span> – наша миссия</div>
					<div className={styles.aboutBRT}><span>Индивидуальный подход</span> <br/>– наш принцип</div>
				</div>
			</div>
			<div className={styles.bloom1}>
				<img src="src/assets/intro/intro_bloom1.svg" alt=""/>
			</div>
			<div className={styles.bloom2}>
				<img src="src/assets/intro/intro_bloom2.svg" alt=""/>
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