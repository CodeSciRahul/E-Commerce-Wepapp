import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <>
    <Router basename='/'>
      <Routes>
        <Route path='login' element={<Login/>}></Route>
        <Route path='dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
