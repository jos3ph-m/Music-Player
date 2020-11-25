import { useState } from 'react';

//Import styles
import "./styles/app.scss";

//Adding components
import Player from './components/Player';
import Song from './components/Song';

// Import util
import data from './data';


function App() {
  //State
  const [ songs, setSongs ] = useState(data());
  const [ currentSong, setCurrentSong ] = useState();
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
