import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

function Home() {
  const dispatch = useDispatch()
const {loading,error,allProducts} = useSelector((state)=>state.productReducer)
// console.log(loading,error,allProducts);

useEffect(()=>{
  dispatch(fetchAllProducts())
},[])

  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='mx-5 mb-5'>

    {
      loading?
      <p>Loading...</p>
      :
    <div className="grid grid-cols-4 gap-4 ">
{
  allProducts?.length>0?
  allProducts?.map(product=>(
        <div key={product?.id} className="rounded p-4 shadow flex flex-col justify-between">
        <img src={product.thumbnail} alt="product"   />
        <div className="text-center">
            <h3 className='font-bold text-xl'>{product.title}</h3>
            <Link to={`/${product.id}/view`} className='bg-pink-900 inline-block p-1 rounded text-white my-3 '>View More...</Link>
        </div>
        </div>
        ))
        :
        <p>No products</p>
}
    </div>
}
      </div>
    </>
  )
}

export default Home
