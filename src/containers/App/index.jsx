import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Route, Switch } from 'react-router-dom';
import config from './firebase-config';
import Posts from '../Posts';
import AddPost from '../AddPost';

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
        <Switch>
          <Route path="/posts">
            <Posts
              {...this.state}
              firebase={firebase.database()}
            />
          </Route>
          <Route path="/add-post">
            <AddPost
              {...this.state}
              firebase={firebase.database()}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
