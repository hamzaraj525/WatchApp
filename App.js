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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#B99156" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '60%',
          }}>
          <SafeAreaView style={styles.logo}>
            {/* <Image style={styles.image} source={require('./images/user.png')} /> */}
          </SafeAreaView>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate('customizeWatch')}>
            <Text style={styles.loginText}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              alert('sign up');
            }}>
            <Text style={styles.loginText}>SIGN UP</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: '52%',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: '45%',
    backgroundColor: 'white',
    marginBottom: '45%',
  },
  loginText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 22,
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#B99156',
    alignItems: 'center',
  },
  loginBtn: {
    width: '80%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '6%',
    backgroundColor: 'white',
  },
  image: {
    width: '30%',
    height: '47.8%',
  },
});
