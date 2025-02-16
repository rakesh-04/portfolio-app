import React from 'react';

export const Card = ({ children }) => {
    return <div className="p-4 shadow-md rounded-lg">{children}</div>;
  };
  

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);