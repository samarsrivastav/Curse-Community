import React from 'react'
import Cards from './Cards'
export default function CardContainer() {
    return (
        <>
            <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-gray-700"/>
            <div className="flex justify-evenly my-5 py-5">
                <Cards title="Web Development" />
                <Cards title="Mobile App Development" />
                <Cards title="Data Structures & Algo" />
                <Cards title="Competitive Programming" />
            </div>

        </>
    )
}
