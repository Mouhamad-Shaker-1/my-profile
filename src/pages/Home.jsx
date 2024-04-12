
import computerImg from "../img/computer.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
    return (
        <section>
            <div className="constianer-intro">
                <div className="intro">
                    <h1>Hello, I am frondend developer using React, you are on my website now.</h1>
                    <div className="container-icon">
                        <a href="https://github.com/Mouhamad-Shaker-1"><FontAwesomeIcon className="icon" icon={faSquareGithub} /></a>
                        <a href=""><FontAwesomeIcon className="icon" icon={faSquareFacebook} /></a>
                    </div>
                </div>
                <img className="img-intro" src={computerImg} />
            </div>
        </section>
    )
}