import React from 'react'
import styles from '../styles/ProjectTile.module.css'

type Props = {
  title: string;
  dates: string;
  description: string;
  skills?: string[];
}

const ProjectTile = (props: Props) => {
  return (
    <div className={`${styles.tileContainer} px-4 pt-2 m-2`}>
      <h2 className='title font-bold text-primary-text'>{props.title}</h2>
      <h2 className='text-sm font-medium text-secondary-text pb-1'>{props.dates}</h2>
      <h3 className='text-sm font-light text-secondary-text pb-1'>{props.description}</h3>
      <div className='flex'>
        {props.skills?.map((skill) => (
          <p className='text-sm font-medium text-secondary-text pr-2'>{skill}</p>
        ))}
      </div>
    </div>
  )
}

export default ProjectTile