import React, { Component } from "react";

import { View, Text } from "react-native";

import api from "../services/api";

export default class Posts extends Component {
  static navigationOptions = {
    title: "Início"
  };
  state = {
    postagem: [],
    postagem: {}
  };
  async componentDidMount() {
    const response = await api
      .get()
      .then(postagem => {
        this.setState({ postagem: response.data });
      })
      .catch(err => console.log(err));

    // this.setState({ postagem: response.posts });
  }
  render() {
    return (
      <View>
        {/* {this.state.postagem.map(post => (
          <Text>{post}</Text> */}
        ))}
      </View>
    );
  }
}
