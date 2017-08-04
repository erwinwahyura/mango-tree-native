import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import  { Navigate } from 'react-navigation'

export default class mango extends Component {
  constructor(props) {
    super(props)
    this.state = { name: ''}
  }

  start() {

  }
  static navigationOptions = {
   title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <Text style={styles.instructions}>
          To get started, Enter Your Mango Tree Name
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(name) => this.setState({name})}
          value= {this.state.name}
          placeHolder="input your mango tree name..."
        >
        </TextInput>
        <Button onPress={() => navigate('Main')}
          title="Get Started">
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  },
  input: {
    width: '80%'
  }
});

AppRegistry.registerComponent('mango', () => mango);
