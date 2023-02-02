import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className='container'>
        <div className='d-flex justify-content-center'>
        <div className='nav nav-pills'>
                <Link to='/' className=''>Home</Link>
                <Link to='about' className=''>About</Link>
                <Link to='products' className=''>Products</Link>
                <Link to='post' className=''>Posts</Link>
                <Link to='' className=''></Link>
                <Link to='' className=''></Link>
            </div>
       

        </div>
      </div>
         
    </footer>
  )
}

export default Footer