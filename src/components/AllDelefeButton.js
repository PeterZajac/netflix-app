import "./AllDeleteButton.css";

const AllDeleteButton = ({ deleteAll }) => {
  return (
    <button className="main-delete-button" onClick={deleteAll}>
      Vymazať všicko
    </button>
  );
};

export default AllDeleteButton;
