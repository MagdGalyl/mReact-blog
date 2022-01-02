import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {

  componentDidMount(){
    this.props.fetchPosts();
  }
  
  render() {
    return <div>Post Test</div>;
  }
}
// null because we dont have any state yet (just place holder atm)
// fetchPosts is Action creator
export default connect(null, { fetchPosts })(PostList);
