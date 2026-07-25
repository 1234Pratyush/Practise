import React from "react";

interface Card {
  name: string;
  price: number;
  isSpecial?: boolean;
}

const Card = ({ name, price, isSpecial = false }: Card) => {
  return (
    <div>
      <article>
        <h2>
          {name} {isSpecial}
        </h2>
        <p>{price}</p>
      </article>
    </div>
  );
};

export default Card;
