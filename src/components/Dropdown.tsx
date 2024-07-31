interface DropdownProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
  isDarkMode: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelect,
  isDarkMode,
}) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => onSelect(e.target.value)}
      autoFocus
      className={`${
        isDarkMode ? "bg-slate-100  border-none" : ""
      } p-2  rounded w-full h-[45px] font-yekanLight focus:outline-orange-1 text-black-1 cursor-pointer border`}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
