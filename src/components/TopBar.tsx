import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShapes,
  faSearch,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const TopBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b text-sm">
      {/* Wokspace */}
      <div className="flex items-center gap-1 text-gray-500">
        <FontAwesomeIcon icon={faShapes} className="text-green-700 mr-1" />
        <span className="text-green-700 font-medium">Workspace</span>
        <span>&gt;</span>
        <span>Folder 2</span>
        <span>&gt;</span>
        <span className="font-semibold text-black">Spreadsheet 3</span>
      </div>

      {/* Search, Notification, Profile */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"
          />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-7 pr-3 py-1 border rounded-md text-sm w-52"
          />
        </div>

        {/* Notification */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faBell}
            className="text-gray-600 text-lg cursor-pointer"
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
            2
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src="Profile.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="leading-tight">
            <div className="text-sm font-medium text-gray-800">John Doe</div>
            <div className="text-xs text-gray-500">john.doe@email.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
