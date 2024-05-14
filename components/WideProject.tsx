import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import styles from '../styles/ProjectTile.module.css'
import Image from 'next/image'

type MonthType = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'
type YearType = `${number}`

type DateType = `${MonthType} ${YearType}` | 'Present'

type Props = {
  title: string;
  dates?: `${DateType} - ${DateType}`;
  description: string[];
  skills?: string[];
  githubLink?: string;
  publishedLink?: string;
  articleLink?: string;
  className?: string;
  imageUri?: string;
  imageColor?: string;
  isFlipped?: boolean;
}

const WideProject = (props: Props) => {

  return (
    <div
      className={`${styles.tileContainer} py-8 px-6 flex rounded-xl transition ease-in-out delay-150 gap-8 ${props.className} animate-fade-in ${props?.isFlipped ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div className='flex-1 bg-sec-background px-2 py-2 flex w-full rounded-xl overflow-hidden aspect-video'>
        <div className={`bg-[${props?.imageColor || 'transparent'}] flex relative w-full rounded-xl overflow-hidden aspect-video`}>
          <div className='flex-1 px-2 py-2 flex w-full rounded-xl overflow-hidden aspect-video'>
            {props.imageUri && <Image src={props.imageUri} alt={`${props.title} Image`} fill className='object-cover aspect-video' />}
          </div>
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-center items-center'>
        <div>
          <div>
            <div className='flex justify-between items-center'>
              <div>
                <h2 className='title font-bold text-primary-text mb-2'>{props.title}</h2>
                {/* <h2 className='text-sm font-medium text-secondary-text pb-1'>{props.dates}</h2> */}
              </div>
              <div className='flex gap-4'>

                {props.githubLink && (
                  <a
                    href={props.githubLink}
                    target='_blank'
                  >
                    <FiGithub className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='1.5rem' />
                  </a>
                )}
                {(props?.publishedLink || props?.articleLink) && (
                  <a
                    href={props?.publishedLink || props?.articleLink}
                    target='_blank'
                  >
                    <FiExternalLink className='text-secondary-text transition-transform hover:text-primary hover:scale-110' size='1.5rem' />
                  </a>
                )}
              </div>
            </div>
            {props.description.length > 1 ? (
              <ul className='list-disc font-light text-secondary-text pl-4 py-4'>
                {props.description.map(item => (
                  <li className='text-sm'>{item}</li>
                ))}
              </ul>
            ) : (
              <h3 className='text-sm font-light text-secondary-text pb-1 pt-2'>{props.description}</h3>
            )}
          </div>
          <div className='flex pt-2 flex-wrap'>
            {props.skills?.map((skill) => (
              <p className='text-sm font-light text-secondary-text mr-4 mt-2'>{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WideProject