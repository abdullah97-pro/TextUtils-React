import { useState } from 'react';
import './App.css';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(60, 56, 56)';
      showAlert("Dark mode has been activated","successfully");
      document.title = "TextUtils - Dark Mode"
      
      // setInterval(() => {
      //   document.title = "Install TextUtils App and get reward"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install in a day and get 20% extra reward"
      // },1500);

    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been activated","successfully");
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
    {/* <Navbar title="متن" link1="خانه" link2="ارتباط" link3="درباره ما" link4="جستجو"/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" link1="Home" link2="Contact" link3="About" link4="Search" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      {/* <Routes>
          
        <Route exact path='/about' element={<About />} />

        <Route exact path='/' element={<TextForm heading="Text Application" mode={mode} showAlert={showAlert}/>} />

      </Routes> */}
      <TextForm heading="Text Application" mode={mode} showAlert={showAlert}/>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
