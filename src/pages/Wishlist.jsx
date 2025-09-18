import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'

function Wishlist() {
  const ourWishlist=useSelector(state=>state.wishlistReducer)
   const userCart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()


const handleCart=(product)=>{
  dispatch(removeWishlistItem(product?.id))
  dispatch(addToCart(product))
  const existingProduct=userCart?.find(item=>item.id==product.id)
  if(existingProduct){
    alert("Product Updated Successfully")
  }
}

  return (
    <div>
      <Header/>
   {
     ourWishlist?.length>0?
      <div style={{paddingTop:'100px'}} className='mx-5 mb-5'>
        <h1 className="text-3xl text-red-600 text-center">My Wishlist</h1>
        <div className="grid grid-cols-4 gap-4" style={{margin:'60px 0px'}}>
          {
    ourWishlist?.map(product=>(
        <div key={product.id}  className="rounded border p-2 shadow">
        <img src={product?.thumbnail} alt="product"   />
        <div className="text-center">
            <h3 className='font-bold text-xl'>{product?.title}</h3>
          <div className="flex justify-evenly my-5">
            <button><i  onClick={()=>dispatch(removeWishlistItem(product?.id))} className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
             <button><i onClick={()=>handleCart(product)} className="fa-solid fa-cart-plus text-green-600"></i></button>
          </div> 
        </div>
        </div>
    ))}
  </div>
       </div>
    :
   
      <div className="py-5 flex flex-col justify-center items-center " style={{paddingTop:'100px'}} >
        <p className=' text-red-500 text-3xl py-5' > Your Wishlist is Empty !!!</p>
        <img src="https://assets-v2.lottiefiles.com/a/447eb850-1151-11ee-962a-df534d0253f7/tnGcU7eR5U.png"  alt="image" width={'250px'} height={'250px'} />
         <Link to={'/'} className='bg-blue-500 text-white rounded p-2 my-3'>BACK TO HOME</Link>
      </div>
 
  }
    </div>
  )
}

export default Wishlist
