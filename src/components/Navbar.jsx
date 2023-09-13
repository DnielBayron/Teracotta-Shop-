import { useContext } from 'react'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'
import NavbarContext from '../context/navbarContext';
import  {NavLink} from 'react-router-dom';
// import {AiOutlineShoppingCart} from 'react-icons/ai';


export const Navbar = () => {
  const {nav, handleNav} = useContext(NavbarContext);



  return (


<div className='flex sticky top-0 justify-between items-center h-24 w-full mx-auto px-4 bg-[#dd7636] shadow-lg ' >
  <h1 className='text-4xl font-Quick font-bold uppercase tracking-widest bg-gradient-to-bl from-[#ffb066]  to-[#F2BE22] text-transparent bg-clip-text m-5'><NavLink to='/'> Teracotta </NavLink></h1>
  <ul className='hidden md:flex items-center'>
        <li className='font-serif p-4 uppercase font-semibold text-white hover:text-[#F2BE22] duration-200' >
       <NavLink to='/Shop'> Shop </NavLink>
       </li>
        <li className='font-serif p-4 uppercase font-semibold text-white hover:text-[#F2BE22] duration-200 '>
        <NavLink to='/Cart'> Cart </NavLink>
        </li> 
        <li className='font-serif p-4 uppercase font-semibold text-white'>
        <NavLink to='/Email'> <button className='px-4 py-2 rounded-lg bg-[#F2BE22] hover:bg-[#ecce71] duration-200'> Email Us </button> </NavLink>
        </li>
  </ul>
  <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={25} /> :  <AiOutlineMenu size={25} /> }


  </div>
  <div className = {nav ? 'fixed left-0 top-0 h-full w-[70%] border-r border-r-gray-900 bg-[#dd7636] ease-out duration-500' : 'fixed left-[-100%]'}>
    <h1 className='text-4xl w-full font-Quick uppercase tracking-widest font-bold m-7 bg-gradient-to-bl from-[#ffb066]  to-[#F2BE22] text-transparent bg-clip-text'><NavLink to='/'> Teracotta </NavLink></h1>
    <ul className='font-serif font-bold p-4 uppercase'>
    <li className='p-4 text-white font-bold hover:text-[#F2BE22] duration-200 border-b border-gray-600'>
       <NavLink onClick={handleNav} to='/Shop'> Shop </NavLink>
        </li>
        <li className='p-4 text-white font-bold hover:text-[#F2BE22] duration-200 border-b border-gray-600'>
        <NavLink onClick={handleNav} to='/Cart'> Cart </NavLink>
        </li>
        <li className='p-4'>
        <NavLink onClick={handleNav} to='/Email'> <button className='p-4 w-full rounded-lg bg-[#F2BE22] hover:bg-[#ecce71] duration-200'> Email us </button>  </NavLink>
        </li> 
    </ul>
  </div>
</div>

  )
}
 