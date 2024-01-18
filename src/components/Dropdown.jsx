import React from "react";
import { ChevronDown } from "lucide-react";

const DropdownContext = React.createContext({
  isOpen: false,
  setIsOpen: () => {}
})

const Dropdown = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative">
        { children }
      </div>
    </DropdownContext.Provider>
  )
}

const DropdownButton = ({ children, ...props }) => {
  const { isOpen, setIsOpen } = React.useContext(DropdownContext);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <button onClick={toggleOpen} className="rounded px-4 py-2 font-bold text-white bg-gray-800 flex items-center">
      { children }
      <ChevronDown className={`ml-2 ${isOpen ? "rotate-180" : "rotate-0"}`} />
    </button>
  )
}

const DropdownContent = ({ children }) => {
  const { isOpen } = React.useContext(DropdownContext); // get the context
  
  return (
    <div className={`absolute z-20 rounded border border-gray-300 bg-white overflow-hidden my-1 overflow-y-auto ${ isOpen ? "shadow-md" : "hidden"}`}>
      { children }
    </div>
  );
};


export { Dropdown, DropdownButton, DropdownContent }
