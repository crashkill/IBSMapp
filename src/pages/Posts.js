import React, { Component } from "react";

import { View, Text, FlatList } from "react-native";

import api from "../services/api";

export default class Posts extends Component {
  static navigationOptions = {
    title: "Início"
  };
  state = {
    postagem: []
  };
  loadData = async () => {
    const response = await api.get();
    const postagem = response.data.posts;
    this.setState({ postagem });
  };
  async componentDidMount() {
    this.loadData();
  }

  renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{"Data: " + item.date + " por " + item.author.name}</Text>
      <Text>{item.content}</Text>
    </View>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.state.postagem}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
