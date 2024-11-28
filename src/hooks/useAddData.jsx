import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from '../api/api';

// Function that makes the API request
export const addDataToAPI = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

// Custom hook that uses `useMutation`
function useAddData() {
  // `useMutation` hook to trigger the API request
  const mutation = useMutation(addDataToAPI, {
    onSuccess: (data) => {
      console.log('Data added successfully:', data);
      // You can do additional actions here, such as showing a success message
    },
    onError: (error) => {
      console.error('Error adding data:', error.message);
      // Handle error (show a message, etc.)
    },
  });

  return mutation; // Return the mutation object, which contains `mutate`, `isLoading`, `isError`, etc.
}

export default useAddData;
