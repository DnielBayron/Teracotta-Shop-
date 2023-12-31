import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();


  return (
   
    <div className="w-full fixed" >

    <div className="w-full h-screen bg-white/40 absolute ">
      <h1 className=" text-4xl lg:text-6xl font-Bebas font-extrabold text-center px-4 mt-64">So you want to be a PLANT PARENT
      <span>
      <TypeAnimation
      sequence={[
        '',
        1000,
        '.',
        1000, 
        '...',
        1000,
        '....',
        1000
      ]}
      wrapper="span"
      speed={80}
      style={{ fontSize: '1em' }}
      repeat={Infinity}
      cursor= {false}
    />
      </span></h1>
      <div className='flex justify-center items-center mt-8'>
      <button onClick={() => navigate('/shop')} className='text-xl px-3 py-1 lg:px-4 rounded-3xl  bg-black text-white hover:text-black hover:bg-white duration-200'> Here`s where to start </button>
    </div>
    </div>


  <div className="">
    <img className=" w-full h-screen object-cover lg:object-left-bottom" src="https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2010&q=80" alt="img.jpg" />
  </div>
       
    </div>

)};




