import React, { Component } from 'react';

class Posts extends Component {
  render() {
    const { posts } = this.props;

    if (this.props.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="Posts">
        {Object.keys(posts).map((key) => (
          <div key={key}>{posts[key].title}</div>
        ))}
      </div>
    );
  }
}

export default Posts;
