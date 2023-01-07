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
            <div className='grid lg:grid-cols-2 mt-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <ProjectTile
                    title='MicahKatz.com'
                    dates='Jan 2023 - Jan 2023'
                    description={['Developed my personal website to create a singular place for all of my information.']}
                    skills={['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'Docker', 'Google Cloud']}
                />
                <ProjectTile
                    title='Fire Alarm Safety Website'
                    dates='Dec 2022 - Jan 2023'
                    description={['Developed a React.js website that displays the current people in the building for a school as a safety measure.']}
                    skills={['React.js', 'Next.js', 'TypeScript']}
                />
                <ProjectTile
                    title='Social Media App (Personal Project)'
                    dates='Jun 2022 - Present'
                    description={[
                        'A social media app using React Native Expo for the frontend and AWS Amplify to create the backend. This includes login/signup, recording/uploading videos, liking posts, following friends, and notifications among other features.',
                        // 'Added login/signup, recording/uploading videos, liking posts, following friends, and notifications.'
                    ]}
                    skills={['React Native', 'Expo', 'AWS']}
                />
                <ProjectTile
                    title='Image Transformation Discord Bot (Personal Project)'
                    dates='Feb 2022 – Present'
                    description={['Worked with the Cloudinary API to perform image transformations on demand for discord servers. I also Implemented a chaining system where users can chain multiple image transformations into one command.']}
                    skills={['Node.js', 'Discord API', 'Cloudinary API']}
                />
                <ProjectTile
                    title='Arduino Garage Door Scanner System'
                    dates='Nov 2019 - Feb 2020'
                    description={['Designed a system for an organization in Massachusetts that required an RFID card to enter. It processes over 50 cards (one per person) and stores logs on a SD card. It will trigger a garage door to open using Arduino relay switches.']}
                    skills={['Arduino']}
                />
                <ProjectTile
                    title='Summer Camp Mealtimes Website (Personal Project)'
                    dates='June 2019 – July 2019'
                    description={['Built a simple website for a summer camp (6 Points Sci-Tech Academy in Mass.) that displayed the status of an AWS database – to help regulate camper meal times. This was shown on TVs in the cafeteria and included an admin dashboard and announcement features.']}
                    skills={['React.js', 'AWS']}
                />
            </div>
        </Section>
    )
}

export default ProjectsPage