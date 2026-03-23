import React ,{useRef,useState}from 'react'

export default function Task7() {
     const[pic,setPic]=useState(true)
        const[imgURL,setImgURL]=useState("")
        const imgRef=useRef(0)
    
        const handleImage=(e)=>{
            const file =e.target.files[0]
            if(file){
                const preview=URL.createObjectURL(file)
                setImgURL(preview)
                setPic(false)
            }
        }
        const inputname=useRef()
        const inputemail=useRef()
        const inputrole=useRef()
        const focusinputname=()=>{
            inputname.current.focus()
        }
        const focusinputemail=()=>{
            inputemail.current.focus()
        }
        const focusinputrole=()=>{
            inputrole.current.focus()
        }
  return (
    <div className='main'>
        <h1>Profile</h1>
      <div className='image-box'>
        <input type="file" ref={imgRef} hidden onChange={handleImage}/>
        {pic ? (
             <div className='image-box'onClick={()=> imgRef.current.click()}>
                Upload Image </div>
        ) : (
            <img onClick={()=> imgRef.current.click()}  className="org-img" src={imgURL} alt="preview" />
        )}
       
    </div>
    <label htmlFor="name">Name:
    <input type="text" placeholder='Enter the name' ref={inputname}/>
    <button onClick={focusinputname}>FocusName</button>
    </label><br></br>
    <label htmlFor="email">Email:
        <input type="email" placeholder='Enter the email'ref={inputemail}/>
        <button onClick={focusinputemail}>FocusEmail</button>
    </label><br></br>
    <label htmlFor="text">Role:
        <input type="text" placeholder='Enter your role' ref={inputrole}/>
        <button onClick={focusinputrole}>FocusRole</button>
    </label>
    </div>
  )
}
