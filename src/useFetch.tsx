import React,{ useCallback, useEffect, useState } from "react";

import axios from "axios";

function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback((url:string)=>{
    setLoading(true)
    axios
    .get(url)
    .then((response) => {
      setData(response.data);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });

  },[])

  useEffect(()=>{
    fetchData
  },[url])

  

  return { data, loading, error, fetchData };
}

export default useFetch;
