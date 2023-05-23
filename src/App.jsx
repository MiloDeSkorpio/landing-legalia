import { React, lazy, Suspense } from 'react';
//import aos
import Aos from 'aos';
//import aos css
import 'aos/dist/aos.css'
//import css
import './index.css'
// Importa tus componentes utilizando lazy
const Header = lazy(() => import('./components/Header'));
const Mision = lazy(() => import('./components/Mision'));
const Vision = lazy(() => import('./components/Vision'));
const Servicios = lazy(() => import('./components/Servicios'));
const Contacto = lazy(() => import('./components/Contacto'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  // initialize aos
Aos.init({
  duration: 1800,
  offset: 100,
})
  return (
    <div className='overflow-hidden'>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Wrap tus componentes en Suspense */}
        <Header />
        <Mision />
        <Vision />
        <Servicios />
        <Contacto />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
