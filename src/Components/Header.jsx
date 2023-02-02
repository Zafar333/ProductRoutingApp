import React from 'react'
import { Link,NavLink} from 'react-router-dom'


const Header = () => {
  return (
    <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
            <div className='logo'>
                <Link to='/' className='brand'>WSP</Link>
            </div>
            <nav className='nav nav-pills'>
                <NavLink to='/' className={({isActive})=>(isActive?"activestyle":"normalstyle")}>Home</NavLink>
                <NavLink to='about' className={({isActive})=>(isActive?"activestyle":"normalstyle")}>About</NavLink>
                <NavLink to='products' className={({isActive})=>(isActive?"activestyle":"normalstyle")}>Products</NavLink>
                <NavLink to='post' className={({isActive})=>(isActive?"activestyle":"normalstyle")} >Posts</NavLink>
                {/* <NavLink to='' className={({isActive})=>(isActive?"nav-link:active":"normalstyle")}></NavLink>
                <NavLink to='' className={({isActive})=>(isActive?"nav-link:active":"normalstyle")}></NavLink> */}
            </nav>
        </div>
      
    </div>
  )
}

export default Header