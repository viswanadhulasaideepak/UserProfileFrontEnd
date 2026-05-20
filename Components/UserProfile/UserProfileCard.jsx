import React, { useRef, useState } from "react";
import "./UserProfileCard.css";

export default function UserProfileCard({
  user,
  onDelete,
  onEdit
}) {

  const [following, setFollowing] = useState(false);

  const [editing, setEditing] = useState(false);

  const [profileImg, setProfileImg] = useState("");

  const [editData, setEditData] = useState({

    name: user.name,

    email: user.email,

    role: user.role,

    bio: user.bio,

    website: user.website
  });

  const imgRef = useRef();

  const uploadImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "image/png") {

      alert("Upload PNG image only");

      return;
    }

    const imagePath =
      URL.createObjectURL(file);

    setProfileImg(imagePath);
  };

  // Save Edit

  const saveEdit = () => {

    onEdit(user.id, editData);

    setEditing(false);
  };

  return (

    <div className="profile">

      <input type="file" hidden accept="image/png"
        ref={imgRef} onChange={uploadImage} />

      <img src={ profileImg ? profileImg : `https://i.pravatar.cc/150?img=${user.id}` }

        alt="profile" className="profile-img"

        onClick={() => imgRef.current.click()}/>

      {/* Info */}

      <div className="info">

        {editing ? (

          <div className="edit-section">

            <input type="text" placeholder="Name" value={editData.name}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  name: e.target.value
                })
              } />

            <input type="email" placeholder="Email" value={editData.email}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  email: e.target.value
                })
              }/>

            <input type="text" placeholder="Role" value={editData.role}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  role: e.target.value
                })
              }/>

            <input type="text" placeholder="Bio" value={editData.bio}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  bio: e.target.value
                })
              } />

            <input type="text" placeholder="Website" value={editData.website}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  website: e.target.value
                })
              }/>

          </div>

        ) : (

          <>

            <h2>{user.name}</h2>

            <h4>{user.email}</h4>

            <h3>{user.role}</h3>

            <p>{user.bio}</p>

            <p>
              <strong>Company:</strong>
              {" "}
              {user.company.name}
            </p>

            <p>
              <strong>Website:</strong>
              {" "}
              {user.website}
            </p>

          </>

        )}

        {/* Buttons */}

        <div className="btn-group">

          <button className="follow-btn"
            onClick={() => setFollowing(!following)}>

            {following ? "Following" : "Follow"}

          </button>

          {editing ? (

            <button className="edit-btn" onClick={saveEdit}>

              Save

            </button>

          ) : (

            <button className="edit-btn" 
            onClick={() => setEditing(true)}>

              Edit

            </button>

          )}

          <button className="delete-btn"
           onClick={() => onDelete(user.id)}>

            Delete

          </button>

        </div>

      </div>

    </div>
  );
}