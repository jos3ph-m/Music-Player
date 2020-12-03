import React from 'react';
import LibrarySong from './LibrarySong'

const Library = ({ songs, audioRef, setCurrentSong, isPlaying, setSongs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => <LibrarySong songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} song={song} id={song.id} key={song.id} />) }
      </div>
    </div>
  )
}

export default Library