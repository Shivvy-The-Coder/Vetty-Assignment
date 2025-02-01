import Buttons from "../Button/Buttons";

const Navbar = ({ addList }) => {
  return (
    <div>
      <div className="max-w-[90%] bg-black/30 border border-white p-4 mx-auto mt-[12px] sm:h-[7vh] h-[8vh] rounded-lg">
        <Buttons text="Add List" onClick={addList} />
      </div>
    </div>
  );
};

export default Navbar;
