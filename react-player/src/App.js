//Import styles
import "./styles/app.scss";

//Adding components
import Player from './components/Player';
import Song from './components/Song';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
      <Bottom />
    </div>
  );
}

export default App;
