import "./index.css";
export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const Percentage = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {Percentage === 100
          ? "You Got EveryThing! Ready To Go 🛫"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${Math.floor(Percentage)}%)`}
      </em>
    </footer>
  );
}
