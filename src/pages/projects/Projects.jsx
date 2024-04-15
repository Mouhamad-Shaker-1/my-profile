
import imgs from '../../img/projects-img/quiz-app/quiz-app-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'

export default function Projects() {
    return (
        <section>
            <div className="contianer-search-types">
                <button>HTML CSS</button>
                <button>javascript</button>
                <button>React</button> 
                <button>React Router</button>
                <button>All</button>
            </div>
            <div className="contianer-projects">

                <div className="project">
                    <img className='img-project' src={imgs}/>
                    <div className="contianer-info-project">
                        <h2>Quiz app</h2>
                        <small>feb 29 2024</small>
                        <div className="lang-projects-page">
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                        </div>
                        <p className="description">this is the description i want to take
                            about this app but i dont have any idea to take about so let fell this description by some
                        text to test the css</p>

                    </div>
                </div>
                <div className="project">
                    <img className='img-project' src={imgs}/>
                    <div className="contianer-info-project">
                        <h2>Quiz app</h2>
                        <small>feb 29 2024</small>
                        <div className="lang-projects-page">
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                        </div>
                        <p className="description">this is the description i want to take
                            about this app but i dont have any idea to take about so let fell this description by some
                        text to test the css</p>

                    </div>
                </div>
                <div className="project">
                    <img className='img-project' src={imgs}/>
                    <div className="contianer-info-project">
                        <h2>Quiz app</h2>
                        <small>feb 29 2024</small>
                        <div className="lang-projects-page">
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                        </div>
                        <p className="description">this is the description i want to take
                            about this app but i dont have any idea to take about so let fell this description by some
                        text to test the css</p>

                    </div>
                </div>
                <div className="project">
                    <img className='img-project' src={imgs}/>
                    <div className="contianer-info-project">
                        <h2>Quiz app</h2>
                        <small>feb 29 2024</small>
                        <div className="lang-projects-page">
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                        </div>
                        <p className="description">this is the description i want to take
                            about this app but i dont have any idea to take about so let fell this description by some
                        text to test the css</p>

                    </div>
                </div>

            </div>
        </section>
    )
}