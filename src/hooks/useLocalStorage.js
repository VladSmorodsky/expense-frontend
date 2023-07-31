import {useState} from "react";

export function useLocalStorage() {
  const [value, setValue] = useState(null);

  const setItem = (key, value) => {
    localStorage.setItem(key, value);
    setValue(value);
  }

  const getItem = (key) => {
    const item = localStorage.getItem(key);
    setValue(item);

    return item;
  }

  const removeItem = (key) => {
    localStorage.removeItem(key);
    setValue(null);
  }

  return { value, setItem, getItem, removeItem };
}