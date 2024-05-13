import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Images/cart_cross_icon.png"  
import { Link } from 'react-router-dom'


const CartItems = (props) => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext); 
    // const {} = useContext(ShopContext);

  return (
    <>
    <div className="cartitems">
        <div className="cartitems-format-main" style={{color : (props.mode)==="black"?"yellow":"black"}}>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       { console.log(props.mode)}
       {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div>
            <div className="cartitems-format cartitems-format-main" style={{color : (props.mode)==="black"?"yellow":"black"}}>
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img   src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
        </div>
        }
        return null;
       })}
       
      {/* changes done yesterday  */}
      <div className="cartitems-down">
        <div className="cartitems-total " style={{color : (props.mode)==="black"?"yellow":"black"}}>

        <h1> Cart Totals </h1>
        <div className='cart_total_calculate'>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>$ {getTotalCartAmount()}</p>
          </div>
          <hr style={{color : (props.mode)==="black"?"yellow":"black"}}/>
          <div className="cartitems-total-item">
            <p> Shipping Free </p>
            <p> Free </p>
          </div>
          <hr style={{color : (props.mode)==="black"?"yellow":"black"}}/>
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>$ {getTotalCartAmount()}</h3>
          </div>

          </div>

          
          <Link to="/checkout"> <button id='proceedBtn' > CHECKOUT</button> </Link>

        </div>
      </div>

    </div>
      
    </>
  )
}

export default CartItems
