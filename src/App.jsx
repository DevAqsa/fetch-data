import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [card, setCards] = useState([]);

  const fectData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fectData();
  }, []);

  return (
    <div className="container">
      {card.map((card) => {
        return (
          <div key={card.id} className='card'>
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By: UserId: {card.userId}</span>
          </div>
        );
      })}
    </div>
  );
}


export default App;
