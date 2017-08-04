import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = { tree: 'this is Groat', old: 0, img: 'https://www.dropbox.com/home/mangotree?preview=0.png'}
  }

  start() {
    var x = Math.floor((Math.random() * 10) + 1);
    this.setState({
      old: x
    })
    console.log(this.state.old);
  }
  static navigationOptions = {
   title: 'Main Mango Tree',
  };
  render() {
    console.log('myimg: ', this.state.img);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome, Erwin Tree
        </Text>
        <Text style={styles.instructions}>
          {this.state.tree + ' he is ' + this.state.old + ' year`s old'}
        </Text>
        <View>
          <Image source={{uri: 'assets/0.png', cache: 'only-if-cached'}}
                  style={{width: 400, height: 300}} />
        </View>
        <Button onPress={() => this.start()}
          title="GROW">
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
    fontSize: 18
  },
  input: {
    width: '80%'
  }
});
