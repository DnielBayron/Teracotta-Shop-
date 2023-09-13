import {DATA} from '../../data';
import { Products } from './products';


export const Shop = () => {
  return (
    <div className='max-w-[1280px] mx-auto px-16 md:px-24 py-6'>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-6 l pt-12 '> 
   
        {DATA.map((item, index)=> 
          <Products key={index} data={item}/>
        )}
  
    </div>
    </div>
  )
}
