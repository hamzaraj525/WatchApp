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

export default class OnlineBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Your Website'};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{
            marginLeft: '3%',
          }}
          onPress={() => this.props.navigation.navigate('ProceedScreen')}>
          <Image source={require('../images/m.png')} />
        </TouchableOpacity>
        <StatusBar barStyle="light-content" backgroundColor="#11062C" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            paddingBottom: '30%',
            paddingTop: '11%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              marginTop: '19%',
              alignItems: 'center',
            }}></View>
          <Text
            style={{
              marginTop: '16%',
              marginBottom: '3%',
              fontSize: 28,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Is your business Online?
          </Text>
          <Text
            style={{
              paddingHorizontal: '12%',
              marginTop: '2%',
              marginBottom: '3%',
              fontSize: 12,
              color: 'white',
            }}>
            Please include a link to your company website-or to yourbusiness
            profile Amazon,Shopify or any other problem
          </Text>
          <TextInput
            style={{
              color: 'white',
              marginTop: '8%',
              height: '12%',
              backgroundColor: '#200b54',
              width: '74%',
              borderColor: 'white',
              borderWidth: 0.5,
              marginBottom: 20,
            }}
            placeholder="Your Website"
            placeholderTextColor="white"
            onChangeText={text => this.setState({text})}
            underlineColorAndroid="transparent"
          />
          <View style={{marginTop: '16%', flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 12,
                color: 'white',
              }}>
              Dont have a website?
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.forgotPassword(this.state.email, this.state.password)
              }>
              <Text
                style={{
                  fontSize: 11,
                  color: 'white',
                }}>
                Skip this step
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: '74%',
              marginTop: '4%',
              height: '9%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text
              style={{
                color: '#11062C',
                fontSize: 19,
                fontWeight: 'bold',
                color: 'black',
              }}>
              VERIFY NOW
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

    backgroundColor: '#11062C',
  },
  loginBtn: {
    borderRadius: 1,
    width: '80%',
    position: 'absolute',
    bottom: 0,
    marginTop: '3%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {borderRadius: 13, width: '90%', height: '99.8%'},
  input: {
    backgroundColor: 'white',
    width: '74%',
    height: '9%',
    borderColor: 'white',
    marginBottom: 20,
    alignItems: 'center',
  },
});
