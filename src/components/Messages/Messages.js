import React from 'react';
import firebase from '../firebase';
import { Segment, Comment } from 'semantic-ui-react';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';

class Messages extends React.Component {
  state = {
    messagesRef: firebase.database().ref('messages')
  }

  render() {
    const { messagesRef } = this.state;
    return (
      <>
      <MessagesHeader />
      <Segment>
        <Comment.Group className="messages">
          {/* Messages */}
        </Comment.Group>
      </Segment>
      <MessageForm
        messagesRef={messagesRef}
      />
      </>
    )
  }
}

export default Messages;