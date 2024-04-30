import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import LoadingBar from 'react-top-loading-bar';
import { motion } from 'framer-motion'

function ContactForm() {
    const [loader, setLoader] = useState(false)
    const [progress, setProgress] = useState(0)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoader(true)
        setProgress(10)
        setProgress(20)
        setProgress(30)
        setProgress(40)
        setProgress(50)
        setProgress(60)
        emailjs.sendForm('service_naw5khl', 'template_7opvvtl', form.current, {
            publicKey: 'bFXs4wPx1AxeT1_N1',
        })
            .then(
                () => {

                    setProgress(70)
                    setProgress(80)
                    setProgress(90)
                    setProgress(100)
                },
                (error) => {
                    setProgress(100)
                    setLoader(false)
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col font-inter sm:w-1/2 w-full text-gray-400 gap-2'>
                {loader ? <LoadingBar progress={progress} onLoaderFinished={() => setProgress(0)} color='#030712' /> : null}
                <label>Name</label>
                <input type="text" name="user_name" className='outline-none bg-inherit border-b' required />
                <label>Email</label>
                <input type="email" name="user_email" className='outline-none bg-inherit border-b' required />
                <label>Message</label>
                <textarea name="message" className='outline-none bg-inherit border-b' />
                <center>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type='submit' className='flex font-medium justify-center gap-1 border rounded-3xl w-40 p-2 hover:bg-white hover:text-black transition ease-linear duration-100'>Send<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </motion.button>
                </center>
            </form>
        </div>
    )
}

export default ContactForm