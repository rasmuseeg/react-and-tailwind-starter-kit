import React from 'react';

const DefaultButton: React.FunctionComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...props }) => (
  <button className={`${className}`} {...props}>{children}</button>
);

export default DefaultButton;