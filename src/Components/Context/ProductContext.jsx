import { createContext, useContext, useState } from "react";


const AppContext = createContext();

const AppProvider = ({ children }) => {
  
  const BASE_URL = "https://foododeringwebappserver-production.up.railway.app/";

  var [price, setPrice] = useState([
    23, 40, 50, 15, 60, 80, 50, 30, 83, 48, 23, 10, 58, 900,
  ]);
  const [cart, setCart] = useState([]);

  const [quantity, setQuantity] = useState([
    23, 40, 50, 15, 60, 80, 50, 30, 83, 48, 23, 10, 58, 900,
  ]);

  const [count, setCount] = useState(0);

  const cartAdded = (i) => {
    console.log(i);
    cart.push(i);
    console.log("cart:", cart);
    setCart(cart);

    setCount(count + 1);
  };

  localStorage.setItem("isLogedIn", false);
  const placeOrder = () => {
    const isLogedIn = localStorage.getItem("isLogedIn");
    if (isLogedIn === "true") {
      alert("Order Placed SuccesFull Thank You..!");
    } else {
      // alert("Plz..Log In First");
      const result = window.confirm("First You Have To Log In...!");
      if (result) {
        window.open("/logIn")
        // alert("Log In Plz..")
        // navigate("/login");
      } else {
        // User clicked "Cancel" or closed the dialog
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        price,
        cart,
        cartAdded,
        BASE_URL,
        count,
        quantity,
        setCart,
        placeOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// costom hook
const useGlobelContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobelContext };
