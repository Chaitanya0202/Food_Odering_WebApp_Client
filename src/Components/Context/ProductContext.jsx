import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const BASE_URL="https://foododeringwebappserver-production.up.railway.app/"

  var [price,setPrice]=useState([23,40,50,15,60,80,50,30,83,48,23,10,58,900])
  const [cart,setCart]=useState([]);

  const[quantity,setQuantity]=useState([23,40,50,15,60,80,50,30,83,48,23,10,58,900])

  const [count, setCount]=useState(0);
  
  const cartAdded=(i)=>{
    console.log(i);  
    cart.push(i);
    console.log("cart:",cart)
    setCart(cart)

    setCount(count+1)

  }

  
  const incr=(index)=>{
    // we can not change the specific elements in  arry
    setCount(count+1)
      setPrice(prevData => {
        
        const newDataArray = [...prevData]; // Create a shallow copy of the array
        newDataArray[index] = (newDataArray[index]-1)*2; // Update the specific value at the given index
        
        
        return newDataArray; // Set the state with the new array
        

      });
    

      
  }
    

  return (
    <AppContext.Provider value={{ price,cart,cartAdded,BASE_URL ,count,incr,quantity}}>
      {children}
    </AppContext.Provider>
  );
};

// costom hook
const useGlobelContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobelContext };
