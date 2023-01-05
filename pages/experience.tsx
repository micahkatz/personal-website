import React from 'react'
import Section from '../components/Section'
import WorkExperience from '../components/WorkExperience'
import styles from '../styles/Experience.module.css'

type Props = {}
type CompanyTagProps = {
    company: string;
    selectedCompany: null | string;
    onClick: (givenCompany: string) => void;
    first?: boolean;
}

const CompanyTag = (props: CompanyTagProps) => (
    <div
        onClick={() => props.onClick(props.company)}
        className={`${props.selectedCompany === props.company ? 'border-l-2 border-primary bg-hover-background' : 'border-l-2 border-primary-background'} ${styles.companyWrapper} group w-40 px-4 py-1 cursor-pointer flex items-center hover:bg-hover-background`}
    >
        <span className={`${props.selectedCompany === props.company ? 'text-primary' : 'text-primary-text'} group-hover:text-secondary-text`}>{props.company}</span>
    </div>
)

const experience = (props: Props) => {
    const [selectedCompany, setSelectedCompany] = React.useState<null | string>('IBM')
    const handleSelectCompany = (givenCompany: string) => {
        setSelectedCompany(givenCompany)
    }
    const renderExperience = () => {
        switch (selectedCompany) {
            case 'IBM':
                return <WorkExperience
                    company='IBM'
                    position='Software Developer Intern'
                    dates='June 2021 - Present'
                    description={[
                        'Performed installs of IBM Cloud Pak for Network Automation and assisted with the creation of the training course.',
                        'Created scripts in Ansible that automate interactions between IBM Products.',
                        'Developed over 10 full-stack websites using React.js and Node.js with Express and TypeScript to demo to clients.',
                        'Utilized MQTT subscriptions to display real-time alerts for AI object detection from a camera.',
                        'Containerized applications using docker to be sent internally or to other teams.',
                        'Worked in RedHat OpenShift to deploy applications using HELM charts.',

                    ]}
                />
            case 'JamFeed':
                return <WorkExperience
                    company='JamFeed'
                    position='Remote Intern'
                    dates='June 2020 - May 2021'
                    description={[
                        'Implemented new functionality such as Forgot Password, Confirm Email, Login with Apple, and JWT Authorization.',
                        'Utilized Spotify and Apple Music APIs to allow users to import and synchronize their favorite artists in the app.',
                        'Built a pipeline that utilizes machine learning to add notifications, extract artist names, and categorize each article.',
                        'Used Atlassian with Confluence for documentation, JIRA for task management, and bitbucket for pull requests.',
                        'Developed a custom “SmartReader” API to scrape news articles and display them on the app in a custom format.',

                    ]}
                />
        }
    }
    return (
        <Section
            title='Experience'
            id='experience'
        >
            <div className='grid grid-cols-1 md:grid-cols-6'>
                <div className='mr-2 overflow-hidden col-span-1'>
                    <CompanyTag
                        company='IBM'
                        selectedCompany={selectedCompany}
                        onClick={handleSelectCompany}
                        first
                    />
                    <CompanyTag
                        company='JamFeed'
                        selectedCompany={selectedCompany}
                        onClick={handleSelectCompany}
                    />
                </div>
                <div className='col-span-1 md:col-span-5'>
                    {renderExperience()}
                </div>


            </div>
        </Section>
    )
}

export default experience