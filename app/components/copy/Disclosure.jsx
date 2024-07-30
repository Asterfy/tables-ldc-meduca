"use client";
import React, { useState } from "react";

const Disclosure = ({ title = "", children, contentIcon, toggleIcon }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`border border-gray-200 rounded-md ${
        isOpen ? "bg-gray-100 shadow-md" : ""
      }`}
    >
      {title != "" && (
        <button
          className={`px-4 py-2 text-left w-full text-gray-500 font-medium flex items-center justify-between hover:text-gray-700 ${
            isOpen ? "text-blue-500 font-bold" : ""
          }`}
          onClick={handleClick}
        >
          <span>{title}</span>
          <span className="ml-2">
            {contentIcon || (isOpen ? toggleIcon?.open : toggleIcon?.closed)}
          </span>
        </button>
      )}
      {isOpen && (
        <div className="pt-4 pb-2 px-4">
          {children}
          {/* Add interactive elements, styling, and accessibility features here */}
        </div>
      )}
    </div>
  );
};

export default Disclosure;
