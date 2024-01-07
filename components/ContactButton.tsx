import { Button } from '@chakra-ui/react'

interface Props {
    id: string;
    effect: boolean;
    setEffect: any;
    href: string;
    children: React.ReactNode;
}


const ContactButton = ({ id, effect, setEffect, href, children }: Props) => {
    return (
            <a href={href}>
                <Button 
                    id={id} 
                    className={`${effect && "animate-shake"} text-center p-4 rounded-xl shadow-xl bg-stone-200 dark:bg-stone-800 w-60 gap-4 hover:scale-105 ease-in duration-75 h-24`}
                    onClick={() => setEffect(true)}
                    onAnimationEnd={() => setEffect(false)}
                >
                    {children}
                </Button>
            </a>
        );
}

export default ContactButton;