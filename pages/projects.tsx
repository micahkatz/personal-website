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
            <div className='grid lg:grid-cols-3 mt-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <ProjectTile
                    title='Fire Alarm Safety Website'
                    dates='December 2022'
                    description={['Developed a React.js website that displays the current people in the building for a school as a safety measure']}
                    skills={['Reactjs', 'Next.js', 'Typescript']}
                />
                <ProjectTile
                    title='Social Media App (Personal Project)'
                    dates='2017-2022'
                    description={[
                        'Created a social media app using React Native Expo for the front end and AWS Amplify to create the back end',
                        // 'Added login/signup, recording/uploading videos, liking posts, following friends, and notifications.'
                    ]}
                    skills={['Reactjs', 'Typescript']}
                />
                <ProjectTile
                    title='Personal Website'
                    dates='2017-2022'
                    description={['Exercitation dolor ad nisi quis ea tempor enim et eu velit. Anim id reprehenderit esse do']}
                    skills={['Reactjs', 'Typescript']}
                />
                <ProjectTile
                    title='Personal Website'
                    dates='2017-2022'
                    description={['Exercitation dolor ad nisi quis ea tempor enim et eu velit. Anim id reprehenderit esse do']}
                    skills={['Reactjs', 'Typescript']}
                />
            </div>
        </Section>
    )
}

export default ProjectsPage