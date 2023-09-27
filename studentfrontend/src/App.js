import './App.css';
import Appbar from "./components/Appbar"
import Login from "./components/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Student from "./components/Student";
function App() {
  return (
      <BrowserRouter>
          <div className="App">
          <Appbar/>
        <Routes>
            <Route path='/' element={<div></div>
            } />
            <Route path='add' element={<div>
            <Student/>
            </div>}/>
            {/*Add a login screen for Faculty to add a student and for Students to Login*/}
            <Route path='login' element={<div>
                <Login/>
            </div>}/>

        </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
