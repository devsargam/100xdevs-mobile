import { Redirect } from "expo-router";
import React from "react";

const Logout = () => {
  return <Redirect href="/(auth)/" />;
};

export default Logout;
