import styles from './portfolio-page.module.css'
import NaymsLogo from '../../assets/portfolio/nayms.svg'
import PortalLogo from '../../assets/portfolio/Portal.svg'
import InspectLogo from '../../assets/portfolio/Inspect.svg'
import OrangeLogo from '../../assets/portfolio/orange.svg'
import ScrollLogo from '../../assets/portfolio/scroll.svg'
import MoemateLogo from '../../assets/portfolio/moemate.svg'
import SolidusLogo from '../../assets/portfolio/solidus.svg'
import OracleLogo from '../../assets/portfolio/oracle.svg'
import FuelLogo from '../../assets/portfolio/fuel.svg'
import MonadLogo from '../../assets/portfolio/monad.svg'
import ArrowIcon from '../../assets/portfolio/arrow-icon.svg'
import {FC} from "react";

export interface TableRowProps {
	logo: any
	name: string
	sphere: string
	round: string
	href: string
}

const projects: TableRowProps[] = [
	{
		logo: NaymsLogo,
		name: 'Nayms',
		sphere: 'DeFi',
		round: 'Venture',
		href: '',
	},
	{
		logo: PortalLogo,
		name: 'Portal',
		sphere: 'GameFi',
		round: 'Venture',
		href: '',
	},
	{
		logo: InspectLogo,
		name: 'Inspect',
		sphere: 'AI',
		round: 'Venture',
		href: '',
	},
	{
		logo: OrangeLogo,
		name: 'Orange',
		sphere: 'DeFi',
		round: 'KOL',
		href: '',
	},
	{
		logo: ScrollLogo,
		name: 'Scroll',
		sphere: 'L2',
		round: 'KOL',
		href: '',
	},
	{
		logo: MoemateLogo,
		name: 'Moemate',
		sphere: 'AI',
		round: 'Venture',
		href: '',
	},
	{
		logo: SolidusLogo,
		name: 'Solidus',
		sphere: 'AI',
		round: 'KOL',
		href: '',
	},
	{
		logo: OracleLogo,
		name: 'Supra Oracle',
		sphere: 'Oracle',
		round: 'KOL',
		href: '',
	},
	{
		logo: FuelLogo,
		name: 'Fuel',
		sphere: 'Blockchain',
		round: 'Venture',
		href: '',
	},
	{
		logo: MonadLogo,
		name: 'Monad',
		sphere: 'Blockchain',
		round: 'KOL',
		href: '',
	},
]

const TableRow: FC<TableRowProps> = (props) => {
	const onLinkClick = (href: string) => {
		return href
	}

	return (
		<div className={`${styles.tableRow} ${styles.tableRowBody}`}>
			<div className={styles.projectName}>
				<img src={props.logo} alt=""/>
				{props.name}
			</div>
			<div>{props.sphere}</div>
			<div>{props.round}</div>
			<div className={styles.rowLink} onClick={() => onLinkClick('')}>
				<img src={ArrowIcon} alt=""/>
			</div>
		</div>
	)
}
const PortfolioPage = () => {
	return (
		<div className={styles.portfolioPage}>
			<div className={styles.portfolioHeader}>
				Портфолио
			</div>
			<div className={`${styles.tableRow} ${styles.tableHead}`}>
				<div>Проект</div>
				<div>Сфера</div>
				<div>Раунд</div>
			</div>
			{projects.map((item) => (
				<TableRow
					logo={item.logo}
					name={item.name}
					sphere={item.sphere}
					round={item.round}
					href={item.href}
				/>
			))}
			<div className={styles.caption}>
				* представлено не все портфолио, проекты выбраны случайно. Подробности обсуждаются лично
			</div>
		</div>
	);
};

export default PortfolioPage;