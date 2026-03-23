import React, { useReducer } from 'react'

export default function Task8() {
    const initialState={
        name:"",
        email:"",
        phoneno:"",
        address:"",
        city:"",
        state:"",
        country:"",
        zipcode:"",
        dob:"",
        gender:""
    }
    function reducerForm(state,action){
        return{
            ...state,
            [action.field]:action.value
        }
    }
    function handleInput(e){
        dispatch({
            field: e.target.name,
            value: e.target.value,
        })
    }
    
    const[state,dispatch]=useReducer(reducerForm,initialState)
  return (
    <div className='head'>
      <h1>Registration Form</h1>
      <label htmlFor="name">Name:<br></br>
        <input type="text" name='name' placeholder='Enter name' value={state.name} onChange={handleInput} />
      </label><br></br>
      <label htmlFor="email">Email:<br></br>
        <input type="email" name='email' placeholder='Enter email' value={state.email} onChange={handleInput} />
      </label><br></br>
      <label htmlFor="phonenumber">PhoneNumber:<br></br>
        <input type="number" name='phoneno' placeholder='Enter number' value={state.phoneno} onChange={handleInput} />
      </label><br></br>
      <label htmlFor="address">Address:<br></br>
        <input type="text" name='address' placeholder='Enter address' value={state.address} onChange={handleInput} />
      </label><br></br>
      <label htmlFor="city">City:<br></br>
        <input type="text" name='city' placeholder='Enter city' value={state.city} onChange={handleInput} />
      </label><br></br>
      <label htmlFor="state">State:<br></br>
        <input type="text" name='state' placeholder='Enter state' value={state.state} onChange={handleInput} />
      </label><br></br>
      <label htmlFor="country">Country:<br></br>
        <input type="text" name='country' placeholder='Enter country' value={state.country} onChange={handleInput} />
      </label><br></br>
      <label htmlFor="zipcode">ZipCode:<br></br>
        <input type="number" name='zipcode' placeholder='Enter zipcode' value={state.zipcode} onChange={handleInput} />
      </label><br></br>
      <label htmlFor="doj">Date of Joining:<br></br>
        <input type="date" name='doj'  value={state.doj } onChange={handleInput} />
      </label><br></br>
      <label htmlFor="gender">Gender:  <br></br>
        <input className="date"type="radio" name='gender'  value={state.gender} onChange={handleInput} />Male<br></br>
        <input className="date"type='radio' name='gender' value={state.gender} onChange={handleInput} />Female
      </label>
    </div>
  )
}
