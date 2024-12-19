import axios from 'axios'
import { API_URL } from '../api/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const DeleteData = async (id) => {
  try {
    const response = await axios.delete(API_URL + id)
    return response.data.msg
  } catch (error) {
    throw new Error(error || 'Something went wrong');
  }
}
function useDeleteData() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: DeleteData,
    onSuccess: (data) => {
      console.log("Data Delete Successfully:", data)
      // This one is for reflecting changes immediately
      queryClient.invalidateQueries('data')
    },
    onError: (error) => {
      console.log("Error", error)
    }
  })
  return mutation

}

export default useDeleteData