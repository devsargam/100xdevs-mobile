import { Redirect } from "expo-router";
import React from "react";

//TODO: after auth implemention do the auth logout properly probably clearing session key and revoking from database

const Logout = () => {
  return <Redirect href="/(auth)/" />;
};

export default Logout;
