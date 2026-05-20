import React, { useEffect, useState } from "react";
import "./UserProfileAPI.css";
import UserForm from "./UserForm";
import UserProfileCard from "./UserProfileCard";
import SearchBar from "./SearchBar";

export default function UserProfileAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://127.0.0.1:5000/users");

        if (!response.ok) throw new Error("Failed to fetch users");

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  function handleUserAdded(newUser) {
    setUsers((prev) => [...prev, newUser]);
  }

  const handleFollow = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, following: !user.following }
          : user
      )
    );
  };

  const uploadImg = (e, id) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "image/png") {
      alert("Please upload a PNG image");
      return;
    }

    const imgUrl = URL.createObjectURL(file);

    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, profileImg: imgUrl }
          : user
      )
    );
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/users/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Delete failed");

      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <UserForm
        onUserAdded={handleUserAdded}
        editUser={editUser}
        setEditUser={setEditUser}
        users={users}
        setUsers={setUsers} />

      <div className="dashboard">
        {filteredUsers.map((user) => (
          <UserProfileCard
            key={user.id}
            user={user}
            handleFollow={handleFollow}
            deleteUser={deleteUser}
            setEditUser={setEditUser}
            uploadImg={uploadImg} />
        ))}
      </div>

    </div>
  );
}