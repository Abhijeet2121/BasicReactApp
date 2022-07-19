import './App.css';
import Navbar from './Navbar';
import MainContent from './mainContent';
import React from "react"


function App(props) {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode(){
    setDarkMode(prevMode => ! prevMode)
  }

  return (
    <div>
        <header>
        <Navbar darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}/>
        </header>
        <MainContent darkMode={darkMode}/>
    </div>
  );
}
export default App;
