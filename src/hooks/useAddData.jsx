import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from '../api/api';
import { useQueryClient } from '@tanstack/react-query';
// Function that makes the API request
const addDataToAPI = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        console.log("response:", response)
        return response.data;
    } catch (error) {
        throw new Error(error || 'Something went wrong');
    }
};

// Custom hook that uses `useMutation`
function useAddData() {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: addDataToAPI,
        onSuccess: (data) => {
            console.log('Data added successfully:', data);
            queryClient.invalidateQueries('data')
        },
        onError: (error) => {
            console.error('Error adding data:', error.message);
        },
    });
    return mutation;
}

export default useAddData;
