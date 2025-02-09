import React from "react";
import { navigation } from "../assets/navigationData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='w-full'>
      <div className="flex-row">
        {navigation.map((item) => (
          <div className="block text-left font-bold border sm:text-base text-sm sm:px-3 sm:py-2">
            <Link
              key={item.name}
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className={
                (item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md font-medium")
              }
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
