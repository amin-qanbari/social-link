import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Dropdown from "./Dropdown";
import { Link } from "../@types/types";
import { NETWORK_OPTIONS } from "../constants";

interface LinkFormProps {
  onSubmit: (link:  Omit<Link, "id"> & {id?: string}) => void;
  initialLink?: Link;
  setOpenForm: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
}

const LinkForm: React.FC<LinkFormProps> = ({
  onSubmit,
  initialLink,
  setOpenForm,
  isDarkMode,
}) => {
  const [network, setNetwork] = useState(
    initialLink?.network || NETWORK_OPTIONS[0]
  );
  const [link, setLink] = useState(initialLink?.link || "");
  const [userId, setUserId] = useState(initialLink?.userId || "");

  useEffect(() => {
    if (initialLink) {
      setNetwork(initialLink.network);
      setLink(initialLink.link);
      setUserId(initialLink.userId);
    } else {
      setNetwork(NETWORK_OPTIONS[0]);
      setLink("");
      setUserId("");
    }
  }, [initialLink]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ network, link, userId, id: initialLink?.id });

    // Clear the form fields after submission
    setNetwork(NETWORK_OPTIONS[0]);
    setLink("");
    setUserId("");
    setOpenForm(false);
  };

  const handleCancel = () => {
    setNetwork(NETWORK_OPTIONS[0]);
    setLink("");
    setUserId("");
    setOpenForm(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isDarkMode ? "bg-slate-400" : "bg-gray-2"
      } space-y-8 p-8 rounded-xl shadow-md`}
    >
      <h4 className="text-black-1">افزودن مسیر ارتباطی</h4>
      <div className="grid grid-cols-3 items-center gap-2">
        <Dropdown
          options={NETWORK_OPTIONS}
          selectedOption={network}
          onSelect={setNetwork}
          isDarkMode={isDarkMode}
        />
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="لینک"
          className={`${
            isDarkMode ? "bg-slate-100" : ""
          } p-2  rounded w-full h-[45px] text-black-1 font-yekanLight focus:outline-orange-1 border`}
          required
        />
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="آی دی (ID)"
          className={`${
            isDarkMode ? "bg-slate-100" : ""
          } p-2  rounded w-full h-[45px] text-black-1 font-yekanLight focus:outline-orange-1 border`}
          required
        />
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          className={`${
            isDarkMode ? "bg-slate-200" : ""
          } px-6 py-2 rounded-md text-orange-1 outline outline-[1px]`}
          onClick={() => handleCancel()}
        >
          انصراف
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-orange-1 font-bold font-yekanLight rounded-md text-black-1"
        >
          افزودن مسیر ارتباطی
        </button>
      </div>
    </form>
  );
};

export default LinkForm;
