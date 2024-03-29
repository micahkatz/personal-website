
import Image from 'next/image'
import Link from 'next/link'
import { event } from 'nextjs-google-analytics'
import React, { useEffect, useState } from 'react'
import { RiCloseFill, RiMenu4Line } from 'react-icons/ri'
import { useSsr } from 'usehooks-ts'

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
    const [isMenuVisible, setIsMenuVisible] = React.useState(false)
    // const [prevScrollPos, setPrevScrollPos] = React.useState(0)

    React.useEffect(() => {
        scrollDirection && setIsVisible(scrollDirection === 'down')
        scrollDirection !== 'down' && setIsMenuVisible(false)
    }, [scrollDirection])

    const clickResume = () => {
        event("click_resume", {
            category: "Resume",
            label: "Someone opened your resume",
        });

    }
    return (
        <div className={`bg-primary-background pt-8 sticky top-0 pb-4 z-20 transition-all delay-250 duration-500 drop-shadow-md px-8 md:px-20
            ${isVisible ? 'translate-y-0' : '-translate-y-32'}
        `}>
            {/* <span className='text-primary-text'>MK</span> */}
            <div className='flex flex-row flex-1 justify-between'>
                <Link className={`transition-opacity duration-500`} href='/'>
                    <Image src='/logo.png' className='w-14 object-contain' alt='Micah Katz' width={100} height={100} />
                </Link>
                <div className='hidden md:flex items-center'>
                    <Link className='text-primary-text mr-4 hover:text-primary animate-slide-down' href='/'>About</Link>
                    <Link className='text-primary-text mr-4 hover:text-primary animate-slide-down-2' href='/#projects'>Projects</Link>
                    <Link className='text-primary-text mr-4 hover:text-primary animate-slide-down-3' href='/#experience'>Experience</Link>
                    <Link className='text-primary-text mr-4 hover:text-primary animate-slide-down-4' href='mailto:micahj2110@gmail.com'>Contact</Link>
                    <Link className='text-primary-text mr-4 hover:text-primary animate-slide-down-5 px-4 py-3 border rounded-lg border-primary-text hover:border-primary' onClick={clickResume} href='/resume'>Resume</Link>
                </div>
                <div className={`md:hidden flex flex-col items-end`}>
                    <div className={`flex flex-col p-4 rounded-lg transition-colors
                                    ${isMenuVisible ? 'bg-sec-background md:bg-transparent'
                            : ''}`
                    }>
                        <button className='visible md:hidden self-end' onClick={() => setIsMenuVisible(prev => !prev)}>
                            {isMenuVisible ? (
                                <RiCloseFill className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='2rem' />
                            ) : (

                                <RiMenu4Line className={'text-secondary-text transition-transform hover:text-primary hover:scale-110'} size='2rem' />
                            )}
                        </button>
                        {
                            isMenuVisible && (
                                <div className='md:hidden flex flex-col pr-8 pl-4 animate-fade'>
                                    <Link className='text-primary-text text-xl mb-4 hover:text-primary' href='/'>About</Link>
                                    <Link className='text-primary-text text-xl mb-4 hover:text-primary' href='/#projects'>Projects</Link>
                                    <Link className='text-primary-text text-xl mb-4 hover:text-primary' href='/#experience'>Experience</Link>
                                    <Link className='text-primary-text text-xl mb-4 hover:text-primary' href='mailto:micahj2110@gmail.com'>Contact</Link>
                                    <Link className='text-primary-text text-xl mb-4 hover:text-primary px-4 py-3 border rounded-lg border-primary-text hover:border-primary' href='/resume'>Resume</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar