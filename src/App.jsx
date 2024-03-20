import React from "react";
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
  
  // const [darkMode, setDarkMode] = useState(true);

  
  return (
   <>
   <Router>
    <Navbar/>                                {/* By this Navbar is available in all the component  */}
    <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>} />
      <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>} />
      <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>} />
      <Route path="/product" element={<Product/>} />
      <Route path= '/product/:productId' element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/signup" element={<Signup/>} />                           {/*   code changes yesterday     */}
      <Route path="/login" element={<Login/>} />                             {/*   code changes yesterday     */}

    </Routes>
    <Footer />
   </Router>

   {/* {document.body.style.backgroundColor="#042743"} */}
   </>
  );
};

export default App;