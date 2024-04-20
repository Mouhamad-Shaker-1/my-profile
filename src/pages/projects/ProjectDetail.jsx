
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useLoaderData, Link, defer, Await } from 'react-router-dom'
import { Suspense } from 'react'

import { getProject } from '../../api'
import Loading from "../../components/Loading"
 
export async function loader({ params }) {
    const projectData = getProject(params.id)
    return defer({projectData: projectData})
}

export default function ProjectDetail() {

    const projectData = useLoaderData()

    function handleAwait(projectData) {

        const languages = getValuesFromObject(projectData.languages)
        const images = getValuesFromObject(projectData.imagesName)
    
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
            <>
                <h1>{ projectData.name }</h1>
                <hr />
                <div className="container-lang">
                    <Link to={ projectData.linkDemo }>
                        <div className="lang">
                            <FontAwesomeIcon className='icon' icon={faCode} />
                            <p>Demo</p>
                        </div>
                    </Link>
                    
                    <Link to={projectData.linkGethub}>
                        <div className="lang">
                            <FontAwesomeIcon className='icon' icon={faGithub} />
                            <p>Gethub</p>
                        </div>
                    </Link>

                    {iconProject}
                </div>
                <hr />
                <p className="description">{ projectData.description }</p>
                <hr />

                <div className="container-imgs-project">
                    {imgsProject}
                </div>
            </>
        )
    }


 
    return (
        <section className='section-project-detail'>
            <Suspense fallback={<Loading />}>
                <Await resolve={projectData.projectData}>
                    {(projectData) => handleAwait(projectData)}
                </Await>
            </Suspense>
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
