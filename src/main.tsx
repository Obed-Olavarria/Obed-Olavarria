import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Header from "./components/header/Header.tsx";
import Home from "./pages/Home/Home.tsx";
import Description from "./pages/Home/Description.tsx";
import AboutMe from './pages/About_Me/About_me.tsx';
import PortafolioSystemEngenier from './pages/Portafolio/Portafolio_System_Engenier.tsx';
import PortafolioElectronica from './pages/Portafolio/Portafolio_Electronica.tsx';
import Certificate, { } from "./pages/Certificados/Certificados.tsx";
import SkillElectronica, { } from "./pages/Skill/Skill_Electronica.tsx";
import SkillSystemEngenier, { } from "./pages/Skill/Skill_System_Engenier.tsx";
import Footer from "./components/footer/Footer.tsx";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <main className="container-ancho">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Description />
            </>
          } />
          <Route path='/certificate' element={<Certificate />} />
          <Route path="/portafolio/system" element={<PortafolioSystemEngenier />} />
          <Route path='/portafolio/electronican' element={<PortafolioElectronica />} />
          <Route path='/skill/system' element={<SkillSystemEngenier />} />
          <Route path='/skill/electronican' element={<SkillElectronica />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
