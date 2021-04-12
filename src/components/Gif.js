import React from 'react';
import "./Gif.css"

export default function Gif({ id, title, url }) {
   return (
      <div className="gif" key={id}>
         <a href={`#${id}`}> 
            Ruta
         </a>
         <img loading="lazy" src={url} alt={title || "sin titulo"} />
         <p>{title || "sin titulo"}</p>
      </div>
   )
}