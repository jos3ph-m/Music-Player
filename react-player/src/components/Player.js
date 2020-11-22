import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  return(
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range"/>
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" icon={faPlay} />
        <FontAwesomeIcon className="skip-forward" icon={faAngleRight} />
      </div>
    </div>
    
  )
}

export default Player;