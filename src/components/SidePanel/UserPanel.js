import React from 'react';
import firebase from '../../firebase';
import { connect } from 'react-redux';
import { Dropdown, Grid, Header, Icon } from 'semantic-ui-react';

class UserPanel extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    this.setState({ user: this.props.currentUser });
  }

  dropdownOptions = () => [
    {
      key: 'user',
      text: <span>Signed in as <strong>User</strong></span>,
      disabled: true
    }, 
    {
      key: 'avatar',
      text: <span>Change Avatar</span>
    },
    {
      key: 'signout',
      text: <span onClick={this.handleSignout}>Sign Out</span>
    }
  ];

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('signed out!'))
  }

  render() {
    console.log(this.props.currentUser);
    return (
      <Grid style={{ background: '#4c3c4c' }}>
        <Grid.Column>
          <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
            {/* App Header */}
            <Header inverted floated="left"as="h2">
              <Icon name="code" />
              <Header.Content>DevChat</Header.Content>
            </Header>        
           {/* User Dropdown */}
            <Header inverted style={{ padding: '0.25em' }} as="h4">
            <Dropdown trigger={
                <span>User</span>
              } options={this.dropdownOptions()} />
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(UserPanel);