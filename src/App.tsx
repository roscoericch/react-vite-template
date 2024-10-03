import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path="/team" />
          <Route path="/calls" />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
