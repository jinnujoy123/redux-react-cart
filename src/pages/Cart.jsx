import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
     <Header/>
      <div style={{paddingTop:'100px'}} className='mx-5 mb-5'>
        <h1 className="text-3xl text-blue-600">Cart Summary</h1>
    <div className="grid grid-cols-3 gap-4 my-5">
        {/* table */}
        <div className="col-span-2 rounded shadow  p-5">
<table className="table-auto w-full">
  <thead>
    <tr>
      <td className="font-semibold">#</td>
      <td className="font-semibold">Name</td>
      <td className="font-semibold">Image</td>
      <td className="font-semibold">Quantity</td>
      <td className="font-semibold">Price</td>
      <td className="font-semibold">....</td>
    </tr>
  </thead>
  <tbody>
    {/* duplicate according to cart array */}
    <tr>
      <td>1</td>
      <td>title</td>
      <td> <img width={'70px'} height={'70px'} src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="product"   /></td>
      <td><div className="flex">
        <button className="font-bold">-</button>
        <input type="text" readOnly className="border p-1 mx-2 rounded text-center" value={10} style={{width:'40px'}}/>
          <button className="font-bold">+</button>
        </div>
        </td>
      <td>$ 400</td>
      <td><button><i className="fa-solidd fa-trash text-red-600"></i></button></td>
    </tr>
  </tbody>
</table>
<div className="float-right mt-4">
    <button className='bg-red-600 text-white p-2 inline-block rounded mx-2'>EMPTY CART</button>
    <Link to={'/'} className='bg-blue-600 text-white p-2 inline-block rounded mx-2'>SHOP MORE</Link>
</div>
        </div>
        {/* total */}
        <div className="col-span-1 rounded p-5">
          <h1>Total Amount : <span className='text-red-600'>$ 40</span></h1>
          <hr />
          <button className='rounded bg-green-600 p-2 text-white mt-4 w-full'>CHECK OUT</button>
        </div>
    </div>
      </div>
    </>
  )
}

export default Cart
