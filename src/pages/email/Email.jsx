

export const Email = () => {
  return (
    <div className="max-w-[1640px] h-screen flex mx-auto items-center justify-center">

      <div className="border border-slate-400 shadow-2xl rounded-2xl w-[80%] md:w-[60%] p-3 md:p-6 mb-14 md:mb-28 font-Nunito font-bold bg-white/25">
      <form action="https://getform.io/f/1a92f12a-3173-492f-99ee-d110d6f11e89" method="POST" encType="multipart/form-data">
      <div className="grid md:grid-cols-2 md:gap-6 ">
      <div className="flex flex-col">
        <label className="text-sm p-2 uppercase">Name </label>
        <input className="border-2 flex border-gray-300 rounded-lg py-1" type="text" name="name"/>
      </div>
      <div className="flex flex-col">
        <label className="text-sm p-2 uppercase">Phone Number</label>
        <input  className="border-2 flex border-gray-300 rounded-lg py-1" type="text" name="phone"/>
      </div>
      
      </div>
      
      <div  className="flex flex-col py-2">
        <label className="text-sm p-2 uppercase">Email Address</label>
        <input  className="border-2 border-gray-300 rounded-lg py-1" type="email" name="email" />
      </div>
      <div  className="flex flex-col" >
        <label className="text-sm p-2 uppercase">Subject</label>
        <input className="border-2 flex border-gray-300 rounded-lg py-1" type="text" name="subject" />
      </div>

        <div className="flex flex-col pt-3">
          <label className="text-sm p-2 uppercase">Message</label>
          <textarea className="border-2 flex border-gray-300 rounded-lg p-3 " name="message" rows="10"></textarea>
        </div>

      <button className="bg-black text-white hover:bg-white hover:text-black duration-300 mt-4 p-2 w-full  rounded-lg">
        Send Message
      </button>

        </form>
    

        </div>

    </div>
  )
}
