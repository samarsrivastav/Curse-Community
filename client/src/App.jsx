import './App.css'
import StickyNavbar from './components/Navbar'
import FooterComponent from './components/Footer'
import Home from './pages/Home'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Job from './pages/Job'
import Learning from './pages/Learning'
import Courses from './pages/Courses'
import JobDetail from './pages/JobDetail'
import { useState,useEffect } from 'react'

function App() {
  const[jobs,setJobs]=useState([]);
  const getJobRequest = async () => {
    const url = 'http://localhost:4000/api/jobs';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseJson = await response.json();
    if (Array.isArray(responseJson)) {
      setJobs(responseJson);
    } 
  };
  useEffect(() => {
    getJobRequest();
  }, []);
  return (
    <div >
      <Router>
        <StickyNavbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/job' element={<Job jobs={jobs} />} />
            <Route path='/learning' element={<Learning />} />
            <Route path='/jobdetail/:jobid' element={<JobDetail />} />
            <Route path='/web' element={<Courses />} />
            <Route path='/dsa' element={<Courses />} />
            <Route path='/machine-learning' element={<Courses />} />
            <Route path='/android' element={<Courses />} />
          </Routes>
      <FooterComponent/>
      </Router>
    </div>
  )
}

export default App
