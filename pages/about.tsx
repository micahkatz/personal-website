import React from 'react'
import styles from '../styles/About.module.css'
type Props = {}

const about = (props: Props) => {
    return (
        <div
            id='about'
            className={`${styles.aboutSection} align-center justify-center`}
        >

            <h3 className={'text-md md: text-lg font-bold text-primary-text mb-4'}>
                Hi my name is
            </h3>
            <h1 className={'text-6xl md:text-8xl font-bold text-primary-text mb-2'}>
                Micah Katz
            </h1>
            <h1 className={'text-3xl md:text-6xl font-bold text-primary mb-6'}>
                I build things for the web
            </h1>
            <p className={'text-lg text-secondary-text'}>
                Primarily experienced in ReactJS and React-Native, with background in NodeJS.
            </p>
            {/* <MoonIcon className='icon' /> */}
        </div>
    )
}

export default about