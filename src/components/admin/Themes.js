import React from 'react';
import { setCurrentTheme } from '../../api/api';
import { toast } from 'react-toastify';

const Themes = () => {
  const setTheme = async (theme) => {
    let res = await setCurrentTheme(theme);
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 auto-rows-auto m-8 text-white">
        <button
          className="theme-default boxed bg-primary p-8 text-center rounded-lg"
          onClick={() => {
            setTheme('theme-default');
          }}>
          Default
        </button>
        <button
          className="theme-crimson boxed bg-primary p-8 text-center rounded-lg"
          onClick={() => {
            setTheme('theme-crimson');
          }}>
          Crimson
        </button>
        <button
          className="theme-teal boxed bg-primary p-8 text-center rounded-lg"
          onClick={() => {
            setTheme('theme-teal');
          }}>
          Teal
        </button>
      </div>
      <div className="flex w-1/2 mx-auto items-center justify-center space-x-2">
        <div className="w-1/4 h-20 bg-primary-dark"></div>
        <div className="w-1/4 h-20 bg-primary"></div>
        <div className="w-1/4 h-20 bg-primary-light"></div>
        <div className="w-1/4 h-20 bg-primary-lighter"></div>
      </div>
    </>
  );
};

export default Themes;
