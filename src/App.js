import './App.css';
import React from 'react-router-dom';
import image from './assets/imagem.jpg'
import CreateMovie from './components/pages/CreateMovie'
import ShowMovies from './components/pages/ShowMovies';
import ShowEachMovie from './components/pages/ShowEachMovie'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { BrowserRouter as Router, Link, Routes, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className='container'>
    
    <Router>
     
      <Routes>
        <Route path='/createMovies' element={<CreateMovie/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/movies' element={<ShowMovies/>}></Route>
        <Route path='/movies/:id' element={<ShowEachMovie/>}></Route>
      </Routes>

    </Router>
     
    </div>
  );
}

export default App;