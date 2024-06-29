import styles from './faq.module.css'
import arrowIcon from '../../assets/faq/arrowIcon.svg'
import {FC, useState} from "react";


export interface QuestionProps {
	content: any
	title: any
}

const questions: QuestionProps[] = [
	{
		content: (
			<div>
				Связаться с маркетинговыми агенствами или выйти на OTC рынок – непростая задача.
				В этой сфере все держится на репутации и личных связях.
				Благодаря тому, что мы давно на рынке, нам предлагают условия лучше, чем тем, с кем еще не работали.
				А еще необходимо качественно выбирать проекты, ведь мошенничество и невыгодные условия в финансах повсюду.
				К тому же, заходить в сделку совместно с другими людьми сильно выгоднее – чем крупнее сумма, тем ниже цена.
				Вместе с тем, мы предоставляем полное сопровождение на каждом этапе сделки. Мы берем на себе функцию фиксации прибыли клиента.
				Кроме того, мы готовы защищать интересы клиентов в любой ситуации
			</div>
		),
		title: 'Почему инвестиции без вас невыгодны?',
	},
	{
		content: (
			<div>
				С вложенных средств берётся entrance fee, c прибыли perfomance fee
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

	return (
		<div className={styles.q}>
			<div className={styles.qHeader}>
				<div className={styles.qTitle}>{props.title}</div>
				<div
					className={`${styles.open} ${isOpen ? styles.www : ''}`}
					onClick={() => {
					setIsOpen(open => !open)
				}}>
					<img src={arrowIcon}/>
				</div>
			</div>
			{isOpen ? (
				<div className={styles.answer}>
					{props.content}
				</div>
			) : null}
		</div>
	)
}

const FaqPage = () => {
	return (
		<div className={styles.faqPage}>
			<div className={styles.pageTitle}>Вопросы и ответы</div>

			<div className={styles.questions}>
				{questions.map((q) => (
					<Question
						title={q.title}
						content={q.content}
					/>
				))}
			</div>
		</div>
	);
};

export default FaqPage;