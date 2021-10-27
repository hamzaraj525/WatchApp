import React, {Component, useState, useEffect} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  StatusBar,
  Button,
  SafeAreaView,
  Icon,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
  Text,
  Dimensions,
  View,
} from 'react-native';

import PhoneInput from 'react-native-phone-input';
import * as Progress from 'react-native-progress';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import EvilIcons from 'react-native-vector-icons/Ionicons';
import MyCheckBox from '../MyCheckBox';

import {Picker} from '@react-native-picker/picker';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fi: false,
      se: false,
      th: false,
      fo: false,
      text: '',
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
            paddingBottom: '100%',
            paddingTop: '4%',
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',

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
              fontSize: 28,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Login
          </Text>

          <View
            style={{
              height: '110%',
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
                alignItems: 'center',
                height: '14%',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#11062C',
                  fontSize: 16,
                  color: 'white',
                }}>
                PERSONAL
              </Text>
              <Text
                style={{
                  color: '#11062C',
                  fontSize: 16,

                  color: 'white',
                }}>
                BUSINESS
              </Text>
            </View>
            <View style={{marginBottom: '2%'}}>
              <Progress.Bar color="white" progress={0.7} width={309} />
            </View>
            <View
              style={{
                width: '70%',
                height: '10%',
                marginTop: '5%',
                alignItems: 'center',

                flexDirection: 'row',
              }}>
              <PhoneInput
                style={{
                  color: 'white',
                  height: '25%',
                  width: '24%',

                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                initialCountry="us"
                ref="phone"
              />
              <Text
                style={{
                  color: 'white',
                  marginRight: '22%',
                  fontSize: 14,
                }}>
                Select yoour country
              </Text>
            </View>
            <GoogleSigninButton
              style={styles.googleBtn}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={() =>
                this.onGoogleButtonPress().then(() => {
                  this.props.navigation.navigate('FirebaseForm');
                })
              }
            />

            <TextInput
              style={{
                color: 'white',
                width: '74%',
                height: '10%',
                backgroundColor: '#200b54',
                borderColor: 'white',
                borderWidth: 0.5,
                marginBottom: 20,
              }}
              placeholder="Email"
              placeholderTextColor="white"
              onChangeText={text => this.setState({text})}
              underlineColorAndroid="transparent"
            />
            <View style={styles.sectionStyle}>
              <TextInput
                style={{color: 'white', flex: 1}}
                placeholder="Password"
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
              />
              <Image
                source={require('../images/eye.png')}
                style={styles.imageStyle}
              />
            </View>
            <View style={{marginTop: '-5%', marginRight: '42%'}}>
              <Text style={{fontSize: 11, color: 'white'}}>
                Forgoot passwrd
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MobileNumber')}
              style={{
                marginTop: '10%',
              }}>
              <Text
                style={{
                  fontSize: 21,

                  color: 'white',
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <View style={{marginTop: '4%', flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 12.4,
                  color: 'white',
                }}>
                Dont have a account?
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    marginTop: '-1%',
                    fontSize: 13.5,
                    color: 'white',
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    padding: '3%',
    margin: '3%',
    height: '22%',
    tintColor: 'grey',
    width: '2%',
    resizeMode: 'stretch',
    alignItems: 'center',
  },
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
  googleBtn: {
    width: '76%',
    borderRadius: 25,
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: '7%',
  },

  sectionStyle: {
    width: '74%',
    height: '10%',
    flexDirection: 'row',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    marginBottom: '8%',
    borderWidth: 1,
    borderColor: '#DCDCDC',
  },
  imageStyle: {
    padding: '3%',
    margin: '3%',
    height: '22%',
    tintColor: 'white',
    width: '2%',
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
