import { useEffect, useState } from "react";

type StateType = {
  username: string;
  email: string;
  password: string;
};

export const useMergeState = (initState: StateType) => {
  const [data, setData] = useState(initState);
  const [state, setState] = useState({});

  useEffect(() => {
    setData({ ...data, ...state });
  }, [state]);

  return { data, setState };
};