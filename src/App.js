import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFormbyState from './components/TextFormbyState'

import {
  BrowserRouter as Router,
  Routes,
  Route
}
  from 'react-router-dom';


function App() {//a component can return only single element(here it is div className name=app);
  //to return multiple elements we can use jsx fragments<></>
  // return(

  // <>
  // <element 1>
  // <element 2>
  // </>
  //   )


  const [mode, setMode] = useState("light");//weather dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#21233f"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"

    }
  }

  return (
    <div className="App">
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/about" element={<About  mode={mode}/>} />
          <Route path="/" element={<TextFormbyState heading="Enter the text" mode={mode} />} />
        </Routes>
      </Router>

      {/* <Navbar />//calls deafult props */}


    </div>
  );
}

export default App;
