
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { connectFunctionsEmulator } from 'firebase/functions'
import { useLoaderData, useParams } from 'react-router-dom'

import { getProject } from '../../api'

export async function loader({ params }) {
    const project = await getProject(params.id)
    return project
}

export default function ProjectDetail() {

    const projectData = useLoaderData()
 
    return (
        <section className='section-project-detail'>
            <h1>Quiz app</h1>
            <hr />
            <div className="container-lang">
                <div className="lang">
                    <FontAwesomeIcon className='icon' icon={faHtml5} />
                    <p>htasdfasdfml</p>
                </div>
                <div className="lang">
                    <FontAwesomeIcon className='icon' icon={faHtml5} />
                    <p>html</p>
                </div>
                <div className="lang">
                    <FontAwesomeIcon className='icon' icon={faHtml5} />
                    <p>sdfsdfsdf</p>
                </div>
                <div className="lang">
                    <FontAwesomeIcon className='icon' icon={faHtml5} />
                    <p>html</p>
                </div>
                <div className="lang">
                    <FontAwesomeIcon className='icon' icon={faHtml5} />
                    <p>html</p>
                </div>
                <div className="lang">
                    <FontAwesomeIcon className='icon' icon={faHtml5} />
                    <p>html</p>
                </div>
            </div>
            <hr />
            <p className="description">
                it esay to deverlop like this app and i so happy
                to learn proggraming its easy and so much fun 
                this is the description i want to take
                about this app but i dont have any idea to take about so let fell this description by some
                text to test the css ok i was so bored yesterday but now i am so happy and 
                very exiated about the day its such a beuatifull day i need one word
            </p>
            <hr />

            <div className="container-imgs-project">
                {/* <img className='imgs-project' src={imgs} />
                <img className='imgs-project' src={imgs} />
                <img className='imgs-project' src={imgs} /> */}
            </div>
        </section>
    )
}