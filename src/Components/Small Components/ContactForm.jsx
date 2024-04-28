import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_naw5khl', 'template_7opvvtl', form.current, {
                publicKey: 'bFXs4wPx1AxeT1_N1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col font-inter sm:w-1/2 w-full text-gray-400 gap-3'>
                <label className=''>Name</label>
                <input type="text" name="user_name" className='outline-none bg-inherit border-b' />
                <label className=''>Email</label>
                <input type="email" name="user_email" className='outline-none bg-inherit border-b' />
                <label className=''>Message</label>
                <textarea name="message" className='outline-none bg-inherit border-b' />
                <center>
                    <input type="submit" value="Send" className='font-medium border rounded-3xl cursor-pointer hover:bg-white hover:text-black w-1/2 transition ease-linear duration-300 py-2' />
                </center>
            </form>
        </div>
    )
}

export default ContactForm