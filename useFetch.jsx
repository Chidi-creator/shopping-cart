import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error Occured !");
      }
      const data = await res.json();

      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, error, loading, getData };
};

export default useFetch;
