export default function TabButton({ children, handleSelect }) {
function handleClick() {
    console.log("Tab clicked:", children);
  }

  return (
    <li>
      <button onClick={handleSelect}>{children}</button>
    </li>
  );
}