import { SESSION } from "@/constants/Apiconstants";
import axios from "axios";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

export const useHealthHook = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const getData = async () => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    axios
      .get(SESSION)
      .then((response) => {
        setData(response.data);
        SecureStore.setItem("jwt_token", response.data.user.jwtToken);
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
