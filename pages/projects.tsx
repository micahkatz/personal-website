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
                    title='My VS-Code Guide (Article)'
                    description={['A guide to help others improve their experience in Visual Studio Code with keyboard shortcuts and extensions.']}
                    skills={['Markdown', 'Technical Writing']}
                    githubLink='https://github.com/micahkatz/micahs-vscode-guide'
                    articleLink='/articles/vscode-guide'
                    index={0}
                />
                <ProjectTile
                    title='MicahKatz.com'
                    dates='Jan 2023 - Jan 2023'
                    description={['Developed my personal website to create a singular place for all of my information.']}
                    skills={['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'Docker', 'Google Cloud']}
                    githubLink='https://github.com/micahkatz/personal-website'
                    index={1}
                />
                <ProjectTile
                    title='Fire Alarm Safety Website'
                    dates='Dec 2022 - Jan 2023'
                    description={['Developed a React.js website that displays the current people in the building for a school as a safety measure.']}
                    skills={['React.js', 'CSS', 'Next.js', 'TypeScript']}
                    githubLink='https://github.com/micahkatz/epstein-rfid-ui'
                    index={2}
                />
                <ProjectTile
                    title='My Mac Terminal Preferences Guide (Article)'
                    description={['A guide to help others improve their experience in the Mac terminal with plugins. I share this with my co-workers and friends.']}
                    skills={['Markdown', 'Technical Writing']}
                    githubLink='https://github.com/micahkatz/mac-terminal-preferences'
                    articleLink='/articles/mac-terminal-preferences'
                    index={3}
                />
                <ProjectTile
                    title='Social Media App (Personal Project)'
                    dates='Jun 2022 - Present'
                    description={[
                        'A social media app using React Native Expo for the frontend and AWS Amplify to create the backend. This includes login/signup, recording/uploading videos, liking posts, following friends, and notifications among other features.',
                        // 'Added login/signup, recording/uploading videos, liking posts, following friends, and notifications.'
                    ]}
                    skills={['React Native', 'Expo', 'AWS']}
                    index={4}
                />
                <ProjectTile
                    title='Image Transformation Discord Bot (Personal Project)'
                    dates='Feb 2022 ??? Present'
                    description={['Worked with the Cloudinary API to perform image transformations on demand for discord servers. I also Implemented a chaining system where users can chain multiple image transformations into one command.']}
                    skills={['Node.js', 'Discord API', 'Cloudinary API']}
                    index={5}
                />
                <ProjectTile
                    title='Arduino Garage Door Scanner System'
                    dates='Nov 2019 - Feb 2020'
                    description={['Designed a system for an organization in Massachusetts that required an RFID card to enter. It processes over 50 cards (one per person) and stores logs on a SD card. It will trigger a garage door to open using Arduino relay switches.']}
                    skills={['C/C++', 'Arduino', 'Soldering', 'Breadboard Skills']}
                    githubLink='https://github.com/micahkatz/GarageDoorRFID'
                    index={6}
                />
                <ProjectTile
                    title='Summer Camp Mealtimes Website (Personal Project)'
                    dates='June 2019 ??? July 2019'
                    description={['Built a simple website for a summer camp (6 Points Sci-Tech Academy in Mass.) that displayed the status of an AWS database ??? to help regulate camper meal times. This was shown on TVs in the cafeteria and included an admin dashboard and announcement features.']}
                    skills={['React.js', 'CSS', 'AWS']}
                    githubLink='https://github.com/micahkatz/Sci-Tech-Queue-Website'
                    index={7}
                />
            </div>
        </Section>
    )
}

export default ProjectsPage