import React from 'react'
import { useParams } from 'react-router'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const CallRoomPage = () => {
  const {roomCode} = useParams();
 
  const myMeeting = async(element) => {
    // generate Kit Token
    const appID = 1678924680;
    const serverSecret = "3edbdfa7f583e807a689ebaf9ce683f3";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID, 
      serverSecret, 
      roomCode,
      Date.now().toString(),
      "The Cozy Fox"
    );
     const zp = ZegoUIKitPrebuilt.create(kitToken);
     zp.joinRoom({
      container:element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference
      }

     })
  }
  
  return (
    <>
      <div ref={myMeeting} className='w-full h-screen bg-gray-100'>
        
      </div>
    </>
)
}

export default CallRoomPage