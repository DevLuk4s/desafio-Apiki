import React, { useState,useEffect } from 'react';
import './Card.css';

function Card() {

  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('https://exemplo.com/api/dados')
      .then((response) => response.json())
      .then((data) => {
        setCard(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  return (
    <div>
      {card.map(
        
      )}
    </div>
  );
}

export default Card;
