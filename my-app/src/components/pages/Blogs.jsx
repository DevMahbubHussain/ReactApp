import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { blogsData } from '../../data';
import { useState,useEffect } from 'react';
const Blogs = () => {
    const { title } = useParams();
    const detailsData = useLocation();
    // const [bodyData, setBodyData] = useState('');
    
    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => blog.title === title);
    //     setBodyData(blogData[0].body);
    // },[title])

    return (
        <div>
            {title}
            <p>{detailsData.state.body}</p>
        </div>
    )
}

export default Blogs;
