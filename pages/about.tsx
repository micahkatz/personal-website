import React from 'react'
import styles from '../styles/About.module.css'
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
            <h1 className={'text-6xl md:text-8xl font-bold text-primary-text mb-2'}>
                Micah Katz
            </h1>
            <h1 className={'text-3xl md:text-4xl font-bold text-primary mb-6'}>
                Software Developer Intern @ IBM
            </h1>
            <p className={'text-lg text-secondary-text'}>
                I am primarily experienced in React.js and React-Native, with background in Express, NodeJS, Docker, and TypeScript
            </p>
            {/* <MoonIcon className='icon' /> */}
        </div>
    )
}

export default about