import { useState , useEffect } from 'react';
import NavbarContext from '../context/navbarContext';
import { useLocation } from 'react-router-dom';


const NavbarProvider = ({children}) => {

    const [nav, setNav] = useState (false);
    const [showNavbar, setNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        console.log("this is location", location);
        if (location.pathname === '/'){
          setNavbar(false)
        } else {
          setNavbar(true)
        }

    }, [location])







    const handleNav = ()=> {
        setNav(!nav);
    }






  return (
    <NavbarContext.Provider 
    value={{nav, handleNav}}>
    {showNavbar && children}
    </NavbarContext.Provider>
  )
}

export default NavbarProvider;