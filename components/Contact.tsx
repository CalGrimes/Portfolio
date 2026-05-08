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
            <div className="section-header-center">
              <h2 className="font-bold text-4xl">Connect</h2>
              <span className="title-accent-center" />
            </div>
            <div className="contact-buttons">
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