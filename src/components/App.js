import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { Route, Link } from 'react-router-dom';
import * as actions from 'actions';

class App extends Component {
  renderButton() {
    const { auth } = this.props;
    const buttonText = auth ? 'Sign Out' : 'Sign In';
    const handleClick = () => this.props.authenticateUser(!auth);
    return <button onClick={handleClick}>{buttonText}</button>;
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </div>
    );
  }
}

export default connect(
  ({ auth }) => ({ auth }),
  actions
)(App);
