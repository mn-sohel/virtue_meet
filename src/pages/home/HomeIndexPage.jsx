import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router'

const HomeIndexPage = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!roomCode){
      alert("Please enter a room code");
      return;
    }
    navigate(`/call-room/${roomCode}`);
  }
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='w-[500px] bg-white border border-gray-200 rounded-md shadow-md p-5'>
          <h1 className='text-[#333] text-xl font-bold'>Add the room link here</h1>
          <form 
            onSubmit={handleSubmit}  
            className='flex flex-col mt-5'>
            <input 
            type="text" placeholder='Room Code' 
            className='w-full p-3 border border-gray-400 rounded-md outline-none'
            onChange={(e) => setRoomCode(e.target.value)}
            />
            <button 
            type="submit"
            className='bg-blue-100 p-2 rounded-md mt-3 cursor-pointer hover:bg-blue-300 font-medium text-lg hover:text-white'>Join Meeting</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default HomeIndexPage