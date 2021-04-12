import React, { useState } from "react";
import { Link, Route } from "wouter";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  // const [keyWord, setKeyWord] = useState("fornite");
  const handleSubmit = (e) => {
    e.preventDefault();
    // setKeyWord(e.target.searchGif.value);
    window.location.href = `${e.target.searchGif.value}`; //no se si sea recomendado, porque la pagina actualiza cuando se hace una busqueda
  };
  console.log(window.location);

  return (
    <div className="App">
      <section className="App-content">
        Práctica Yoc
        <form onSubmit={handleSubmit}>
          <input name="searchGif" type="text" placeholder="busca tu sticker" />
        </form>
        {/* envez de usar etiqueta a, lo remplazo por Link */}
        <Link to="/gif/panda">Gif de pandas</Link>
        <Link to="/gif/memes">Gif de memes</Link>
        {/* estoy creando la ruta y :keyword es una propiedad nueva aqui en el codigo */}
        <Route path="/gif/:keyword" component={ListOfGifs} />
        {/* <ListOfGifs keyWord={keyWord} /> */}
      </section>
    </div>
  );
}

export default App;
