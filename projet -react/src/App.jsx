import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection"


function App() {


  return (
    <div className="background" >
      <Header />
      <MainSection/>
      <Footer />
    </div> 
  )
}

export default App;
