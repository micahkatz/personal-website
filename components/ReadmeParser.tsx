import React from 'react'
import ReactMarkdown from "react-markdown";
import axios from 'axios'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import rehypeRaw from 'rehype-raw'


type Props = {
    readmeUrl: string;
    githubRawUrl?: string;
    className?: string;
    getLineClassName?: (index: number) => string;
    loadingText?: string;
}

const ReadmeParser = (props: Props) => {
    const [articleContent, setArticleContent] = React.useState<string | null>(null)
    const articleLines = articleContent?.split('\n')

    const getMarkdown = async () => {
        try {
            const response = await axios.get(props.readmeUrl)
            console.log(response.data)
            setArticleContent(response.data)
        } catch {
            setArticleContent('#Unable to get article content')
        }
    }
    React.useEffect(() => {
        getMarkdown()
    }, [])
    return (
        <article className={props.className || ''}>
            {articleContent ? (
                <>
                    {articleLines && articleLines.map((line, index) => {

                        if (line.trim() === '```') {
                            return <br />
                        }

                        return line ? (
                            <ReactMarkdown
                                rehypePlugins={[rehypeRaw]}
                                className={`${props.getLineClassName ? props.getLineClassName(index) : ''}`}
                            >
                                {line}
                            </ReactMarkdown>
                        ) : <br />
                    }
                    )}
                </>
            ) : (
                props.loadingText ? (
                    <ReactMarkdown># Loading...</ReactMarkdown>
                ) : (
                    <div className='h-screen' />
                )
            )}
        </article>
    )
}

export default ReadmeParser