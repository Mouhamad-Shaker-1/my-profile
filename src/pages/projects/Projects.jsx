
import Project from "../../components/project"
import { getProjects } from "../../api.js"
import { useLoaderData } from "react-router-dom"

export async function loader() {
    const projectsData = await getProjects()
    return projectsData
}

export default function Projects() {
    const projects = useLoaderData()

    const projectElements = projects.map(project => {
        return <Project key={project.id} data={project} />
    }) 

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
                {projectElements}
            </div>
        </section>
    )
}