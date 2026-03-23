import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FoodDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [id]);

  if (!item) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.image} width="300" />
      <p><b>Cuisine:</b> {item.cuisine}</p>

      <h3>Ingredients:</h3>
      <ul>
        {item.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}