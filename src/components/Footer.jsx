import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#B5C0D0] text-white py-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold">
            Created by{' '}
            <a href="https://www.linkedin.com/in/ranjan-kumar-verma/" className="text-blue-400 hover:underline">
              Ranjan
            </a>
          </h4>
          <ul className="mt-2">
            <li className="my-2">
              <a href="https://www.linkedin.com/in/yourprofile" className="text-gray-600 hover:text-white flex items-center">
                <i className="fab fa-linkedin mr-2"></i>LinkedIn
              </a>
            </li>
            <li className="my-2">
              <a href="https://wa.me/yourphonenumber" className="text-gray-600 hover:text-white flex items-center">
                <i className="fab fa-whatsapp mr-2"></i>WhatsApp
              </a>
            </li>
            <li className="my-2">
              <a href="https://www.instagram.com/" className="text-gray-600 hover:text-white flex items-center">
                <i className="fab fa-instagram mr-2"></i>Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-right mt-4 md:mt-0">
          <h5 className="text-lg font-bold">Powered By</h5>
          <ul className="mt-2">
            <li>
              <a href="https://github.com/twbs/bootstrap" className="text-blue-400 hover:underline">
                SPRINGDALE PUBLIC SCHOOL
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
