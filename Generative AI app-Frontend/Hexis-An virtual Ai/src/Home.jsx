import React, { useState } from 'react';
import './Home.css';
import video from './9999-222013864.mp4';
import image from './black-hole (4).png';
import image1 from './button-circle-upload-svgrepo-com.svg';
import image3 from './blackhole.png';
import image4 from './Plus circle s.svg';
import image5 from './microphone.png';


const Home = () => {

  const [ren, setren] = useState(false);
  const [displaytext, setdisplaytext] = useState("");
  const [processing, setprocessing] = useState(false);
  const [userInput, setuserInput] = useState("");
  const [HexisOutput, setHexisOutput] = useState("");
  const [loader, setloader] = useState(false);
  const [voiceloader, setvoiceloader] = useState(false);

  async function HandleSubmit() {

    if (!userInput) {
      console.log("plss provide an input")
      return;
    }

    if (!userInput.trim()) {
      console.log('plss provide an input')
      return;
    }

    const currentInput = userInput;

    if (!processing) {
      setdisplaytext(currentInput);
      setHexisOutput("");
      setren(true);
      setprocessing(true);
      setloader(true);
    }

    try {
      const URL = `http://localhost:8080/api/chat`;
      const postData = { userInput: currentInput };

      const options = {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      };

      console.log("fetching....")
      const response = await fetch(URL, options);

      console.log("Response received:", response.status);

      const data = await response.json();

      if (response.ok) {
        console.log("Got response" + JSON.stringify(data))
        const assistantText = data.output[0].content[0].text;
        console.log("Assistant says:", assistantText);
        setHexisOutput(assistantText);
        setloader(false)
      } else {
        console.log('login failed')
        setHexisOutput("Error: Request failed");
      }

    } catch (error) {
      console.log("Error:", error)
      setHexisOutput("Error: " + error.message);

    } finally {
      console.log("Everything is fine")
      setuserInput("");
      setprocessing(false);
      setloader(false);
    }
  }

  function handleChange(e) {
    setuserInput(e.target.value);
  }

  const handleKeyDown = (event) => {
    console.log("Key pressed:", event.key);

    if (event.key === "Enter") {
      HandleSubmit();
    }
  };


  async function VoiceHandler() {
    // Check if HexisOutput does NOT exist
    if (!HexisOutput) {
      alert("Hexis hasn't provided any response yet. Please send a message first.")
      return;
    }

    try {
      const apiURL = `http://localhost:8080/api/voice`;
      const postData = { HexisOutput };

      const options = {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      };

      console.log("Fetching audio...");
      const response = await fetch(apiURL, options);


      
      if (response.ok) {
        setvoiceloader(false)
      
      }
      if (!response.ok) {
       
        console.error('Voice request failed:', response.status);
        alert("Error generating voice");
        return;
      }

      const data = await response.blob();
      console.log("Audio blob received. Size:", data.size, "bytes");


      const audioUrl = URL.createObjectURL(data);
      const audio = new Audio(audioUrl);

      audio.onerror = () => {
        console.error("Error playing audio");
        alert("Error playing audio file");
      };


      audio.play().catch(err => {
        console.error("Error playing audio:", err);
        alert("Unable to play audio: " + err.message);
      });

    } catch (error) {
      console.error("Error in VoiceHandler:", error);
      alert("Error: " + error.message);
    }
  }

  return (
    <div className="container">

      {/* Background Video Section */}
      <div>
        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
        </video>
        <div className='request-container'>
          {ren && (
            <div className='request'> {displaytext} </div>
          )}
          {loader && (
            <div className='loader-container'>
              <div class="loader"> </div>
              <div className='thinking'> Hexis is thinking ...</div>
            </div>
          )}
          <div className='response' > {HexisOutput} </div>
          {voiceloader && (
          <div className='load'>
          <div class="loaderx"></div>
          </div>
           )}
        </div>


        <div className="content">
          <div class="image-dropdown">
            <img src={image4} alt="Image" className="hover-img" />
            <div class="dropdown-content">
              <a href="#">Study and Learn </a>
              <a href="#">  Deep Research</a>
              <a href="#"> Thinking </a>
            </div>
          </div>

          <input
            className="input"
            type="text"
            value={userInput}
            placeholder="What Do U Want To Know"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <img onClick={() => {
            HandleSubmit();
          }} className="img2" src={image1} alt="Upload button" />


          <div class="hover-container">
            <img onClick={() => {
            VoiceHandler();
            setvoiceloader(true);
          }} className='img5' src={image5} />


          </div>


        </div>
      </div>

      <div className="main">
        <img
          className="img3"
          src={image3}
          alt="Blackhole icon"
        />

        <div className="container2">
          <img className="img" src={image} alt="Blackhole" />
          <h1>Hexis</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;