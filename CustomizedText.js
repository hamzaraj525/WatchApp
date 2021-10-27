import React, {Component, useState, useEffect} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  StatusBar,
  Button,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';

export default class CustomizedText extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#B99156" />
        <Text
          style={{
            marginTop: '6%',
            marginBottom: '7%',
            fontSize: 26,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Customize Text
        </Text>
        <TextInput
          value={this.state.Fname}
          style={styles.input}
          onChangeText={text => this.setState({text})}
        />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            alert('ORDER');
          }}>
          <Text style={styles.loginText}>ORDER</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loginText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#B99156',
    alignItems: 'center',
  },
  loginBtn: {
    width: '40%',
    borderRadius: 14,
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: 'white',
    width: '90%',
    height: 45,
    alignItems: 'center',
  },
});
