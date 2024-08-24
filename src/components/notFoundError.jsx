
import { Link } from "react-router-dom"

export default function NotFoundError() {
    return (
        <section className="contianer-error">
            <h5>Sorry, The page you were looking for was not found</h5>
            <Link to='/'>
                <button>go home</button>
            </Link>
        </section>
    )
}