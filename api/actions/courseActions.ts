import axios from "axios";

export const getCourses = async () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const response = await axios.get(apiUrl + "/api/courses");
  return response.data;
};
