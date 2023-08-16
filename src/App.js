import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router,Routes , Route } from "react-router-dom";
import "./App.css";
import {Loader} from "./components/Loader/Loader";

import {Home} from "./pages/Home/Home"
import  {Navbar} from "./components/navbar/Navbar"
import {Social} from "./components/Social/Social";
import  {Editor}  from "./pages/Editor/Editor"

// const {Home} = lazy(() => import("./pages/Home/Home"));
// const Navbar = lazy(() => import("./components/navbar/Navbar"));
// const Github = lazy(() => import("./components/Social/Social"));
// const Editor = lazy(() => import("./pages/Editor/Editor"));



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className='App' id={`${darkMode ? `dark` : `light`}-mode`}>
      <Suspense
        fallback={
          // <div>Loading ... </div>
          <Loader />
        }
      >
      
        <Router>
        <Routes>
       
          <Route path='/' element={<Home/>} />
          <Route exact path='/editor'  element={<Editor/>} />
          <Route exact path='/github'  element={<Social/>} />
          </Routes>
        </Router>
      
      </Suspense>
    </div>
  );
}

export default App;