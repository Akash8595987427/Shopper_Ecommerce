import React, { useState } from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart"
import Signup from "./Pages/Signup";                                /*   code changes yesterday     */
import Login from "./Pages/Login";                                  /*   code changes yesterday     */
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Images/banner_mens.png";
import women_banner from "./Components/Images/banner_women.png";
import kid_banner from "./Components/Images/banner_kids.png";





const App = () => {
  const [modes, setModes] = useState();

  const getModeFunction=(mode)=>{
    console.log(mode);
    setModes(mode);
    console.log(modes);
  }

  
  return (
   <>
   <Router>
    <Navbar getMode = {getModeFunction}/>                                {/* By this Navbar is available in all the component  */}
    <Routes>
      <Route path="/" element={<Shop mode={modes}/>} />
      <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" mode={modes}/>} />
      <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
      <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
      <Route path="/product" element={<Product mode={modes}/>}  />
      <Route path= '/product/:productId' element={<Product mode={modes}/>}  />
      <Route path="/cart" element={<Cart mode={modes}/>}  />
      <Route path="/signup" element={<Signup mode={modes}/>}  />                           {/*   code changes yesterday     */}
      <Route path="/login" element={<Login mode={modes}/>}  />                             {/*   code changes yesterday     */}

    </Routes>
    <Footer />
   </Router>

   {/* {document.body.style.backgroundColor="#042743"} */}
   </>
  );
};

export default App;