import React from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Root } from "./components/Root";
import { About } from "./components/About";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route path="about" element={<About/>}/>
  </Route>

))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
