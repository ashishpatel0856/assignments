import { useEffect, useState } from "react";
import { addNewName, getAllNames } from "../api/axiosConfig";

export const useNames = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNames = async () => {
    try {
      setLoading(true);
      const data = await getAllNames();  
      setNames(data.names || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addName = async (name) => {
    try {
      setLoading(true);
      await addNewName(name);            
      await fetchNames();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNames();
  }, []);

  return { names, addName, loading, error };
};
