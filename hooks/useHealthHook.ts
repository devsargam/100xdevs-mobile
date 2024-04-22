import axios from "axios";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

import { session } from "@/api/constants";

export const useHealthHook = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<SessionResponse>();
  const [error, setError] = useState<any>();
  const getData = async () => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    axios
      .get(apiUrl + session)
      .then((response) => {
        setData(response.data);
        router.replace("/(drawer)/(tabs)/");
      })
      .catch((error) => {
        setError(error);
        SecureStore.deleteItemAsync("jwt_token");
        SecureStore.deleteItemAsync("name");
        SecureStore.deleteItemAsync("email");
        SecureStore.deleteItemAsync("id");
        SecureStore.deleteItemAsync("role");
        SecureStore.deleteItemAsync("expires");
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
