import React from "react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex flex-col items-start space-y-4">
      <h1 className="text-[32px] font-yekanBold">حساب کاربری</h1>
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1 ml-2">
            <span className=" hover:text-blue-800 cursor-pointer">
              {item.label}
            </span>
            {index < items.length - 1 && (
              <img
                src="/assets/images/chevron.png"
                alt="cehvron"
                className="w-[18px]"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
