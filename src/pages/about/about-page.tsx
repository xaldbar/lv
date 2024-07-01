import styles from './about.module.css'
import alex from '../../assets/about/alex.png'
import vas from '../../assets/about/vas.png'
import {motion} from "framer-motion";
import bloom1 from '../../assets/about/bloom1.svg'
import bloom2 from '../../assets/about/bloom2.svg'
import bloom3 from '../../assets/about/bloom3.svg'
import bloom4 from '../../assets/about/bloom4.svg'
import bloom5 from '../../assets/about/bloom5.svg'

const Quotes = () => {
	return (
		<div className={styles.quotes}>
			<motion.div
				initial={{opacity: 0, y: 100}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8}}
				viewport={{amount: 0.5, once: true}}
			>
				— <span className={styles.qH}>первый легальный Web3 фонд в России</span> <br/> Мы предлагаем нашим
				клиентам заработать, вкладываясь в международные <br/>крипто-стартапы
			</motion.div>
			<motion.div
				initial={{opacity: 0, y: 100}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8, delay: 0.2}}
				viewport={{amount: 0.5, once: true}}
				className={styles.sq}
			>
				— глубокое понимание рынка и хорошая репутация – залог лучших предложений на рынке <br/>
				Личное общение и следование принципам – премиального обслуживания
			</motion.div>

			<motion.div
				initial={{opacity: 0, y: 100}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8, delay: 0.4}}
				viewport={{amount: 0.5, once: true}}
				className={styles.tq}
			>
				— <span className={styles.qH}>наша миссия</span> – развивать альтернативные инвестиции в России
			</motion.div>
			<motion.div
				initial={{opacity: 0, y: 100}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8, delay: 0.6}}
				viewport={{amount: 0.9, once: true}}
				className={styles.fq}
			>
				— это неразрывно связано с <span className={styles.qH}>успешными инвестициями наших клиентов, ведь репутация – главное,</span> что
				у нас есть
				<motion.div
					transition={{ repeat: Infinity, duration: 7, delay: 0}}
					animate={{
						top: [30, 70, 30],
					}}
					className={`${styles.bubble} ${styles.fbbl}`}
				></motion.div>

			</motion.div>
			<div className={styles.bloom2}>
				<img src={bloom2} alt=""/>
			</div>
		</div>
	)
}
const Values = () => {
	return (
		<div className={styles.values}>
			<motion.div
				className={styles.valuesTitle}
				initial={{opacity: 0, y: 100}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8}}
				viewport={{amount: 0.8, once: true}}
			>
				Наши ценности
			</motion.div>
			<motion.div
				className={styles.valuesContent}
				initial={{opacity: 0, y: 100}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.8}}
				viewport={{amount: 0.5, once: true}}
			>
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
			</motion.div>
			<div className={styles.bloom3}>
				<img src={bloom3} alt=""/>
			</div>
			<motion.div
				transition={{repeat: Infinity, duration: 7, delay: 0}}
				animate={{
					top: [-40, -70, -40],
				}}
				className={`${styles.bubble} ${styles.sbbl}`}
			></motion.div>
		</div>
	)
}

const Timeline = () => {
	return (
		<div className={styles.timeline}>
			<div className={styles.topLine}></div>
			<motion.div
				initial={{opacity: 0,}}
				whileInView={{opacity: 1,}}
				transition={{ duration: 0.8 }}
				viewport={{ amount: 0.5, once: true }}
				className={`${styles.tblock} ${styles.fbl}`}
			>
				<motion.div
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{ duration: 0.8 }}
					viewport={{ amount: 0.5, once: true }}
					className={`${styles.date} ${styles.fbdate}`}>
					Декабрь 2023
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{ duration: 0.9 }}
					viewport={{ amount: 0.5, once: true }}
					className={`${styles.tblockText} ${styles.fbText}`}
				>
					Первая сделка через 1 инфлюенсера с лимитом в 1000$
				</motion.div>
				<div className={styles.fblB}></div>
			</motion.div>
			<div className={`${styles.tblock} ${styles.sbl}`}>
				<motion.div
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{ duration: 0.8 }}
					viewport={{ amount: 0.5, once: true }}
					className={`${styles.date} ${styles.sbdate}`}
				>Январь 2024</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{ duration: 0.9 }}
					viewport={{ amount: 0.5, once: true }}
					className={`${styles.tblockText} ${styles.sbtext}`}
				>
					Вышли на маркетинговое агенство
				</motion.div>
				<div className={styles.sblB}></div>
			</div>
			<div className={`${styles.tblock} ${styles.tbl}`}>
				<motion.div
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{ duration: 0.8 }}
					viewport={{ amount: 0.5, once: true }}
					className={`${styles.date} ${styles.tbdate}`}
				>Март 2024</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{ duration: 0.9 }}
					viewport={{ amount: 0.5, once: true }}
					className={`${styles.tblockText} ${styles.tbtext}`}
				>
					Заключили первые крупные сделки
				</motion.div>
				<div className={styles.tblB}></div>
			</div>
			<div className={`${styles.tblock} ${styles.fobl}`}>
				<motion.div
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{ duration: 0.8 }}
					viewport={{ amount: 0.5, once: true }}
					className={`${styles.date} ${styles.fobdate}`}>Апрель 2024</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{ duration: 0.9 }}
					viewport={{ amount: 0.5, once: true }}
					className={`${styles.tblockText} ${styles.fobtext}`}>
					Вышли на новые маркетинговые агентства
				</motion.div>
				<div className={styles.sblB}></div>
			</div>

			<div className={`${styles.tblock} ${styles.fibl}`}>
				<motion.div
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{ duration: 0.8 }}
					viewport={{ amount: 0.5, once: true }}
					className={`${styles.date} ${styles.fibdate}`}>Май-июнь 2024</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{ duration: 0.9 }}
					viewport={{ amount: 0.5, once: true }}
					className={`${styles.tblockText} ${styles.fibText}`}>
					вышли на рынок OTC и открыли новые направления в HFT, Pre-IPO
				</motion.div>
				<div className={styles.fblB}></div>
			</div>

			<div className={`${styles.tblock} ${styles.sibl}`}>
				<motion.div
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{ duration: 0.8 }}
					viewport={{ amount: 0.5, once: true }}
					className={`${styles.date} ${styles.sibdate}`}>Июль 2024</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{ duration: 0.9 }}
					viewport={{ amount: 0.5, once: true }}
					className={`${styles.tblockText} ${styles.sibtext}`}>
					Легализация бизнеса
				</motion.div>
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
						<img src={alex} alt="" className={styles.pimg}/>
						<div className={styles.bloom4}>
							<img src={bloom4} alt=""/>
						</div>
						<motion.div
							transition={{repeat: Infinity, duration: 7, delay: 0}}
							animate={{
								top: [-80, -110, -80],
							}}
							className={`${styles.bubble} ${styles.tbbl}`}></motion.div>
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
					<img src={vas} alt="" className={styles.pimg}/>
					<div className={styles.bloom5}>
						<img src={bloom5} alt=""/>
					</div>
					<motion.div
						transition={{repeat: Infinity, duration: 7, delay: 0}}
						animate={{
							top: [-80, -110, -80],
						}}
						className={`${styles.bubble} ${styles.fobbl}`}></motion.div>
				</div>
				<div className={styles.siT}>
					<span className={styles.pName}>Василий Меловацкий</span>
					<span className={styles.pRole}>Co-founder, COO</span>
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
			<div className={styles.bloom1}>
				<img src={bloom1} alt=""/>
			</div>
		</div>
	);
};

export default AboutPage;