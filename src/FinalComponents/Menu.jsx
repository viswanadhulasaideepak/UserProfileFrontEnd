import { useEffect, useState } from "react";
import { useContext,useCallback } from "react";
import { ContextCart } from "../assets/Context/ContextCart";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Menu() {
  const{dispatch}=useContext(ContextCart)
  const addToCart = useCallback((item) => {
  dispatch({ type: "ADD", payload: item });
  }, [dispatch]);

  const [food, setFood] = useState([]);
  const [allFood, setAllFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(data => {
        setFood(data.recipes);
        setAllFood(data.recipes);
        setLoading(false);
      });
  }, []);

  const filteredFood = food.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const filterType = (type) => {
    const result = allFood.filter(item => item.cuisine === type);
    setFood(result);
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Our Menu</h1>
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <button onClick={() => setFood(allFood)}>All</button>
        <button onClick={() => filterType("Italian")}>Italian</button>
        <button onClick={() => filterType("Indian")}>Indian</button>
        <button onClick={() => filterType("Mexican")}>Mexican</button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredFood.map((item) => (
          <Card key={item.id} item={item} addToCart={addToCart} />
          ))}
      </div>
      {/*filteredFood.map((item) => (
        <div key={item.id}>
          <Link to={`/Menu/${item.id}`}>
      <div>
        <img src={item.image} width="200" />
        <h3>{item.name}</h3>
        <p>{item.cuisine}</p>
      </div>
      </Link>
          <img src={item.image} width="200" />
          <h3>{item.name}</h3>
          <p>{item.cuisine}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}*/}
      
      <Outlet />
    </div>
  );
}
