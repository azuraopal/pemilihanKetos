const Modal = ({ children, isOpen }) => {
  if (!isOpen) return;
  
  return (
    <div className="fixed left-0 top-0 flex size-full items-center justify-center bg-black/80">
      <div className="flex-0 max-w-md grow rounded-md bg-white">
        { children }
      </div>
    </div>
  )
}

const ModalHeading = ({ children, className }) => {
  return (
    <div className={`border-b border-gray-800/50 px-4 py-2 ${className}`}>
      { children }
    </div>
  )
}

const ModalContent = ({ children }) => {
  return (
    <div className="p-4">
      { children }
    </div>
  )
}

const ModalFooter = ({ children, className }) => {
  return (
    <div className={`px-4 pb-2 ${className}`}>
      { children }
    </div>
  )
}

export { Modal, ModalHeading, ModalContent, ModalFooter }
