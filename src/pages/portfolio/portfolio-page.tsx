import styles from './portfolio-page.module.css'
import NaymsLogo from '../../assets/portfolio/nayms.svg'
import PortalLogo from '../../assets/portfolio/Portal.svg'
import InspectLogo from '../../assets/portfolio/Inspect.svg'
import OrangeLogo from '../../assets/portfolio/orange.svg'
import ScrollLogo from '../../assets/portfolio/scroll.svg'
import MoemateLogo from '../../assets/portfolio/moemate.svg'
import OracleLogo from '../../assets/portfolio/oracle.svg'
import FuelLogo from '../../assets/portfolio/fuel.svg'
import MonadLogo from '../../assets/portfolio/monad.svg'
import ArrowIcon from '../../assets/portfolio/arrow-icon.svg'
import BArrowIcon from '../../assets/portfolio/barrow.svg'
import {FC, useRef, useState} from "react";
import {motion} from "framer-motion";
import bloom1 from '../../assets/portfolio/bloom1.svg'

export interface TableRowProps {
	logo: any
	name: string
	sphere: string
	round: string
	href: string
	index?: number
}

const projects: TableRowProps[] = [
	{
		logo: NaymsLogo,
		name: 'Nayms',
		sphere: 'DeFi',
		round: 'Venture',
		href: 'https://www.nayms.com/',
	},
	{
		logo: PortalLogo,
		name: 'Portal',
		sphere: 'GameFi',
		round: 'Venture',
		href: 'https://www.portalgaming.com/',
	},
	{
		logo: InspectLogo,
		name: 'Inspect',
		sphere: 'AI',
		round: 'Venture',
		href: 'https://www.inspect.xyz/',
	},
	{
		logo: OrangeLogo,
		name: 'Orange',
		sphere: 'DeFi',
		round: 'KOL',
		href: 'https://www.orangecrypto.com/',
	},
	{
		logo: ScrollLogo,
		name: 'Scroll',
		sphere: 'L2',
		round: 'KOL',
		href: 'https://scroll.io/',
	},
	{
		logo: MoemateLogo,
		name: 'Moemate',
		sphere: 'AI',
		round: 'Venture',
		href: 'https://www.moemate.io/',
	},
	{
		logo: OracleLogo,
		name: 'Supra Oracle',
		sphere: 'Oracle',
		round: 'KOL',
		href: 'https://supra.com/',
	},
	{
		logo: FuelLogo,
		name: 'Fuel',
		sphere: 'Blockchain',
		round: 'Venture',
		href: 'https://fuel.network/',
	},
	{
		logo: MonadLogo,
		name: 'Monad',
		sphere: 'Blockchain',
		round: 'KOL',
		href: 'https://www.monad.xyz/',
	},
]

const TableRow: FC<TableRowProps> = (props) => {
	const rowRef = useRef(null)
	const [isHovered, setIsHovered] = useState(false);

	const getArrow = (): string => {
		return isHovered ? BArrowIcon : ArrowIcon
	}

	return (
		<motion.div
			ref={rowRef}
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: 0.1 + (((props.index ?? 0) + 1) * 0.05) }}
			viewport={{ amount: 0.01, once: true }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`${styles.tableRow} ${styles.tableRowBody}`}
		>
			<div className={styles.projectName}>
				<img src={props.logo} alt=""/>
				{props.name}
			</div>
			<div>{props.sphere}</div>
			<div>{props.round}</div>
			<a href={props.href} className={styles.rowLink} target={'_blank'}>
				<img  className={styles.arrowIcon} src={getArrow()} alt=""/>
			</a>
		</motion.div>
	)
}
const PortfolioPage = () => {
	return (
		<div className={styles.portfolioPage}>
			<div className={styles.portfolioHeader}>
				Портфолио
			</div>
			<div className={`${styles.tableRow} ${styles.tableHead}`}>
				<div className={styles.projectName}>Проект</div>
				<div>Сфера</div>
				<div>Раунд</div>
			</div>
			<div className={styles.tableBody}>
				{projects.map((item, index) => (
					<TableRow
						key={index}
						logo={item.logo}
						name={item.name}
						sphere={item.sphere}
						round={item.round}
						href={item.href}
						index={index}
					/>
				))}
			</div>
			<div className={styles.caption}>
				* представлено не все портфолио, проекты выбраны случайно. Подробности обсуждаются лично
			</div>
			<div className={styles.portfolioBloom}>
				<img src={bloom1} alt=""/>
			</div>
		</div>
	);
};

export default PortfolioPage;