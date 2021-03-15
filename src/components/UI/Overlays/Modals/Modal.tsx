import React from "react";
import Overlay from "../Overlay";

type ModalProps = {

};

const Modal: React.FC<ModalProps> = ({ children }) =>
{
  return (
    <Overlay>
      <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div>
          {children}
        </div>
      </div>
    </Overlay>
  );
};

export default Modal;