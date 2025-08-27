import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import KeyBenefits from './sections/KeyBenefits';
import TagList from './sections/TagList';
import Highlights from './sections/Highlights';
import ExperienceEducation from './sections/ExperienceEducation';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Expertise from './sections/Expertise';
import SkillAreas from './sections/SkillAreas';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <Header />
            <section id="hero-section">
              <Hero />
            </section>
            <KeyBenefits />
            <TagList />
            <Highlights />
            <ExperienceEducation />
            <Skills />
            {/* <Portfolio />*/}
            {/* <Expertise /> */}
            <SkillAreas />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
