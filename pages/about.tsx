import React from 'react'
import { FiGithub, FiInstagram } from 'react-icons/fi'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import { ImStackoverflow, ImNpm } from 'react-icons/im'
import Section from '../components/Section'

type Props = {}

const about = (props: Props) => {
    return (
        <Section
            id='about'
            className='flex flex-col md:h-[calc(100vh-6.5rem)] py-8 md:p-0 align-center justify-center animate-fade'
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
            <div className='flex flex-wrap sm:grid pt-8 sm:grid-cols-6 gap-4 md:flex md:flex-wrap md:gap-8'>
                <a
                    className='animate-fade-in px-auto flex items-center justify-center'
                    href='https://www.linkedin.com/in/micahkatz/'
                    target='_blank'
                >
                    <FaLinkedin className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' />
                </a>
                <a
                    className='flex items-center justify-center animate-fade-in-2'
                    href='https://www.github.com/micahkatz'
                    target='_blank'
                >
                    <FiGithub className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' />
                </a>
                <a
                    className='flex items-center justify-center animate-fade-in-3'
                    href='https://stackoverflow.com/users/8156575/micah-katz'
                    target='_blank'
                >
                    <ImStackoverflow className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' />
                </a>
                <a
                    className='flex items-center justify-center animate-fade-in-4'
                    href='https://www.npmjs.com/~micahkatz'
                    target='_blank'
                >
                    <ImNpm className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' aria-label='npm' />
                </a>
                <a
                    className='flex items-center justify-center animate-fade-in-5'
                    href='https://instagram.com/themicahkatz'
                    target='_blank'
                >
                    <FiInstagram className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' />
                </a>
                <a
                    className='flex items-center justify-center animate-fade-in-6'
                    href='https://facebook.com/themicahkatz'
                    target='_blank'
                >
                    <FaFacebook className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' />
                </a>
            </div>

        </Section>
    )
}

export default about