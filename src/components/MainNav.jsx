import React, { useState } from "react";
import Search from '../components/Search.jsx';

const MainNav = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [expandedSubItem, setExpandedSubItem] = useState(null);

  const handleItemClick = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
    setExpandedSubItem(null); // Close sub-items when a main item is clicked
  };

  const handleSubItemClick = (index) => {
    setExpandedSubItem(expandedSubItem === index ? null : index);
  };

  return (
    <nav className="relative z-20 h-[65px] w-full bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-4">
          <ul className="hidden space-x-14 text-sm font-semibold md:flex ">
            {[
              "HOME",
              "ABOUT US",
              "SOLUTIONS",
              "CLIENTS",
              "PARTNERS",
              "MEDIA",
              "CONTACT",
            ].map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => handleItemClick(index)}
                  className="hover:text-gray-400 focus:outline-none"
                >
                  {item}
                </button>
                {expandedItem === index && (
                  <ul className="absolute left-0 top-full z-30 mt-2 space-y-2 bg-white p-2 text-sm">
                    {["Sub-item 1", "Sub-item 2", "Sub-item 3"].map(
                      (subItem, subIndex) => (
                        <li key={subIndex} className="relative">
                          <button
                            onClick={() => handleSubItemClick(subIndex)}
                            className="block w-[150px] px-4 py-2 hover:text-gray-400 focus:outline-none"
                          >
                            {subItem}
                          </button>
                          {expandedSubItem === subIndex && (
                            <ul className="absolute left-full top-0 z-40 mt-2 space-y-2 bg-white p-2 text-sm">
                              {["Nested 1", "Nested 2"].map(
                                (nestedItem, nestedIndex) => (
                                  <li key={nestedIndex}>
                                    <a
                                      href="#"
                                      className="block w-[150px] px-4 py-2 hover:text-gray-400"
                                    >
                                      {nestedItem}
                                    </a>
                                  </li>
                                ),
                              )}
                            </ul>
                          )}
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Search />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
