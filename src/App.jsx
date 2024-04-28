import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact, {action as contactAction} from './pages/Contact'
import Projects, {loader as loaderProjects} from './pages/projects/Projects'
import ProjectsDetail, {loader as loaderProjectsDetail} from './pages/projects/ProjectDetail'
import Layout from './components/Layout'
import ErrorPage from './components/ErrorPage';

// import { getProjects } from './api';

// console.log(await getProjects())



function App() {
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route errorElement={<ErrorPage />} path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contect' action={contactAction} element={<Contact />} />
      <Route path='projects' errorElement={<ErrorPage />} loader={loaderProjects} element={<Projects />} />
      <Route path='projects/:id' errorElement={<ErrorPage />} loader={loaderProjectsDetail} element={<ProjectsDetail />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
