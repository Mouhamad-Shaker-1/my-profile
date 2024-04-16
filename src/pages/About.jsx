
import aboutImg from '../../public/img/web-development.png'
import { Link } from "react-router-dom"


export default function About() {
    return (
        <section>
            <h1 className='about-title'>About</h1>
            <div className="container-info-img">
                <div className="container-about-info">    
                    <h2>Who am i?</h2>
                    <p>Hello again! i am happy to see you here,
                        My name is Mouhamad Shaker, 19 years old,
                        I am from 
                        <a target="_blank" href="https://en.wikipedia.org/wiki/Syria">
                            <n /> Syria
                        </a>
                        , a self-learner who learned from a number of platforms,
                        including the
                        <a target="_blank" href="https://www.w3schools.com/">
                            <n /> w3school <n />
                        </a>
                        and
                        <a target="_blank" href="https://scrimba.com/">
                            <n /> scrimba
                        </a>
                        ,
                        <a target="_blank" href="https://www.youtube.com/@OctuCode">
                            <n /> octucode <n />
                        </a>
                        platforms,
                        and a student at the
                        <a target="_blank" href="https://www.svuonline.org/">
                            <n /> Syrian Virtual University <n />
                        </a>
                        in the field of information technology engineering,
                        and I did a number of training in the field of the web using the React library and the React Router library.
                    </p>
                    <div className='container-btn-info'>
                        <Link to="/projects">
                           <button className='btn-about-info'>See my projects</button>
                        </Link>
                        <Link to='/contect'>
                            <button className='btn-about-info'>Hire me</button>
                        </Link>
                    </div>
                </div>
                <img className='about-img-main' src={aboutImg} />
            </div>
        </section>
    )
}