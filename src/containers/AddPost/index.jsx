import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.firebase.ref('posts').push({
      title: this.state.title,
      upvote: 0,
      downvote: 0,
    });

    this.setState({
      title: '',
    });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="AddPost">
        <input
          type="text"
          placeholder="Write the title of your post"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
        <Link to="/">
          <button type="button">Cancel</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(AddPost);

AddPost.propTypes = {
  firebase: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
