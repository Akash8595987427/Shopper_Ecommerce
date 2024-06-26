import React , {createContext} from "react"
import all_product from "../Components/Images/all_product"
import { useState } from "react";

export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_product.length+1 ; index++){
        cart[index]= 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [size, setSize] = useState();
    const [arr, setArr] = useState([]);
    

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
        // console.log(cartItems);
    }
    
    
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}));
    }


// This is the function for the cart count 
    const getTotalCartItems=()=>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    
    const getSizeFunction=(val)=>{
            setSize(val);
            return size;
    }


// This is the function for the total amount of the cart 
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for ( const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    let personalDetail = {
        email : "abc123@gmail.com",
        address : "142 Street",
        productInfo : {},
    }

    // console.log(obj);

    const getProductInfo=(val)=>{
        // setArr([...arr, val])
    //     obj.productInfo = [...arr];
    // // //    setArr(arr=> [...arr, val]);
        console.log(val);
        // console.log(obj);
    }

    const getProductId=(val)=>{
        
        let i = 1;
        let obj = all_product[val];
        console.log(obj);
        personalDetail.productInfo.val = obj;
        console.log(personalDetail)

        
    }
    
    
    const contextValue = {getTotalCartItems, all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getSizeFunction, getProductInfo, getProductId};

    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;