import { Route, Routes } from 'react-router-dom'
import Signup from './Singup';
import Singin from './Singin';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='Singin' element= {<Singin/>}/>
        <Route path='Singup' element= {<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
