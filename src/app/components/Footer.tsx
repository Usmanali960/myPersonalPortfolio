import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full lg:p-10 p-5 h-[10vh] bg-mainColor px-[10vw] flex items-center justify-between">
      <div className="copyRight">
        <p className="text-white text-sm lg:text-[1.5vw] font-semibold">
          Copyright 2023 by codehall | all rights reserved
        </p>
      </div>
      <div className="topIcon">
        <a
          href="#home"
          className="bg-white flex items-center justify-center p-[0.5vw] rounded-full text-[6vw] lg:text-[2vw]"
        >
          <i className="bx bxs-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
