import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Product } from "../App";

export const useFetch = (URL: string) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(URL)
      .then((response: AxiosResponse) => {
        const { data } = response;
        setLoading(false);
        setData([...data]);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return { loading, data, error };
};