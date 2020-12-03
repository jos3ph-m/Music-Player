import React from 'react';
import LibrarySong from './LibrarySong'

const Library = ({ songs, audioRef, setCurrentSong, isPlaying }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => <LibrarySong songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} audioRef={audioRef} song={song} id={song.id} key={song.id} />) }
      </div>
    </div>
  )
}

export default Library