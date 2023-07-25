import {useEffect, useState} from "react";

export function useLocalStorage(key, initValue = '') {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : initValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]);

  return [value, setValue];
}