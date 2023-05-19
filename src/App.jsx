//import aos
import Aos from 'aos';
//import aos css
import 'aos/dist/aos.css'
//import css
import './index.css'
//import components
import Header  from './components/Header';
import Mision from './components/Mision';

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
    </div>
  )
}

export default App
