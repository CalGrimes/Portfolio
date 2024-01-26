import { CopyBlock } from "react-code-blocks"; 

const CodeBlock = (props: any) => {
    return (
        <div style={{ overflowX: 'auto' }}>
            <p>{props.language}</p>
            <CopyBlock
                className='rounded-xl p-2 shadow-xl dark:shadow-none code' 
                text={props.text}
                language={props.language}
                showLineNumbers={props.showLineNumbers}
                codeBlock={props.codeBlock}
                wrapLines={true}
                theme="material"
            />
        </div>
    )
}

export default CodeBlock;