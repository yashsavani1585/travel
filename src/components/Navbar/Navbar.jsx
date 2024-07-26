import React, {useState} from 'react'
import './navbar.css'
import { MdTravelExplore } from 'react-icons/md'
import { IoIosCloseCircle } from 'react-icons/io'
import { TbGridDots } from "react-icons/tb";



function Navbar() {
    const [active, setActive] = useState('navBar')
    // funcation togglenavbar
    const showNavbar = () => {
      setActive('navBar activeNavbar')
    }
    // function remove navbar
    const removeNavbar = () => {
      setActive('navBar ')
    }

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='#' className="logo flex">
            <h1> <MdTravelExplore className="icon" /> travale</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>

            <li className='navItem'>
              <a href='#' className='navLink'>Home</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>Packages</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>Shop</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>About</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>Pages</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>News</a>
            </li>

            <li className='navItem'>
              <a href='#' className='navLink'>Contact</a>
            </li>

            <button className='btn'>
              <a href='#'>Book Now</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className='closeNavbar'>
            <IoIosCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNavbar} className='toggleNavbar'>
        <TbGridDots className="icon" />

        </div>
      </header>
    </section>



  )
}

export default Navbar
