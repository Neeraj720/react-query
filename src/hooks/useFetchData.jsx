import axios from "axios";
import { API_URL } from "../api/api";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
function useFetchData() {
  return useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });
}

export default useFetchData;
