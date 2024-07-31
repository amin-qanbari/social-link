import React from "react";

interface ThemeSwitcherProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  isDarkMode,
  toggleTheme,
}) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded text-orange-400 font-bold flex items-center gap-2"
    >
      {isDarkMode ? " روشن" : " تاریک"}
      <img
        src={
          isDarkMode
            ? "/assets/images/light-mode.png"
            : "/assets/images/dark-mode.png"
        }
        alt="light/dark mode icon"
        className="w-[40px] h-[40px]"
      />
    </button>
  );
};

export default ThemeSwitcher;
