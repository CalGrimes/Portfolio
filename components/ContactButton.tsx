import { Button } from '@chakra-ui/react'

const ContactButton = ({ id, effect, setEffect, href, children }) => {
    return (
            <a href={href}>
                <Button 
                    id={id} 
                    className={`${effect && "animate-shake"} text-center p-4 rounded-xl shadow-xl bg-stone-200 dark:bg-stone-800 w-60 gap-4 hover:scale-95 ease-in duration-75 h-24`}
                    onClick={() => setEffect(true)}
                    onAnimationEnd={() => setEffect(false)}
                >
                    {children}
                </Button>
            </a>
        );
}

export default ContactButton;