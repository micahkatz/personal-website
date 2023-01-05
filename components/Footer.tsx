import React from 'react'
type Props = {}

const Footer = (props: Props) => {
    return (
        <div className={`pb-4 flex flex-col items-center border-t-2 border-sec-background pt-4`}>
            <span className='text-primary-text mb-2'>Created with React.js, Next.js, TypeScript, and TailwindCSS</span>
            <span className='text-secondary-text'>Hosted on my Raspberry Pi</span>
        </div>
    )
}

export default Footer