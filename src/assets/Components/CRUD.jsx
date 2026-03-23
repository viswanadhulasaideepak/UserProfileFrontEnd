import React, { useState, useEffect } from "react";
import './CRUD.css'

export default function CRUD() {
  const [user, setUser] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // get 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // update
  const addItem = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) {
      alert("Please fill all fields");
      return;
    }

    if (editId !== null) {
      fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
        method: "PUT",
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
        }),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const updatedList = user.map((u) =>
            u.id === editId ? { ...u, ...data } : u
          );

          setUser(updatedList);
          setEditId(null);
          setName("");
          setEmail("");
        })
        .catch(() => console.log("Error updating user"));
    }

    // create
    else {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
        }),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const newUser = { ...data, id: user.length + 1 };
          setUser([...user, newUser]);
          setName("");
          setEmail("");
        })
        .catch(() => console.log("Error adding user"));
    }
  };

  // delete
  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setUser((prev) => prev.filter((person) => person.id !== id));
      })
      .catch(() => console.log("Error deleting user"));
  };

  // edit
  const handleEdit = (person) => {
    setName(person.name);
    setEmail(person.email);
    setEditId(person.id);
  };

  return (
    <div className="main">
      <h1>CRUD operation</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <td>S.No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Buttons</td>
          </tr>
        </thead>

        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>

                <button onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {/* Input Row */}
          <tr>
            <td></td>

            <td>
              <input
                type="text"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </td>

            <td>
              <input
                type="text"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>

            <td>
              <button onClick={addItem}>
                {editId !== null ? "Update" : "Add"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}