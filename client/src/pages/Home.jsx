import React from 'react'
import Corousel from '../components//Corousel'
import Card from "../components/Cards"
import AddBanner from '../components/AddBanner'
import { BlogCorousel } from '../components/BlogCorousel'
export default function Home() {
  return (
    <div>
        <Corousel/>
        <Card/>
        <AddBanner/>
        <BlogCorousel/>
        
    </div>
  )
}
