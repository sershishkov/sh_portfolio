import React from 'react';

const Footer = () => {
  return (
    <div>
    <footer className="bg-dark text-white mt-5 p-4 text-center">
    Copyright &copy; {new Date().getFullYear()} SH-Porfolio
  </footer>
    </div>
  );
};

export default Footer;