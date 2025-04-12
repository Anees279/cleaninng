import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ResponsiveRootsBar from './component/navagationbar'; 
// import {Home} from './home'// Adjust path as needed
import {HireUs} from './hireus'
import {AboutUs} from './aboutus'
import {Clients} from './client'
import {ProjectCallToAction} from './project'
import {InnovativeTeam} from './InnovativeTeam'
import {SubscribeSection} from './SubscribeSection'
import {Footer} from './Footer' // Adjust path as needed
const Roots: React.FC = () => {
  const location = useLocation(); // To access the current route

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Keep the navbar outside Routes to display it across all pages */}
      <ResponsiveRootsBar />
 <HireUs />
      <AboutUs />
      <Clients />
      <ProjectCallToAction />
      <InnovativeTeam />
      <SubscribeSection />

      
      <Footer />

      {/* Add a main content area */}
      {/* Main content area with flex-grow to push footer to the bottom when needed */}
      <div style={{ flexGrow: 1, paddingBottom: '16px' }}>
        <Routes>
           {/* <Route path="/" element={<Home />} /> */}
          

          {/* If no route matches, redirect to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {/* Only show the footer if the current route is not the home page */}
      {location.pathname !== '/' && <Footer />}
    </div>
  );
};

export default Roots;
