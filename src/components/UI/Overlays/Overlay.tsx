import React from "react";
import { useTransition, animated } from "react-spring";

type OverlayProps = {
  open?: boolean;
};

const Overlay: React.FC<OverlayProps> = ({ open, children }) =>
{
  const transitions = useTransition(!open, null, {
    from: { opacity: 0, animationDuration: "300ms" },
    enter: { opacity: 1 },
    leave: { opacity: 0, transitionDuration: "200ms" },
  });

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      {transitions.map(({ item, props, key }) =>
        // <!--
        //   Background overlay, show/hide based on modal state.

        //   Entering: "ease-out duration-300"
        //     From: "opacity-0"
        //     To: "opacity-100"
        //   Leaving: "ease-in duration-200"
        //     From: "opacity-100"
        //     To: "opacity-0"
        // -->
        item && <animated.div key={key} style={props} className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </animated.div>
      )}

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        {children}
      </div>
    </div>
  );
};

export default Overlay;