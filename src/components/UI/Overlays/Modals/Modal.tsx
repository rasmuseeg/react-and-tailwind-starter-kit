import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Overlay from "../Overlay";

type ModalProps = {
  overlayOnClick?: () => void;
};

const Modal: React.FC<ModalProps> = ({ overlayOnClick, children }) =>
{
  const overlayRoot = document.getElementById("overlay-root");

  return ReactDOM.createPortal(
    <Overlay onClick={overlayOnClick}>
      <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div>
          {children}
        </div>
      </div>
    </Overlay>,
    overlayRoot);
};

export default Modal;