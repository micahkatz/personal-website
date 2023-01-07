import { useMediaQuery } from 'usehooks-ts'

import Link from 'next/link'
import React from 'react'
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
    const isNotMobile = useBetterMediaQuery('(min-width: 768px)')

    return (
        <div className={`bg-primary-background flex flex-row pt-8 flex-1 justify-between sticky top-0 pb-4 z-20`}>
            {/* <span className='text-primary-text'>MK</span> */}
            <div className='flex flex-1'>
                <img src='logo.png' className='w-14 object-contain' />
            </div>
            {
                isNotMobile &&
                <div className='flex items-center'>
                    <Link className='text-primary-text mr-4 hover:text-primary' href='#about'>About</Link>
                    <Link className='text-primary-text mr-4 hover:text-primary' href='#projects'>Projects</Link>
                    <Link className='text-primary-text mr-4 hover:text-primary' href='#experience'>Experience</Link>
                    {/* <Link className='text-primary-text mr-4 hover:text-primary' href='#skills'>Skills</Link> */}
                    <Link className='text-primary-text mr-4 hover:text-primary' href='mailto:micahj2110@gmail.com'>Contact</Link>
                    {/* <Link className='text-primary-text mr-4 hover:text-primary' href='#contact'>Contact</Link> */}
                    <Link className='text-primary-text mr-4 hover:text-primary px-4 py-3 border rounded-lg border-primary-text hover:border-primary' href='micah-resume.pdf'>Resume</Link>
                </div>
            }
        </div>
    )
}

export default NavBar