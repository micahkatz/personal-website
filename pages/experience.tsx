import React from 'react'
import Section from '../components/Section'
import WorkExperience from '../components/WorkExperience'
import styles from '../styles/Experience.module.css'

type Props = {}
type CompanyTagProps = {
    company: CompanyType;
    selectedCompany: null | CompanyType;
    onClick: (givenCompany: CompanyType) => void;
    first?: boolean;
}

const CompanyTag = (props: CompanyTagProps) => (
    <div
        onClick={() => props.onClick(props.company)}
        className={`${props.selectedCompany === props.company ? 'border-l-2 border-primary bg-hover-background' : 'border-l-2 border-primary-background'} ${styles.companyWrapper} group px-4 py-1 cursor-pointer flex items-center hover:bg-hover-background`}
    >
        <span className={`${props.selectedCompany === props.company ? 'text-primary' : 'text-primary-text'} group-hover:text-secondary-text`}>{props.company}</span>
    </div>
)

const companies = [
    'Apple',
    'SelectQuote',
    'IBM',
    'JamFeed',
    '6 Points Sci-Tech Academy',
    'Anubis LLC',
] as const

type CompanyType = typeof companies[number]

const experience = (props: Props) => {
    const [selectedCompany, setSelectedCompany] = React.useState<null | CompanyType>('Apple')
    const handleSelectCompany = (givenCompany: CompanyType) => {
        setSelectedCompany(givenCompany)
    }
    const renderExperience = () => {
        switch (selectedCompany) {
            case 'Apple':
                return <WorkExperience
                    key={selectedCompany}
                    company={selectedCompany}
                    position='AI Software Developer'
                    dates='Nov 2024 - Present'
                    description={[
                        'I work on an internal AI IDE extension for Apple employees.',
                        'Implement cutting-edge AI technologies like MCP, Tool-Calling, and Agentic RAG into my team\'s product.'
                    ]}
                />
            case 'SelectQuote':
                return <WorkExperience
                    key={selectedCompany}
                    company={selectedCompany}
                    position='AI Software Developer II'
                    dates='Aug 2023 - Present'
                    description={[
                        'Led a team of developers to build a feature-rich editor for managing LLM phone call workflows.',
                        'Created neural networks that improved speed for a real-time production application 200-fold.',
                        'Implemented a Large Action Model that lets employees interact with a company database via LLM.',
                        'Integrated RAG, LLMs, and a LAM into a chat website for all SelectQuote employees.'
                    ]}
                />
            case 'IBM':
                return <WorkExperience
                    key={selectedCompany}
                    company={selectedCompany}
                    position='Full-Stack Developer'
                    dates='June 2021 - May 2023'
                    description={[
                        'Architected and led the UI development for multiple 5G Edge industry solutions built on RedHat OpenShift, a fully deployed 5G network, and different IBM products.',
                        'Utilized MQTT subscriptions and Webhooks to display real-time alerts for AI object detection from a camera, demonstrating the power of IBM Visual Inspection Products on the back end.',
                        'Containerized applications using docker to be sent internally or to other teams.',
                        'Above work was used to progress client opportunities in multiple client engagements where I presented at customer workshops/key industry events and were used for PoC’s resulting in multiple wins for IBM.',
                    ]}
                />
            case 'JamFeed':
                return <WorkExperience
                    key={selectedCompany}
                    company={selectedCompany}
                    position='Front-End React-Native Mobile App Engineer'
                    dates='June 2020 - May 2021'
                    description={[
                        `Implemented new functionality such as Forgot Password, Confirm Email, Apple login, and JWT Authorization, improving the app's security, convenience, and compatibility.`,
                        'Utilized Spotify and Apple Music APIs to allow users to import and synchronize their favorite artists in the app.',
                        'Built a pipeline that utilizes machine learning to add notifications, extract artist names, and categorize each article.',
                        'Used Atlassian with Confluence for documentation, JIRA for task management, and bitbucket for pull requests.',
                        'Designed and developed a custom “Smart Reader” API using Node.js to display news articles in a friendly format on the JamFeed UI, eliminating pop-up ads and increasing user retention.',
                    ]}
                />
            // case '6 Points Sci-Tech Academy':
            //     return <WorkExperience
            //         key={selectedCompany}
            //         company={selectedCompany}
            //         position='Camp Counselor and Specialist'
            //         dates='Jun 2019 - Aug 2020'
            //         description={[
            //             'Created curriculum to teach a weekly four-lesson class about AWS to campers from grade 5-10',
            //             'Managed a group of 15-20 campers for grades 7-8 for six weeks each summer.',
            //             'Prepared and executed large daily events.',
            //         ]}
            //     />
            // case 'Anubis LLC':
            //     return <WorkExperience
            //         key={selectedCompany}
            //         company={selectedCompany}
            //         position='Founding Software Developer'
            //         dates='Jan 2016 – May 2019'
            //         description={[
            //             'Led the UI and UX development of React Native social media apps.',
            //         ]}
            //     />
            default:
                return <WorkExperience
                    key={selectedCompany}
                    company={'unknown'}
                    position='unknown'
                    dates='unknown'
                    description={[
                        'unknown',
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
                <div className='mr-2 col-span-2'>
                    {
                        companies.map((company, index) => (
                            <CompanyTag
                                company={company}
                                selectedCompany={selectedCompany}
                                onClick={handleSelectCompany}
                                first={index === 0}
                            />
                        ))
                    }
                </div>
                <div className='col-span-1 md:col-span-4'>
                    {renderExperience()}
                </div>


            </div>
        </Section>
    )
}

export default experience