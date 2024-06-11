import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Gamepage from "./Gamepage";
import { useState } from "react";
import Landing from "./Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Gamepagetwo from "./Gamepagetwo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faShuffle } from '@fortawesome/free-solid-svg-icons'; 


function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    console.log("changed theme");
    mode === "light" ? setMode("dark") : setMode("light");
  };
 
  return (
    <div className={`App bg-${mode}`}>
      <Router>
        <header>
          <button
            className={`menu btn btn-outline-${
              mode === "dark" ? "danger" : "primary"
            } px-4 py-0 m-2 text-${mode === "dark" ? "light" : "dark"}`}
            onClick={toggleMode}
          >
            <FontAwesomeIcon icon={faShuffle} /> Theme
          </button>
          <Link to="/">
            <span
              className={`menu btn btn-outline-${
                mode === "dark" ? "danger" : "primary"
              } px-4 py-0 m-2 text-${mode === "dark" ? "light" : "dark"}`}
            ><FontAwesomeIcon icon={faHouse} />   Home
            </span>
          </Link>
        </header>
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Landing
                  toggleMode={toggleMode}
                  mode={mode}
                />
              }
            />
            <Route
              path="/first"
              element={<Gamepage toggleMode={toggleMode} mode={mode} />}
            />
            <Route
              path="/second"
              element={<Gamepagetwo toggleMode={toggleMode} mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
