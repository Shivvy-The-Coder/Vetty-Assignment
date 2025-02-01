import React from "react";

const Card = ({ list, deleteList, addCard, deleteCard }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "200px",
        margin: "10px",
      }}
    >
      <div>
        <strong>{list.title}</strong>
        <button onClick={() => deleteList(list.id)}>X</button>
      </div>
      <div>
        {list.cards.map((card) => (
          <div
            key={card.id}
            style={{
              border: "1px solid gray",
              padding: "5px",
              margin: "5px 0",
            }}
          >
            <strong>{card.header}</strong>
            <p>{card.desc}</p>
            <button onClick={() => deleteCard(list.id, card.id)}>X</button>
          </div>
        ))}
      </div>
      <button onClick={() => addCard(list.id)}>+ Add Card</button>
    </div>
  );
};

export default Card;
