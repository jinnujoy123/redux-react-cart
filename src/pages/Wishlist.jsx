import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

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
      <div style={{paddingTop:'100px'}} className='mx-5 mb-5'>
        <h1 className="text-3xl text-red-600 text-center">My Wishlist</h1>
   {
     ourWishlist?.length>0?
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
    :
   
      <div className="text-center">
        <p className=' text-red-500 text-3xl' style={{margin:'100px 0px'}}>Wishlist is Empty !!!</p>
      </div>
 
  }
       </div>
    </div>
  )
}

export default Wishlist
