  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import Hero from "./components/Hero";
  import Content from "./components/Content";
  import React, { useState, useEffect } from "react";

  function App() {
    const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetch("https://6587d02290fa4d3dabf92599.mockapi.io/movielist")
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setVideoList(data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
    return (
      <div className="bg-black blend-darken bg-opacity-35 text-white text-lg h-screen">
        <div className="">
          <Header />
          <Hero />
        </div>
        {videoList.map((video) => (
          
        <div key={video.id}>
          
        <Content
          heading={video.heading}
          para={video.description}
          video={video.video_url}
          no={video.id}
          className="border-2 border-white"
        />
        
        </div>
        ))}
        <Footer/>
      </div>
    );
  }

  export default App;
