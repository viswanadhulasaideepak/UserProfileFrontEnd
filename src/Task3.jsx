import React, { useState } from 'react'
export default function Task3() {
    const [data,setData]=useState({
        Name:"",
        Email:"",
        Password:"",
        PhoneNumber:"",
        Address:"",
        City: "",
        DateOfBirth:"",
        DateofJoining:"",
        Percentage:""
    })
    const handleInput=(e)=>{
      setData({
        ...data,
        [e.target.name] : e.target.value
      });
        const handleSubmit=(e)=>{
            e.preventDefault()
            console.log(data);
        }
    }
  return (
    <div className="task3">
        
      <form onSubmit="handleSubmit">
        <h1>Registration Form</h1>
        <label htmlFor="name">Name:</label><br></br>
        <input type="text" name="Name" value={data.Name} onChange={handleInput} 
        placeholder="Enter your Name:" /><br></br>
        <label htmlFor="email">Email:</label><br></br>
        <input type="email" name="Email" value={data.Email} onChange={handleInput} 
        placeholder="Enter your Email:" /><br></br>
        <label htmlFor="password">Password:</label><br></br>
        <input type="password" name="Password" value={data.Password} onChange={handleInput} 
        placeholder="Enter your Password:" /><br></br>
        <label htmlFor="number">Phone Number:</label><br></br>
        <input type="number" name="PhoneNumber" value={data.PhoneNumber} onChange={handleInput} 
        placeholder="Enter your Phone Number:" /><br></br>
        <label htmlFor="address">Address:</label><br></br>
        <input type="text" name="Address" value={data.Address} onChange={handleInput} 
        placeholder="Enter your Address:" /><br></br>
        <label htmlFor="text">City:</label><br></br>
        <input type="text" name="City" value={data.City} onChange={handleInput} placeholder="Enter your city:"/><br></br>
        <label htmlFor="date">DOB:</label><br></br>
        <input type="date" name="DateOfBirth" value={data.DateOfBirth} onChange={handleInput} /><br></br>
        <label htmlFor="gender">Gender:</label><br></br>
        <input class="radio" type="radio" name="Gender" value="male" checked={data.Gender=== "male"} onChange={handleInput}/>Male<br></br>
         <input className="radio" type="radio" name="Gender" value="Female" checked={data.Gender==="Female"} onChange={handleInput}/>Female<br></br>
         <label htmlFor="date">DOJ:</label><br></br>
        <input type="date" name="DateofJoining" value={data.DateofJoining} onChange={handleInput} /><br></br>
        <label htmlFor="number">Percentage:</label><br></br>
        <input type="number" name="Percentage" value={data.Percentage} onChange={handleInput} 
        placeholder="Enter your Percentage:" /><br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
