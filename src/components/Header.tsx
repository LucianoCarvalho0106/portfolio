
import React from 'react'
import { FiGithub,FiLinkedin } from "react-icons/fi";
import Link from 'next/link';



type Props = {}

const Header = () => {

  return (
    <>
      <header className='flex justify-between items-center px-8 my-3'>
        <div className='flex gap-8'>
          <Link href="https://github.com/LucianoCarvalho0106" target='_blank'><FiGithub size={30} color='#01705F'></FiGithub></Link>
        
          <Link href="https://www.linkedin.com/in/luciano-carvalho0106" target='_blank'><FiLinkedin size={30} color='#01705F'></FiLinkedin></Link></div>
        <div>Toggle</div>
      </header>

      

    </>
    
  )
}

export default Header