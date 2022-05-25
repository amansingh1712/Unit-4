import { useState, useEffect } from "react";

export const useTimeout = (delay: number) => {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    let id = setTimeout(() => {
      setReady(true);
    }, delay);

    return () => clearTimeout(id);
  }, []);

  return { ready };
};