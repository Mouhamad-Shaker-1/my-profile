
import { useEffect } from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { connectFunctionsEmulator } from 'firebase/functions'

export default function Project(props) {

    const srcImg = `/img/projects-img/${props.data.name}/${props.data.imagesName[0]}.png`

    const languages = getValuesFromObject(props.data.languages)

    const iconProject = languages.map(lang => {
        if (lang == 'HTML') {
            return <FontAwesomeIcon key={lang} className='icon' icon={faHtml5} />
        } else if (lang == 'CSS') {
            return <FontAwesomeIcon key={lang} className='icon' icon={faCss3Alt} />
        } else if (lang == "javascript") {
            return <FontAwesomeIcon key={lang} className='icon' icon={faJs} />
        } else if (lang == "react") {
            return <FontAwesomeIcon key={lang} className='icon' icon={faReact} />
        }
    })

    return (
        <div className="project">
            <Link to={props.data.name}>
                <img className='img-project' src={srcImg}/>
                <div className="contianer-info-project">
                    <h2>{ props.data.name }</h2>
                    <small>{ convertDateToStringFromFireStore(props.data.date)  }</small>
                    <div className="lang-projects-page">
                        {iconProject}
                    </div>
                    <p className="description">{ props.data.description.substring(0, 210) + '....' }</p>

                </div>
            </Link>
        </div>
    )
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

function convertDateToStringFromFireStore(dateStore) {
    const date = dateStore.toDate()
    return date.toISOString().substring(0, 10).replace(/-/g, '/');
}
