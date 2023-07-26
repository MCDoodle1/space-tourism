/* listens to the screen width and returns true if the screen size is smaller than or equal
to 780 pixels. If the screen size is above the hook returns false
This is used in Navbar.js to determine where on the page the menu should render 
(at the right side in a hamburger menu on mobile and at the top for larger screen sizes) */

import { useState, useEffect } from 'react';
const WindowResizer = () => {
    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        
        function handleResize() {
            if (window.innerWidth >= 780) {
                setIsMobile(false);
            }
            else { setIsMobile(true) }
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        //Cleanup the useEffect when the component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isMobile;
}
export default WindowResizer;

  