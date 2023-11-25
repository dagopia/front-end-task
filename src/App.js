import BitCoin from "./component/BitCoin";
import "./App.css";
import React, { useEffect, useState } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="App">
      {isMobile ? (
        <BitCoin />
      ) : (
        <p>This is not a mobile device.</p>
      )}
    </div>
  );
}

export default App;
