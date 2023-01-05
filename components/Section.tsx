import React from 'react'

interface Props extends React.PropsWithChildren {
    title: string;
    id: string;
    className?: string;
}

const Section = (props: Props) => {
    return (
        <div className={`mb-16 ${props.className}  animate-fade`} id={props.id}>
            <h1 className='text-primary-text text-3xl font-semibold mb-8'>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default Section