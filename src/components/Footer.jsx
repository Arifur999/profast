import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 max-w-10/12 mx-auto text-stone-200 px-6 py-10 my-10 rounded-2xl">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        {/* Logo & Company Info */}
        <aside className="space-y-3 flex flex-col items-center md:items-start">
          <Logo />
          <p className="font-bold">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </aside>

        {/* Social Icons */}
        <nav>
          <div className="flex justify-center md:justify-end gap-6">
            {/* Twitter */}
            <a
              href="#"
              className="hover:text-lime-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195A4.918 4.918 0 0 0 16.616 3c-2.737 0-4.952 2.215-4.952 4.952 0 .388.043.765.127 1.127A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0-.67 2.487c0 1.717.874 3.231 2.203 4.121a4.903 4.903 0 0 1-2.241-.619v.06c0 2.398 1.706 4.397 3.973 4.85a4.935 4.935 0 0 1-2.224.084 4.935 4.935 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 19.54a13.941 13.941 0 0 0 7.548 2.212c9.057 0 14.012-7.514 14.012-14.012 0-.213-.004-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="hover:text-lime-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16v-8l8 4-8 4z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="hover:text-lime-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
