
import './App.css';
import Home from './Components/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavBar';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import ViewUser from './Components/ViewUser';
import LogIn from './Components/LogIn';
import Wellcome from './Components/Wellcome';
import SignUp from './Components/SignUp';
import MainPage from './Components/MainPage';
import Navbaar from './Components/Navbaar';
import Footer from './Components/Footer';

import CartPage from './Components/CartPage.jsx';
import { AppProvider } from './Context/ProductContext.jsx';

import ShowCart from './Components/ShowCart.jsx';


function App() {
  return (
    <div className="App">
      
    
    
    <AppProvider>
    
    <Router>
    
    <Navbaar/>
    <Routes>
    <Route exact path="/" element={<Wellcome/>} />
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path="/addUser" element={<AddUser/>} />
    <Route exact path="/editUser/:id" element={<EditUser />} />
    <Route exact path="/viewUser/:id" element={<ViewUser/>} />
    <Route exact path="/logIn" element={<LogIn/>} />
    <Route exact path="/signup" element={<SignUp/>} />
    <Route exact path="/mainPage" element={<MainPage/>} />
    
    <Route exact path="/cartPage" element={<CartPage/>} />
    <Route exact path="/showCart" element={<ShowCart/>} />
    
    
    
    
    
    
    </Routes>
    <Footer/>
    </Router>
    </AppProvider>
{/*

       */}

    </div>
  )
} 
export default App;
