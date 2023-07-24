import { useState, useEffect } from 'react';

/* listens to the screen width that is used in navbar.js as condition to 
show or hide the hamburger menu */


const WindowResizer = () => {    
    const width = 769
    const [isMobile, setMobile] = useState(() => window.innerWidth < 769);
    return (
        useEffect(() => {
            const updateMedia = () => {
            if (window.innerWidth < width) {
                setMobile(true);
            } else {
                setMobile(false);
            }
            };
            window.addEventListener('resize', updateMedia);
            return () => window.removeEventListener('resize', updateMedia);
        }, [])
    )       
    }
  
  export default WindowResizer
  