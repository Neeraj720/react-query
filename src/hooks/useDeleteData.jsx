import axios from 'axios'
import { API_URL } from '../api/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const DeleteData = async (id) => {
  try {
    const response = await axios.delete(API_URL + id)
    return response.data.msg
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}
function useDeleteData() {
  const mutation = useMutation({
    mutationFn: DeleteData,
    onSuccess: (data) => {
      console.log("Data Delete Successfully:", data)
    },
    onError: (error) => {
      console.log("Error", error)
    }
  })
  return mutation

}

export default useDeleteData