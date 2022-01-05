import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return <div>Post Test</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
// null because we dont have any state yet (just place holder atm)
// fetchPosts is Action creator
export default connect(mapStateToProps, { fetchPosts })(PostList);
