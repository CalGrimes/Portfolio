"use client";
import React, { useState } from "react";

import ContactButton from "@/components/ContactButton";
import OutlookIcon from "@/components/OutlookIcon";
import LinkedInIcon from "@/components/LinkedInIcon";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

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
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row justify-center">
                <ContactButton 
                    id="OutlookContact" 
                    effect={outlookEffect} 
                    setEffect={setOutlookEffect} 
                    href="mailto:cal.grimes@outlook.com"
                >
                    <OutlookIcon />
                </ContactButton>
                <ContactButton 
                    id="LinkedInIcon" 
                    effect={linkedInEffect} 
                    setEffect={setLinkedInEffect} 
                    href="https://www.linkedin.com/in/calgrimes/"
                >
                    <LinkedInIcon />
                </ContactButton>
            </div>



        </section>
    );
};

export default Contact;