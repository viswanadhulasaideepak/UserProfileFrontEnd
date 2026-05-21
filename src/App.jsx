import React, { useEffect, useState } from "react";
import BASE_URL from "./api";

import AddUser from "./assets/Components/UserProfile/AddUser";
import UserProfileCard from "./assets/Components/UserProfile/UserProfileCard";

import "./App.css";

export default function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // FETCH USERS
  const fetchUsers = async () => {

    try {

      setLoading(true);

      const response = await fetch(`${BASE_URL}/users`);

      const data = await response.json();

      console.log("Fetched Users:", data);

      if (Array.isArray(data.users)) {
        setUsers(data.users);
      } else {
        setUsers([]);
      }

    } catch (err) {

      console.log("Fetch Error:", err);
      setUsers([]);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // DELETE USER
  const handleDelete = async (id) => {

    try {

      await fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE"
      });

      fetchUsers();

    } catch (err) {

      console.log(err);

    }
  };

  // SEARCH FILTER
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="container">

      {/* TITLE */}
      <h1 className="title">
        User Management Dashboard
      </h1>

      {/* SEARCH */}
      <div className="search-section">

        <input
          type="text"
          placeholder="Search users..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* ADD USER */}
      <div className="form-container">

        <AddUser fetchUsers={fetchUsers} />

      </div>

      {/* USER LIST */}
      <div className="card-container">

        {filteredUsers.length === 0 ? (

          <p>No users found</p>

        ) : (

          filteredUsers.map((user) => (

            <UserProfileCard
              key={user.id}
              user={user}
              onDelete={handleDelete}
              fetchUsers={fetchUsers}
            />

          ))

        )}

      </div>

    </div>
  );
}