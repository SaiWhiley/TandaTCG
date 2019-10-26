/* @flow */

import React from 'react';

export type Props = {
  sender: {
    id: string,
    name: string,
  },
  recipient: {
    id: string,
    name: string,
  },
  cardClass: {
    id: string,
    name: string
  },
}

function FeedItem(props) {
  return (
    <div className="feed-item">
      <p>{`${props.sender.name}`}</p>
    </div>
  );
}

export default FeedItem;
