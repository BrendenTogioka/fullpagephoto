export default function Navbar({
  handleChangeColors,
  handleAddSection,
  handleRemoveSection,
  moveSectionDown,
}) {
  return (
    <div
      className="menu"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    >
      <ul className="actions">
        <li>
          <button onClick={handleAddSection}> Add Section </button>
          <button onClick={handleRemoveSection}> Remove Section </button>
          <button onClick={handleChangeColors}>
            {" "}
            Change background colors{" "}
          </button>
          <button onClick={moveSectionDown}> Move Section Down </button>
        </li>
      </ul>
    </div>
  );
}
