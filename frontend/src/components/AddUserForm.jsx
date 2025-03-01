import React, { useState } from "react";
import { addUser } from "../services/api";

function AddUserForm() {
    const [formData, setFormData] = useState({ name: "", email: "", age: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser(formData);
        setFormData({ name: "", email: "", age: "" });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
            <button type="submit">Add User</button>
        </form>
    );
}

export default AddUserForm;
