import React, { useState,useEffect } from 'react';
import { BlogCard } from '../components/BlogCard';
import data from '../assets/data/Job-summary.json';

import { Button, IconButton } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

function Job(props) {
    const dataArray = props.jobs;
    const itemsPerPage = 5; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate starting and ending index of items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the data array to extract items for the current page
    const paginatedData = dataArray.slice(startIndex, endIndex);

    // Handler functions to navigate to previous and next pages
    const goToPreviousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <div>
            <div className="container my-[7%] mx-auto">
                {paginatedData.map((listItem, index) => (
                    <BlogCard
                        key={index}
                        img={listItem.logo}
                        url={listItem._id}
                        desc={listItem.about.p1}
                        title={listItem.company}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center gap-4 my-5">
                <Button
                    variant="text"
                    className="flex items-center gap-2 text-white"
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                >
                    ⬅️
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton>{currentPage}</IconButton>
                </div>
                <Button
                    variant="text"
                    className="flex items-center gap-2 text-white"
                    onClick={goToNextPage}
                    disabled={endIndex >= dataArray.length}
                >
                    Next ➡️
                </Button>
            </div>
        </div>
    );
}

export default Job;
