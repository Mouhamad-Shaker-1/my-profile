import { Link, useRouteError } from "react-router-dom"


export default function ErrorPage() {

    const error = useRouteError();

    return (    
        <section className="contianer-error">
            <h1>{error.status}</h1>
            <h5>{error.statusText}</h5>
            <div className="flex">
                <Link to='/'>
                    <button>go home</button>
                </Link>
                <button onClick={() => location.reload()}>Reload</button>
            </div>
        </section>
    )
}