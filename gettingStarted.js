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

export default class gettingStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="white" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '139%',
          }}>
          <View style={styles.logo}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
              VIDEO
            </Text>
            {/* <Image
              style={styles.image}
              source={require('./images/whatsap.png')}
            /> */}
          </View>
          <TouchableOpacity
            style={[
              styles.loginBtn,
              {
                backgroundColor: 'white',
              },
            ]}
            onPress={() => this.props.navigation.navigate('App')}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
              GET STARTED
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loginText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
  container: {
    flex: 1,

    backgroundColor: '#B99156',
  },
  loginBtn: {
    width: '66%',
    marginTop: '3%',
    height: '27%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: '37.8%',
  },
  logo: {
    marginTop: '14%',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: '470%',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: '9%',
  },
});
