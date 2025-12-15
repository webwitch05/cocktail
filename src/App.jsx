import { ScrollTrigger, SplitText } from 'gsap/all'
import './App.css'
import gsap from 'gsap';

import Navbar from './components/Navbar';
import Hero from './components/Hero'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className='h-dvh bg-black'/>
    </main>
  )
}

export default App
