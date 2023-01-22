import React, { useState } from "react";

const ScrollSection = () => {
  const [video, setVideo] = useState(
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4"
  );

  const checkScrollBehaviour = () => {
    if (window.scrollY < 230) {
      setVideo(
        "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4"
      );
    }
    if (window.scrollY > 240) {
      setVideo(
        "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4"
      );
    }
    if (window.scrollY > 1100) {
      setVideo(
        "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4"
      );
    }
  };
  window.addEventListener("scroll", checkScrollBehaviour);

  return (
    <div className="scroll--section">
      <div className="text-section">
        <div className="small-heading">
          <span className="text-span-1">Kula Outreach</span>
        </div>
        <div className="large-heading">
          <h2 className="text-span-2">Automated Candidate Follow-ups </h2>
        </div>
        <div className="description">
          <span className="text-span-desc">
            No more spray and pray. Ensure 1:1 communication to all of your
            connections through dynamic personalization capabilities
          </span>
        </div>
      </div>
      <div className="media-section">
        <div className="video-container">
          <video
            id="myVideo"
            class="video"
            src={video}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
      <div className="text-section1">
        <div className="small-heading">
          <span className="text-span-1">Kula Outreach</span>
        </div>
        <div className="large-heading">
          <h2 className="text-span-2">Personalized Candidate Reach Outs</h2>
        </div>
        <div className="description">
          <span className="text-span-desc">
            No more spray and pray. Ensure 1:1 communication to all of your
            connections through dynamic personalization capabilities
          </span>
        </div>
      </div>
      <div className="text-section2">
        <div className="small-heading">
          <span className="text-span-1">Kula Outreach</span>
        </div>
        <div className="large-heading">
          <h2 className="text-span-2">
            Reach out on channels candidates prefer
          </h2>
        </div>
        <div className="description">
          <span className="text-span-desc">
            No more spray and pray. Ensure 1:1 communication to all of your
            connections through dynamic personalization capabilities
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
