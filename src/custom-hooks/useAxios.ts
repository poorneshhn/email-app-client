import { useState, useEffect, use } from "react";
import axiosInstance from "../axiosInstance/axiosInstance";

interface axiosProps {
  url: string;
  type: "get" | "post" | "put" | "delete" | "patch";
  body?: any;
}
function useAxios({ url, type, body }: axiosProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError("");
        setData(null);
        const { data } = await axiosInstance.get(url);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { loading, error, data };
}

export default useAxios;
