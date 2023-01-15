import React from 'react';
import useTitle from '../../../Hooks/usetitle';
import { Typewriter } from 'react-simple-typewriter';


const Blog = () => {
    useTitle('Blog')
    return (
        <div className='m-8'>
            <section className="p-6 text-white">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-bold text-center dark:text-gray-50">Here is Some Questions</h2>
                    <div className="grid gap-6 my-16 lg:grid-cols-3">
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">1</div>
                            <span className='text-violet-400 text-bold text-xl mt-6'>
                                <Typewriter
                                    words={['what is the difference between sql and nosql?',]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={60}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>

                            <br />
                            <p>Ans: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. br SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">2</div>
                            <span className='text-violet-400 text-bold text-xl mt-6'>
                                <Typewriter
                                    words={[' what is jwt and how it works ?',]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={60}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>

                            <br />
                            <p>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">3</div>
                            <span className='text-violet-400 text-bold text-xl mt-6'>
                                <Typewriter
                                    words={['what is the difference between java and node.js?',]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={60}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>

                            <br />
                            <p>
                                Node. js is a speedy and scalable server-side runtime environment, while Java is a complex, web-based, highly concurrent language. To minimize errors and rework in the development pipelines, it is a good idea for both developers and managers to know how to utilize programming languages according to their pros and cons.
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">4</div>
                            <span className='text-violet-400 text-bold text-xl mt-6'>
                                <Typewriter
                                    words={[' how does node js handle multiple requests at the same time?',]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={60}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>

                            <br />
                            <p>
                                How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;