import { useState } from 'react'
import './App.css'
import StickyNavbar from './components/Navbar'
import FooterComponent from './components/footer'
import Home from './pages/Home'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <StickyNavbar/>
          <Routes>
            <Route path='/' Component={Home}/>
          </Routes>
      <FooterComponent/>
      </Router>
    </>
  )
}

export default App
