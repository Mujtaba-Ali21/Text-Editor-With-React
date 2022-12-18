import React, { useState } from 'react'
import Alerts from './components/Alerts'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (massage, type)=>{
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === "light") {
      setMode("dark")
     document.body.style.backgroundColor = "#343a40"
     showAlert("Dark mode has been Enabled", "success")
     setTimeout(() => {
      setAlert(null)
    }, 1500);
    }
    else{
      setMode("light")
     document.body.style.backgroundColor = "white"
     showAlert("Light mode has been Enabled", "success")
     setTimeout(() => {
      setAlert(null)
    }, 1500);
    }
  }

 

  return (
   <>
    <Navbar title="Navbar" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter Some Text Here" mode={mode} showAlert={showAlert}/>
    </div>
    <Footer/>
    
    </>
    )
}

export default App;
