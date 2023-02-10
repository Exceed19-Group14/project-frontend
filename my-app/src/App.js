import './App.css';
import Detail from './Detail';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <>    
    <NavBar/>
    <main>
      <BrowserRouter>
        <Routes>
        <Route path="/detail" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </main>
</>


  );
}

export default App;

