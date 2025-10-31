import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing/Landing";
import Game from "./Pages/Game/Game";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing></Landing>}></Route>
          <Route path="/game" element={<Game></Game>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
