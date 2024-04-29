import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, useActionData, useNavigation } from 'react-router-dom'
import { useEffect, useRef } from 'react';

import emailjs from '@emailjs/browser';
import iconsLang from "../icons"

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';


export async function action({ request }) {
    const formData = await request.formData()

    emailjs.init({
        publicKey: "V65bLJbRSl2M4FGk7",
    })

    const templateParams = {
        user_name: formData.get('name'),
        user_email: formData.get('email'),
        message: formData.get('message'),
        subject: formData.get('subject')
    };
    
    try {
        await emailjs.send('service_c1neyva', 'template_fbhguks', templateParams)
        toast.success('you send the message successfully')
        return null
    } catch (err) {
        toast.error(`${err.message}, try again`)
        return err.message
    }
}


export default function Contact() {

    const navigation = useNavigation()
    const errors = useActionData()
    const formRef = useRef()
    
    const IsSubmitting = navigation.state === "submitting"
        
    useEffect(() => {
        if (!IsSubmitting && errors == null) {
            formRef.current.reset()
        }
    }, [IsSubmitting])

    return (
        <section className='section-contact'>
            <ToastContainer />
            <h1 className="title">Contact</h1>
                    
            {/* { validationMassege(errors)} */}
            
            <div className="contianer-info-input">
                <div className="contianer-info-contact">
                    <h2>Get in taouch</h2>
                    <p>
                        I'm currently looking for any new opportunities,
                        my inbox is always open. Whether you have a question or just want to 
                        say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contianer-info-icons">
                        <FontAwesomeIcon 
                            className='icon' 
                            icon={iconsLang.name.icon} />
                        <p>mouhamad shaker</p>
                    </div>


                    <div onClick={() => window.location = "tel:0986698602"} className="contianer-info-icons">
                        <FontAwesomeIcon 
                            className='icon' 
                            icon={iconsLang.phone.icon} />
                        <p>0986698602</p>
                    </div>


                    <div onClick={() => window.location = "mailto:mouhamadshaker073@abc.com"} className="contianer-info-icons">
                        <FontAwesomeIcon 
                            className='icon' 
                            icon={iconsLang.email.icon} />
                        <p>mouhamadshaker730@gmail.com</p>
                    </div>

                </div>
                <Form ref={formRef} replace method="post" className='contianer-inputs' action="">
                    <input required name='name' placeholder='Name' type="text" />
                    <input required name='email' placeholder='Email' type="email" />
                    <input name='subject' placeholder='Subject' type="text" />
                    <textarea required name='message' placeholder='Massege' />
                    <button 
                        
                        disabled={IsSubmitting} 
                        className="btn-contact"
                    >
                        { 
                            IsSubmitting
                                ? 'Sending...'
                                : 'Send Message'
                        }
                    </button>
                </Form>
            </div>
        </section>
    )
}

// function validationMassege(errors) {
//     if (errors !== "success" && errors !== undefined) {
        
//         return <p style={{ color: 'red' }}>{ errors }, try again 😥😥</p>
//     } else if (errors === "success") {
//         return  <p style={{ color: 'green' }}>you send the message successfully 😄😄</p>
//     }
// }