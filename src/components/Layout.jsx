
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
    return (
        <div>
            <Navbar />
            <main className='bg-light'>
                <Outlet />
            </main>
        </div>
    )
}