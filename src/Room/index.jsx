import { useParams } from "react-router-dom";
import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const Roompage = () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appId = 349418296;
    const severSecret = "a5c54f1f80eb2f22d0534a97f03a312c";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      severSecret,
      roomId,
      Date.now().toString(),
      "Anshul Shrivas"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default Roompage;
