import React from 'react';

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Wrapper = ({ children, className = '', ...props }: WrapperProps) => {
  return (
    <div className={`px-8 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
