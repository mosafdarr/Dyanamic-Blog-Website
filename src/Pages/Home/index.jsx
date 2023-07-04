import React from 'react'
import Navbar from '../../Components/Navbar';
import BlogList from '../../Components/BlogList';
import {blogList}  from '../../config/data';

const Home = () => {
  return (
    <div> 
    <Navbar title = "PakiBlogger" home = "Home" blogs="Blogs" />
    <BlogList blogs={blogList}/>
    </div>
)
}

export default Home