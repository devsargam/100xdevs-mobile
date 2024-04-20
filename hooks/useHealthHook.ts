import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";

export const useHealthHook = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<SessionResponse>();
  const [error, setError] = useState<any>();
  const getData = async () => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    axios
      .get(apiUrl + "/api/auth/session")
      .then((response) => {
        setData(response.data);
        router.replace("(drawer)");
      })
      .catch((error) => {
        setError(error);
        router.replace("(drawer)");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return [loading, data, error];
};
