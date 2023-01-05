import Link from 'next/link'
import React from 'react'
import styles from 'styles/NavBar.module.css'
import LogoImg from '../assets/logo.png'
type Props = {}

const NavBar = (props: Props) => {
    return (
        <div className={`bg-primary-background flex flex-row pt-8 flex-1 justify-between sticky top-0`}>
            {/* <span className='text-primary-text'>MK</span> */}
            <div className='flex flex-1'>
                <img src='logo.png' className='w-10' />
            </div>
            <div className='collapse md:visible'>
                <Link className='text-primary-text mr-4 hover:text-primary' href='#about'>About</Link>
                <Link className='text-primary-text mr-4 hover:text-primary' href='#projects'>Projects</Link>
                <Link className='text-primary-text mr-4 hover:text-primary' href='#experience'>Experience</Link>
                {/* <Link className='text-primary-text mr-4 hover:text-primary' href='#skills'>Skills</Link> */}
                <Link className='text-primary-text mr-4 hover:text-primary' href='#contact'>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar