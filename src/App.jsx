import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Cards/Cards";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem("lists");
    return savedLists ? JSON.parse(savedLists) : [];
  });
  const [newListTitle, setNewListTitle] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const addList = () => {
    setShowInput(true);
  };

  const handleAddList = () => {
    if (!newListTitle.trim()) return;

    const newList = {
      id: uuidv4(),
      title: newListTitle,
      cards: [],
    };
    setLists([...lists, newList]);
    setNewListTitle("");
    setShowInput(false);
  };

  const deleteList = (listId) => {
    setLists(lists.filter((list) => list.id !== listId));
  };

  const addCard = (listId, cardTitle, cardDesc, timestamp) => {
    if (!cardTitle.trim() || !cardDesc.trim()) return;

    const newCard = {
      id: uuidv4(),
      header: cardTitle,
      desc: cardDesc,
      timestamp,
    };
    setLists(
      lists.map((list) =>
        list.id === listId ? { ...list, cards: [newCard, ...list.cards] } : list
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
      <div className="flex gap-[20px] p-[10px] max-w-[85%] mx-auto mt-[12px] overflow-auto">
        {lists.map((list) => (
          <Card
            key={list.id}
            list={list}
            deleteList={deleteList}
            addCard={addCard}
            deleteCard={deleteCard}
          />
        ))}

        {showInput && (
          <div className="border p-4 w-[200px]">
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter list title..."
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddList()}
            />
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
              onClick={handleAddList}
            >
              Add List
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

