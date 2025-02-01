import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Cards/Cards.jsx";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [lists, setLists] = useState([]);

  const addList = () => {
    const newList = {
      id: uuidv4(),
      title: `List ${lists.length + 1}`,
      cards: [],
    };
    setLists([...lists, newList]);
  };

  const deleteList = (listId) => {
    setLists(lists.filter((list) => list.id !== listId));
  };

  const addCard = (listId) => {
    const newCard = { id: uuidv4(), header: "New Card", desc: "Description" };
    setLists(
      lists.map((list) =>
        list.id === listId ? { ...list, cards: [...list.cards, newCard] } : list
      )
    );
  };

  const deleteCard = (listId, cardId) => {
    setLists(
      lists.map((list) =>
        list.id === listId
          ? { ...list, cards: list.cards.filter((card) => card.id !== cardId) }
          : list
      )
    );
  };

  return (
    <div>
      <Navbar addList={addList} />
      <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
        {lists.map((list) => (
          <Card
            key={list.id}
            list={list}
            deleteList={deleteList}
            addCard={addCard}
            deleteCard={deleteCard}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
