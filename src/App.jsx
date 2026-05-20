import React, { useEffect, useState } from "react";
import UserProfileAPI from "../Components/UserProfile/UserProfileAPI";
import UserProfileCard from "../Components/UserProfile/UserProfileCard";
import UserForm from "../Components/UserProfile/UserForm";
import UserList from "../Components/UserProfile/UserList";
import SearchBar from "../Components/UserProfile/SearchBar";

export default function App() {

  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const [newUser, setNewUser] = useState({
     name: "",

     email: "",

     role: "",

     bio: "",

     company: "",

     website: ""
    });

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => response.json())

      .then((data) => {

        const roles = [
          "Frontend Developer",
          "Backend Developer",
          "UI Designer",
          "Full Stack Developer",
          "Mobile App Developer",
          "DevOps Engineer",
          "Cyber Security Analyst",
          "Data Scientist",
          "Product Manager",
          "QA Engineer"
        ];

        const bios = [
          "Passionate React developer",
          "Python and Flask expert",
          "Loves creating beautiful interfaces",
          "Enjoys building scalable web apps",
          "Flutter enthusiast",
          "Cloud specialist",
          "Security focused engineer",
          "AI and ML enthusiast",
          "Product strategy expert",
          "Testing specialist"
        ];

        const updatedUsers = data.map(
          (user, index) => ({

            ...user,

            role: roles[index],

            bio: bios[index]
          })
        );

        setUsers(updatedUsers);
      });

  }, []);

  // Delete User

  const handleDelete = (id) => {

    const updatedUsers =
      users.filter((user) => user.id !== id);

    setUsers(updatedUsers);
  };

  // Edit User

  const handleEdit = (id, updatedUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          name: updatedUser.name,

          email: updatedUser.email,

          role: updatedUser.role,

          bio: updatedUser.bio,

          website: updatedUser.website
        };
      }
      return user;
    });
    setUsers(updatedUsers);
  };


// Add User

const addUser = () => {

  if (!newUser.name) return;

  const user = {

    id: users.length + 1,

    name: newUser.name,

    email: newUser.email,

    role: newUser.role,

    bio: newUser.bio,

    company: {
      name: newUser.company
    },

    website: newUser.website
  };

  setUsers([...users, user]);

  setNewUser({

    name: "",

    email: "",

    role: "",

    bio: "",

    company: "",

    website: ""
  });
};


// Search Filter

const filteredUsers = users.filter((user) =>

  user.name
    .toLowerCase()
    .includes(search.toLowerCase())
);

  return (

    <div className="container">

      <h1>User Profile Dashboard</h1>

      {/* Search + Add */}

      <div className="top-section">

  <input type="text" placeholder="Name" value={newUser.name}
    onChange={(e) =>
      setNewUser({
        ...newUser,
        name: e.target.value
      })
    }/>  

  <input type="email" placeholder="Email" value={newUser.email}
    onChange={(e) =>
      setNewUser({
        ...newUser,
        email: e.target.value
      })
    }/>

  <input type="text" placeholder="Role" value={newUser.role}
    onChange={(e) =>
      setNewUser({
        ...newUser,
        role: e.target.value
      })
    }/>

  <input type="text" placeholder="Bio" value={newUser.bio}
    onChange={(e) =>
      setNewUser({
        ...newUser,
        bio: e.target.value
      })
    }/>

  <input type="text" placeholder="Company" value={newUser.company}
    onChange={(e) =>
      setNewUser({
        ...newUser,
        company: e.target.value
      })
    }/>

  <input type="text" placeholder="Website" value={newUser.website}
    onChange={(e) =>
      setNewUser({
        ...newUser,
        website: e.target.value
      })
    }/>

  <button onClick={addUser}

  disabled={
    !newUser.name ||
    !newUser.email ||
    !newUser.role ||
    !newUser.bio ||
    !newUser.company ||
    !newUser.website
  }>
  Add User
</button>

</div>

      {/* CARDS */}

      <div className="card-container">

        {filteredUsers.map((user) => (

          <UserProfileCard
            key={user.id}
            user={user}
            onDelete={handleDelete}
            onEdit={handleEdit}/>

        ))}

      </div>

    </div>
  );
}