import React from 'react';
import { BlogCard } from '../components/BlogCard';
import data from '../assets/data/Blog.json';

function Blog() {
    const dataArray = Object.values(data);


    return (
        <div>
            <div className="container my-[7%]">
                {dataArray.map((listItem, index) => (
                    <BlogCard
                        key={index}
                        img={listItem.img}
                        url={listItem.url}
                        desc={listItem.desc}
                        title={listItem.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Blog;