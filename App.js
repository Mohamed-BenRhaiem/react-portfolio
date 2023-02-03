import './App.css';
import Header from './sections/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/about/About';
import Service from './components/service/Service';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Container from './components/container/Container';
import Contact from './sections/Header/contact/Contact';
import Footer from './sections/Header/Footer/Footer';

function App() {
  return (
    <>
    <Header />
    <Container>

        <Hero />
        <hr/>
        <About />
        <Service />
        <Skills />
        <Portfolio />
        <Contact  />
    </Container>
    <Footer />
    </>
  );
}

export default App;
