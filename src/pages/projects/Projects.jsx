import { Suspense } from "react"
import Project from "../../components/project"
import Loading from "../../components/Loading"
import { getProjects } from "../../api.js"
import { useLoaderData, defer, Await, useSearchParams } from "react-router-dom"
import { faL } from "@fortawesome/free-solid-svg-icons"

export async function loader() {
    const projectsData = getProjects()
    return defer({projectsData: projectsData})
}

export default function Projects() {
    const data = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams.get('type'))
    

    
    function handleAwait(projectsData) {

        const filterType = searchParams.get('type')
        
        // const prjectsDataFilter = projectsData.filter(project => {
        //     console.log(project.languages)
        //     // return true
        //     return project.languages.map(lang => {
        //         console.log(lang)
        //         if (filterType === lang) {
        //             return true
        //         } else {
        //             return false
        //         }
        //     })
        // })

        return projectsData.map(project => {
            return <Project key={project.id} data={project} />
        })
    }

    return (
        <section className="section-projects">
            <div className="contianer-search-types">
                <button onClick={() => setSearchParams({type: 'HTML'})}>HTML</button>
                <button onClick={() => setSearchParams({type: 'CSS'})}>CSS</button>
                <button onClick={() => setSearchParams({type: 'javascript'})}>javascript</button>
                <button onClick={() => setSearchParams({type: 'react'})}>React</button> 
                <button onClick={() => setSearchParams({type: 'react router'})}>React Router</button>
                <button onClick={() => setSearchParams({})}>All</button>
            </div>
            <div className="contianer-projects">
                {/* <Loading /> */}
                <Suspense fallback={<Loading />}>
                    <Await resolve={data.projectsData}>
                        {(projectsData) => handleAwait(projectsData)}
                    </Await>
                </Suspense>
            </div>
        </section>
    )
}