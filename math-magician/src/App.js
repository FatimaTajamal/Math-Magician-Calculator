import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Quote from './Components/Quote';
import Home from './Components/Home';
import Calculator from './Components/Calculator';

function App() {
  return (
   <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quotes" element={<Quote/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
      </Routes>
     </Router>
   </>
  );
}

export default App;