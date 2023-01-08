import { useMediaQuery } from 'usehooks-ts'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useSsr } from 'usehooks-ts'
import styles from 'styles/NavBar.module.css'
import LogoImg from '../assets/logo.png'

type Props = {}

const NavBar = (props: Props) => {
    function useBetterMediaQuery(mediaQueryString: string) {
        const [matches, setMatches] = React.useState<boolean | null>(null);

        React.useEffect(() => {
            const mediaQueryList = window.matchMedia(mediaQueryString);
            const listener = () => setMatches(!!mediaQueryList.matches);
            listener();
            mediaQueryList.addListener(listener);
            return () => mediaQueryList.removeListener(listener);
        }, [mediaQueryString])

        return matches;
    }
    function useScroll() {
        const { isBrowser } = useSsr()

        // storing this to get the scroll direction
        const [lastScrollTop, setLastScrollTop] = useState(0);
        // the offset of the document.body
        const [bodyOffset, setBodyOffset] = useState(
            isBrowser ? document.body.getBoundingClientRect() : { top: 0, left: 0 }
        );
        // the vertical direction
        const [scrollY, setScrollY] = useState<number>(bodyOffset.top);
        // the horizontal direction
        const [scrollX, setScrollX] = useState<number>(bodyOffset.left);
        // scroll direction would be either up or down
        const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>();

        const listener = (e: Event) => {
            isBrowser && setBodyOffset(document.body.getBoundingClientRect());
            setScrollY(-bodyOffset.top);
            setScrollX(bodyOffset.left);
            setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
            setLastScrollTop(-bodyOffset.top);
        };

        useEffect(() => {
            window.addEventListener("scroll", listener);
            return () => {
                window.removeEventListener("scroll", listener);
            };
        });

        return {
            scrollY,
            scrollX,
            scrollDirection
        };
    }

    const { scrollX, scrollY, scrollDirection } = useScroll();
    const isNotMobile = useBetterMediaQuery('(min-width: 768px)')
    const [isVisible, setIsVisible] = React.useState(true)
    // const [prevScrollPos, setPrevScrollPos] = React.useState(0)

    React.useEffect(() => {
        scrollDirection && setIsVisible(scrollDirection === 'down')
    }, [scrollDirection])

    return (
        <div className={`bg-primary-background flex flex-row pt-8 flex-1 justify-between sticky top-0 pb-4 z-20 transition-all delay-250 duration-500 
            ${isVisible ? 'translate-y-0' : '-translate-y-32'}
        `}>
            {/* <span className='text-primary-text'>MK</span> */}
            <Link className='flex flex-1' href='/'>
                <img src='logo.png' className='w-14 object-contain' />
            </Link>
            <div className='hidden md:flex items-center'>
                <Link className='text-primary-text mr-4 hover:text-primary animate-slide-down' href='/'>About</Link>
                <Link className='text-primary-text mr-4 hover:text-primary animate-slide-down-2' href='#projects'>Projects</Link>
                <Link className='text-primary-text mr-4 hover:text-primary animate-slide-down-3' href='#experience'>Experience</Link>
                <Link className='text-primary-text mr-4 hover:text-primary animate-slide-down-4' href='mailto:micahj2110@gmail.com'>Contact</Link>
                <Link className='text-primary-text mr-4 hover:text-primary animate-slide-down-5 px-4 py-3 border rounded-lg border-primary-text hover:border-primary' href='micah-resume.pdf'>Resume</Link>
            </div>
        </div>
    )
}

export default NavBar