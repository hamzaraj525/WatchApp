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
import PhoneInput from 'react-native-phone-input';
export default class ss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      format: '',
      value: '',
    };
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
            paddingTop: '10%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              marginTop: '4%',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              height: 156,
            }}>
            <Image
              style={{marginBottom: '9%'}}
              source={require('../images/mr.png')}
            />
            <Text
              style={{
                marginTop: '-10%',
                fontSize: 22,
                color: '#528234',
                fontWeight: 'bold',
              }}>
              MobiBanc
            </Text>
          </View>
          <Text
            style={{
              marginTop: '5%',
              marginBottom: '3%',
              fontSize: 29,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Please type in your
          </Text>
          <Text
            style={{
              marginBottom: '9%',
              fontSize: 29,
              color: 'white',
              fontWeight: 'bold',
            }}>
            mobile number
          </Text>
          <View
            style={{
              width: '70%',
              height: '10%',
              borderRadius: 22,
              backgroundColor: '#200b54',
              flexDirection: 'row',
            }}>
            <PhoneInput
              style={{
                color: 'white',
                marginLeft: '4%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              initialCountry="us"
              ref="phone"
            />
            <View style={styles.verticleLine}></View>
            <TextInput
              placeholderTextColor="grey"
              style={{}}
              onChangeText={email => this.setState({email})}
              placeholder="Enter number"
            />
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate('Number')}>
            <Text
              style={{
                color: '#11062C',
                fontSize: 19,
                fontWeight: 'bold',
              }}>
              Confirm Number
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: '5%',
              marginBottom: '5%',
              fontSize: 15,
              color: 'white',
            }}>
            I've changed my number
          </Text>
          <Text
            style={{
              marginBottom: '9%',
              fontSize: 12,
              color: 'white',
            }}>
            By continuing you agree to our Terms of Service and Privacy policy
          </Text>
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
    marginTop: '12%',
    width: '70%',
    borderRadius: 40,
    marginBottom: '1%',
    height: '9%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {borderRadius: 13, width: '90%', height: '99.8%'},
  input: {
    marginTop: '-3%',
    backgroundColor: 'white',
    width: '40%',
    height: '100%',
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
});
