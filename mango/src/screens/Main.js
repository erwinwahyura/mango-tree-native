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
    this.state = { tree: 'this is Groat', old: 0, buah: 0, status: 'panen'}
  }

  start() {
    var x = Math.floor((Math.random() * 10) + 1);
    var total = 0
    this.state.old = this.state.old += x
    console.log(x);
    console.log('ini total: ', this.state.old);
    this.setState({
      old: this.state.old
    })
  }
  harvest() {
    var x = Math.floor((Math.random() * 30) + 20);
    this.setState({
      buah: x,
      panen: 'sudah'
    })
    alert('Your Harvest Is '+ x)
  }
  static navigationOptions = {
   title: 'Main Mango Tree',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome, Erwin Tree
        </Text>
        <Text style={styles.instructions}>
          {this.state.tree + ' he is ' + this.state.old + ' year`s old'}
        </Text>
        <View>
            {
              this.state.old === 0 ?
              <View>
                <Image source={{uri: 'http://i.imgur.com/E6383jI.png', cache: 'only-if-cached'}}
                        style={{width: 400, height: 300}} />

              </View> :
              this.state.old >= 5 && this.state.old <=10 ?
              <View>
                <Image source={{uri: 'http://i.imgur.com/wcshomD.png', cache: 'only-if-cached'}}
                        style={{width: 400, height: 300}} />

              </View> :
              this.state.old >= 11 && this.state.old <=20 ?
              <View>
                <Image source={{uri: 'http://i.imgur.com/vlwMhsl.png', cache: 'only-if-cached'}}
                        style={{width: 400, height: 300}} />

              </View> :
              this.state.old >= 21 && this.state.old <=30 ?
              <View>
                <Image source={{uri: 'http://i.imgur.com/hFzut5p.png', cache: 'only-if-cached'}}
                        style={{width: 400, height: 300}} />

              </View> :
              this.state.old >= 31 ?
              <View>
                <Image source={{uri: 'http://i.imgur.com/5WP0Jsk.png', cache: 'only-if-cached'}}
                        style={{width: 400, height: 300}} />

              </View> :
              <Text>Your Tree is Ub-normal</Text>

            }

        </View>
        {
          this.state.old <= 31 ?
          <Button onPress={() => this.start()}
            title="GROW">
          </Button>
          : null

        }

        {
          this.state.old >= 21 && this.state.old <=30 ?
          <Button onPress={() => this.harvest()}
            title="Harvest">
          </Button>
          :
          null
        }

        {
          this.state.old >= 32 ?
          <Button onPress={() => navigate('Gameover')}
            title="OK">
          </Button>
          :
          null
        }

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
