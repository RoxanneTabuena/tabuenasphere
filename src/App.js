import React from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Root } from "./components/Root";
import { About } from "./components/About/About";
import { Topic } from "./components/About/Topic";
import { Collab } from './components/Collab';
import { Rundown } from './components/Rundown';
import { Book } from "./components/Book"
import { Email } from './components/Email';
import { Goodies } from './components/Goodies';
import { Hire } from './components/Hire';
import { Showcase } from './components/Showcase';
import { Project } from './components/Project';
import { Store } from './components/Store';
import { Item } from './components/Item';
import { Vlog } from './components/Vlog';
import { Entry } from './components/Entry';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route path="about" element={<About/>}/>
    <Route path="about/:topic" element={<Topic/>}/>
    <Route path="collab" element={<Collab/>}/>
    <Route path="collab/:rundown" element={<Rundown/>}/>
    <Route path="book/:type" element={<Book/>}/>
    <Route path="email" element={<Email/>}/>
    <Route path="goodies" element={<Goodies/>}/>
    <Route path="hire" element={<Hire/>}/>
    <Route path="hire/:rundown" element={<Rundown/>}/>
    <Route path="showcase" element={<Showcase/>}/>
    <Route path="showcase/:project" element={<Project/>}/>
    <Route path="store" element={<Store/>}/>
    <Route path="store/:item" element={<Item/>}/>
    <Route path="vlog" element={<Vlog/>}/>
    <Route path="vlog/:entry" element={<Entry/>}/>
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
