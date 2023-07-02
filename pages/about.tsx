import React from 'react'
import styles from '../styles/About.module.css'
import { FiGithub, FiInstagram } from 'react-icons/fi'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import { ImStackoverflow, ImNpm } from 'react-icons/im'

type Props = {}

const about = (props: Props) => {
    return (
        <div
            id='about'
            className={`${styles.aboutSection} align-center justify-center animate-fade`}
        >

            <h3 className={'text-md md: text-lg font-bold text-primary-text mb-4'}>
                Hi, my name is
            </h3>
            <h2 className={'text-6xl md:text-8xl font-bold text-primary-text mb-2'}>
                Micah Katz
            </h2>
            <h1 className={'text-3xl md:text-4xl font-bold text-primary mb-6'}>
                Full Stack Software Developer
            </h1>
            <p className={'text-lg text-secondary-text'}>
                I am primarily experienced in React.js and React-Native, with background in Express, NodeJS, Docker, and TypeScript
            </p>
            {/* <MoonIcon className='icon' /> */}
            <div className='grid py-8  grid-cols-6 max-xs:grid-cols-3 md:flex md:flex-wrap'>
                <a
                    className='mr-8 mb-4 animate-fade-in'
                    href='https://www.linkedin.com/in/micahkatz/'
                    target='_blank'
                >
                    <FaLinkedin className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' />
                </a>
                <a
                    className='mr-8 mb-4 animate-fade-in-2'
                    href='https://www.github.com/micahkatz'
                    target='_blank'
                >
                    <FiGithub className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' />
                </a>
                <a
                    className='mr-8 mb-4 animate-fade-in-3'
                    href='https://stackoverflow.com/users/8156575/micah-katz'
                    target='_blank'
                >
                    <ImStackoverflow className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' />
                </a>
                <a
                    className='mr-8 mb-4 animate-fade-in-4'
                    href='https://www.npmjs.com/~micahkatz'
                    target='_blank'
                >
                    <ImNpm className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' aria-label='npm' />
                </a>
                <a
                    className='mr-8 mb-4 animate-fade-in-5'
                    href='https://instagram.com/themicahkatz'
                    target='_blank'
                >
                    <FiInstagram className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' />
                </a>
                <a
                    className='mr-8 mb-4 animate-fade-in-6'
                    href='https://facebook.com/themicahkatz'
                    target='_blank'
                >
                    <FaFacebook className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' />
                </a>
            </div>

        </div>
    )
}

export default about