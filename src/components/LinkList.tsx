import React from "react";
import { getImageSrc } from "../utils/getImageSrc";
import { Link } from "../@types/types";

interface LinkListProps {
  links: Link[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const LinkList: React.FC<LinkListProps> = ({ links, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      {links && links.length > 0 && (
        <table
          className=" min-w-full bg-white dark:bg-gray-800 border-gray-300
        dark:border-gray-700 border-collapse border"
        >
          <thead>
            <tr
              className="w-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 uppercase 
          text-sm leading-normal"
            >
              <th className="py-3 px-6 text-right">نوع</th>
              <th className="py-3 px-6 text-right">لینک</th>
              <th className="py-3 px-6 text-right">آی دی</th>
              <th className="py-3 px-6 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-200 text-sm max-h-[200px] overflow-y-auto">
            {links.map(({ id, network, link, userId }) => {
              const imageSrc = getImageSrc(network);
              console.log(imageSrc);
              return (
                <tr
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-slate-300
            dark:hover:bg-gray-600"
                >
                  <td className="py-3 px-6 text-right">
                    <div className="flex justify-start items-center gap-1">
                      <img src={imageSrc} alt={network} className="w-[35px]" />
                      {network}
                    </div>
                  </td>
                  <td className="py-3 px-6 text-right">{link}</td>
                  <td className="py-3 px-6 text-right">{userId}</td>
                  <td className="py-3 px-6 text-center ">
                    <div className="flex item-start justify-center gap-3">
                      <img
                        src="/assets/images/edit.png"
                        alt="edit icon"
                        onClick={() => onEdit(id)}
                        className="w-[25px] h-[25px] cursor-pointer hover:scale-125 transition-transform"
                      />
                      <img
                        src="/assets/images/delete.png"
                        alt="edit icon"
                        onClick={() => onDelete(id)}
                        className="w-[25px] h-[30px] cursor-pointer hover:scale-125 transition-transform"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LinkList;
