import React from 'react'
import "./Admin.css"

const Admin = () => {
  return (
    <div className='adminSection'>
      <div className="adminContainer">
            <div className="adminBox">
                
                <h3>Add Product</h3>
                <div className="productName">
                        <h3>Product Name</h3>
                        <input type="text" style={{width : "100%"}} />
                </div>

                <div className="description">
                        <h3>Description</h3>
                        <textarea name="" id=""  style={{width : "100%"}}></textarea>
                        <p>Write the few sentence about the project</p>
                </div>

                <div className="brandName">
                        <h3>Brand</h3>
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                </div>

                <div className="categoryOfProduct">
                        <h3>Category</h3>
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                </div>

                <div className='priceOfProduct'>
                        <div>
                            <h3>Price</h3>
                            <input type="text"  />
                        </div>

                        <div>
                            <h3>Discount Percentage</h3>
                            <input type="text" />
                        </div>

                        <div>
                            <h3>Stocks</h3>
                            <input type="text"  />
                        </div>
                </div>

                <div id='productImg'>
                        <h3>Images</h3>
                        <input type="text"  style={{width : "100%"}}/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Admin
