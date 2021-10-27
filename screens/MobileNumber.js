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
import * as Progress from 'react-native-progress';

import PhoneInput from 'react-native-phone-input';

import {Picker} from '@react-native-picker/picker';
export default class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fi: false,
      se: false,
      th: false,
      fo: false,
      value: 'Pakistani,',
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
            paddingBottom: '120%',
            paddingTop: '4%',
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              marginBottom: '2%',
              height: '36%',
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
              marginTop: '1%',
              fontSize: 28,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Please type in your
          </Text>
          <Text
            style={{
              fontSize: 28,
              color: 'white',
              fontWeight: 'bold',
            }}>
            mobile number
          </Text>
          <View
            style={{
              height: '126%',
              width: '97%',
              marginTop: '5%',
              backgroundColor: '#200b54',
              alignItems: 'center',
              borderRadius: 35,
            }}>
            <View
              style={{
                width: '74%',
                justifyContent: 'space-between',
                marginTop: '2%',
                marginBottom: '5%',
                alignItems: 'center',
                height: '30%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: '25%',
                  width: '34%',
                  justifyContent: 'center',
                  borderColor: 'white',
                  borderWidth: 1,
                  alignItems: 'center',
                }}>
                <PhoneInput
                  pickerBackgroundColor="white"
                  pickerButtonColor="#007AFF"
                  style={{
                    color: 'white',
                    height: '25%',
                    width: '34%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  initialCountry="us"
                  ref="phone"
                />
              </View>

              <TextInput
                style={{
                  color: 'white',
                  height: '25%',
                  backgroundColor: '#200b54',
                  width: '64%',
                  borderColor: 'white',
                  borderWidth: 0.5,
                }}
                onChangeText={text => this.setState({text})}
                underlineColorAndroid="transparent"
              />
            </View>
            <TouchableOpacity
              style={{
                width: '74%',
                height: '9%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}
              onPress={() => this.props.navigation.navigate('OnlineBusiness')}>
              <Text
                style={{
                  color: '#11062C',
                  fontSize: 19,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                CONFIRM
              </Text>
            </TouchableOpacity>
          </View>
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
