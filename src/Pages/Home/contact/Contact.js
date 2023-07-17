import React from 'react';
import PrimaryButton from '../../../components/primary/PrimaryButton';
import appoinment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section style={{background:`url(${appoinment})`}}>
            <div className='text-center py-10'>
                <h4 className='text-primary font-bold'>Contact Us</h4>
                <h1 className='text-3xl text-white'>Stay connected with us</h1>
                <div className='mt-6'>
                <input  type="text" placeholder="Email Adress" className="input input-bordered w-full max-w-xs my-2" /><br />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" /><br />
                <textarea placeholder="Your message" className="textarea textarea-bordered textarea-md w-full max-w-xs my-2" ></textarea>
                <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
            
        </section>
    );
};

export default Contact;