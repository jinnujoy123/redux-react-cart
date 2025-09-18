import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

function Home() {
  const dispatch = useDispatch()
const {loading,error,allProducts} = useSelector((state)=>state.productReducer)
// console.log(loading,error,allProducts);

// pagination

const productsPerPage=8
const totalPages=Math.ceil(allProducts?.length/productsPerPage)
const [currentPage,setCurrentPage]=useState(1)
const currentPageProductsLastIndex = currentPage * productsPerPage
const currentPageProductsFirstIndex = currentPageProductsLastIndex - productsPerPage

const visibleProductCards = allProducts?.slice(currentPageProductsFirstIndex,currentPageProductsLastIndex)

useEffect(()=>{
  dispatch(fetchAllProducts())
},[])

const navigatePrevPage=()=>{
  if(currentPage!=1){
    setCurrentPage(currentPage-1)
  }
}
const navigateNextPage=()=>{
  if(currentPage!=totalPages){
    setCurrentPage(currentPage+1)
  }
}

  return (
    <>
      <Header insideHeader={true}/>
      <div style={{paddingTop:'100px'}} className='mx-5 mb-5'>

    {
      loading?
      <p>Loading...</p>
      :
    <div className="grid grid-cols-4 gap-4 ">
{
  allProducts?.length>0?
  visibleProductCards?.map(product=>(
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
      <div className="text-center my-10 font-bold text-xl text-blue-900">
        <button><i onClick={navigatePrevPage} className="fa-solid fa-backward"></i></button>
        <span> {currentPage} of {totalPages} </span>
        <button><i onClick={navigateNextPage} className="fa-solid fa-forward"></i></button>
      </div>
    </>
  )
}

export default Home
