import axios from "axios";
import { useEffect, useState } from "react";

import { TRAILER } from "@/constants/Apiconstants";

export const useTrailerHook = (courseID: string | string[]) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<TrailerResponse>();
  const [error, setError] = useState<any>();
  const getData = () => {
    axios
      .get(TRAILER + "?" + "courseID=" + courseID)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return [loading, data, error];
};
