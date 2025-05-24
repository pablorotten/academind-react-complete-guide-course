export default function TabButton({ children, handleSelect, isSelected }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={() => {
          handleSelect();
        }}
      >
        {children}
      </button>
    </li>
  );
}
