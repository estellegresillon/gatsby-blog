import { useEffect, useState } from 'react';
export const useDarkMode = () => {
  const [theme, setTheme] = useState("");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const toggleTheme = () => {
    const body = document.querySelector("body");
    console.log(theme)
    if (theme === 'light') {
      setMode('dark');
      body.classList.add("dark");
    } else {
      setMode('light');
      body.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const body = document.querySelector("body");

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'light') {
        setMode('light');
        body.classList.remove("dark");
      } else {
        setMode('dark');
        body.classList.add("dark");
      }
    } else {
      setMode('light');
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted]
};