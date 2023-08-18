"use client";
import React, { useState } from "react";

import { InlineWidget } from "react-calendly";
import { validationSchema } from "@/utils/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {useTheme} from "next-themes";

import { ToastContainer, toast } from "react-toastify";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (
        values: FormValues,
        {
            setSubmitting,
            resetForm,
        }: {
            setSubmitting: (isSubmitting: boolean) => void;
            resetForm: () => void;
        }
    ) => {
        try {
            // Send email using Nodemailer
            await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            // Reset the form
            resetForm();

            toast.success("Email sent successfully!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                toastId: "success-toast",
            });
            // Show success message or redirect to a thank you page
            console.log("Email sent successfully!");
        } catch (error) {
            // Handle error
            console.error("Failed to send email:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className={`flex flex-col py-0 text-center mt-16 shadow-xl bg-gray-200 dark:bg-neutral-700`}
        >
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="my-12 md:pb-16">
                <h1 className="my-10 text-center font-bold text-4xl mb-20">
                    Contact
                    <hr className={`w-6 h-1 mx-auto my-4 border-0 rounded bg-purple-800 dark:bg-amber-400 `} />
                </h1>

                <p className={`mb-6 text-xl dark:text-gray-500 text-gray-600`}>
                    Want to get in touch? Send me a message!
                </p>

                <div className="flex justify-center w-full flex-col space-y-10 md:flex-row md:items-start md:space-x-10 md:space-y-0 md:text-left">

                    <div className="flex flex-col md:w-1/2">
                        <p className="mb-2 text-2xl font-semibold">Get in Touch</p>
                        <Formik
                            initialValues={{ name: "", email: "", message: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <div className="flex w-full flex-col space-y-2">
                                    <div className="flex flex-col md:flex-row md:space-x-2 md:space-y-0">
                                        <div className="w-full">
                                            <Field
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Name*"
                                                className={`w-full rounded p-2 text-lg focus:outline-none focus:ring-2 dark:focus:ring-amber-40 focus:ring-purple-500`}
                                            />
                                            {/* <ErrorMessage
                        name="name"
                        component="div"
                        className="text-black"
                      /> */}
                                        </div>

                                        <div className="w-full">
                                            <Field
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email*"
                                                className={`w-full rounded p-2 text-lg focus:outline-none focus:ring-2 dark:focus:ring-amber-400 focus:ring-purple-500`}
                                            />
                                            {/* <ErrorMessage
                        name="email"
                        component="div"
                        className="text-black"
                      /> */}
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <Field
                                            as="textarea"
                                            id="message"
                                            name="message"
                                            placeholder="Your message here*"
                                            className={`h-48 w-full rounded p-2 text-lg focus:outline-none focus:ring-2 dark:focus:ring-amber-400 focus:ring-purple-500`}
                                        />
                                        {/* <ErrorMessage
                      name="message"
                      component="div"
                      className="text-black"
                    /> */}
                                    </div>

                                    <div className="w-full">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className={`font-semibold px-6 py-3 rounded shadow  dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-black bg-purple-800 hover:bg-purple-800 text-white`}
                                        >
                                            <p className="text-lg font-semibold">
                                                {isLoading ? "Submitting..." : "Submit"}
                                            </p>
                                        </button>
                                    </div>
                                </div>


                                {errorMessage && <div>{errorMessage}</div>}
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;