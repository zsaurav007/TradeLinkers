import React from "react";
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import link from '../assets/link.png';

const SocialMedia = () => {
  return (
    <div className="flex space-x-3 py-2 text-white">
      <a href="https://facebook.com" className="text-xl hover:text-gray-300">
        <img src={fb} alt="" className="h-[22px] w-[22px]"/>
      </a>
      <a href="https://instagram.com" className="text-xl hover:text-gray-300">
        <img src={insta} alt="" className="h-[22px] w-[22px]" />
      </a>
      <a href="https://linkedin.com" className="text-xl hover:text-gray-300">
        <img src={link} alt="" className="h-[22px] w-[22px]"/>
      </a>
    </div>
  );
};

export default SocialMedia;
