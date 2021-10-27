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
import * as Progress from 'react-native-progress';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import EvilIcons from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';

import {Picker} from '@react-native-picker/picker';
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fi: false,
      text: '',
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
              marginBottom: '1%',
              height: '36%',
            }}>
            <Image
              style={{marginBottom: '9%'}}
              source={require('../images/mr.png')}
            />
            <Text
              style={{
                marginTop: '-13%',
                fontSize: 22,
                color: '#528234',
                fontWeight: 'bold',
              }}>
              MobiBanc
            </Text>
          </View>
          <Text
            style={{
              fontSize: 22,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Register with your work email
          </Text>

          <View
            style={{
              height: '115%',
              width: '97%',
              marginTop: '5%',
              backgroundColor: '#200b54',
              alignItems: 'center',
              borderRadius: 35,
            }}>
            <View
              style={{
                height: '15%',
                width: '97%',
              }}></View>
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

            <CheckBox
              containerStyle={{
                width: '75%',
                marginTop: '-6%',
                backgroundColor: '#200b54',
                padding: 10,
                marginLeft: 0,
                marginBottom: 0,
                borderWidth: 0,
                fontWeight: 'normal',
              }}
              textStyle={{color: 'white'}}
              title="Send me the top exchange rates,promo codes,offers and"
              themeColor="white"
              checked={this.state.fi}
              onIconPress={() =>
                this.setState({
                  fi: !this.state.fi,
                })
              }
            />

            <TouchableOpacity
              style={{
                width: '74%',
                height: '9%',
                marginTop: '3%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text
                style={{
                  color: '#11062C',
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Register
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                marginTop: '4%',
                color: '#11062C',
                fontSize: 13,
                fontWeight: 'bold',
                color: 'white',
              }}>
              OR
            </Text>

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
            <View style={styles.loginBtn}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                }}>
                By continuing you are agree to our Terms of service and Privacy
                policy
              </Text>
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
    width: '67%',
    height: '19%',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: '4%',
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
