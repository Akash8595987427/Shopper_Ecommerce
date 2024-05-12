import React, { useContext, useState } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Images/star_icon.png"
import star_dull_icon from "../Images/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'



const ProductDisplay = (props) => {
    const [size, setSize]  =  useState(false);
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <>
    
        <div className="productdisplay">
            <div className="productdisplay-left">
                {/* <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div> */}
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                {/* <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>122</p>
                </div> */}
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old"> ${product.old_price} </div>
                    <div className="productdisplay-right-price-new"> ${product.new_price} </div>
                </div>

                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment .
                </div>
                <div className="productdisplay-rigth-size">
                    <h1> Select Size </h1>
                    <div className="productdisplay-right-sizes" onClick={(event)=>{ 
                        const div = document.querySelector('div');
                        if(event.target.classList.contains("size")){ 
                            event.target.classList.add('selected');
                            setSize(event.target.innerHTML);
                            // deselect all other buttons
                            const divElem = div.querySelectorAll('.size');
                            divElem.forEach((divElem) => {
                            if (divElem !== event.target) {
                                divElem.classList.remove('selected');
                            }
                        })}}}>
                        <div className='size' >S</div>
                        <div className='size' >M</div>
                        <div className='size' >L</div>
                        <div className='size' >XL</div>
                        <div className='size'>XXL</div>
                    </div>
                </div>
                    <button className='cart_btn' onClick={()=>{addToCart(product.id);  window.scrollTo(0, 0)}}>ADD TO CART</button> 
                <Link to="/cart"><button className='cart_btn' onClick={(size)=>{ window.scrollTo(0, 0)}}>GO TO CART</button> </Link>
                <p className='productdisplay-right-category'><span> Category : </span> Woman, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span> Tags : </span> Modern, T-Latest</p>
            </div>


        </div>
      
    </>
  )
}

export default ProductDisplay
