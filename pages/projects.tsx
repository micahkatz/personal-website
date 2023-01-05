import React from 'react'
import ProjectTile from '../components/ProjectTile'
import Section from '../components/Section'

const ProjectsPage = () => {
    return (
        <Section
            title='Projects'
            className='text-left'
            id='projects'
        >
            <div className='grid lg:grid-cols-3 mt-2 md:grid-cols-2 sm:grid-cols-1'>
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
        </Section>
    )
}

export default ProjectsPage