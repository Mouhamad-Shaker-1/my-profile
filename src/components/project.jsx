import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import iconsLang from '../icons'

export default function Project(props) {

    const srcImg = `/img/projects-img/${props.data.name}/${props.data.imagesName[0]}.png`

    const languages = getValuesFromObject(props.data.languages)

    const iconProject = languages.map(lang => {
        // console.log(iconsLang)
        return (
            <FontAwesomeIcon
                style={{ color: iconsLang[lang].color }}
                key={lang} className='icon'
                icon={iconsLang[lang].icon}
            />
        )
    })

    return (
        <div className="project">
            <Link className='backColor' state={props.state} to={props.data.name}>
                <img className='img-project' src={srcImg}/>
                <div className="contianer-info-project">
                    <h2>{ props.data.name }</h2>
                    <small>{ convertDateToStringFromFireStore(props.data.date)  }</small>
                    <div className="lang-projects-page">
                        {iconProject}
                    </div>
                    <p className="description">{
                        props.data.description.length > 210
                            ? props.data.description.substring(0, 210).trim() + '....'
                            : props.data.description
                    }
                    </p>

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
