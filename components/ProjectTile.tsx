import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import styles from '../styles/ProjectTile.module.css'

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
}

const ProjectTile = (props: Props) => {
  const targetRef = React.useRef<HTMLDivElement>(null);


  return (
    <div
      className={`${styles.tileContainer} py-8 px-6 flex flex-col rounded-xl bg-sec-background transition ease-in-out delay-150 ${props.className} animate-fade-in`}
    >
      <div className='flex-1'>
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
  )
}

export default ProjectTile