import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs(props) {
  console.log(props);
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(gifs);

  useEffect(() => {
    setLoading(true);
    console.log("efect");
    getGifs({ keyWord: props.params.keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      console.log("fetchgifs");
    });
    console.log(gifs);
  }, [props.params.keyword]); //sin no tiene array como parametro,useeffect se ejecuta cada vez que se renderize el componente
  //con array vacio solo ejecuta useEfect una vez (componentdidmount en clases)
  if (loading) return <h1>Cargando...</h1>;
  return (
    <div className="gifs-container">
      {gifs.length === 0 ? (
        <div>No se encontraron resultados</div>
      ) : (
        gifs.map((el) => (
          <Gif id={el.id} key={el.id} title={el.title} url={el.url} />
        ))
      )}
    </div>
  );
}
