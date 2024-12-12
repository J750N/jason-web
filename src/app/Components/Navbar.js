"use client"
import Link from 'next/link';
import "./Navbar.css";
import Image from 'next/image';
import logo from '/public/logo.png';
import React, { useState } from "react";
const Navbar = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
      }
        return(
        <nav>
            <Image
             src={logo}
              alt="logo"
              width={70}
              height={50}
              placeholder='blur'
              className='logo'
              />
            <p className='navText'>Cantor College</p>
            <button className='burger' onClick={toggleMenu} >&#9776;</button>
            <menu className={menuOpen ? "active" : ""} >
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/Student'>Student</Link></li>
            <li><Link href='/Facilities'>Facilities</Link></li>
            <li><Link href='/Computing_Courses'>Computing Courses</Link></li>
            <li><Link href='/Design_Courses'>Design Courses</Link></li>
            <li><Link href='/Learning_Resources'>Learning Resources</Link></li>
            <li><Link href='/Staff'>Staff</Link></li>
            <li><Link href='/Working_with_Business'>Working with Business</Link></li>
            </menu>
        </nav>

    )
}

export default Navbar