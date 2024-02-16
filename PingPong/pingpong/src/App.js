import { Route, Routes } from 'react-router-dom'
import Signup from './Singup';
import Singin from './Singin';
import Home from './Home';
import Info from './Info';
import Tobbar from './componant/Topbar/Tobbar';
import Sidebar from './componant/sidebar/sidebar';
// import Seting from './Seting';
import './App.css';


function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Tobbar></Tobbar>
      {/* <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='Singin' element= {<Singin/>}/>
        <Route path='Singup' element= {<Signup/>}/>
        <Route path='Info' element= {<Info/>}/>
        
      </Routes> */}
    </div>
  );
}

export default App;
