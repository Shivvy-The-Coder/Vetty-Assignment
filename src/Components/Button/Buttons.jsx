const Buttons = ({ text, onClick }) => {
  return (
    <div className="relative w-full">
      <button
        className="text-white bg-blue-500 hover:bg-blue-700 text-sm py-2 px-4 rounded absolute right-0 top-0"
        onClick={onClick}
      >
        <div className="text-center">{text}</div>
      </button>
    </div>
  );
};

export default Buttons;
