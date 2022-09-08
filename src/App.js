import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './pages/home/index'
import Login from './pages/login'
import NotFound from './pages/NotFound'


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Link to='/home'>首页</Link>
        <Link to='/login'>登录</Link> */}

        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>

    </Router>

  );
}

export default App;
