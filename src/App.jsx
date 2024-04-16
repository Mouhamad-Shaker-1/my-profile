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
import Contect from './pages/Contect'
import Projects, {loader as loaderProjects} from './pages/projects/Projects'
import ProjectsDetail from './pages/projects/ProjectDetail'
import Layout from './components/Layout'

// import { getProjects } from './api';

// console.log(await getProjects())



function App() {
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contect' element={<Contect />} />
      <Route path='projects' loader={loaderProjects} element={<Projects />} />
      <Route path='projects/:id' element={<ProjectsDetail />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
