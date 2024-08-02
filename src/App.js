import logo from './logo.svg';
import './App.css';
import fam from"./images/mom.webp";
import aud from"./audio/ad.mp3";
import nat from"./video/nature.mp4";

function App() {
  return (
    <div className="App">
      <img src="https://i.pinimg.com/236x/3b/a7/ce/3ba7ce57f083e1cbccb3ed5c60ca1966.jpg"></img>
      <img src="./images/dad.jpeg"></img>
      <img src={fam}></img>
      <hr></hr>
      <audio src="./audio/au.mp3" controls></audio>
      <audio src="https://services.brninfotech.com/tws/media2/songs/war/jai jai.mp3" controls></audio>
      <audio src={aud} controls></audio> 
      <hr></hr>
      <video src="https://services.brninfotech.com/tws/media2/trailers/war.mp4" controls></video>
      <video src="./video/tamil.mp4" controls></video>
      <video src={nat} controls></video>

    </div>
  );
}

export default App;
