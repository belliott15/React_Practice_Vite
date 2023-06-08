import { useState, useEffect } from "react";
import { fetchCardTypes, fetchCards } from "./State/fetch_utils.js";
import Card from "./card";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function getAllCards() {
      const allCards = await fetchCards();
      const types = await fetchCardTypes();
      setTypes(types.types);
      setCards(allCards.cards);
    }
    console.log(types);
    getAllCards();
  }, [types]);

  async function handleChange(e) {
    e.preventDefault();

    const typeCard = await fetchCards();
  }

  return (
    <>
      <select onChange={(e) => handleChange(e.target)}>
        <option>all</option>
        {types.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
      <div>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}

export default App;
