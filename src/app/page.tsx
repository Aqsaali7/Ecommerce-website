import React from "react";
import NavBar from "../app/components/NavBar"
import Progessor from "./components/Progressor";
import ProductList from "./components/ProductList"
import Banner from "./components/Banner";
import Features from "./components/Features";
import Pizza from "./components/Pizza";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Menu from "./components/Menuitems";





export default function App() {
  return (
    <div className="bg-gradient-to-r from-white to-[#fdfbd4] min-h-screen "> 
    <NavBar/>
    <Features/>
    <Progessor/>
    <ProductList/>
    <Banner/>
   <Pizza/>
  <Menu/>
  <Offer/>
  <Footer/>
    </div>
  );
};