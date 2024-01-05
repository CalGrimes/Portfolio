"use client";
import React, { useState } from "react";
import { Button } from '@chakra-ui/react'
import OutlookIcon from "@/components/OutlookIcon";
import LinkedInContact from "@/components/LinkedInContact";

const Contact = () => {
    const [outlookEffect, setOutlookEffect] = useState(false);
    const [linkedInEffect, setLinkedInEffect] = useState(false);

    return (
        <section
            id="contact"
            className={`flex flex-col py-0 text-center mt-16`}
        >
            <h1 className="my-10 text-center font-bold text-4xl ">
                Connect
                <hr className={`w-6 h-1 mx-auto my-4 border-0 rounded dark:bg-amber-400 bg-purple-800`} />
            </h1>
            <div className="flex flex-row justify-center space-x-4">
                <a href="mailto:cal.grimes@outlook.com">
                <Button id="OutlookContact" className={`${
                    outlookEffect && "animate-shake"
                }
                text-center p-4 rounded-xl shadow-xl bg-stone-200 dark:bg-stone-800 w-60 gap-4 hover:scale-95 ease-in duration-75 h-24`}
                onClick={() => {
                    setOutlookEffect(true);
                }}
                onAnimationEnd={() => setOutlookEffect(false)}
                >
                    <OutlookIcon />
                </Button>
                </a>
                <a href="https://www.linkedin.com/in/calgrimes/">
                <Button id="LinkedInContact" className={`${
                    linkedInEffect && "animate-shake"
                }
                text-center p-4 rounded-xl shadow-xl bg-stone-200 dark:bg-stone-800 w-60 gap-4 hover:scale-95 ease-in duration-75 h-24`}
                onClick={() => {
                    setLinkedInEffect(true);
                }}
                onAnimationEnd={() => setLinkedInEffect(false)}
                >
                    <LinkedInContact />
                </Button>
                </a>
            </div>
            
        

        </section>
    );
};

export default Contact;