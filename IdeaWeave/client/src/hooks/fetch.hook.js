import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

// Custom Hook
export default function useFetch(query) {
  const [getData, setData] = useState({ isLoading: false, apiData: undefined, status: null, serverError: null });

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      try {
        setData(prev => ({ ...prev, isLoading: true }));
        const { data, status } = await axios.get(`/api/${query}`);
        if (status === 200) { // Changed from 201 to 200
          setData(prev => ({ ...prev, apiData: data, status: status }));
        }
      } catch (error) {
        setData(prev => ({ ...prev, isLoading: false, serverError: error }));
      } finally {
        setData(prev => ({ ...prev, isLoading: false }));
      }
    };

    fetchData();
  }, [query]);

  return [getData, setData];
}
