
import computerImg from "/img/computer.jpg"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import iconsLang from "../icons"

export default function Home() {
    return (
        <section className="section-home">
            <div className="constianer-intro">
                <div className="intro">
                    <h1>
                        Hello there, I am a junior front-end web developer who uses React and Firebase to build my projects. Welcome to my website.
                    </h1>
                    <div className="container-icon">
                        
                        <a target="_blank" href="https://github.com/Mouhamad-Shaker-1">
                            <FontAwesomeIcon 
                                className="icon"
                                style={{color: iconsLang.squareGethub.color}} 
                                icon={iconsLang.squareGethub.icon} />
                        </a>

                        <a target="_blank" href="https://m.facebook.com/profile.php?eav=AfaVRRMuJocs5VAWqbowb3dbSZBrowGon0fCKCVvq9873Ln2U9UQSp6b2WiomhMIKYI&paipv=0">
                            <FontAwesomeIcon 
                                className="icon"
                                style={{color: iconsLang.facebook.color}} 
                                icon={iconsLang.facebook.icon} />
                        </a>

                        <a target="_blank" href="https://twitter.com/MouhamadSh56668">
                            <FontAwesomeIcon 
                                className="icon"
                                style={{color: iconsLang.twitter.color}} 
                                icon={iconsLang.twitter.icon} />
                        </a>
 
                        <a target="_blank" href="https://www.linkedin.com/in/mouhamad-shaker-aa4548306/">
                            <FontAwesomeIcon 
                                className="icon"
                                style={{color: iconsLang.linkedin.color}} 
                                icon={iconsLang.linkedin.icon} />
                        </a>
 
                    </div>
                    <Link to="/about">
                        <button>More about be</button>
                    </Link>
                </div>
                <img className="img-intro" src={computerImg} />
            </div>
        </section>
    )
}