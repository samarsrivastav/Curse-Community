import React from 'react'
import Card from "../components/Cards"
import AddBanner from '../components/AddBanner'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
export default function Home() {
  return (
    <div>
        <Hero/>
        <HomeCard/>
        <AddBanner/>
        
    </div>
  )
}
