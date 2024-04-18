
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useLoaderData, useParams, Link } from 'react-router-dom'

import { getProject } from '../../api'

export async function loader({ params }) {
    const project = await getProject(params.id)
    return project
}

export default function ProjectDetail() {

    const projectData = useLoaderData()

    const languages = getValuesFromObject(projectData.languages)
    const images = getValuesFromObject(projectData.imagesName)
    console.log(projectData)

    const imgsProject = images.map(img => {
        return (
            <img className='imgs-project' src={`/img/projects-img/${projectData.name}/${img}.png`}/>
        )
    })

    const iconProject = languages.map(lang => {
        if (lang == 'HTML') {
            return (
                <div className="lang">
                    <FontAwesomeIcon key={lang} className='icon' icon={faHtml5} />
                    <p>{ lang }</p>
                </div>
            )
        } else if (lang == 'CSS') {
            return (
                <div className="lang">
                    <FontAwesomeIcon key={lang} className='icon' icon={faCss3Alt} />
                    <p>{ lang }</p>
                </div>
            )
        } else if (lang == "javascript") {
            return (
                <div className="lang">
                    <FontAwesomeIcon key={lang} className='icon' icon={faJs} />
                    <p>{ lang }</p>
                </div>
            )
        } else if (lang == "react") {
            return (
                <div className="lang">
                    <FontAwesomeIcon key={lang} className='icon' icon={faReact} />
                    <p>{ lang }</p>
                </div>
            )
        }
    })
 
    return (
        <section className='section-project-detail'>
            <h1>{ projectData.name }</h1>
            <hr />
            <div className="container-lang">
                <Link to={ projectData.link }>
                    <div className="lang">
                        <FontAwesomeIcon className='icon' icon={faCode} />
                        <p>Demo</p>
                    </div>
                </Link>
                
                <div className="lang">
                    <FontAwesomeIcon className='icon' icon={faGithub} />
                    <p>Gethub</p>
                </div>

                {iconProject}
            </div>
            <hr />
            <p className="description">{ projectData.description }</p>
            <hr />

            <div className="container-imgs-project">
                {imgsProject}
            </div>
        </section>
    )
}

function convertDateToStringFromFireStore(dateStore) {
    const date = dateStore.toDate()
    return date.toISOString().substring(0, 10).replace(/-/g, '/');
}

function getValuesFromObject(objs) {
    var vals = [];
    for( var key in objs ) {
        if ( objs.hasOwnProperty(key) ) {
            vals.push(objs[key]);
        }
    }
    return vals;
}
