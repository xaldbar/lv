import styles from './how-we-work.module.css'
import g2 from '../../assets/hww/g2.png'
import { useEffect, useRef} from "react";
import step1 from '../../assets/hww/step1.svg'
import step2 from '../../assets/hww/step2.svg'
import step3 from '../../assets/hww/step3.svg'
import step4 from '../../assets/hww/step4.svg'

const HowWeWorkPage = () => {
	const imageRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const animate = () => {
			if (imageRef.current) {
				const curPos = imageRef.current.style.left
				imageRef.current.style.left = Number(curPos.split('px')[0]) + 1 + 'px'
			}
		}
		const int = setInterval(animate, 6)
		setTimeout(() => {
			clearInterval(int)
		}, 5000)
	}, [])
	return (
		<div className={styles.howWeWorkPage}>
			<div className={styles.text}>
				<div className={styles.textLeft}>
					<div className={styles.textTitle}>Как мы работаем?</div>
					<div className={styles.textText}>
						<div className={styles.ttItem}>
							Для многих сфера криптовалют кажется сложной и запутанной <br/>
							Мы понимаем это и поэтому подробно рассказываем каждому клиенту как мы работаем, стараясь
							донести все подробности лично
						</div>
						<div className={styles.ttItem}>
							Ниже вы можете ознакомиться с общей схемой, которая объясняет, где заложена прибыль <br/>
							Если коротко — мы получаем возможность заходить в проекты до их листинга на бирже, во время
							Private и KOL раундов, а после этого предлагаем эту возможность клиентам
						</div>
						<div className={styles.ttItem}>
							В итоге, после листинга проекта прибыль получается сильно выше других участников,
							заходивших на общих условиях
						</div>
					</div>
				</div>
				<div className={styles.imageWrapper}>
					<img src={g2} alt=""/>
					<div ref={imageRef} className={styles.animate}></div>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.row}>
					<div className={styles.textBlock}>
						<div className={styles.textBlockTitle}>
							1. Мы ищем проект
						</div>
						<div className={styles.textBlockText}>
							<div className={styles.textBlockTextItem}>
								На рынке есть много различных сфер: Blockchain, DeFi, NFT, GameFi и т.д.
							</div>
							<div className={styles.textBlockTextItem}>
								Наша цель в первую очередь — <br/>найти хорошую инвестиционную возможность среди всего
								разнообразия рынка
							</div>
							<div className={styles.textBlockTextItem}>
								Наличие идеи, конечно, важно, но важнее – условия по срокам, цене и иным <br/>параметрам,
								которые нам предлагают <br/> Мы ищем наиболее выгодные комбинации условий
							</div>
							<div className={styles.textBlockTextItem}>
								До нас в проект уже проинвестировали крупные Tier-1 фонды, бизнес-ангелы, <br/> топ
								менеджеры или крупные частные инвесторы <br/> Для нас они являются контрагенатми
							</div>
							<div className={styles.textBlockTextItem}>
								В основном именно эти люди инициируют продажу своей доли в целях выхода <br/> в деньги
							</div>
						</div>
					</div>

					<div className={styles.rowImage}>
						<img src={step1} alt=""/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.textBlock}>
						<div className={styles.textBlockTitle}>
							2. Инициируем сделку на Private раунде
						</div>
						<div className={styles.textBlockText}>
							<div className={styles.textBlockTextItem}>
								До того как проект объявит о планах по выходу на биржу и начнёт
								привлекать <br/> внимание к листингу, проходят Private раунды, во время которых команда
								собирает <br/> дополнительные средства
							</div>
							<div className={styles.textBlockTextItem}>
								Период private раундов может длиться несколько лет и крупным держателям токенов <br/>приходится
								ждать весь этот срок, если они хотят реализовать свою прибыль именно <br/>на бирже <br/>
								Но существует мехаxнизм внебиржевого OTC рынка, где такие агенты могут <br/> перепродать
								свою долю, чтобы выйти в деньги
							</div>
							<div className={styles.textBlockTextItem}>
								Их мотивация заключается в том, что они заходили в проект на оценке сильно ниже <br/>той,
								которая сейчас считается рыночной и той, по которой они готовы продать свою <br/>долю
							</div>
							<div className={styles.textBlockTextItem}>
								Такие ситуацию дают возможность нашим клиентам заработать: мы выкупаем долю <br/>контрагента,
								получая токены ниже рыночной и будущей цены проекта
							</div>
						</div>
					</div>

					<div className={styles.rowImage}>
						<img src={step2} alt=""/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.textBlock}>
						<div className={styles.textBlockTitle}>
							3. Инициируем сделку на KOL раунде
						</div>
						<div className={styles.textBlockText}>
							<div className={styles.textBlockTextItem}>
								Когда проект уже готов к выходу на рынок, он и связанные с ним контрагенты <br/>начинают
								глобальную кампанию по его продвижению
							</div>
							<div className={styles.textBlockTextItem}>
								Это и называется KOL раунд — период активного маркетинга <br/>
								Крупные контрагенты заинтересованы в том, чтобы их доля после старта торгов стоила <br/>
								как можно больше, поэтому они обращаются к инфлюенсерам и маркетинговым <br/>
								агентствам, предлагая им купить токены из их доли ниже цены листинга, взамен чего <br/>
								будет необходимо пиарить проект в социальных сетях
							</div>
							<div className={styles.textBlockTextItem}>
								Из-за того, что проектов на рынке очень много и лимиты большие, маркетинговые <br/>
								агентства и инфлюенсеры сами не могу их все время закрывать
							</div>
							<div className={styles.textBlockTextItem}>
								Маркетинговые агентства, дабы не терять прибыль с незакрытых лимитов, обращаются <br/>
								к другим агентам на рынке, одним из которых являемся мы
							</div>
							<div className={styles.textBlockTextItem}>
								Предоставляя ликвидность маркетинговым агенствам, взамен получаем токены ниже <br/> цены
								листинга
							</div>
						</div>
					</div>

					<div className={styles.rowImage}>
						<img src={step3} alt=""/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.textBlock}>
						<div className={styles.textBlockTitle}>
							4. Подписываем SAFT контракт с проектом и продаём токены
						</div>
						<div className={styles.textBlockText}>
							<div className={styles.textBlockTextItem}>
								После того, как мы получили долю в проекте (независимо от того, на каком раунде), <br/>
								наш кошелёк вписывают в SAFT контракт с проектом <br/>
								SAFT контракт — агентский договор международного формата <br/>
								В нем прописываются условия того, как мы переводим деньги, а проект взамен <br/>
								обязуется поставлять токены по установленным условиям
							</div>
							<div className={styles.textBlockTextItem}>
								Огромным плюсом того, что мы работаем на рынке криптовалют является факт наличия <br/>
								блокчейна: каждый агент в схеме, начиная от инвестора и заканчивая проектом может <br/>
								отслеживать трансакции, видя, куда ушли деньги
							</div>
							<div className={styles.textBlockTextItem}>
								Мы же, после получения токенов, продаём их на бирже и пересылаем прибыль нашим <br/>
								клиентам <br/>
								Благодаря тому, что мы заходим сильно ниже цены старта торгов, появляется хорошая <br/>
								страховка от риска падения цены токена, а потенциальная прибыль становится больше
							</div>
						</div>
					</div>

					<div className={styles.rowImage}>
						<img src={step4} alt=""/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowWeWorkPage;