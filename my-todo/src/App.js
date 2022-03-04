import React from 'react';
import './App.css';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import bgImage from './videos/background-img.mp4';
import Todos from './pages/Todos';
import Mytodos from './pages/Mytodos';


function App() {
  return (
    < >
    <div className='body '>
      <video autoPlay loop muted className='bg'>
        <source src={bgImage} type="video/mp4"/>
      </video>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Welcome/>}/>
          <Route path= "/log" element = {<Login/>}/>
          <Route path='/reg' element = {<Register/>}/>
          <Route path='/todo/:id' element = {<Todos/>}/>
          <Route path='/todos/:id' element = {<Mytodos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App