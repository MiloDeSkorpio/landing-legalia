//import aos
import Aos from 'aos';
//import aos css
import 'aos/dist/aos.css'
//import css
import './index.css'
//import components
import Header  from './components/Header.jsx';
const App = () => {
// initialize aos
Aos.init({
  duration: 1800,
  offset: 100,
})
  return (
    <>
      <Header />
    </>
  )
}

export default App
