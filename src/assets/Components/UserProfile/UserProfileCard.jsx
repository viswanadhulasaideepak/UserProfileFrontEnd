import React, { useRef, useState } from 'react'
import "./UserProfileCard.css"
export default function UserProfileCard({username,role,bio}) {
    const [profileImg,setProfileImg]=useState("")
    const [following,setfollowing]=useState(false)

    const imgRef=useRef(null)

    const uploadimg=(e)=>{
        const file=e.target.files[0]
        if(!file) return
        if(file.type!=="image/png"){
            alert("Please upload a PNG image")
            return
        }
        const imgpath=URL.createObjectURL(file)
        setProfileImg(imgpath)
    }
    const handlefollow = () => {
        setfollowing((prev)=> !prev)
        }
    
  return (
    <div className='profile'>
        <div className='img'>
            <input type="file" 
            accept='image/png' hidden
            ref={imgRef} 
            onChange={uploadimg}/>
            {!profileImg ? (
                <div
                    className='profile-img' 
                    onClick={()=>imgRef.current.click()}>Upload Image
                 </div>
            ) : (
                <img src={profileImg} alt="Profile"
                    className='profile-img' 
                    onClick={()=>imgRef.current.click()}/>
            )}
        </div>
        <div className='info'>
            <h2 >
                {username}
            </h2>
            <h4>
                {role}
            </h4>     
            <h3>
                {bio}
            </h3>
            <button className={following ? "following" : "follow"} 
            onClick={handlefollow}>
                {following ? "Following" : "Follow"}
            </button>
         </div>
      
    </div>
  )
}
