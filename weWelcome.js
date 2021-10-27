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

export default class weWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#B99156" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            marginTop: '53%',
            paddingBottom: '77%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginTop: '6%',
              marginBottom: '5%',
              fontSize: 37,
              color: 'white',
              fontWeight: 'bold',
            }}>
            WE WELCOME
          </Text>
          <Text
            style={{
              marginTop: '1%',
              marginBottom: '1%',
              fontSize: 20,
              color: 'white',
            }}>
            ENQUIERY / CUSTOMER
          </Text>
          <Text
            style={{
              marginBottom: '1%',
              fontSize: 20,
              color: 'white',
            }}>
            DESIGN FOR COMPANY
          </Text>
          <Text
            style={{
              marginBottom: '7%',
              fontSize: 20,
              color: 'white',
            }}>
            OR INDIVIDUALS
          </Text>
          <SafeAreaView
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Image style={{}} source={require('./images/whatsap.png')} />
            <Image style={{}} source={require('./images/gmail.png')} />
          </SafeAreaView>
        </ScrollView>
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
    justifyContent: 'center',
  },
});
