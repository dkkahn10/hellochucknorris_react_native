import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

class Button extends Component {

  render() {
    let TouchableElement = TouchableNativeFeedback;
    if (Platform.OS === 'ios') {
      TouchableElement = TouchableHighlight;
    }
    return(
      <View style={styles.buttonContainer}>
        <Text style={styles.welcome}>
        Tap me as fast as you can!
        </Text>
        <TouchableElement
          style={styles.button}
          onPress={this.props.onPress}>
          <View>
            <Text style={styles.buttonText}>BUTTON!</Text>
          </View>
        </TouchableElement>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 0,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#88AE61'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9EDBD6',
    margin: 20
  }
});

export default Button;
