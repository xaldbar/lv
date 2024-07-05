import './App.css'
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./pages/home/home-page.tsx";
import AboutPage from "./pages/about/about-page.tsx";
import FaqPage from "./pages/faq/faq-page.tsx";
import HowWeWorkPage from "./pages/how-we-work/how-we-work-page.tsx";
import PortfolioPage from "./pages/portfolio/portfolio-page.tsx";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";
import {useEffect} from "react";


const FOOTER_TILE_MAP: Record<string, string> = {
	'/': 'Зарабатывайте вместе с нами',
	'/faq': 'Остались вопросы? Задайте лично',
	'/about': 'Познакомьтесь с командой',
	'/portfolio': 'Хотите узнать подробности?',
	'/how-we-work': 'Остались вопросы? Задайте лично',
}

const PAGE_TITLE_MAP: Record<string, string> = {
	'/': 'Loona Ventures',
	'/faq': 'Loona Ventures | FAQ',
	'/about': 'Loona Ventures | О компании',
	'/portfolio': 'Loona Ventures | Портфолио',
	'/how-we-work': 'Loona Ventures | Как мы работаем',
}

function App() {
	const location = useLocation()

	useEffect(() => {
		document.title = PAGE_TITLE_MAP[location.pathname] ?? 'loonaventures'
		window.scrollTo(0, 0);
	}, [location]);
	return (
	<>
		<Header/>
		<Routes>
			<Route path={'/'} element={<HomePage/>}/>
			<Route path={'/faq'} element={<FaqPage/>}/>
			<Route path={'/about'} element={<AboutPage/>}/>
			<Route path={'/portfolio'} element={<PortfolioPage/>}/>
			<Route path={'/how-we-work'} element={<HowWeWorkPage/>}/>
		</Routes>
		<Footer title={FOOTER_TILE_MAP[location.pathname]}/>
	</>
	)
}

export default App
