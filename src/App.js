import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Footer from "../src/components/Footer/Footer";
import WindowResizer from './hooks/WindowResizer';
import './App.css';
import data from './data';


function App() {

  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [index, setIndex] = useState(0);
  
  /* opens and closes hamburger menu */
  const activateMenu = () => 
    setMenuIsActive(!menuIsActive);

  /* closes hamburger menu when mouse hovers outside menu */
  const handleMouseLeave = () => 
    setMenuIsActive(false);

  return (
    <>
    <main>
    <div className={"background-" + location}>

      <Navbar 
        activateMenu={activateMenu}
        menuIsActive={menuIsActive}
        resizeWindow={WindowResizer}
        handleMouseLeave={handleMouseLeave}
        setIndex={setIndex}
        />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/Destination"
            element=
            {
            <Destination
            data={data}
            location={location}
            index={index}
            setIndex={setIndex}
            />
            }
          />
          <Route
            path="/Crew"
            element=
            {
            <Crew 
              data={data}
              location={location}
              index={index}
              setIndex={setIndex}
            />
            }
          />                   
          <Route
            path="/Technology"
            element=
            {
            <Technology 
              data={data}
              location={location}
              index={index}
              setIndex={setIndex}
            />
            }
          />                 
        </Routes>      
    </div>
  </main>
  <footer>
    <Footer />
  </footer>   
  </>
  );
}

export default App;
