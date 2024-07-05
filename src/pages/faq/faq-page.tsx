import styles from './faq.module.css'
import arrowIcon from '../../assets/faq/arrowIcon.svg'
import arrowIconS from '../../assets/faq/faq_ar_s.svg'
import bloom1 from '../../assets/faq/bloom1.svg'
import bloom2 from '../../assets/faq/bloom2.svg'
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {useWidth} from "../../hooks/use-width.ts";

export interface QuestionProps {
	content: any
	title: any
}

const questions: QuestionProps[] = [
	{
		content: (
			<div>
				Связаться с маркетинговыми агентствами или выйти на OTC рынок – непростая задача. <br/>
				В этой сфере все держится на репутации и личных связях. <br/><br/>
				Благодаря тому, что мы давно на рынке, нам предлагают условия лучше, чем тем, с кем еще не работали. <br/>
				А еще необходимо качественно выбирать проекты, ведь мошенничество и невыгодные условия в финансах повсюду. <br/><br/>
				К тому же, заходить в сделку совместно с другими людьми сильно выгоднее – чем крупнее сумма, тем ниже цена. <br/><br/>
				Вместе с тем, мы предоставляем полное сопровождение на каждом этапе сделки. Мы берем на себе функцию фиксации прибыли клиента. <br/><br/>
				Кроме того, мы готовы защищать интересы клиентов в любой ситуации
			</div>
		),
		title: 'Почему инвестиции без вас невыгодны?',
	},
	{
		content: (
			<div>
				С вложенных средств берётся entrance fee, c прибыли performance fee
				<br/> <br/> <br/>
				Размер комиссий обсуждается лично
			</div>
		),
		title: (
			<span>Какие комиссии для инвестирования <br/> в фонд?</span>
		),
	},
	{
		content: (
			<div>
				Да, можете
				<br/><br/><br/>

				Мы связываемся с каждым инвестором лично,  после чего обсуждаем подробности
			</div>
		),
		title: (
			<span>
				Могу ли я лично пообщаться <br/> с представителями фонда?
			</span>
		),
	},
	{
		content: (
			<div>
				Минимальная сумма вложения 1000$
				<br/><br/><br/>
				При инвестировании от 10,000$ обсуждаются индивидуальные условия
			</div>
		),
		title: 'Какие условия по сумме вложения в фонд?',
	},
	{
		content: (
			<div>
				Заполнить заявку, после чего с вами свяжется менеджер  <br/> и ответит на все вопросы
			</div>
		),
		title: (
			<span>
				Как можно узнать подробности и задать <br/> вопросы, которые у меня остались?
			</span>
		),
	},
]

const Question: FC<QuestionProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const width = useWidth()

	const getImage = (): string => {
		if (width < 1600) {
			return arrowIconS as string
		}
		return arrowIcon as string
	}
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.1 }}
			viewport={{ amount: 0.1, once: true }}
			className={styles.q}
		>
			<div className={styles.qHeader}>
				<div className={styles.qTitle}>{props.title}</div>
				<div
					className={`${styles.open} ${isOpen ? styles.www : ''}`}
					onClick={() => {
					setIsOpen(open => !open)
				}}>
					<img src={getImage()}/>
				</div>
			</div>
			{isOpen ? (
				<div className={styles.answer}>
					{props.content}
				</div>
			) : null}
		</motion.div>
	)
}

const FaqPage = () => {
	return (
		<div className={styles.faqPage}>
			<div className={styles.bloom1}>
				<img src={bloom1} alt=""/>
			</div>
			<div className={styles.bloom2}>
				<img src={bloom2} alt=""/>
			</div>
			<div className={styles.pageTitle}>Вопросы и ответы</div>
			<div className={styles.questions}>
				{questions.map((q, index) => (
					<Question
						key={index}
						title={q.title}
						content={q.content}
					/>
				))}
			</div>
		</div>
	);
};

export default FaqPage;