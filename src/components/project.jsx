



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

export default function Project(props) {

    const srcImg = `../img/projects-img/${props.data.name}/${props.data.imagesName[0]}.png`

    console.log(props.data.languages)

    // const iconProject = props.data.languages.map(lang => {
    //     return lang
    // })

    return (
        <div className="project">
            <img className='img-project' src={srcImg}/>
            <div className="contianer-info-project">
                <h2>{ props.data.name }</h2>
                <small></small>
                <div className="lang-projects-page">
                    <FontAwesomeIcon className='icon' icon={faHtml5} />
                    <FontAwesomeIcon className='icon' icon={faCss3Alt} />
                    <FontAwesomeIcon className='icon' icon={faJs} />
                    <FontAwesomeIcon className='icon' icon={faReact} />

                </div>
                <p className="description">{ props.data.description.substring(0, 210) + '....' }</p>

            </div>
        </div>
    )
}