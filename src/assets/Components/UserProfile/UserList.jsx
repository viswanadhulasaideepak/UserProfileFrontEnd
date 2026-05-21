import React from "react";
import BASE_URL from "../api";
import UserProfileCard from "./UserProfileCard";

export default function UserList({
  users,
  setUsers,
  setEditUser,
  fetchUsers,
  handleFollow,
  uploadImg
}) {

  // DELETE USER (DB CONNECTED)
  const deleteUser = (id) => {
    fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(() => {
        // safest way → refresh from DB
        if (fetchUsers) {
          fetchUsers();
        }
      })
      .catch((err) => console.log("Delete error:", err));
  };

  return (
    <div className="dashboard">
      {users.map((user) => (
        <UserProfileCard
          key={user.id}
          user={user}
          handleFollow={handleFollow}
          deleteUser={deleteUser}
          setEditUser={setEditUser}
          uploadImg={uploadImg}
        />
      ))}
    </div>
  );
}