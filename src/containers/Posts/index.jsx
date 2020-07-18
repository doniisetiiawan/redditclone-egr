import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref(`posts/${key}`).set({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote,
    });
  };

  handleDownvote = (post, key) => {
    this.props.firebase.ref(`posts/${key}`).set({
      title: post.title,
      upvote: post.upvote,
      downvote: post.downvote + 1,
    });
  };

  render() {
    const { posts } = this.props;
    const _this = this;

    if (this.props.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="Posts">
        <Link to="/add-post">
          <button type="button">Add Post</button>
        </Link>
        {posts
          && Object.keys(posts).map((key) => (
            <div key={key}>
              <div>Title: {posts[key].title}</div>
              <div>Upvotes: {posts[key].upvote}</div>
              <div>Downvotes: {posts[key].downvote}</div>
              <div>
                <button
                  onClick={() => _this.handleUpvote(posts[key], key)}
                  type="button"
                >
                  Upvote
                </button>
                <button
                  onClick={() => _this.handleDownvote(posts[key], key)}
                  type="button"
                >
                  Downvote
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Posts;

Posts.propTypes = {
  firebase: PropTypes.objectOf(PropTypes.any).isRequired,
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.any,
};

Posts.defaultProps = {
  posts: {},
};
