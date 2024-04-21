import React, { useRef, useEffect } from "react";
import predio from "../../assets/videos/video1.mp4";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <>
      <Header />
      <section className="video-section">
        <video src={predio} autoPlay loop muted ref={videoRef}></video>
        <div className="content">
          <h2>Santa Rita</h2>
          <h2>Administradora de Condomínios</h2>
          <p>Excelência em administração de condomínios!</p>
        </div>
      </section>
    </>
  );
};

export default Home;
