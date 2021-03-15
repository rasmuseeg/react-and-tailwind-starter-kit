import React from 'react';

const GhostButton: React.FunctionComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...props }) => (
  <button className={`border border-solid border-black text-black ${className}`} {...props}>{children}</button>
);

export default GhostButton;