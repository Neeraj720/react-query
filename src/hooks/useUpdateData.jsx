import axios from 'axios';
import { API_URL } from '../api/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
const updateData = async (data) => {
  const { _id, ...formData } = data
  try {
    const response = await axios.put(API_URL + "/" + _id, formData)
    console.log(response, "update response")
    return response.data
  }
  catch (error) {
    throw new Error(error || 'Something went wrong');
  }
}
function useUpdateData() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: updateData,
    onSuccess: (data) => {
      console.log("Data Update Successfully :", data)
      // This one is for reflecting changes immediately
      queryClient.invalidateQueries('data')
    },
    onError: (error) => {
      console.log("Something went wrong:", error)
    }
  })
  return mutation
}

export default useUpdateData