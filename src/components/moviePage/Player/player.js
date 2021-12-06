import React  from "react";
import ReactPlayer from "react-player";
import "./player.module.css";



class Player extends React.Component {
    render () {
      return (
          <div className='player-wrapper'>
          <ReactPlayer
            controls = {true}
            url='https://www.youtube.com/watch?v=Nt9L1jCKGnE'
            className='react-player'
            autoplay = 'false'
          />
        </div>
      )
    }
}

export default Player;



