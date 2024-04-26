import { ALLCOURSES } from "@/constants/Apiconstants";
import axios from "axios";

export const getCourses = async () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const response = await axios.get(ALLCOURSES);
  return response.data;
};
