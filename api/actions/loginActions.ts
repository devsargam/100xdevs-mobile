import axios from "axios";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

import {
  CREDENTIALS,
  CSRF,
  PROVIDERS,
  SESSION,
  SIGNIN,
} from "@/constants/Apiconstants";

export const getLogin = async () => { };

export const login = async (email: string, password: string) => {
  let csrf_token = "";
  await fetch(SIGNIN, {
    method: "get",
  })
    .then((_) => {
      axios
        .get(PROVIDERS)
        .then((_) => {
          axios.get(CSRF).then((csrf_response) => {
            csrf_token = csrf_response.data.csrfToken;
            axios
              .post(
                CREDENTIALS,
                {
                  username: email,
                  password,
                  redirect: false,
                  csrfToken: csrf_token,
                  json: true,
                },
                {},
              )
              .then((_) => {
                axios.get(SESSION).then((session_response) => {
                  SecureStore.setItem(
                    "jwt_token",
                    session_response.data.user.jwtToken,
                  );
                });
              })
              .catch((_) => {
                axios.get(SESSION).then((session_response) => {

                  SecureStore.setItem(
                    "jwt_token",
                    session_response.data.user.jwtToken,
                  );
                  SecureStore.setItem("name", session_response.data.user.name);
                  SecureStore.setItem(
                    "email",
                    session_response.data.user.email,
                  );
                  SecureStore.setItem("id", session_response.data.user.id);
                  SecureStore.setItem("role", session_response.data.user.role);
                  SecureStore.setItem("expires", session_response.data.expires);
                  router.replace("/(drawer)/(tabs)/");
                });
              });
          });
        })
        .catch((_) => {

        });
    })
    .catch((err) => {
      console.log(err)
    });
};
