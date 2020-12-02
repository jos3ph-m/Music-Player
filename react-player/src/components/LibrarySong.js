import React from 'react';


const LibrarySong = ({ song, songs, setCurrentSong, id }) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id)
    // Be careful the filter above returns an array so we will pass in selectedSong[0] below
    setCurrentSong(selectedSong[0]);
  }
  return(
    <div onClick={songSelectHandler} className="library-song">
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
      
    </div>
    
  )
}

export default LibrarySong;