import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function View() {
  return (
    <div>
      <Header/>
      <div className="grid md:grid-cols-2 my-5 gap-4 items-center" style={{paddingTop:'100px'}}>
        <div className="flex flex-col justify-center items-center">
         <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="product"  className='' />
         <div className="flex justify-around w-full my-5">
          <Link to={'/wishlist'} className='bg-blue-600 rounded shadow py-1 px-3 text-white'> ADD TO WISHLIST</Link>
          <Link to={'/cart'} className='bg-green-600 rounded shadow py-1 px-3 text-white'>ADD TO CART</Link>
         </div>
        </div>
        <div className="ms-5" style={{marginRight:'100px'}}>
          <h1 className='text-3xl '>title</h1>
          <h1 className='text-red-500 '>$ 300</h1>
          <h2><span className='font-bold'>Brand</span> : Essence</h2>
          <h3 className="text-xl text-justify">
            <span className='font-bold'> Description </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque at corporis ipsa, ea molestias alias voluptas eligendi tempore consequuntur repellat voluptatibus facere architecto doloribus delectus deserunt laborum nesciunt reprehenderit?
          </h3>
          <h1 className='text-xl font-bold'>Client reviews</h1>
          <div className=" shadow my-3 p-2">
              <p><span className="font-bold">client name</span> : message</p>
              <p>Rating : 3 <i className='fa-solid fa-star text-yellow-400'></i></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
