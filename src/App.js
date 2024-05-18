// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './Views/Home';

import Contact_us from './Views/Contact_us';
import Course_details from './Views/Course_details'
import About_us from './Views/About_us';
import Sign_up_in from './Views/Sign_up_in';
import Page_notfound from './Views/Page_notfound';
import Profile_view from './Views/Profile_view';
import Course_upload from './Views/Course_upload';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  return (

    
    <Router>
      <div>
        {/* Your other components or layout */}
        <Routes>
   
          <Route path="/" element={<Home/>}/>
        
          <Route path='/contact' element ={<Contact_us/>} />
    
          <Route path='/sign_up_in' element ={<Sign_up_in/>} />
          <Route path='/profile_view' element ={<Profile_view/>} />
          <Route path='/about_us' element ={<About_us/>} />
		  <Route path='/course_upload' element ={<Course_upload/>} />
          <Route path='/course_details/:id/:category' element ={<Course_details/>} />
          <Route path='*' element ={<Page_notfound/>} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
     
    </Router>

    
  );
};

export default App;
