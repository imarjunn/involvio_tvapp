import React,{useState,useEffect} from 'react';
import './App.css';
import ShowList from './components/ShowList';
import Favourites from './components/Favourites';
import Home from './components/Home';

import { BrowserRouter as Router, Switch, Route,NavLink } from "react-router-dom";

function App() {

  const [show,setShow] = useState([]);
  const [url,setUrl] = useState([]);
  const [favourite,setFavourite] = useState([]);

  useEffect(() => {
    
    fetch("http://api.tvmaze.com/schedule")
    .then((res) => res.json())
    .then((data) => {
      for(let i=0;i<data.length;i++){
        if(!null){
          show.push(data[i]);
        }
      }

    show.splice(48,1);
    console.log(show); 
    });
  },[]);

  const addFavourites =(index) => {
    fetch("http://api.tvmaze.com/schedule")
    .then((res) => res.json())
    .then((data) => {
      if(!favourite.some(fav => fav.id === data[index].id)){
        favourite.push(data[index]);
      } 
    });
  }

  const removeFavouriteHandler = (index) => {
    let favarr = [...favourite];
    favarr.splice(index,1);
    setFavourite(favarr);
  }

  return (
    <>
      <Router>
        <div className="navbar">
              <NavLink className="nav-link" exact to="/">HOME</NavLink>
              <NavLink className="nav-link" exact to="/tv-show">TV SHOW</NavLink>
              <NavLink className="nav-link" exact to="/favourites">FAVOURITES</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tv-show" render={() => <ShowList data={show} addFavourites = {addFavourites} />} />
          <Route exact path="/favourites" render = {() => <Favourites data = {favourite}  removeHandler = {removeFavouriteHandler} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
