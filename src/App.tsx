import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/home-page.tsx";
import AboutPage from "./pages/about/about-page.tsx";
import FaqPage from "./pages/faq/faq-page.tsx";
import HowWeWorkPage from "./pages/how-we-work/how-we-work-page.tsx";
import PortfolioPage from "./pages/portfolio/portfolio-page.tsx";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";

function App() {

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
		<Footer/>
    </>
  )
}

export default App
