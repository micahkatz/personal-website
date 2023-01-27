import React from 'react'
import ReactMarkdown from "react-markdown";
import axios from 'axios'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import rehypeRaw from 'rehype-raw'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '../styles/Article.module.css'

type Props = {
    readmeUrl: string;
    githubRawUrl?: string;
    className?: string;
    getLineClassName?: (index: number) => string;
    loadingText?: string;
}

const ReadmeParser = (props: Props) => {
    const [articleContent, setArticleContent] = React.useState<string | null>(null)
    // const articleLines = parseMarkdown(articleContent);
    const articleLines = React.useMemo(() => parseMarkdown(articleContent), [articleContent]);

    function parseMarkdown(articleContent: string | null) {
        if (articleContent) {
            let codeBlockStart = -1;
            type CodeBlock = {
                start: number;
                end: number;
            }
            let codeBlockArray: CodeBlock[] = [];
            const linesOfArticle = articleContent.split('\n')
            linesOfArticle.forEach((line, index) => {
                if (line.includes('```')) {
                    // code block has started/ended
                    if (codeBlockStart === -1) {
                        // we have not started the code block yet

                        codeBlockStart = index;
                    } else {
                        // we are ready to end the code block

                        codeBlockArray.push({
                            start: codeBlockStart,
                            end: index
                            // end: index + 1
                        })
                        codeBlockStart = -1
                    }

                }
            })
            console.table(codeBlockArray)

            let linesWithCodeBlocks = linesOfArticle

            // reverse array to keep the indexes correct
            codeBlockArray.reverse().forEach((codeBlockLocation) => {
                const { start, end } = codeBlockLocation
                const codeBlock = linesOfArticle.slice(start, end + 1).join('\n')
                console.log({ codeBlock })
                const numToDelete = end - start
                console.log({ linesWithCodeBlocks, start, numToDelete, codeBlock })
                linesWithCodeBlocks.splice(start, numToDelete + 1, codeBlock)
                console.log('after sliced', codeBlock, linesWithCodeBlocks)
                // console.log('updated', linesWithCodeBlocks)
            })

            return linesWithCodeBlocks
        } else {
            return null
        }
    }

    const getMarkdown = async () => {
        try {
            const response = await axios.get(props.readmeUrl)
            console.log({ content: response.data })
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

                        return line ? (
                            <ReactMarkdown
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    code({ node, inline, className, children, ...props }) {
                                        const match = /language-(\w+)/.exec(className || '')
                                        return !inline ? (
                                            // @ts-ignore
                                            <SyntaxHighlighter
                                                children={String(children).replace(/\n$/, '')}
                                                language={match && match[1] || undefined}
                                                // @ts-ignore
                                                style={vscDarkPlus}
                                                className={className ? `${className} code-block` : 'code-block'}
                                                PreTag="div"
                                                {...props}
                                            />
                                        ) : (
                                            <code className={className ? `${className} ${styles.inlineCode}` : styles.inlineCode} {...props}>
                                                {children}
                                            </code>
                                        )
                                    }
                                }}
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