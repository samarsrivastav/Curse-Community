import { useState } from 'react'
import './App.css'
import StickyNavbar from './components/Navbar'
import FooterComponent from './components/footer'
import Home from './pages/Home'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Blog from './pages/Blog'
import Learning from './pages/Learning'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <StickyNavbar/>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/blog' Component={Blog}/>
            <Route path='/learning' Component={Learning}/>
          </Routes>
      <FooterComponent/>
      </Router>
    </>
  )
}

export default App
