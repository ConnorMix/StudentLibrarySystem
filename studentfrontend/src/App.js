import './App.css';
import Appbar from "./components/Appbar"
import Student from "./components/Student"
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<div className="App">
                <Appbar/>
                <Student/>
            </div>} />
            <Route path='login' element={<div> </div>}/>

        </Routes>
      </BrowserRouter>

  );
}

export default App;
