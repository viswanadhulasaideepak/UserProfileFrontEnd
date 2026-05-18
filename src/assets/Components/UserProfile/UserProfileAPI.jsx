import React, {useEffect, useState ,useRef } from 'react'
import "./UserProfileAPI.css"

export default function UserProfileAPI({userId}) {
    const [profileImg,setProfileImg]=useState("")
    const [following,setFollowing]=useState(false)
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")
    const imgRef=useRef(null)
    useEffect(()=>{
        setFollowing(false)
        setProfileImg("")
        const fetchUser=async()=>{
            try{
                setLoading(true)
                setError("")
                const response=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                if(!response.ok){
                    throw new Error("failed to fetch user data")
                }
                const data= await response.json()
                setUser(data)
        }
        catch(err){
            setError(err.message)
        }
        finally{
            setLoading(false)
        }
    
    }
    fetchUser()
    }, [userId])
    const uploadimg=e=>{
        const file=e.target.files[0]
        if(!file) return
        if(file.type!=="image/png"){
            alert("Please upload a png image ")
            return
        }
        const imgpath=URL.createObjectURL(file)
        setProfileImg(imgpath)
    }
    const handlefollow=()=>{
        setFollowing((prev)=> !prev)
    }
    if(loading){
        return <div>
            <h1>Loading..........</h1>
        </div>
    }
  return (
    <div className='profile'>
      <div className='img'>
        <input type='file' accept='image/png' hidden ref={imgRef} onChange={uploadimg} />
        {!profileImg?(
            <div className='profile-img' onClick={()=>imgRef.current.click()}>Upload Image</div>
        ):(
            <img src={profileImg} alt="Profile" className='profile-img' onClick={()=>imgRef.current.click()}/>
        )}
      </div>
      <div className='info'>
        <h2>Name:{user.name}</h2>
        <h3>Email: {user.email}</h3>
        <h3>Company: {user.company.name}</h3>
        <h3>Website: {user.website}</h3>
        <button className={following? "following": "follow"}
        onClick={handlefollow}>
            {following? "Following": "Follow"}
        </button>
      </div>
    </div>
  )
}
