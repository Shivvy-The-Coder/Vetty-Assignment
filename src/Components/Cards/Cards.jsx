import React, { useState } from "react";

const Card = ({ list, deleteList, addCard, deleteCard }) => {
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDesc, setNewCardDesc] = useState("");
  const [showCardInput, setShowCardInput] = useState(false);

  const handleAddCard = () => {
    if (!newCardTitle.trim() || !newCardDesc.trim()) return;
    addCard(list.id, newCardTitle, newCardDesc);
    setNewCardTitle("");
    setNewCardDesc("");
    setShowCardInput(false);
  };

  return (
    <div>
      <div className="border p-4 w-[300px] m-3 bg-white shadow-md">
        {/* List Header */}
        <div className="flex justify-between items-center bg-blue-500 rounded-sm border">
          <div className="text-center mx-auto text-white">
            <strong>{list.title}</strong>
          </div>
          <button
            className="text-red-500 hover:text-red-700 mr-[3%] font-bold"
            onClick={() => deleteList(list.id)}
          >
            X
          </button>
        </div>

        {/* Cards in the list */}
        <div>
          {list.cards.map((card) => (
            <div key={card.id} className="border p-3 mt-2 bg-gray-100 rounded">
              <div className="flex">
                <div className="text-center mx-auto white bg-gray-300 rounded w-[90%]">
                  <strong>{card.header}</strong>
                </div>
                <button
                  className="text-red-500 hover:text-red-700  w-[5%] font-bold "
                  onClick={() => deleteCard(list.id, card.id)}
                >
                  X
                </button>
              </div>
              <div className="p-2 sm:text-md text-sm">
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show input fields when adding a new card */}
        {showCardInput ? (
          <div className="mt-2">
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter card title..."
              value={newCardTitle}
              onChange={(e) => setNewCardTitle(e.target.value)}
            />
            <textarea
              className="w-full p-2 border rounded mt-2"
              placeholder="Enter description..."
              value={newCardDesc}
              onChange={(e) => setNewCardDesc(e.target.value)}
            />
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
              onClick={handleAddCard}
            >
              Add Card
            </button>
          </div>
        ) : (
          <div className="flex justify-center mt-3">
            <button onClick={() => setShowCardInput(true)}>
              <span className="text-3xl font-black">+ </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;


