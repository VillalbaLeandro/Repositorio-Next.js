import React, { useState, useEffect } from 'react';

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <label className="relative mb-8 cursor-pointer flex">
        <div className='absolute left-4'>
          <input
            type="checkbox"
            value=""
            className="peer sr-only"
            onChange={handleDarkModeToggle}
            checked={darkMode}
          />
          <div className={`peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] ${darkMode ? 'peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white' : ''} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200`}></div>
        </div >
      </label>

    </>
  );
};

export default DarkModeSwitch;
