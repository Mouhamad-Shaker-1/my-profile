import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Loading() {
    return (
        <div className="contianer-loading">
            <FontAwesomeIcon className='icon' icon={faSpinner} />
        </div>
    )
}