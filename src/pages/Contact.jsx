import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import iconsLang from "../icons"

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
      
      emailjs.send('service_c1neyva', 'template_fbhguks', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );

    return null
}


export default function Contact() {
    return (
        <section className='section-contact'>
            <h1 className="title">Contact</h1>
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

                    <div className="contianer-info-icons">
                        <FontAwesomeIcon 
                            className='icon' 
                            icon={iconsLang.phone.icon} />
                        <p>0986698602</p>
                    </div>

                    <div className="contianer-info-icons">
                        <FontAwesomeIcon 
                            className='icon' 
                            icon={iconsLang.email.icon} />
                        <p>mouhamadshaker730@gmail.com</p>
                    </div>

                </div>
                <Form replace method="post" className='contianer-inputs' action="">
                    <input name='name' placeholder='Name' type="text" />
                    <input name='email' placeholder='Email' type="email" />
                    <input name='subject' placeholder='Subject' type="text" />
                    <textarea name='message' placeholder='Massege' />
                    <button className="btn-contact">Send Message</button>
                </Form>
            </div>
        </section>
    )
}