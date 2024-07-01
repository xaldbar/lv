import styles from './about.module.css'
import alex from '../../assets/about/alex.svg'
import vas from '../../assets/about/vas.svg'
const Quotes = () => {
	return (
		<div className={styles.quotes}>
			<div>
				— <span className={styles.qH}>первый легальный Web3 фонд в России</span> <br/> Мы предлагаем нашим
				клиентам заработать, вкладываясь в международные <br/>крипто-стартапы
			</div>
			<div className={styles.sq}>
				— глубокое понимание рынка и хорошая репутация – залог лучших предложений на рынке <br/>
				Личное общение и следование принципам – премиального обслуживания
			</div>

			<div className={styles.tq}>
				— <span className={styles.qH}>наша миссия</span> – развивать альтернативные инвестиции в России
			</div>
			<div className={styles.fq}>
				— это неразрывно связано с <span className={styles.qH}>успешными инвестициями наших клиентов, ведь репутация – главное,</span> что
				у нас есть
			</div>
		</div>
	)
}
const Values = () => {
	return (
		<div className={styles.values}>
			<div className={styles.valuesTitle}>Наши ценности</div>
			<div className={styles.valuesContent}>
				<div className={styles.circle}></div>
				<div className={`${styles.valueItem} ${styles.fi}`}>
					Премиальное обслуживание
				</div>
				<div className={`${styles.valueItem} ${styles.si}`}>
					Клиенты и их благосостояние
				</div>
				<div className={`${styles.valueItem} ${styles.ti}`}>
					Репутация
				</div>
				<div className={`${styles.valueItem} ${styles.foi}`}>
					Инициативность
				</div>
				<div className={`${styles.valueItem} ${styles.fai}`}>
					Профессионализм и пунктуальность
				</div>
			</div>
		</div>
	)
}

const Timeline = () => {
	return (
		<div className={styles.timeline}>
			<div className={styles.topLine}></div>
			<div className={`${styles.tblock} ${styles.fbl}`}>
				<div className={`${styles.date} ${styles.fbdate}`}>Декабрь 2023</div>
				<div className={`${styles.tblockText} ${styles.fbText}`}>
					Первая сделка через 1 инфлюенсера с лимитом в 1000$
				</div>
				<div className={styles.fblB}></div>
			</div>
			<div className={`${styles.tblock} ${styles.sbl}`}>
				<div className={`${styles.date} ${styles.sbdate}`}>Январь 2024</div>
				<div className={`${styles.tblockText} ${styles.sbtext}`}>
					Вышли на маркетинговое агенство
				</div>
				<div className={styles.sblB}></div>
			</div>
			<div className={`${styles.tblock} ${styles.tbl}`}>
				<div className={`${styles.date} ${styles.tbdate}`}>Март 2024</div>
				<div className={`${styles.tblockText} ${styles.tbtext}`}>
					Заключили первые крупные сделки
				</div>
				<div className={styles.tblB}></div>
			</div>
			<div className={`${styles.tblock} ${styles.fobl}`}>
				<div className={`${styles.date} ${styles.fobdate}`}>Апрель 2024</div>
				<div className={`${styles.tblockText} ${styles.fobtext}`}>
					Вышли на новые маркетинговые агентства
				</div>
				<div className={styles.sblB}></div>
			</div>

			<div className={`${styles.tblock} ${styles.fibl}`}>
				<div className={`${styles.date} ${styles.fibdate}`}>Май-июнь 2024</div>
				<div className={`${styles.tblockText} ${styles.fibText}`}>
					вышли на рынок OTC и открыли новые направления в HFT, Pre-IPO
				</div>
				<div className={styles.fblB}></div>
			</div>

			<div className={`${styles.tblock} ${styles.sibl}`}>
				<div className={`${styles.date} ${styles.sibdate}`}>Июль 2024</div>
				<div className={`${styles.tblockText} ${styles.sibtext}`}>
					Легализация бизнеса
				</div>
				<div className={styles.sblB}></div>
			</div>
			<div className={`${styles.tblock} ${styles.sevbl}`}>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}


const Persons = () => {
	return (
		<div className={styles.persons}>
			<div className={styles.person}>
					<div className={styles.personImage}>
						<img src={alex} alt=""/>
					</div>
					<div className={styles.personText}>
						За время нашей работы мы неоднократно сталкивались с тем, что
						многие участники Web3 рынка уделяют недостаточно внимания
						вопросу репутации. Мы же придерживаемся иной философии:
						для нас бизнес — это серьёзное и ответственное дело <br/>
						Мы верим, что успех достигается через прозрачность, доверие и
						взаимное уважение. В Loona Ventures мы стремимся создавать
						долгосрочные отношения с нашими клиентами и контрагентами,
						основываясь на международных стандартах профессионализма и
						этики. Наши эксперты тщательно анализируют каждый проект
						чтобы предоставить уникальные решения, которые не смогут
						предложить другие участники рынка
					</div>

				<div className={styles.piT}>
					<span className={styles.pName}>Алексей Скобелев</span>
					<span className={styles.pRole}>Co-founder, CEO</span>
				</div>
			</div>
			<div className={styles.person}>
				<div className={`${styles.personText} ${styles.personTextSecond}`}>
					Главное в нашем деле — это подход "как у бабушки". Представьте, что вы приходите к бабушке и просите её приготовить борщ.
					Вам кажется, что этот борщ — самый вкусный в вашей жизни. Но если бы вам подали это же блюдо в ресторане, оно показалось бы обычным. Наша команда придерживается того же принципа: мы — ателье для премиальных клиентов, предлагающее обслуживание, которое всегда действует в интересах инвестора
				</div>
				<div className={styles.personImage}>
					<img src={vas} alt=""/>
				</div>
				<div className={styles.siT}>
					<span className={styles.pName}>Алексей Скобелев</span>
					<span className={styles.pRole}>Co-founder, CEO</span>
				</div>
			</div>
		</div>
	)
}

const AboutPage = () => {
	return (
		<div className={styles.aboutPage}>
			<div className={styles.pageTitle}>Loona Ventures это</div>
			<Quotes/>
			<Values/>
			<Timeline/>
			<Persons/>
		</div>
	);
};

export default AboutPage;