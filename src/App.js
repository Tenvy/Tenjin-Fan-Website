import React , { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Bg } from "./components/Bg";
import { Hero } from "./components/Hero";
import { Product } from "./components/Product";
import { imgData, productData, } from "./api"
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {

  const [alldata, setalldata] = useState([])
  const [herodata, sethero] = useState([])
  const [product, setproduct] = useState([])

  useEffect(() => {
    imgData().then((result) => {
      sethero(result)
    })
    productData().then((result) => {
      setproduct(result)
    })
  },[])

  return (
    <div className="">
        <Bg/>
      <header className="App-header">
        <Navbar/>
        <Hero herodata={herodata}/>
        <Product product={product} />
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}



export default App;
