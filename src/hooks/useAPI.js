import { useState, useEffect } from 'react';

export const useAPI = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const BASE_URL = 'https://us-central1-skooldio-react-hooks.cloudfunctions.net';

  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL + path)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return { data, loading };
};

export default useAPI;
