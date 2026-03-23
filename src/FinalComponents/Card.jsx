export default function Card({ item, addToCart }) {
  return (
    <div style={styles.card}>
      <img src={item.image} style={styles.img} />
      <h3>{item.name}</h3>
      <p>{item.cuisine}</p>

      <button onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    width: "200px",
    textAlign: "center"
  },
  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover"
  }
};