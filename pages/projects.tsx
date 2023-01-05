import React from 'react'
import ProjectTile from '../components/ProjectTile'

const ProjectsPage = () => {
    return (
        <div className='text-left'>
            <h1 className='text-primary-text text-xl font-semibold'>Projects</h1>
            <div className='flex flex-wrap items-center justify-center mt-2'>
                <ProjectTile
                    title='Personal Website'
                    dates='2017-2022'
                    description='Exercitation dolor ad nisi quis ea tempor enim et eu velit. Anim id reprehenderit esse do'
                    skills={['Reactjs', 'Typescript']}
                />
                <ProjectTile
                    title='Personal Website'
                    dates='2017-2022'
                    description='Exercitation dolor ad nisi quis ea tempor enim et eu velit. Anim id reprehenderit esse do'
                    skills={['Reactjs', 'Typescript']}
                />
                <ProjectTile
                    title='Personal Website'
                    dates='2017-2022'
                    description='Exercitation dolor ad nisi quis ea tempor enim et eu velit. Anim id reprehenderit esse do'
                    skills={['Reactjs', 'Typescript']}
                />
                <ProjectTile
                    title='Personal Website'
                    dates='2017-2022'
                    description='Exercitation dolor ad nisi quis ea tempor enim et eu velit. Anim id reprehenderit esse do'
                    skills={['Reactjs', 'Typescript']}
                />
            </div>
        </div>
    )
}

export default ProjectsPage