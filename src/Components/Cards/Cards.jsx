import { useState } from "react";


const Card = ({ list, deleteList, addCard, deleteCard }) => {
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDesc, setNewCardDesc] = useState("");
  const [showCardInput, setShowCardInput] = useState(false);

  const handleAddCard = () => {
    if (!newCardTitle.trim() || !newCardDesc.trim()) return;

    const now = new Date();
    const formattedDate = now.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    addCard(list.id, newCardTitle, newCardDesc, formattedDate);
    setNewCardTitle("");
    setNewCardDesc("");
    setShowCardInput(false);
  };

  return (
    <div className="border p-4 w-[300px] m-3 bg-white/10 backdrop-blur-lg rounded-lg shadow-md  border border-white/20">
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

      <div>
        {list.cards.map((card) => (
          <div key={card.id} className="border p-3 mt-2 bg-gray-100 rounded">
            <div className="flex justify-between items-center">
              <div className="text-center bg-gray-300 rounded p-2 flex-grow">
                <strong>{card.header}</strong>
              </div>
              <button
                className="text-red-500 hover:text-red-700 font-bold ml-2"
                onClick={() => deleteCard(list.id, card.id)}
              >
                X
              </button>
            </div>
            <p className="p-2 sm:text-md text-sm">{card.desc}</p>
            <p className="text-xs text-gray-500 text-right mt-1">
              {card.timestamp}
            </p>
          </div>
        ))}
      </div>

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
  );
};

export default Card;
