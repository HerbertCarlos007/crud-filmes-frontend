import './App.css';
import React from 'react-router-dom';
import image from './assets/imagem.jpg'
import CreateMovie from './components/pages/CreateMovie'
import ShowMovies from './components/pages/ShowMovies';
import ShowEachMovie from './components/pages/ShowEachMovie'
import { BrowserRouter as Router, Link, Routes, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className='container'>
    
    <Router>
      <ul>
        <li>
          <Link className='list' to='/movies'>Movies</Link>
        </li>

        <li>
        <Link   className=' list2' to='/'>Home</Link>
        </li>
      </ul>
      
      <Routes>
        <Route path='/' element={<CreateMovie/>}></Route>
        <Route path='/movies' element={<ShowMovies/>}></Route>
        <Route path='/movies/:id' element={<ShowEachMovie/>}></Route>
      </Routes>

    </Router>
     
    </div>
  );
}

export default App;