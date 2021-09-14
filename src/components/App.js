import React from 'react';
import ColorPanel from '../components/ColorPanel/ColorPanel';
import Messages from '../components/Messages/Messages';
import MetaPanel from '../components/MetaPanel/MetaPanel';
import SidePanel from '../components/SidePanel/SidePanel';
import { Grid } from 'semantic-ui-react';
import './App.css';
import { connect } from 'react-redux';

const App = ({ currentUser, currentChannel }) => {
  return (
    <Grid columns="equal" className="app" style={{ background: '#eee' }}>
      <ColorPanel />
      <SidePanel
        key={currentUser && currentUser.uid} // when passing multiple props you need unique key
        currentUser={currentUser}
      />

      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages
          key={currentChannel && currentChannel.id} // when passing multiple props you need unique key
          currentChannel={currentChannel}
          currentUser={currentUser}
        />
      </Grid.Column>

      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser, 
  currentChannel: state.channel.currentChannel
});

export default connect(mapStateToProps)(App);