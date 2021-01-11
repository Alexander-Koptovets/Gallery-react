import React from 'react';
import './App.css';
import { Home } from './home/Home'
import { OnePic } from './one_pic/OnePic'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className='container'> 
        <Route path='/home/Home' component={Home}/>
        <Route path='/one_pic' component={OnePic}/>
      </div>
      <Redirect from='/' to='/home/Home' />
    </BrowserRouter>
  );
}

export default App;
