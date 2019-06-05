import React, { Component } from "react";

import { View, Text } from "react-native";

import api from "../services/api";

export default class Posts extends Component {
  static navigationOptions = {
    title: "Início"
  };
  state = {
    posts: []
  };
  async componentDidMount() {
    const response = await api.get();
    this.setState({ posts: response.posts });
  }
  render() {
    return (
      <View>
        {this.state.posts.map(post => (
          <Text>{post.content}</Text>
        ))}
      </View>
    );
  }
}
