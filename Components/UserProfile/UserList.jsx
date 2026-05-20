import React from "react";
import UserProfileCard from "./UserProfileCard";

export default function UserList({
  users,
  handleFollow,
  deleteUser,
  setEditUser,
  uploadImg
}) {
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