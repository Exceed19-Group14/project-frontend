import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom/dist"

function App() {
  return (


  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
  </Routes>
  </BrowserRouter>
 
  );
}

export default App;
