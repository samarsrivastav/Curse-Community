import './App.css'
import StickyNavbar from './components/Navbar'
import FooterComponent from './components/Footer'
import Home from './pages/Home'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Blog from './pages/Blog'
import Learning from './pages/Learning'
import Courses from './pages/Courses'
import JobDetail from './pages/JobDetail'

function App() {
  

  return (
    <div >
      <Router>
        <StickyNavbar/>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/blog' Component={Blog}/>
            <Route path='/learning' Component={Learning}/>
            <Route path='/jobdetail/:jobid' Component={JobDetail}/>
            <Route path='/web' Component={Courses}/>
            <Route path='/dsa' Component={Courses}/>
            <Route path='/machine-learning' Component={Courses}/>
            <Route path='/android' Component={Courses}/>
          </Routes>
      <FooterComponent/>
      </Router>
    </div>
  )
}

export default App
