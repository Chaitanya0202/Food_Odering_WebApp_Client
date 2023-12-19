import React, { useState } from "react";
import { useGlobelContext } from "../Components/Context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

export default function ShowCart() {
  const {cart,price,incr,quantity}=useGlobelContext();

  
  
  let navigate=useNavigate()




  return (
    <div><h2>hello this is cart Show Page</h2>
    
    {
      console.log("cart value is",cart)
    }

    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Prize</th>
        <th scope="col">Cancel</th>
        
      </tr>
    </thead>
    <tbody>
    {cart.map((addedItem,index)=>(
        
        <tr>
          <th scope="row" key={index}>{index+1}</th>
          <td ><img  src={addedItem.strCategoryThumb} alt="kuch nahi"  style={{ height: '50px' }} /></td>
          <td>{addedItem.strCategory}</td>
    
          <td><div>
          <button>-</button><button onClick={()=>incr(index)}>+</button>
          </div></td>
          <td>{price[addedItem.idCategory-1]}</td>
          <td><button>Delete</button></td>
        </tr>
  ))}
    
    </tbody>
  </table>
  <Link className="mx-2 btn btn-outline-danger" to={"/cartPage"}>Back To Home</Link>
  <button className="mx-2 btn btn-outline-success"> Toal Prize 9878</button>
    </div>
  );
}
