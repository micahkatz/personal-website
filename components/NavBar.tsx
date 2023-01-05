import React from 'react'
import styles from 'styles/NavBar.module.css'
import LogoImg from '../assets/logo.png'
type Props = {}

const NavBar = (props: Props) => {
    return (
        <div className={`${styles.navBar} bg-primary-background flex flex-row pt-8 flex-1 justify-between sticky top-0`}>
            {/* <span className='text-primary-text'>MK</span> */}
            <img src='logo.png' className='w-10' />
            <div className=''>
                <span className='text-primary-text mr-4'>About</span>
                <span className='text-primary-text'>Contact</span>
            </div>
        </div>
    )
}

export default NavBar