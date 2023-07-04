import React from 'react'

type Props = {
  company: string;
  position: string;
  dates: string;
  description: string[];
  skills?: string[];
}

const WorkExperience = (props: Props) => {
  return (
    <div className={`py-4 px-4 flex flex-col rounded-xl animate-fade-in transition-all`}>
      <div className='flex-1'>
        <div className='flex'>
          <span className='title font-bold text-primary-text text-lg'>
            {props.position}
            {' @ '}
            <a className='title font-bold text-primary'>
              {props.company}
            </a>
          </span>
        </div>
        <h2 className='text-sm font-medium text-secondary-text pb-1'>{props.dates}</h2>
        {props.description.length > 1 ? (
          <ul className='list-disc font-light text-secondary-text pl-4 py-4'>
            {props.description.map(item => (
              <li className='text-sm mb-2'>{item}</li>
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

export default WorkExperience