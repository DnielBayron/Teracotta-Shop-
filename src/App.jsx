import NavbarProvider from "./components/NavbarProvider"
import { CartProvider } from "./pages/cart/CartProvider";
import { Navbar } from "./components/Navbar"
import { Routes , Route } from 'react-router-dom';
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/shop/Shop";
import { Cart } from './pages/cart/Cart';
import {Email} from './pages/email/Email';




function App() {
  return (

          <div>
      <NavbarProvider>
      <Navbar />
      </NavbarProvider>
       
       <CartProvider>
        <Routes>
          <Route path= "/" element = {<Home/>}/>
          <Route path="/shop" element= {<Shop/>}/>
          <Route path="/cart" element= {<Cart/>}/>
          <Route path="/email" element= {<Email/>}/>
        </Routes>
        </CartProvider>



        </div>




    
    
  )
}

export default App;
