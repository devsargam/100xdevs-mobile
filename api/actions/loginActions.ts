import axios, { AxiosError } from "axios";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

export const getLogin = async () => {};

export const login = async (email: string, password: string) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  let credential_urls = "";
  let csrf_token = "";
  fetch(apiUrl + "/api/auth/signin", {
    method: "get",
  })
    .then((signin_response) => {
      axios
        .get(apiUrl + "/api/auth/providers")
        .then((provider_response) => {
          credential_urls = provider_response.data.credentials.signinUrl;
          axios.get(apiUrl + "/api/auth/csrf").then((csrf_response) => {
            csrf_token = csrf_response.data.csrfToken;
            axios
              .post(
                apiUrl + "/api/auth/callback/credentials",
                {
                  username: email,
                  password,
                  redirect: false,
                  csrfToken: csrf_token,
                  json: true,
                },
                {},
              )
              .then((credentials_response) => {
                axios
                  .get(apiUrl + "/api/auth/session")
                  .then((session_response) => {
                    console.log(
                      "Session Details: " + session_response.data.user,
                    );
                    SecureStore.setItem(
                      "jwt_token",
                      session_response.data.user.jwtToken,
                    );
                  });
              })
              .catch((error: AxiosError) => {
                console.log(error.request);
                console.log("Error", error.status);
                axios
                  .get(apiUrl + "/api/auth/session")
                  .then((session_response) => {
                    console.log(
                      "Session Details: " + session_response.data.user,
                    );
                    SecureStore.setItem(
                      "jwt_token",
                      session_response.data.user.jwtToken,
                    );
                    SecureStore.setItem(
                      "name",
                      session_response.data.user.name,
                    );
                    SecureStore.setItem(
                      "email",
                      session_response.data.user.email,
                    );
                    SecureStore.setItem("id", session_response.data.user.id);
                    SecureStore.setItem(
                      "role",
                      session_response.data.user.role,
                    );
                    SecureStore.setItem(
                      "expires",
                      session_response.data.expires,
                    );
                    router.replace("(drawer)");
                  });
              });
          });
        })
        .catch((error) => {});
    })
    .catch((error) => {});
};
