import React from 'react';
import Form from '../ui/Form';
import OneReply from '../ui/OneReply';

export default function Replies() {
  return (
    <div className="content">
      <div className="main">
        <div className="design">
          <div className="txt">
            <h5>How to learn React</h5>
            <hr />
            <ul className="posts">
              <Form />
              <OneReply />
              <OneReply />
              <OneReply />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
