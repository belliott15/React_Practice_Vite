import "./Card.css";
export default function card({ card }) {
  return (
    <div className="card">
      <h1>Name: {card.name}</h1>
      <img src={card.imageUrl} />
    </div>
  );
}
