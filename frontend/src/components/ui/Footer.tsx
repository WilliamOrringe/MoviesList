import React from "react";

export function BottomFooter() {
  return (
    <footer className="flex mt-10 w-full flex-row items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <div className="text-blue-gray-500 font-normal">© 2023 The Boys</div>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <a
            href="#"
            className="text-gray-500 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default BottomFooter;
