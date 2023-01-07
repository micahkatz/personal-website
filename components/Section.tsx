import React from 'react'
import useIsInViewport from 'use-is-in-viewport'

interface Props extends React.PropsWithChildren {
    title: string;
    id: string;
    className?: string;
}

const Section = (props: Props) => {

    const targetRef = React.useRef<HTMLDivElement>(null);

    const [isInViewport, wrappedTargetRef] = useIsInViewport({ target: targetRef, threshold: 25 })
    const [willShow, setWillShow] = React.useState(false)
    React.useEffect(() => {
        if (isInViewport) {
            setWillShow(true)
        }
    }, [isInViewport])

    return (
        <div
            ref={wrappedTargetRef}
            className={`mb-16 ${props.className} ${willShow ? 'animate-fade' : 'opacity-0'}`}
            id={props.id}
        >
            <h1 className='text-primary-text text-3xl font-semibold mb-8'>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default Section