import React,{useEffect, useRef, useState}from 'react'

export default function UseRefHook() {
    /*Example1*/
    const inputref=useRef()

    const focusinput=()=>{
        inputref.current.focus()
    }
    /*Example 2*/
    const [sec,setSec]=useState(0)
    const intervalref=useRef()

    useEffect(()=>{
        intervalref.current=setInterval(()=>{
            setSec((prev)=> prev + 1)
        },1000)
        return () => clearInterval(intervalref.current)
    },[])
    /*Example3 */
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

  return (
    <div>
        <div>
         {/*Example 1*/}
      <input type="text" placeholder='Enter your name:' ref={inputref} />
      <button onClick={focusinput}>FocusInput</button>
     </div>
    {/*Example 2*/}
    <div>
        <h2>Timer: {sec}</h2>
        <button onClick={() => clearInterval(intervalref.current)}>Stop</button>
    </div>
    {/*Example 3*/}
    <div>
        <input type="file" ref={imgRef} hidden onChange={handleImage}/>
        {pic ? (
             <div className='image-box'onClick={()=> imgRef.current.click()}>
                Upload Image </div>
        ) : (
            <img className="org-img" src={imgURL} alt="" />
        )}
       
    </div>
    </div>
     
  )
}
