import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'

function Cart() {
  const userCart=useSelector(state=>state.cartReducer)
  const [totalCart,setTotalCart]=useState(0)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
   if( userCart?.length>0){
   setTotalCart(Math.ceil( userCart.map(item=>item.totalPrice)?.reduce((prev,curr)=>prev+curr)))
   }
  },[userCart])

  const handleDecrementQuantity = (product)=>{
    if(product.quantity>1){
      dispatch(decrementQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const checkOut=()=>{
    dispatch(emptyCart())
    alert("Your Order has been placed successfully...Thank you for shopping with us!!!!")
    navigate('/')
  }

  return (
    <>
     <Header/>
      <div style={{paddingTop:'100px'}} className='mx-5 mb-5'>
          {
            userCart?.length ?
        <div className="">
          <h1 className="text-3xl text-blue-600 py-3">Cart Summary</h1>
          <div className="col-span-2 grid grid-cols-3  p-5">
              <div className="flex flex-col col-span-2 rounded shadow p-5 gap-4 ">
          {/* table */}
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
              {
                userCart?.map((product,index)=>(
              <tr>
                <td>{index+1}</td>
                <Link to={`/${product?.id}/view`}>
                  <td className=''>{product?.title?.slice(0,20)}...</td>
                </Link>
                <td> <img width={'70px'} height={'70px'} src={product?.thumbnail} alt="product"   /></td>
                <td><div className="flex">
          <button onClick={()=>handleDecrementQuantity(product)} className="font-bold">-</button>
          <input type="text" readOnly className="border p-1 mx-2 rounded text-center" value={product?.quantity} style={{width:'40px'}}/>
            <button onClick={()=>dispatch(incrementQuantity(product?.id))} className="font-bold">+</button>
          </div>
          </td >
                <td>$ {product?.totalPrice}</td>
                <td><button><i onClick={()=>dispatch(removeCartItem(product?.id))} className="fa-solid fa-trash text-red-600"></i></button></td>
              </tr>
              ))
}
            </tbody>
          </table>
          <div className="text-end mt-4">
              <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 text-white p-2 inline-block rounded mx-2'>EMPTY CART</button>
              <Link to={'/'} className='bg-blue-600 text-white p-2 inline-block rounded mx-2'>SHOP MORE</Link>
          </div>
            </div>
          {/* total */}
          <div className="col-span-1 rounded shadow p-5 mx-5 ">
            <h1>Total Amount : <span className='text-red-600'>$ {totalCart}</span></h1>
            <hr />
            <button onClick={checkOut} className='rounded bg-green-600 p-2 text-white mt-4 w-full'>CHECK OUT</button>
          </div>
          </div>
        </div>
        :

        <div className="py-5 flex flex-col justify-center items-center">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/008/515/488/small_2x/empty-cart-flat-illustration-concept-vector.jpg" alt="image" width={'250px'} height={'250px'}/>
          <h1 className='text-red-500 text-3xl py-5'>Your Cart is Empty!!!
          </h1>
          <Link to={'/'} className='bg-blue-500 text-white rounded p-2 my-3'>BACK TO HOME</Link>
        </div>
}
      </div>
    </>
  )
}

export default Cart
