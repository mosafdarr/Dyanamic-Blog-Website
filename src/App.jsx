import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Blog from './Pages/Blog'

import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';

const  App = () => {

  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Blog" element={<Blog />} /> {/* we will find out specific blog with this specific id */}
        </Routes> 
      </Router>
    </div>
  )

}

export default App