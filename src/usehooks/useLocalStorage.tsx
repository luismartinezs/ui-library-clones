import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialVal: T
): [T, (newVal: T) => void] {
  const [_val, _setVal] = useState(initialVal);

  function _saveVal(newVal: T) {
    window.localStorage.setItem(key, JSON.stringify(newVal));
    _setVal(newVal);
  }

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      _setVal(JSON.parse(item) as T);
    }
  }, [key]);

  return [_val, _saveVal];
}
