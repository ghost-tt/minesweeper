import React from 'react';

import { Fragment } from 'react';

const GameOver = ({ lost, won }) => {
  return (
    <Fragment>
      {(lost || won) && (
        <div className="finish-msg">
          {lost && <span> GAME OVER </span>} {won && <span> YOU WON! </span>}
        </div>
      )}
    </Fragment>
  );
};

export default GameOver;
