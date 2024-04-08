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
import Projects from './pages/Projects'
import Layout from './components/Layout'

function App() {
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contect' element={<Contect />} />
      <Route path='projects' element={<Projects />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
