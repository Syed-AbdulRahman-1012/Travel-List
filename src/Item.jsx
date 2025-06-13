import "./index.css";
export default function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" onClick={() => onToggleItem(item.id)}></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
