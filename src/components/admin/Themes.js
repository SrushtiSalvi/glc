import React, { useEffect, useState } from 'react';

const Themes = () => {
  const [theme, setTheme] = useState(localStorage.getItem('current_theme'));

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 auto-rows-auto m-8 text-white">
      <button
        className="boxed bg-[#022a4d] p-8 text-center rounded-lg"
        onClick={() =>
          setTheme(localStorage.setItem('current_theme', 'theme-default'))
        }>
        Default
      </button>
      <button
        className="boxed bg-[#7a1426] p-8 text-center rounded-lg"
        // onClick={() => localStorage.setItem('current_theme', 'theme-crimson')}
        onClick={() => {
          setTheme(localStorage.setItem('current_theme', 'theme-crimson'));
        }}>
        Crimson
      </button>
      <button
        className="boxed bg-[#35858B] p-8 text-center rounded-lg"
        onClick={() =>
          setTheme(localStorage.setItem('current_theme', 'theme-teal'))
        }>
        Teal
      </button>
    </div>
  );
};

export default Themes;
