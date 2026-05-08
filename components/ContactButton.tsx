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
            <button
                id={id}
                className={effect ? "animate-shake contact-btn" : "contact-btn"}
                onClick={() => setEffect(true)}
                onAnimationEnd={() => setEffect(false)}
            >
                {children}
            </button>
        </a>
    );
}

export default ContactButton;
