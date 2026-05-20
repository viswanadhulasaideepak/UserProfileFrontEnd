import React, { useState, useEffect } from "react";

export default function UserForm({
  onUserAdded,
  editUser,
  setEditUser,
  users,
  setUsers
}) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    company: "",
    bio: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // FILL FORM WHEN EDITING
  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    }
  }, [editUser]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      let response;

      if (editUser) {
        response = await fetch(`http://127.0.0.1:5000/users/${editUser.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          }
        );
      } else {
        response = await fetch("http://127.0.0.1:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
      }

      const data = await response.json();

      if (editUser) {
        const updatedUsers = users.map((u) =>
          u.id === editUser.id ? data.user : u
        );

        setUsers(updatedUsers);
        setEditUser(null);
        setMessage("User updated successfully");
      } else {
        setUsers([...users, data.user]);
        setMessage("User added successfully");
      }

      setFormData({
        name: "",
        role: "",
        email: "",
        company: "",
        bio: ""
      });

    } catch (err) {
      setMessage("Failed to save user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>{editUser ? "Edit User" : "Add New User"}</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Enter Name"
          value={formData.name} onChange={handleChange} required />

        <input name="role" type="text" placeholder="Enter Role"
          value={formData.role} onChange={handleChange} required />

        <input name="email" type="email" placeholder="Enter Email"
          value={formData.email} onChange={handleChange} required />

        <input name="company" type="text" placeholder="Enter Company"
          value={formData.company} onChange={handleChange} required />

        <textarea name="bio" placeholder="Enter Bio"
          value={formData.bio} onChange={handleChange} required />

        <button type="submit">
          {loading ? "Saving..." : editUser ? "Update User" : "Add User"}
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
}