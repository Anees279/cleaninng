import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ResponsiveRootsBar from './component/navagationbar'; 
import CleaningHeroSection from './home'// Adjust path as needed
import { HireUs } from "./hireus";
import { AboutUs } from "./aboutus";
import { Clients } from "./client";
import { ProjectCallToAction } from "./project";
import { InnovativeTeam } from "./InnovativeTeam";
import { SubscribeSection } from "./SubscribeSection";
import {Footer} from './Footer'
import {Services} from './services'
import {About} from './about'
import {ContactUs} from './contactus'
import { ContactU } from './contactus1';
import { ServicesCard } from './Servicecard';
import LocationMap from './locution'; // Adjust path as needed
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
           <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
          

          {/* If no route matches, redirect to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {/* Only show the footer if the current route is not the home page */}
      {location.pathname == '/about' && <AboutUs />}
      {location.pathname == '/contact' && <ContactU  />}

      {location.pathname == '/contact' && <LocationMap />}

      {location.pathname == '/service' && <ServicesCard/> }

      {location.pathname !== '/service' && <HireUs />}


      {/* {location.pathname == '/contact' && <ContactU  />} */}
        <Clients />
        <WhatsAppButton phoneNumber="+971 56 502 1171" message="Hello, I need help with your services!" />
        <ProjectCallToAction />
        <InnovativeTeam />
        <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Roots;
