import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Todo from './pages/Todo';
import Edit from './pages/Edit'

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/auth/login" element={<Login/>}/>
          <Route path="/auth/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
