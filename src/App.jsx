import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [articoli, setArticoli] = useState([
    "Harry Potter e il Calice di Fuoco",
    "Il Signore Degli Anelli",
    "The Conjuring",
  ]);

  const [nuovoTitolo, setNuovoTitolo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setArticoli([...articoli, nuovoTitolo]);

    setNuovoTitolo("");
  };

  return (
    <div>
      <h1>Articoli del Blog</h1>

      <ul>
        {articoli.map((titolo, index) => (
          <li key={index}>{titolo}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Inserisci un nuovo titolo"
          value={nuovoTitolo}
          onChange={(e) => setNuovoTitolo(e.target.value)}
        />
        <button type="submit">Aggiungi Articolo</button>
      </form>
    </div>
  );
}
