import { useState } from "react";

export const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build an app" }
  ]);
  const addItem = () =>{
    const newItem = {id: Date.now(), text: "Deploy to production"}
    setItems([...items, newItem])
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !==id))
  }

  return (
    <>
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}
        <button onClick = {() => removeItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
    <button onClick = {addItem}>AddItem</button>
    </>
  );
};
