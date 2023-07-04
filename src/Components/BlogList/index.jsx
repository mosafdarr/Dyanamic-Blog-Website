import React from 'react'
import './style.css'
import BlogItem from './BlogItem';

const BlogList = ({blogs}) => {
  return (
    <div className='blogList-wrap'>
    {
        blogs.map( (blog) => (
            <BlogItem blog={blog} />
        )

        )
    }
    </div>
  );
};

export default BlogList;

{/*

Explanation: - This component recieve data of blog as prop in it, and then fetch one by one using map's call back function
            - then pass that data to each blog item to display.. 
            - Furthure i have set the style to display all those blogitems in grid format. 

*/}