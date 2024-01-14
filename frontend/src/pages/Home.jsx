import React from 'react'
import CardContainer from '../components/CardContainer'
import CarouselComponent from '../components/Corousel'
import AddBanner from '../components/AddBanner'
import { BlogCorousel } from '../components/BlogCorousel'
export default function Home() {
  return (
    <div>
        <CarouselComponent/>
        <CardContainer/>
        <AddBanner/>
        <BlogCorousel/>
        
    </div>
  )
}
