import { CopyBlock, atomOneDark } from "react-code-blocks"; 

const CodeBlock = (props: any) => {
    return (
        <div style={{ overflowX: 'auto' }}>
            <p>{props.language}</p>
            <CopyBlock
                text={props.text}
                language={props.language}
                showLineNumbers={props.showLineNumbers}
                codeBlock={props.codeBlock}
                wrapLines={true}
                theme={atomOneDark}
            />
        </div>
    )
}

export default CodeBlock;