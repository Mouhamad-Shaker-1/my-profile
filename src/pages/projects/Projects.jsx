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
    const typeFilter = searchParams.get('type')

    
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    
    function renderProjects(projectsData) {

        let displayedProjects = typeFilter 
            ? projectsData.filter(pro => pro.languages.includes(typeFilter))
            : projectsData
        
        return displayedProjects.map(project => {
            return <Project
                state={{
                    search: `?${searchParams.toString()}`
                }}
                key={project.id}
                data={project}
            />
        })
    }

    return (
        <section className="section-projects">
            <div className="contianer-search-types">

                <button 
                    onClick={
                        () => handleFilterChange('type', 'HTML')
                    }
                    className={typeFilter === 'HTML' ? 'selected' : ''}
                >
                    HTML
                </button>

                <button 
                    onClick={
                        () => handleFilterChange('type', 'CSS')
                    }
                    className={typeFilter === 'CSS' ? 'selected' : ''}
                >
                    CSS
                </button>

                <button 
                    onClick={
                        () => handleFilterChange('type', 'javascript')
                    }
                    className={typeFilter === 'javascript' ? 'selected' : ''}
                >
                    javascript
                </button>

                <button 
                    onClick={
                        () => handleFilterChange('type', 'react')
                    }
                    className={typeFilter === 'react' ? 'selected' : ''}
                >
                    React
                </button>

                <button 
                    onClick={
                        () => handleFilterChange('type', 'react router')
                    }
                    className={typeFilter === 'react router' ? 'selected' : ''}
                >
                    React Router
                </button>

                <button 
                    onClick={
                        () => handleFilterChange('type', null)
                    }
                    className={typeFilter === null ? 'selected' : ''}
                >
                    All
                </button>

            </div>
            <div className="contianer-projects">
                {/* <Loading /> */}
                <Suspense fallback={<Loading />}>
                    <Await resolve={data.projectsData}>
                        {(projectsData) => renderProjects(projectsData)}
                    </Await>
                </Suspense>
            </div>
        </section>
    )
}