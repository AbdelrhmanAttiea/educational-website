import React, { useState } from 'react';

const UserNavbar = () => {
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  const toggleSettingsDropdown = () => {
    setShowSettingsDropdown(!showSettingsDropdown);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo or Profile Image (Replace with your logo or profile image) */}
          <div>
            <img src="https://placekitten.com/40/40" alt="Profile Image" className="w-10 h-10 rounded-full" />
          </div>
          {/* Navigation Links and Icons */}
          <div className="flex items-center space-x-4">
            {/* Home Link (Replace "#" with your home page URL) */}
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            {/* Messages Icon */}
            <a href="/messages">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </a>
            {/* Settings Dropdown */}
            <div className="relative inline-block text-left">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={toggleSettingsDropdown}
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </button>

              <ul className={`absolute right-0 mt-2 ${showSettingsDropdown ? 'block' : 'hidden'} bg-white border border-gray-200 rounded-md shadow-md text-gray-700`}>
                <li>
                  <label className="flex items-center px-4 py-2 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-\[''\] after:absolute after:top-\[2px\] after:start-\[2px\] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium">Toggle me</span>
                  </label>
                </li>
                {/* Add more settings options here */}
              </ul>
            </div>
            {/* Rest of your navigation icons */}
          </div>
        </div>
      </nav>
      {/* Your User Profile Content Goes Here */}
    
    </div>
  );
};

export default UserNavbar;
