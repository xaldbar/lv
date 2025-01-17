import styles from './how-we-work.module.css'
import g2 from '../../assets/hww/g2.png'
import {useEffect, useRef, useState} from "react";
import step1 from '../../assets/hww/step1.svg'
import step1_m from '../../assets/hww/step1_m.svg'
import step1_3 from '../../assets/hww/step1_3.svg'
import step2 from '../../assets/hww/step2.svg'
import step2_m from '../../assets/hww/step2_m.svg'
import step2_3 from '../../assets/hww/step2_3.svg'
import step3 from '../../assets/hww/step3.svg'
import step3_m from '../../assets/hww/step3_m.svg'
import step3_3 from '../../assets/hww/step3_3.svg'
import step4 from '../../assets/hww/step4.svg'
import step4_m from '../../assets/hww/step4_m.svg'
import step4_3 from '../../assets/hww/step4_3.svg'
import bloom1 from '../../assets/hww/bloom1.svg'
import bloom2 from '../../assets/hww/bloom2.svg'
import bloom3 from '../../assets/hww/bloom3.svg'
import {useInView} from "framer-motion";
import {useWidth} from "../../hooks/use-width.ts";

const HowWeWorkPage = () => {
	const imageRef = useRef<HTMLDivElement>(null)
	const step1Ref = useRef(null)
	const step2Ref = useRef(null)
	const step3Ref = useRef(null)
	const step4Ref = useRef(null)
	const is1InView = useInView(step1Ref, {amount: 0.7})
	const is2InView = useInView(step2Ref, {amount: 0.7})
	const is3InView = useInView(step3Ref, {amount: 0.7})
	const is4InView = useInView(step4Ref, {amount: 0.7})

	const [step, setStep] = useState(1)
	const width = useWidth()


	useEffect(() => {
		if (is1InView) {
			setStep(1)
			return
		}
		if (is2InView) {
			setStep(2)
			return
		}
		if (is3InView) {
			setStep(3)
			return
		}
		if (is4InView) {
			setStep(4)
			return
		}
	}, [is1InView, is2InView, is3InView, is4InView])


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
			if (imageRef.current) {
				imageRef.current.style.display = 'none'
			}
		}, 5000)
	}, [])

	const getStepMobileImg = (step: 1 | 2 | 3 | 4) => {
		const isM = width < 550
		switch (step) {
			case 1:
				return isM ? step1_3 : step1_m
			case 2:
				return isM ? step2_3 : step2_m
			case 3:
				return isM ? step3_3 : step3_m
			case 4:
				return isM ? step4_3 : step4_m
		}
	}

	const isMobile = () => width < 769

	return (
		<div className={styles.howWeWorkPage}>
			{!isMobile() ? (
				<div className={styles.bloom1}>
					<img src={bloom1} alt=""/>
				</div>
			) : null}
			<div className={styles.text}>
				<div className={styles.textLeft}>
					<div className={styles.textTitle}>Как мы работаем?</div>
					<div className={styles.textText}>
						<div className={styles.ttItem}>
							Для многих сфера криптовалют кажется сложной и запутанной <br/>
							Мы понимаем это и поэтому подробно рассказываем каждому клиенту, как мы работаем, стараясь
							донести все подробности лично
						</div>
						{isMobile() ? (
							<div className={styles.imageWrapper}>
								<img src={g2} alt=""/>
							</div>
						) : null}
						<div className={styles.ttItem}>
							Ниже вы можете ознакомиться с общей схемой, которая объясняет, где заложена прибыль <br/>
							Если коротко — мы получаем возможность заходить в проекты до их листинга на бирже, во время
							Private и KOL раундов, а после этого предлагаем эту возможность клиентам
						</div>
						<div className={styles.ttItem}>
							В итоге, после листинга проекта, прибыль получается сильно выше, чем у других участников,
							заходивших на общих условиях
						</div>
					</div>
				</div>
				{!isMobile() ? (
					<div className={styles.imageWrapper}>
						<img src={g2} alt=""/>
						<div ref={imageRef} className={styles.animate}></div>
					</div>
				) : null}
			</div>
			<div className={styles.content}>
				<div className={styles.textContent}>
					<div ref={step1Ref} className={styles.textBlock}>
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
							{isMobile() ? (
								<img className={styles.sliderImage} src={getStepMobileImg(1)} alt=""/>
							) : null}
							<div className={styles.textBlockTextItem}>
								До нас в проект уже проинвестировали крупные Tier-1 фонды, бизнес-ангелы, <br/> топ
								менеджеры или крупные частные инвесторы <br/> Для нас они являются контрагентами
							</div>
							<div className={styles.textBlockTextItem}>
								В основном именно эти люди инициируют продажу своей доли в целях выхода <br/> в деньги
							</div>
						</div>
					</div>


					<div ref={step2Ref} className={styles.textBlock}>
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
								Период private раундов может длиться несколько лет, и крупным держателям токенов <br/>приходится
								ждать весь этот срок, если они хотят реализовать свою прибыль именно <br/>на бирже <br/>
								Но существует мехаxнизм внебиржевого OTC рынка, где такие агенты могут <br/> перепродать
								свою долю, чтобы выйти в деньги
							</div>
							{isMobile() ? (
								<img className={styles.sliderImage} src={getStepMobileImg(2)} alt=""/>
							) : null}
							<div className={styles.textBlockTextItem}>
								Их мотивация заключается в том, что они заходили в проект по оценке сильно ниже <br/>той,
								которая сейчас считается рыночной и той, по которой они готовы продать свою <br/>долю
							</div>
							<div className={styles.textBlockTextItem}>
								Такие ситуацию дают возможность нашим клиентам заработать: мы выкупаем долю <br/>контрагента,
								получая токены ниже рыночной и будущей цены проекта
							</div>
						</div>
						{!isMobile() ? (
							<div className={styles.bloom2}>
								<img src={bloom2} alt=""/>
							</div>
						) : null}
					</div>

					<div ref={step3Ref} className={styles.textBlock}>
						<div className={styles.textBlockTitle}>
							3. Инициируем сделку на KOL раунде
						</div>
						<div className={styles.textBlockText}>
							<div className={styles.textBlockTextItem}>
								Когда проект уже готов к выходу на рынок, он и связанные с ним контрагенты начинают
								глобальную кампанию по его продвижению
							</div>
							<div className={styles.textBlockTextItem}>
								Это и называется KOL раунд — период активного маркетинга <br/>
								Крупные контрагенты заинтересованы в том, чтобы их доля после старта торгов стоила
								как можно больше, поэтому они обращаются к инфлюенсерам и маркетинговым
								агентствам, предлагая им купить токены из их доли ниже цены листинга, взамен чего
								будет необходимо пиарить проект в социальных сетях
							</div>
							{isMobile() ? (
								<img className={styles.sliderImage} src={getStepMobileImg(3)} alt=""/>
							) : null}
							<div className={styles.textBlockTextItem}>
								Из-за того, что проектов на рынке очень много и лимиты большие, маркетинговые
								агентства и инфлюенсеры сами не могу их все время закрывать
							</div>
							<div className={styles.textBlockTextItem}>
								Маркетинговые агентства, дабы не терять прибыль с незакрытых лимитов, обращаются
								к другим агентам на рынке, одним из которых являемся мы
							</div>
							<div className={styles.textBlockTextItem}>
								Предоставляя ликвидность маркетинговым агенствам, взамен получаем токены ниже цены
								листинга
							</div>
						</div>
					</div>
					<div ref={step4Ref} className={styles.textBlock}>
						<div className={styles.textBlockTitle}>
							4. Подписываем SAFT контракт с проектом и продаём токены
						</div>
						<div className={styles.textBlockText}>
							<div className={styles.textBlockTextItem}>
								После того, как мы получили долю в проекте (независимо от того, на каком раунде),
								наш кошелёк вписывают в SAFT контракт с проектом <br/>
								SAFT контракт — агентский договор международного формата
								В нем прописываются условия того, как мы переводим деньги, а проект взамен
								обязуется поставлять токены по установленным условиям
							</div>
							<div className={styles.textBlockTextItem}>
								Огромным плюсом того, что мы работаем на рынке криптовалют является факт наличия
								блокчейна: каждый агент в схеме, начиная от инвестора и заканчивая проектом может
								отслеживать транзакции, видя, куда ушли деньги
							</div>
							{isMobile() ? (
								<img className={styles.sliderImage} src={getStepMobileImg(4)} alt=""/>
							) : null}
							<div className={styles.textBlockTextItem}>
								Мы же, после получения токенов, продаём их на бирже и пересылаем прибыль нашим
								клиентам <br/>
								Благодаря тому, что мы заходим сильно ниже цены старта торгов, появляется хорошая
								страховка от риска падения цены токена, а потенциальная прибыль становится больше
							</div>
						</div>
					</div>
				</div>
				{!isMobile() ? (
					<div className={styles.slider}>
						{step === 1 ? <img className={styles.sliderImage} src={step1} alt=""/> : null}
						{step === 2 ? <img className={styles.sliderImage} src={step2} alt=""/> : null}
						{step === 3 ? <img className={styles.sliderImage} src={step3} alt=""/> : null}
						{step === 4 ? <img className={styles.sliderImage} src={step4} alt=""/> : null}
					</div>
				) : null}
				{!isMobile() ? (
					<div className={styles.bloom3}>
						<img src={bloom3} alt=""/>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default HowWeWorkPage;