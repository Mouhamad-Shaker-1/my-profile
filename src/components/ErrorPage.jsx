import { useRouteError, Link } from "react-router-dom"


export default function ErrorPage() {

    const error = useRouteError()

    return (    
        <section className="contianer-error">
                <h1>{error.status}</h1>
                <h5>{error.statusText}</h5>
                <Link to='/'>
                    <button>go home</button>
                </Link>
        </section>
    )
}