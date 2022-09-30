import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {
  Create,
  Home,
  Event
} from './Pages/';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element = {<Home />} />
        <Route path = '/create' element  = {<Create />} />
        <Route path = '/event' element = {<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
