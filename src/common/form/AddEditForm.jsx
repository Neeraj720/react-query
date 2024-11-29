import React, { useState, useEffect } from "react";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import useAddData from "../../hooks/useAddData";
import useFetchData from "../../hooks/useFetchData";
import useDeleteData from "../../hooks/useDeleteData";
import Table from '../table/Table';
import useUpdateData from "../../hooks/useUpdateData";

function AddEditForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });
    const [editingItem, setEditingItem] = useState(null);
    //  Custom Hooks
    const { data } = useFetchData();
    const { mutate: add } = useAddData();
    const { mutate: remove } = useDeleteData();
    const { mutate: update } = useUpdateData();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.title === "" || formData.description === "") {
            alert("Please fill all fields.");
        } else if (editingItem) {
            console.log("Updating item:", formData);
            update(formData)
        } else {
            add(formData);
        }
        setFormData({ title: "", description: "" });
        setEditingItem(null);
    };
    // Handle Delete
    const handleDelete = (item) => {
        remove(item._id);
    };
    // Set Edit Item
    useEffect(() => {
        if (editingItem) {
            setFormData({ _id: editingItem._id, title: editingItem.title, description: editingItem.description });
        }
    }, [editingItem])
    const handleEdit = (item) => {
        setEditingItem(item);
    };
    // table headers
    const tableHeaders = ["#","Title","Description","Action"]
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="shadow-lg  p-3 rounded mt-3 w-50">
                    <form onSubmit={handleSubmit}>
                        <Input
                            label="Title"
                            placeholder="Enter Title"
                            name="title"
                            value={formData.title}
                            type="text"
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Description"
                            placeholder="Enter Description"
                            name="description"
                            value={formData.description}
                            type="textarea"
                            onChange={handleInputChange}
                        />
                        <Button
                            btnClass="btn btn-success py-2 px-2"
                            type="submit"
                            label={editingItem ? "Update" : "Add"}
                        />
                    </form>
                </div>
            </div>
            {/* Table */}
            <Table data={data} onDelete={handleDelete} onEdit={handleEdit} tableHeaders={tableHeaders} />
        </div>
    );
}

export default AddEditForm;
