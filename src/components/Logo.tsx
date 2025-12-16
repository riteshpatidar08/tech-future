import React from 'react';

const Logo: React.FC<{ className?: string }> = ({
  className = 'h-10 w-auto',
}) => {
  return (
    <img
      src="/logo-removebg-preview.png"
      alt="Syntaxim Logo"
      className={className}
    />
  );
};

export default Logo;
