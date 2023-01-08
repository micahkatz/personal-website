import React from 'react'
type Props = {}

const Footer = (props: Props) => {
    return (
        <div className={`pb-16 flex flex-col items-center border-t-2 border-sec-background pt-4`}>
            <span className='text-primary-text mb-2'>Created with React.js, Next.js, TypeScript, and TailwindCSS</span>
            <span className='text-secondary-text'>Hosted via Docker Container on Google Cloud</span>
        </div>
    )
}

export default Footer