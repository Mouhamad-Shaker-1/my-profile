
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useLoaderData, Link, defer, Await, useLocation } from 'react-router-dom'
import { Suspense } from 'react'

import iconsLang from '../../icons'
import { getProject } from '../../api'
import Loading from "../../components/Loading"
 
export async function loader({ params }) {
    const projectData = getProject(params.id)
    return defer({projectData: projectData})
}

export default function ProjectDetail() {

    const projectData = useLoaderData()
    const location = useLocation()

    function handleAwait(projectData) {

        const languages = getValuesFromObject(projectData.languages)
        const images = getValuesFromObject(projectData.imagesName)
    
        const imgsProject = images.map(img => {
            return (
                <img key={img} className='imgs-project' src={`/img/projects-img/${projectData.name}/${img}.png`}/>
            )
        })
    
        const iconProject = languages.map(lang => {
            return (
                <div key={lang} className="lang">
                    <FontAwesomeIcon
                        style={{ color: iconsLang[lang].color }}
                        key={lang} className='icon'
                        icon={iconsLang[lang].icon}
                    />
                    <p>{ lang }</p>
                </div>
            )
        })

        return (
            <>
                <Link to={`../projects${location.state.search}`}>
                    <p className='go-back'>go back</p>
                </Link>
                <h1>{ projectData.name }</h1>
                <hr />
                <div className="container-lang">
                    <Link to={ projectData.linkDemo }>
                        <div className="lang">
                            <FontAwesomeIcon style={{color:'#000'}} className='icon' icon={faCode} />
                            <p>Demo</p>
                        </div>
                    </Link>
                    
                    <Link to={projectData.linkGethub}>
                        <div className="lang">
                            <FontAwesomeIcon style={{color:'#000'}} className='icon' icon={faGithub} />
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
