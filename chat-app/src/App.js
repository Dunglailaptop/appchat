import './App.css';
import Login from './Components/Login';
import { Route,Routes } from 'react-router-dom';
import Menu  from './Components/Menu';


function App() {
  return (
    <>
       <Routes>
      {/* Route for Login */}
      <Route path="/" element={<Login />} />

      {/* Route for Menu */}
      <Route path="/Menu" element={<Menu />} />
    </Routes>
      
    </>
  );
}

export default App;
