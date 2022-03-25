import { getAllAlbums } from "Services/Album";
import { getEvents } from "Services/Event"
import { useState, useEffect } from "react";
import { getAllMerchandises } from "Services/Merchandise";
import {IAlbum} from "../../Data/DataTypes/Album";

function CategoryList() {
  const [albums, setAlbums] = useState([]);
  const [events, setEvents] = useState([]);
  const [merchandises, setMerchandises] = useState([]);
  const [all, setAll] = useState([]);
  //push albums, events and merchandises to all so then i can sort through all
  useEffect(() => {
    getAllAlbums()
    .then(response => {
      setAlbums(response)
    })
    .catch( error => {
      console.log("Error occured.")
    })
    getEvents()
    .then(response => {
      setEvents(response)
    })
    .catch( error => {
      console.log("Error occured.")
    })
    getAllMerchandises()
    .then(response => {
      setMerchandises(response)
    })
    .catch( error => {
      console.log("Error occured.")
    })
  }, []) 

  return (
    <div className="CategoryList">
      <div>
        <ul className="CategoryListResults">
        {movies.map (el =>
          <li key={el.id}>
            <span className="Movie-title">{el.title}</span>
            <img src={"https://image.tmdb.org/t/p/w300" + el.poster_path} alt="Not found." />
            <img src={image2} onClick={() => props.editMyList(el.id)} alt="not found"></img>
          </li>
          )}
        </ul>
    </div>
  </div>
  )
}

export default CategoryList;
