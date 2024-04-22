import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";


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
