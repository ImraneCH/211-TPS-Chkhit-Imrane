import { useState } from 'react'
import Header from "./Components/Header";
import MemeGenerator from "./Components/MemeGenerator";
import Footer from "./Components/Footer";
import "./App.css";


export default function App() {
  return (
    
    <div className='container'>
      <Header />
        <MemeGenerator />
      <Footer />
    </div>
    
    
  );
}
