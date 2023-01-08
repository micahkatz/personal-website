import React, { MutableRefObject } from 'react'
import styles from '../styles/ProjectTile.module.css'
import useIsInViewport from 'use-is-in-viewport'
import { FiGithub } from 'react-icons/fi'

type Props = {
  title: string;
  dates: string;
  description: string[];
  skills?: string[];
  githubLink?: string;
  className?: string;
  index?: number;
}

const ProjectTile = (props: Props) => {
  const targetRef = React.useRef<HTMLDivElement>(null);

  const [isInViewport, wrappedTargetRef] = useIsInViewport({ target: targetRef })
  const [willShow, setWillShow] = React.useState(false)

  React.useEffect(() => {
    if (isInViewport) {
      setWillShow(true)
    }
  }, [isInViewport])
  return (
    <div
      ref={wrappedTargetRef}
      className={`${styles.tileContainer} py-8 px-6 flex flex-col rounded-xl bg-sec-background transition ease-in-out delay-150 hover:-translate-y-2 ${props.className}
        ${willShow ? `animate-fade-in${props.index !== 0 ? `-${props.index}` : ''}` : ''}`
      }
    >
      <div className='flex-1'>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='title font-bold text-primary-text'>{props.title}</h2>
            <h2 className='text-sm font-medium text-secondary-text pb-1'>{props.dates}</h2>
          </div>
          {props.githubLink && (
            <a
              href={props.githubLink}
              target='_blank'
            >

              <FiGithub className='text-secondary-text' size='1.5rem' />
            </a>
          )}
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