import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks"; 
import { useTheme } from "next-themes";

const CodeSnippet = (props: any) => {
    const { systemTheme, theme, setTheme } = useTheme();

    let themeToUse;
    if (theme === "system") {
        themeToUse = systemTheme === "dark" ? atomOneDark : atomOneLight;
    } else {
        themeToUse = theme === "dark" ? atomOneDark : atomOneLight;
    }

    return (
        <div style={{ overflowX: 'auto' }}>
            <p>{props.language}</p>
            <CopyBlock
                text={props.text}
                language={props.language}
                showLineNumbers={props.showLineNumbers}
                codeBlock={props.codeBlock}
                theme={themeToUse}
            />
        </div>
    )
}

export default CodeSnippet;