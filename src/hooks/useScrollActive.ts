import { useState, useEffect } from 'react';

export default function useScrollActive () {
  const [scrollActive, setScrollActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 120) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    }
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
    

  }, [])
  
  return scrollActive

}