import React from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Root } from "./components/Root";
import { About } from "./components/about/About";
import { Topic } from "./components/about/Topic";
import { Collab } from './components/work/Collab';
import { Rundown } from './components/work/Rundown';
import { Book } from "./components/work/Book"
import { Email } from './components/Email';
import { Goodies } from './components/goodies/Goodies';
import { Hire } from './components/work/Hire';
import { Showcase } from './components/showcase/Showcase';
import { Project } from './components/showcase/Project';
import { Store } from './components/store/Store';
import { Item } from './components/store/Item';
import { Vlog } from './components/vlog/Vlog';
import { Entry } from './components/vlog/Entry';

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
