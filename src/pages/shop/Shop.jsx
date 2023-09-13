import {DATA} from '../../data';
import { Products } from './products';
// import {AiOutlineShoppingCart} from 'react-icons/ai'

export const Shop = () => {
  return (
    <div className='max-w-[1280px] mx-auto px-16 md:px-24 py-6'>
  {/* <button className='text-[60px] absolute top-[900px] right-[-160px] border bg-yellow-400 rounded-full p-3 hover:scale-110 duration-200'><AiOutlineShoppingCart/></button> */}
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-6 l pt-12 '> 
   
        {DATA.map((item, index)=> 
          <Products key={index} data={item}/>
        )}
  
    </div>
    </div>
  )
}
