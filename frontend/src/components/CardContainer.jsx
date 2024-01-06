import React from 'react'
import Cards from './Cards'

export default function CardContainer() {
  return (
    <>
    <div className="flex justify-evenly">
        <Cards title="Web Development"/>
        <Cards title="Mobile App Development"/>
        <Cards title="Data Structures & Algo"/>
        <Cards title="Competitive Programming"/>
    </div>
    
    </>
  )
}
