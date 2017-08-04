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
import { start } from '../actions'
import store from '../stores'
import { connect } from 'react-redux'
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

const mapStateToProps = (state) => {
  return {
    dataTree: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    grow: () => dispatch()
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

// export default connect(mapStateToProps, mapDispatchToProps)(Home)

AppRegistry.registerComponent('mango', () => mango);
