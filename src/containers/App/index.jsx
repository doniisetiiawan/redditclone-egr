import React, { Component } from 'react';
import * as firebase from 'firebase';
import config from './firebase-config';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    const postsRef = firebase.database().ref('posts');

    const _this = this;

    postsRef.on('value', (snapshot) => {
      _this.setState({
        posts: snapshot.val(),
        loading: false,
      });
    });
  };

  render() {
    return (
      <div className="App">
        {this.props.children
          && React.cloneElement(this.props.children, {
            firebaseRef: firebase.database().ref('posts'),
            posts: this.state.posts,
            loading: this.state.loading,
          })}
      </div>
    );
  }
}

export default App;
