import React, { useState } from 'react'; // Ensure React and hooks are imported
import Card from './Card';
function List({ title }) {
  const [cards, setCards] = useState([]);
  const [newCardText, setNewCardText] = useState('');

  const handleInputChange = (e) => {
    setNewCardText(e.target.value);
  };

  const addCard = () => {
    if (newCardText.trim() !== '') {
      setCards([...cards, newCardText]);
      setNewCardText('');
    }
  };

  const deleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  const editCard = (index, newText) => {
    const updatedCards = [...cards];
    updatedCards[index] = newText; // Update the specific card
    setCards(updatedCards);
  };

  return (
    <div className="list">
      <h3>{title}</h3>
      {cards.map((cardText, index) => (
        <Card
          key={index}
          text={cardText}
          onDelete={() => deleteCard(index)}
          onEdit={(newText) => editCard(index, newText)}
        />
      ))}
      <div>
        <input
          type="text"
          placeholder="Add a new card..."
          value={newCardText}
          onChange={handleInputChange}
        />
        <button onClick={addCard}>Add</button>
      </div>
    </div>
  );
}

export default List;
