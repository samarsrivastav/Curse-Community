import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StickyNavbar from './components/Navbar'
import CarouselComponent from './components/Corousel'
import FooterComponent from './components/footer'
import CardContainer from './components/CardContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StickyNavbar/>
      <CarouselComponent/>
      <CardContainer/>
      <FooterComponent/>
    </>
  )
}

export default App
