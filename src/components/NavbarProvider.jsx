import { useState } from 'react';
import NavbarContext from '../context/navbarContext';


const NavbarProvider = ({children}) => {

    const [nav, setNav] = useState (false);

    const handleNav = ()=> {
        setNav(!nav);
    }


  return (
    <NavbarContext.Provider 
    value={{nav, handleNav}}>
    {children}
    </NavbarContext.Provider>
  )
}

export default NavbarProvider;