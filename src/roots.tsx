import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import CleaningHeroSection from './home'// Adjust path as needed
import AboutUs from './About/aboutus'
import Footer from './Footer'
import Services from './services/services'
import Contact from './contact/contact'
// import { ContactU } from './contactus1';
import WhatsAppButton from "./component/whatappbutton";

 // Adjust path as needed
const Roots: React.FC = () => {
  const location = useLocation(); // To access the current route

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Keep the navbar outside Routes to display it across all pages */}
      {/* <ResponsiveRootsBar /> */}
 

      

      {/* Add a main content area */}
      {/* Main content area with flex-grow to push footer to the bottom when needed */}
      <div style={{ flexGrow: 1, paddingBottom: '16px' }}>
        <Routes>
        <Route path="/" element={<CleaningHeroSection />} />

           <Route path="/service" element={<Services />} />
           <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          

          {/* If no route matches, redirect to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {/* Only show the footer if the current route is not the home page */}



      
        <WhatsAppButton phoneNumber="+971 56 502 1171" message="Hello, I need help with your services!" />

      <Footer />
    </div>
  );
};

export default Roots;
