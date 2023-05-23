//import aos
import Aos from 'aos';
//import aos css
import 'aos/dist/aos.css'
//import css
import './index.css'
//import components
import Header  from './components/Header';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

const App = () => {
// initialize aos
Aos.init({
  duration: 1800,
  offset: 100,
})
  return (
    <div className='overflow-hidden'>
      <Header />
      <Mision />
      <Vision />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
