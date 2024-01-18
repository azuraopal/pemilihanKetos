import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const DropdownContext = React.createContext({
  isOpen: false,
  setIsOpen: () => {}
})

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    function close(e) {
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener("click", close);
    }

    return function removeListener() {
      window.removeEventListener("click", close);
    }
  }, [isOpen]);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={dropdownRef} className="relative">
        { children }
      </div>
    </DropdownContext.Provider>
  )
}

const DropdownButton = ({ children }) => {
  const { isOpen, setIsOpen } = React.useContext(DropdownContext);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <button onClick={toggleOpen} className="flex items-center rounded bg-gray-800 px-4 py-2 text-white">
      { children }
      <ChevronDown className={`ml-2 ${isOpen ? "rotate-180" : "rotate-0"}`} />
    </button>
  )
}

const DropdownContent = ({ children, ...props }) => {
  const { isOpen, setIsOpen } = React.useContext(DropdownContext);
  
  return (
    <div className={`absolute z-20 my-2 overflow-hidden rounded-sm border border-gray-300 bg-white px-3 py-2 ${isOpen ? "shadow-md" : "hidden"}`}>
      <ul onClick={() => setIsOpen(false)} className="flex flex-col gap-2 text-gray-900" {...props}>
        { children }
      </ul>
    </div>
  );
};

const DropdownItem = ({ children, icon: Icon, ...props }) => {
  return (
    <li>
      <Link className={`whitespace-nowrap rounded-sm px-2 py-1 hover:bg-gray-400/30 ${Icon ? 'flex items-center gap-2' : ''}`} {...props}>
        {Icon && <Icon size={20} />}
        { children }
      </Link>
    </li>
  )
}

export { Dropdown, DropdownButton, DropdownContent, DropdownItem }
