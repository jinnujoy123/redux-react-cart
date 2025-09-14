import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const userwishlist=useSelector(state=>state.wishlistReducer)
  return (
    <nav className='flex w-full bg-pink-900 text-white font-bold fixed justify-between p-5 text-2xl'>
        <Link to={'/'}><i className='fa-solid fa-truck fa-xl '></i><span className=' px-3'>Daily Cart</span></Link>
        <ul className='flex '>
            <li className='px-5 text-lg'><Link to={'/wishlist'}><i className="fa-solid fa-heart fa-sm me-1 text-red-600" ></i>Wishlist <span className='p-1 bg-black mx-1 rounded-full text-center'>{userwishlist.length}</span></Link></li>

            <li className='px-5 text-lg'><Link to={'/cart'}><i className="fa-solid fa-cart-shopping text-green-600 fa-sm me-1" ></i>Cart<span className='p-1 bg-black mx-1 rounded-full text-center'>10</span></Link></li>
            
        </ul>
    </nav>
  )
}

export default Header
