import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import styles from '../styles/PaperTile.module.css'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { cn } from './lib/utils'
type MonthType = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'
type YearType = `${number}`

type DateType = `${MonthType} ${YearType}` | 'Present'

type Props = {
  title: string;
  dates?: string;
  description: string[];
  skills?: string[];
  githubLink?: string;
  publishedLink?: string;
  articleLink?: string;
  className?: string;
  imageUri?: string;
  imageColor?: string;
  authors?: string[];
}

const WidePaper = (props: Props) => {

  return (
    <div
      className={cn('pb-12 px-2 flex flex-col-reverse rounded-xl transition ease-in-out delay-150 gap-8 animate-fade-in',
        props.className,
      )}
    >
      <div className='flex-1 flex flex-col justify-center md:items-center'>
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
            {props?.authors && <div className='flex pb-2 flex-wrap'>
              {props.authors?.map((author) => (
                <p className='text-sm font-light text-secondary-text mr-4 mt-2 underline'>{author}</p>
              ))}
            </div>}
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

export default WidePaper