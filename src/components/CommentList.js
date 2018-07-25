import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments() {
    const { comments } = this.props;
    return comments.map((comment, i) => <li key={i}>{comment}</li>);
  }

  render() {
    return <ul>{this.renderComments()}</ul>;
  }
}

export default connect(({ comments }) => ({ comments }))(CommentList);
