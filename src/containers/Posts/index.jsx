import React, { Component } from 'react';

class Posts extends Component {
  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="Posts">
        {Object.keys(this.props.posts).map((key) => (
          <div key={key}>{this.props.posts[key].title}</div>
        ))}
      </div>
    );
  }
}

export default Posts;
