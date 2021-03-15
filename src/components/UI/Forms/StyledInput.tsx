import React, { InputHTMLAttributes } from "react";

const StyledInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, children, ...props }, ref) => (
  <input ref={ref} {...props}
    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${className}`} />
));

export default StyledInput;