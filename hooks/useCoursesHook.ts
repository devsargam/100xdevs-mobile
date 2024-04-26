import { useEffect, useState } from "react";

import { getCourses } from "@/api/actions/courseActions";

export const useCoursesHook = () => {
  const [data, setData] = useState<CoursesResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();
  // const [loading, data, error] = useHealthHook()
  useEffect(() => {
    getCourses()
      .then((courses) => {
        setData(courses);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setData([]);
        setError(error);
      });
  }, []);
  return [loading, data, error];
};
