// // app/dark-mode-toggle/DarkModeToggle.tsx
// 'use client';

// import { useState } from 'react';

// export default function DarkModeToggle() {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle('dark-mode');
//   };

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className="bg-accent-color text-white font-semibold py-2 px-6 rounded"
//     >
//       {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//     </button>
//   );
// }
// app/dark-mode-toggle/DarkModeToggle.tsx
'use client';

import { useEffect, useState } from 'react';

// interface DarkModeToggleProps {
//   className?: string;
// }

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.body.classList.toggle('dark-mode', newMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-accent-color text-white font-semibold py-2 px-6 rounded"
    >
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
