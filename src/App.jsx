import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CurrentFocus from './components/CurrentFocus/CurrentFocus';
import Expertise from './components/Expertise/Expertise';
import Experience from './components/Experience/Experience';
import SelectedWork from './components/SelectedWork/SelectedWork';
import Biography from './components/Biography/Biography';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
            <CurrentFocus />
            <Expertise />
            <Experience />
            <SelectedWork />
            <Biography />
            <Contact />
            <Footer />
        </div>
    );
}
