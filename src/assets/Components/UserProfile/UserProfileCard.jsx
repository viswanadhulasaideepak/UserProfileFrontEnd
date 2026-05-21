import React, { useRef, useState, useEffect } from "react";
import BASE_URL from "../../../api";
import "./UserProfileCard.css";

export default function UserProfileCard({
  user,
  onDelete,
  fetchUsers
}) {

  const [following, setFollowing] = useState(false);
  const [editing, setEditing] = useState(false);
  const [profileImg, setProfileImg] = useState("");

  const [editData, setEditData] = useState({
    name: "",
    email: "",
    role: "",
    bio: "",
    website: "",
    company: ""
  });

  const imgRef = useRef();

  // -------------------------
  // LOAD USER DATA
  // -------------------------
  useEffect(() => {

    if (user) {

      setEditData({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "",
        bio: user.bio || "",
        website: user.website || "",
        company: user.company || ""
      });

    }

  }, [user]);

  // -------------------------
  // IMAGE UPLOAD
  // -------------------------
  const uploadImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "image/png") {
      alert("Upload PNG image only");
      return;
    }

    setProfileImg(URL.createObjectURL(file));
  };

  // -------------------------
  // UPDATE USER
  // -------------------------
  const saveEdit = async () => {

    try {

      const response = await fetch(`${BASE_URL}/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editData)
      });

      const data = await response.json();

      console.log("Updated:", data);

      setEditing(false);

      if (fetchUsers) {
        fetchUsers();
      }

    } catch (err) {

      console.log("Update Error:", err);

    }
  };

  // -------------------------
  // SAFETY CHECK
  // -------------------------
  if (!user) {
    return null;
  }

  return (
    <div className="profile">

      {/* IMAGE */}
      <input
        type="file"
        hidden
        accept="image/png"
        ref={imgRef}
        onChange={uploadImage}
      />

      <img
        src={
          profileImg
            ? profileImg
            : `https://i.pravatar.cc/150?img=${user.id}`
        }
        alt="profile"
        className="profile-img"
        onClick={() => imgRef.current.click()}
      />

      {/* USER INFO */}
      <div className="info">

        {editing ? (

          <div className="edit-section">

            <input
              value={editData.name}
              placeholder="Name"
              onChange={(e) =>
                setEditData({
                  ...editData,
                  name: e.target.value
                })
              }
            />

            <input
              value={editData.email}
              placeholder="Email"
              onChange={(e) =>
                setEditData({
                  ...editData,
                  email: e.target.value
                })
              }
            />

            <input
              value={editData.role}
              placeholder="Role"
              onChange={(e) =>
                setEditData({
                  ...editData,
                  role: e.target.value
                })
              }
            />

            <input
              value={editData.company}
              placeholder="Company"
              onChange={(e) =>
                setEditData({
                  ...editData,
                  company: e.target.value
                })
              }
            />

            <input
              value={editData.website}
              placeholder="Website"
              onChange={(e) =>
                setEditData({
                  ...editData,
                  website: e.target.value
                })
              }
            />

            <input
              value={editData.bio}
              placeholder="Bio"
              onChange={(e) =>
                setEditData({
                  ...editData,
                  bio: e.target.value
                })
              }
            />

          </div>

        ) : (

          <>
            <h2>{user.name}</h2>

            <p>{user.email}</p>

            <p>{user.role}</p>

            <p>{user.bio}</p>

            <p>
              <strong>Company:</strong> {user.company}
            </p>

            <p>
              <strong>Website:</strong> {user.website}
            </p>
          </>

        )}

        {/* BUTTONS */}
        <div className="btn-group">

          <button
            className="follow-btn"
            onClick={() => setFollowing(!following)}
          >
            {following ? "Following" : "Follow"}
          </button>

          {editing ? (

            <button
              className="edit-btn"
              onClick={saveEdit}
            >
              Save
            </button>

          ) : (

            <button
              className="edit-btn"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>

          )}

          <button
            className="delete-btn"
            onClick={() => onDelete(user.id)}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}