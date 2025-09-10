import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='mx-5 mb-5'>
    <div className="grid grid-cols-4 gap-4 ">
        <div className="rounded border p-2 shadow">
        <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="product"   />
        <div className="text-center">
            <h3 className='font-bold text-xl'>title</h3>
            <Link to={`/id/view`} className='bg-pink-900 inline-block p-1 rounded text-white my-3'>View More...</Link>
        </div>
        </div>
    </div>
      </div>
    </>
  )
}

export default Home
