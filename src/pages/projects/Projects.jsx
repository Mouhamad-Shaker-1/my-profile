import { Suspense } from "react"
import Project from "../../components/project"
import Loading from "../../components/Loading"
import { getProjects } from "../../api.js"
import { useLoaderData, defer, Await } from "react-router-dom"

export async function loader() {
    const projectsData = getProjects()
    return defer({projectsData: projectsData})
}

export default function Projects() {
    const data = useLoaderData()

    
    function handleAwait(projectsData) {
        return projectsData.map(project => {
            return <Project key={project.id} data={project} />
        })
    }

    return (
        <section className="section-projects">
            <div className="contianer-search-types">
                <button>HTML CSS</button>
                <button>javascript</button>
                <button>React</button> 
                <button>React Router</button>
                <button>All</button>
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