import React from 'react'
import styles from '../styles/ProjectTile.module.css'

type Props = {
  title: string;
  dates: string;
  description: string[];
  skills?: string[];
}

const ProjectTile = (props: Props) => {
  return (
    <div className={`${styles.tileContainer} py-4 px-4 flex flex-col rounded-xl bg-sec-background`}>
      <div className='flex-1'>
        <h2 className='title font-bold text-primary-text'>{props.title}</h2>
        <h2 className='text-sm font-medium text-secondary-text pb-1'>{props.dates}</h2>
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
      <div className='flex pt-1'>
        {props.skills?.map((skill) => (
          <p className='text-sm font-medium text-primary-text pr-2'>{skill}</p>
        ))}
      </div>
    </div>
  )
}

export default ProjectTile