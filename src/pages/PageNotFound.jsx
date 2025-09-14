import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
      <Header/>
      <div className="text-center flex flex-col justify-center items-center pt-5" style={{padding:'100px 0px',height:'80vh'}}>
        <img className='w-80' src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
        <h1>Page Not Found</h1>
        <h5>Sorry , we couldn't find the page...</h5>
        <Link to={'/'} className='bg-blue-600 text-white p-2 inline-block rounded m-5'>BACK TO HOME</Link>
      </div>
    </>
  )
}

export default PageNotFound
