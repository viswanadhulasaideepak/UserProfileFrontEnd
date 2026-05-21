import React, { useState } from "react";
import BASE_URL from "../../../api";

export default function AddUser({ fetchUsers }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    company: "",
    website: "",
    bio: ""
  });

  const [loading, setLoading] = useState(false);

  // -------------------------
  // DISABLE BUTTON
  // -------------------------
  const isDisabled =
    !form.name.trim() ||
    !form.email.trim() ||
    !form.role.trim() ||
    !form.company.trim() ||
    !form.website.trim() ||
    !form.bio.trim();

  // -------------------------
  // HANDLE INPUT
  // -------------------------
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  // -------------------------
  // ADD USER
  // -------------------------
  const addUser = async () => {

    console.log("BUTTON CLICKED");

    try {

      setLoading(true);

      console.log("Sending Data:", form);

      const res = await fetch(`${BASE_URL}/users`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(form)

      });

      const data = await res.json();

      console.log("POST RESPONSE:", data);

      // ERROR
      if (!res.ok) {

        alert(data.error || "Failed to add user");

        setLoading(false);

        return;
      }

      // SUCCESS
      alert("User Added Successfully");

      // CLEAR FORM
      setForm({
        name: "",
        email: "",
        role: "",
        company: "",
        website: "",
        bio: ""
      });

      // REFRESH USER LIST
      if (fetchUsers) {

        await fetchUsers();

      }

    } catch (err) {

      console.log("Add User Error:", err);

      alert("Server Error");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div
      className="add-user"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#f9f9f9"
      }}
    >

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
      />

      <input
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
      />

      <input
        name="website"
        placeholder="Website"
        value={form.website}
        onChange={handleChange}
      />

      <input
        name="bio"
        placeholder="Bio"
        value={form.bio}
        onChange={handleChange}
      />

      {/* BUTTON */}
      <button
        onClick={addUser}
        disabled={isDisabled || loading}
        style={{
          padding: "12px",
          backgroundColor:
            isDisabled || loading ? "gray" : "green",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor:
            isDisabled || loading
              ? "not-allowed"
              : "pointer"
        }}
      >
        {loading ? "Adding..." : "Add User"}
      </button>

    </div>
  );
}