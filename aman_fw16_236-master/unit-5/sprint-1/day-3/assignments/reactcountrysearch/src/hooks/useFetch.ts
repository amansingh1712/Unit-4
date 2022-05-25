import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

import { Item } from "../App";

type ParamsType = {
  q: string;
  _limit: number;
};

export const useFetch = (URL: string, params: ParamsType) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Item[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(URL, {
        params: {
          ...params
        }
      })
      .then((response: AxiosResponse) => {
        const { data } = response;
        setLoading(false);
        setData([...data]);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [params.q]);

  return { loading, data, error };
};