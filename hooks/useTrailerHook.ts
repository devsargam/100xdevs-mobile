import axios from "axios";
import { useEffect, useState } from "react";

import { TRAILER } from "@/constants/Apiconstants";

export const useTrailerHook = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<TrailerResponse>();
  const [error, setError] = useState<any>();
  const getData = () => {
    axios
      .get(TRAILER)
      .then((response) => {
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
