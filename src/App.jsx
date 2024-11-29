import React from 'react'
import Blog from './Blog'
import Home from './Home'
import Posts from './Posts'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Router>
      <div className='me'>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Blog">Blog</Link>
        </nav>
      </div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      </Routes>
  </Router>

  <Posts/>
  </>
  )
}

export default App