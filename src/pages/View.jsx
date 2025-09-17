import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


function View() {
  const userWishlist=useSelector(state=>state.wishlistReducer)
   const userCart=useSelector(state=>state.cartReducer)

const dispatch=useDispatch()
const {id}= useParams()
//  console.log(id);
const [product,setProduct]=useState({})

 useEffect(()=>{
  const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
  setProduct(allProducts.find((item)=>item.id==id))
 },[])
//  console.log(product);

 const handleAddToWishlist=()=>{
  const existingProduct= userWishlist.find((item)=>item.id==product.id)
  if(existingProduct){
    alert("Product already exists in your wishllist...")
  }else{
    dispatch(addToWishlist(product))
  }
 }

const handleCart=()=>{
  dispatch(addToCart(product))
  const existingProduct=userCart?.find(item=>item.id==product.id)
  if(existingProduct){
    alert("Product Updated Successfully")
  }
}
  return (
    <div>
      <Header/>
      <div className="grid md:grid-cols-2 py-5 gap-4 items-center" style={{paddingTop:'100px'}}>
        <div className="flex flex-col justify-center items-center">
         <img src={product.thumbnail} alt="product"  className='' />
         <div className="flex justify-around w-full my-5">

          <button onClick={handleAddToWishlist} className='bg-blue-600 rounded shadow py-1 px-3 text-white'> ADD TO WISHLIST</button>

          <button onClick={handleCart} className='bg-green-600 rounded shadow py-1 px-3 text-white'>ADD TO CART</button>
         </div>
        </div>
        <div className="ms-5" style={{marginRight:'100px'}}>
          <h1 className='text-3xl my-3'>{product?.title}</h1>
          <h1 className='text-red-500 '>${product?.price}</h1>
          <h2><span className='font-bold'>Brand</span> : {product?.brand}</h2>
          <h2><span className='font-bold'>Category</span> : {product?.category}</h2>

          <h3 className="text-xl text-justify">
            <span className='font-bold'> Description </span>: {product?.description}
          </h3>
          <h1 className='text-xl font-bold'>Client reviews</h1>
{
  product?.reviews?.length>0&&
  product?.reviews?.map((item)=>(

          <div className=" shadow my-3 p-2">
              <p><span className="font-bold">{item.reviewerName}</span> : {item?.comment}!</p>
              <p>Rating : {item?.rating} <i className='fa-solid fa-star text-yellow-400'></i></p>
          </div>
  ))
}
        </div>
      </div>
    </div>
  )
}

export default View
