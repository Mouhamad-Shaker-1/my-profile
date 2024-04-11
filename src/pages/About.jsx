
import aboutImg from '../assets/web-development.png'

export default function About() {
    return (
        <section className='section-first-about'>
            <h1 className='about-title'>About</h1>
            <div className="container-info">    
                <h2>Who am i?</h2>
                <p>Hello again! i am happy to see you here,
                    My name is Mouhamad Shaker, 19 years old,
                    I am from <a href="">Syria</a>, a self-learner who learned from a number of platforms,
                    including the <a href="">w3school</a> and <a href="">scrimba</a>, <a href="">octucode</a> platforms,
                    and a student at the <a href="">Syrian Virtual University</a> in the field of information technology engineering,
                    and I did a number of training in the field of the web using the React library and the React Router library.
                </p>
                <div className='container-btn-info'>
                    <button className='btn-about-info'>See my projects</button>
                    <button className='btn-about-info'>Hire me</button>
                </div>
            </div>
            <img className='about-img-main' src={aboutImg} />
        </section>
    )
}