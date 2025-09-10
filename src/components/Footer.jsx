import React from 'react'

function Footer() {
  return (
    
      <div className=" bg-pink-900 text-slate-200  py-5">
        <div className="grid md:grid-cols-4 pb-5 ps-5 ">
        
            <div className="pe-5 me-5">
              <h1 className='text-xl text-white py-3'>Daily Cart</h1>
              <p className=''>Designed and built with all the love in the world by the Luminar team with the help of our contributors. <br /> <br /> Code licensed Luminar ,docs CC BY 3.0.Currently v5.3.2</p>
            </div>
            <div className="">
              <h1 className='text-xl text-white py-3'>Links</h1>
              <p>Landing Page</p>
              <p>Home Page</p>
              <p>Watch History Page</p>
            </div>
            <div className="">
              <h1 className='text-xl text-white py-3'>Guides</h1>
              <p>React</p>
              <p>React Bootstrap</p>
              <p>React Router</p>
            </div>
            <div className="">
              <h1 className='text-xl text-white py-3'>Contact Us</h1>
              <input type="text" placeholder='Enter your email here' className='bg-white rounded my-3 p-2 placeholder:text-gray-500'/><i className="fa-solid fa-arrow-right px-2"></i>
              <div className="icons flex justify-between pe-5 pt-5">
                <i className='fa-brands fa-twitter'></i>
                <i className='fa-brands fa-instagram'></i>
                <i className='fa-brands fa-facebook'></i>
                <i className='fa-brands fa-linkedin'></i>
                <i className='fa-brands fa-github'></i>
                <i className='fa-solid fa-phone'></i>
              </div>
            </div>
        </div>
        <p className='text-center'>Copyright @ July 2024.Daily Cart .Built with React Redux</p>
      </div>
    
    
  )
}

export default Footer
