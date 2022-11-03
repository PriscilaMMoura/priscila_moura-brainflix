import Header from "./components/header/Header";
import MainContent from "./components/maincontent/MainContent";
import videoDetailsData from "./data/videoDetails.json";
import videosData from "./data/videos.json";
import { useState } from "react";

function getVideos(videoId) {
  return videosData.filter((video) => video.id !== videoId);
}
function getVideoDetails(videoId) {
  return videoDetailsData.find((video) => video.id === videoId);
}

function App() {
  const defaultVideoId = videosData[0].id;
  // console.log(defaultVideoId);
  const [videoId, setVideoId] = useState(defaultVideoId);
  const [videos, setVideos] = useState(getVideos(videoId));
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

  const clickHandler = (event, videoId) => {
    event.preventDefault();
    setVideoId(videoId);
    setVideos(getVideos(videoId));
    setVideoDetails(getVideoDetails(videoId));
  };

  return (
    <div className="app-container">
      <header>
        <Header />
      </header>
      <main>
        <MainContent
          videos={videos}
          videoDetails={videoDetails}
          onMainContentClick={clickHandler}
        />
      </main>
    </div>
  );
}

export default App;
