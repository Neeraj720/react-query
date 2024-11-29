import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from '../api/api';

// Function that makes the API request
const addDataToAPI = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        console.log("response:", response)
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Something went wrong');
    }
};

// Custom hook that uses `useMutation`
function useAddData() {
    const mutation = useMutation({
        mutationFn: addDataToAPI,
        onSuccess: (data) => {
            console.log('Data added successfully:', data);
        },
        onError: (error) => {
            console.error('Error adding data:', error.message);
        },
    });
    return mutation;
}

export default useAddData;
