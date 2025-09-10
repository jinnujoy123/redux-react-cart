import React from 'react'
import Header from '../components/Header'

function Wishlist() {
  return (
    <div>
      <Header/>
      <div style={{paddingTop:'100px'}} className='mx-5 mb-5'>
        <h1 className="text-3xl text-red-600 text-center">My Wishlist</h1>
    <div className="grid grid-cols-4 gap-4 my-5">
        <div className="rounded border p-2 shadow">
        <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="product"   />
        <div className="text-center">
            <h3 className='font-bold text-xl'>title</h3>
          <div className="flex justify-evenly my-5">
            <button><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
             <button><i className="fa-solid fa-cart-plus text-green-600"></i></button>
          </div> 
        </div>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Wishlist
