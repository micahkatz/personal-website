import React from "react";
import ProjectTile from "../components/ProjectTile";
import Section from "../components/Section";
type MonthType =
    | "Jan"
    | "Feb"
    | "Mar"
    | "Apr"
    | "May"
    | "Jun"
    | "Jul"
    | "Aug"
    | "Sep"
    | "Oct"
    | "Nov"
    | "Dec";
type YearType = `${number}`;

type DateType = `${MonthType} ${YearType}` | "Present";

type ProjectType = {
    title: string;
    dates?: `${DateType} - ${DateType}`;
    description: string[];
    skills?: string[];
    githubLink?: string;
    publishedLink?: string;
    articleLink?: string;
    className?: string;
};
const projects: ProjectType[] = [
    {
        title: "Internal Retrieval Augmented Generation",
        description: [
            "Implemented Retrieval Augmented Generation on an internal UI. This allowed SelectQuote employees to ask questions about large knowledge bases.",
        ],
        skills: ["Python","Langchain","DALLE API"],
        dates: "Aug 2023 - Present",
    },
    {
        title: "Interactive Large Action Model",
        description: [
            "Implemented cutting-edge AI concepts to allow an LLM to choose between different custom actions intelligently. This allowed SelectQuote employees to query live internal data and static files.",
        ],
        skills: ["Python","Langchain","DALLE API"],
        dates: "Aug 2023 - Present",
    },
    {
        title: "SelectQuote.ai",
        description: [
            "Created a full-stack UI for all SelectQuote employees to interact with multiple LLMs.",
        ],
        skills: ["Next.js", "React.js", "Node.js", "OpenAI API"],
        dates: "Aug 2023 - Present",
    },
    {
        title: "Entity Extraction Neural Network",
        description: [
            "Created a neural network to reduce latency and cost in a production application.",
        ],
        skills: ["Python", "Tensorflow", "Pandas"],
        dates: "Jan 2024 - Mar 2024",
    },
    {
        title: "Sentiment Classification Neural Network",
        description: [
            "Created a neural network to reduce latency and cost in a production application.",
        ],
        skills: ["Python", "Tensorflow", "Pandas"],
        dates: "Jan 2024 - Mar 2024",
    },
    {
        title: "Team Solutions Dashboard",
        description: [
            "Developed a dashboard for my IBM team to do CRUD on our internal website containing markdown articles.",
        ],
        skills: ["React", "Node", "Linux", "API", "CSS"],
        dates: "Mar 2023 - May 2023",
    },

    {
        title: "5G System Status UI",
        description: [
            "Developed a draggable flowchart UI showing internal IBM 5G systems and their JSON data as tables.",
        ],
        skills: ["React", "Node", "Linux", "API", "CSS"],
        dates: "Apr 2022 - Jun 2022",
    },
    {
        title: "UT Dallas Senior Design Project",
        description: [
            "My Team was tasked with building a website for students to find tutors and schedule appointments.",
        ],
        skills: ["React.js", "Next.js", "Prisma", "MySQL"],
        dates: "Jan 2023 - May 2023",
    },
    {
        title: "My VS-Code Guide (Article)",
        description: [
            "A guide to help others improve their experience in Visual Studio Code with keyboard shortcuts and extensions.",
        ],
        skills: ["Markdown", "Technical Writing"],
        githubLink: "https://github.com/micahkatz/micahs-vscode-guide",
        articleLink: "/articles/vscode-guide",
    },
    {
        title: "MicahKatz.com",
        dates: "Jan 2023 - Jan 2023",
        description: [
            "Developed my personal website to create a singular place for all of my information.",
        ],
        skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Docker",
            "Google Cloud",
        ],
        githubLink: "https://github.com/micahkatz/personal-website",
        publishedLink: "https://micahkatz.com",
    },
    {
        title: "Fire Alarm Safety Website",
        dates: "Dec 2022 - Jan 2023",
        description: [
            "Developed a React.js website that displays the current people in the building for a school as a safety measure.",
        ],
        skills: ["React.js", "CSS", "Next.js", "TypeScript"],
        githubLink: "https://github.com/micahkatz/epstein-rfid-ui",
        publishedLink: "https://epstein-rfid-ui.vercel.app/",
    },
    {
        title: "My Mac Terminal Preferences Guide (Article)",
        description: [
            "A guide to help others improve their experience in the Mac terminal with plugins. I share this with my co-workers and friends.",
        ],
        skills: ["Markdown", "Technical Writing"],
        githubLink: "https://github.com/micahkatz/mac-terminal-preferences",
        articleLink: "/articles/mac-terminal-preferences",
    },
    {
        title: "Social Media App (Personal Project)",
        dates: "Jun 2022 - Jun 2023",
        description: [
            "A social media app using React Native Expo for the frontend and AWS Amplify to create the backend. This includes login/signup, recording/uploading videos, liking posts, following friends, and notifications among other features.",
            // 'Added login/signup, recording/uploading videos, liking posts, following friends, and notifications.'
        ],
        skills: ["React Native", "Expo", "AWS"],
    },
    {
        title: "Image Transformation Discord Bot (Personal Project)",
        dates: "Feb 2022 - Present",
        description: [
            "Worked with the Cloudinary API to perform image transformations on demand for discord servers. I also Implemented a chaining system where users can chain multiple image transformations into one command.",
        ],
        skills: ["Node.js", "Discord API", "Cloudinary API"],
    },
    {
        title: "Arduino Garage Door Scanner System",
        dates: "Nov 2019 - Feb 2020",
        description: [
            "Designed a system for an organization in Massachusetts that required an RFID card to enter. It processes over 50 cards (one per person) and stores logs on a SD card. It will trigger a garage door to open using Arduino relay switches.",
        ],
        skills: ["C/C++", "Arduino", "Soldering", "Breadboard Skills"],
        githubLink: "https://github.com/micahkatz/GarageDoorRFID",
    },
    {
        title: "Summer Camp Mealtimes Website (Personal Project)",
        dates: "Jun 2019 - Jul 2019",
        description: [
            "Built a simple website for a summer camp (6 Points Sci-Tech Academy in Mass.) that displayed the status of an AWS database – to help regulate camper meal times. This was shown on TVs in the cafeteria and included an admin dashboard and announcement features.",
        ],
        skills: ["React.js", "CSS", "AWS"],
        githubLink: "https://github.com/micahkatz/Sci-Tech-Queue-Website",
        publishedLink: "https://d3qohousz9eozf.cloudfront.net/",
    },
];

const ProjectsPage = () => {
    return (
        <Section title="Projects" className="text-left" id="projects">
            <div className="md:mt-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {projects.map((item) => (
                    <ProjectTile {...item} key={item.title} />
                ))}
            </div>
        </Section>
    );
};

export default ProjectsPage;
