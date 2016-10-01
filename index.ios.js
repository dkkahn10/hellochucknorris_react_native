/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import Button from './components/button.js';


class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.state = {
      greeting: ""
    }
    this.buttonClicked = this.buttonClicked.bind(this)
  }

  buttonClicked() {
    console.log("Button clicked!");
    this.getData().then(data => this.setState({greeting: data.greeting}))
  }

  componentDidMount(){
    this.getData().then(data => this.setState({greeting: data.greeting}))
  }

  async getData() {
    try {
      let response = await fetch('https://hellochucknorris.herokuapp.com/api/greetings')
      let json = await response.json()
      return json
    } catch (err) {
      Alert.alert(null, err)
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>{this.state.greeting}</Text>
        <Button onPress={this.buttonClicked}>Random Greeting!</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9EDBD6',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
