import React, { useState } from 'react';
import Input from '../inputs/Input';
import Button from '../buttons/Button';
import useAddData from '../../hooks/useAddData';

function AddEditForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  // Get the mutation object from useAddData hook
  const { mutate, isLoading, isError, error } = useAddData();

  // Handle input change
  const getData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, 'formData');
    
    mutate(formData); // Trigger the mutation with formData
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="bg-danger p-3 rounded mt-3 w-50">
        <form onSubmit={handleSubmit}>
          <Input
            label="Title"
            placeholder="Enter Title"
            name="title" 
            value={formData.title}
            type="text"
            onChange={getData}
          />
          <Input
            label="Description"
            placeholder="Enter Description"
            name="description"
            value={formData.description}
            type="textarea"
            onChange={getData}
          />
          <Button btnClass="btn btn-success py-2 px-2" type="submit" lable="ADD" />
        </form>
        {/* Loading, Error, and Success handling */}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
}

export default AddEditForm;
