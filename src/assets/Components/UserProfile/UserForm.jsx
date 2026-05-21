import React, { useState, useEffect } from "react";
import BASE_URL from "../api";

export default function UserForm({
  editUser,
  setEditUser,
  users,
  setUsers,
  fetchUsers   // ✅ IMPORTANT: passed from App.jsx
}) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    company: "",
    bio: "",
    website: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fill form when editing
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

      // =====================
      // UPDATE USER
      // =====================
      if (editUser) {
        response = await fetch(
          `${BASE_URL}/users/${editUser.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          }
        );

        const data = await response.json();

        const updatedUsers = users.map((u) =>
          u.id === editUser.id ? data.user : u
        );

        setUsers(updatedUsers);
        setEditUser(null);
        setMessage("User updated successfully");
      }

      // =====================
      // CREATE USER
      // =====================
      else {
        response = await fetch(`${BASE_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        setUsers([...users, data.user]);
        setMessage("User added successfully");
      }

      // RESET FORM
      setFormData({
        name: "",
        role: "",
        email: "",
        company: "",
        bio: "",
        website: ""
      });

      // OPTIONAL: refresh from backend (safe sync)
      if (fetchUsers) {
        fetchUsers();
      }

    } catch (err) {
      console.log(err);
      setMessage("Failed to save user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>{editUser ? "Edit User" : "Add New User"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="role"
          type="text"
          placeholder="Enter Role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="company"
          type="text"
          placeholder="Enter Company"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <textarea
          name="bio"
          placeholder="Enter Bio"
          value={formData.bio}
          onChange={handleChange}
          required
        />

        <input
          name="website"
          type="text"
          placeholder="Enter Website"
          value={formData.website}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : editUser
            ? "Update User"
            : "Add User"}
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
}