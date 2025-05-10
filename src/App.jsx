import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar, Start, Earth, TheThought, ContactUs, Footer } from './FrontPage';
import './FrontPage.css';
import LoginPage from "./Login";
import ElectronicCarbonEmissionsCalculator from "./ElectronicCarbonEmissionsCalculator";
function App() {
  return (
    <Router>
      <div className="Page01">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <br /><br />
                <img 
                  src="https://media.giphy.com/media/elcAvTEXkG02d17sr7/giphy.gif?cid=790b7611q0d4luebgticx3jkgn0k0zjepfxlbqd1f3kzlkrk&ep=v1_gifs_search&rid=giphy.gif&ct=g" 
                  alt="Loading......" 
                  id="bgstars" 
                />

                <div id="well">
                  <h1 id="title">
                    GLOB 
                    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="90" fill="white" className="bi bi-globe-asia-australia" viewBox="0 0 16 16">
                      <path d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.48.48 0 0 0 .346-.027Z"/>
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.88.88 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a7 7 0 0 1 3.425 7.692 1 1 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a1 1 0 0 0 .283.126 7 7 0 0 1-9.49-3.409Z"/>
                    </svg> 
                    N
                  </h1>
                  <br />
                  <h1 id="subtitle">Be A Part of Solution not Pollution</h1>
                </div>
                <Start />
                <Earth />
                <TheThought />
                <ContactUs />
                <Footer />
              </>
            } 
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Start" element={<ElectronicCarbonEmissionsCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
