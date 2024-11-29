import axios from 'axios'
import React from 'react'
import { API_URL } from '../api/api'
import { useQuery } from '@tanstack/react-query'

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
}
function useFetchData() {
  return (
    useQuery({
      queryKey: ["data"],
      queryFn: fetchData
    })
  )
}

export default useFetchData