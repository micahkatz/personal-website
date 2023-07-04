import React from 'react'
import useIsInViewport from 'use-is-in-viewport'

interface Props extends React.PropsWithChildren {
    title?: string;
    id: string;
    className?: string;
}

const Section = (props: Props) => {

    const targetRef = React.useRef<HTMLDivElement>(null);

    const [isInViewport, wrappedTargetRef] = useIsInViewport({ target: targetRef, threshold: 15 })
    const [willShow, setWillShow] = React.useState(false)
    React.useEffect(() => {
        if (isInViewport) {
            setWillShow(true)
        }
    }, [isInViewport])

    return (
        <section
            ref={wrappedTargetRef}
            className={`${props.className} ${willShow ? 'animate-fade' : 'opacity-0'} mb-8 md:mb-16`}
            id={props.id}
        >
            {props.title && <h1 className='text-primary-text text-3xl font-semibold mb-8'>{props.title}</h1>}
            {props.children}
        </section>
    )
}

export default Section