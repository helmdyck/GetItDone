import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllLists from "./components/AllLists";
import ListContent from "./components/ListContent";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AllLists />}></Route>
        <Route path="/list/:id" element={<ListContent />}></Route>
      </Routes>
    </>
  );
}

export default App;
