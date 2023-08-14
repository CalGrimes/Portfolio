import { useState } from 'react';
import Image from 'next/image';

function YourComponent() {
    const [tiltX, setTiltX] = useState(0);
    const [tiltY, setTiltY] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleMouseMove = (e) => {
        const container = e.currentTarget;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        const mouseX = e.pageX - container.offsetLeft;
        const mouseY = e.pageY - container.offsetTop;

        const rotateX = ((mouseY / containerHeight) * 20) - 10;
        const rotateY = 10 - ((mouseX / containerWidth) * 20);

        setTiltX(rotateX);
        setTiltY(rotateY);
    };

    // Add code to determine isSmallScreen value as needed

    return (
        <div className="md:mt-2 md:w-1/2" onMouseMove={handleMouseMove}>
            <Image
                src={isSmallScreen ? "/headshot-sm.png" : "/headshot.png"}
                alt=""
                width={325}
                height={325}
                className="rounded-full shadow-2xl headshot"
                style={{
                    "--tiltX": `${tiltX}deg`,
                    "--tiltY": `${tiltY}deg`,
                }}
            />
        </div>
    );
}
