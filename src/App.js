import React, {useEffect, useState} from "react";
import './App.css';
import {svg} from "./components/svg/svg"
import {IndexPage} from "./components/IndexPage";
import 'animate.css';

function App() {
    const [showLandingScreen , setShowLandingScreen] = useState(true)

    useEffect(() => {
        // Use setTimeout to update the showLandingScreen boolean after 399 milliseconds (3.99 seconds)
        const timeoutId = setTimeout(() => {
           setShowLandingScreen(false)
        }, 3500);

        console.log(showLandingScreen)

        // Cleanup function to clear the timeout if the component unmounts
        return () => {clearTimeout(timeoutId)};
    }, [showLandingScreen]);

  return (
    <div className="App">
      <header className="App-header">
          {showLandingScreen ?
              svg()
              :
              IndexPage()
          }
      </header>
    </div>
  );
}

export default App;
