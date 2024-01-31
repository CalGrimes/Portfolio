import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks"; 
import { useTheme } from "next-themes";

const CodeSnippet = (props: any) => {
    const { systemTheme, theme, setTheme } = useTheme();

    return (
        <div style={{ overflowX: 'auto' }}>
            <p>{props.language}</p>
            <CopyBlock
                text={props.text}
                language={props.language}
                showLineNumbers={props.showLineNumbers}
                codeBlock={props.codeBlock}
                theme={theme === "system" ? systemTheme : theme === "dark" ? atomOneDark : atomOneLight}
            />
        </div>
    )
}

export default CodeSnippet;