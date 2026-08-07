import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Biography from './components/Biography/Biography';
import Expertise from './components/Expertise/Expertise';
import SelectedWork from './components/SelectedWork/SelectedWork';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Biography />
            <Expertise />
            <SelectedWork />
            <Footer />
        </div>
    );
}
