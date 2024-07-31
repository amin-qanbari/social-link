import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: T | ((prevState: T) => T)) => {
    if (value instanceof Function) {
      setStoredValue((prevState) => {
        const newValue = (value as (prevState: T) => T)(prevState);
        window.localStorage.setItem(key, JSON.stringify(newValue));
        return newValue;
      });
    } else {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
