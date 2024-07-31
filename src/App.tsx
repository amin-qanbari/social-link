import React, { useState } from "react";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import useLocalStorage from "./utils/useLocalStorage";
import Breadcrumb from "./components/Breadcrumb";
import { breadcrumbItems } from "./constants";
import { Link } from "./@types/types";
import { notify } from "./components/toastify/notify";

const App: React.FC = () => {
  const [links, setLinks] = useLocalStorage<Link[]>("links", []);
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    "darkMode",
    false
  );
  const [openForm, setOpenForm] = useLocalStorage<boolean>("openForm", false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddOrUpdateLink = (link: Omit<Link, "id"> & { id?: string }) => {
    const existingLink = links.find(
      (l) => l.network === link.network && l.userId === link.userId
    );

    if (existingLink && existingLink.id !== link.id) {
      notify("این لینک و آی دی وجود دارد .", "error");
      return;
    }

    if (link.id) {
      setLinks((prevLinks) =>
        prevLinks.map((l) => (l.id === link.id ? { ...l, ...link } : l))
      );
    } else {
      setLinks((prevLinks) => [
        ...prevLinks,
        { ...link, id: new Date().toISOString() },
      ]);
    }
    setEditingId(null);
  };

  const handleEditLink = (id: string) => {
    setEditingId(id);
    setOpenForm(true);
  };

  const handleDeleteLink = (id: string) => {
    setLinks((prevLinks) => prevLinks.filter((l) => l.id !== id));
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenForm = () => {
    setOpenForm(true);
  };
  return (
    <div
      className={`min-h-screen font-yekanMedium space-y-7  ${
        isDarkMode ? "bg-gray-900 text-white-1" : "bg-gray-100 text-black"
      } py-4 px-8`}
    >
      <div className="px-6 flex justify-between items-start">
        <Breadcrumb items={breadcrumbItems} />
        <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
      <div
        className={`${
          isDarkMode ? "bg-slate-700" : "bg-white-1"
        } shadow-xl p-8 rounded-xl space-y-6`}
      >
        <h3 className="text-[24px] ">مسیرهای ارتباطی</h3>
        <button className="flex gap-2 text-orange-1" onClick={handleOpenForm}>
          افزودن مسیر ارتباطی
          <img src="/assets/images/plus.png" alt="plus icon" />
        </button>
        {openForm && (
          <LinkForm
            onSubmit={handleAddOrUpdateLink}
            initialLink={
              editingId
                ? links.find((link) => link.id === editingId)
                : undefined
            }
            setOpenForm={setOpenForm}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
      <LinkList
        links={links}
        onEdit={handleEditLink}
        onDelete={handleDeleteLink}
      />
    </div>
  );
};

export default App;
