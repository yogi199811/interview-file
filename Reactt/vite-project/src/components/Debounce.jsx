import { useEffect } from "react";
import { useState } from "react";

export const useDebounce = (search, delay) => {
  const [debounce, setDebounce] = useState(search);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounce(search);
    }, delay);

    return () => clearTimeout(timer)
;

}, [search, delay]);
return debounce
};
