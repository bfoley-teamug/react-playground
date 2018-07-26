import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <h3>Username: {props.username}</h3>
      <p>There's a starman waiting in the sky
        He'd like to come and meet us
        But he thinks he'd blow our minds
      </p>
      <p>There's a starman waiting in the sky
        He's told us not to blow it
        Cause he knows it's all worthwhile
      </p>
    </div>
  );
}

export default userOutput;
