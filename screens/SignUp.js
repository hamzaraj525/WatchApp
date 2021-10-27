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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      format: '',
      value: '',
    };
    this.phoneInput = React.createRef();
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
            paddingBottom: '50%',
            paddingTop: '5%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              marginTop: '1%',
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
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Sign up to your new business acoount
          </Text>
          <Text
            style={{
              marginBottom: '2%',
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Set up a personal account instead
          </Text>
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              width: '95%',
              marginTop: '10%',
              alignItems: 'center',
              backgroundColor: '#200b54',
              flexDirection: 'row',
            }}
            onPress={() => this.props.navigation.navigate('ss')}>
            <View>
              <Text
                style={{
                  marginLeft: '5%',
                  marginTop: '5%',
                  fontSize: 17,
                  color: 'white',
                }}>
                I want to open a company account
              </Text>
              <Text
                style={{
                  marginLeft: '5%',
                  marginBottom: '5%',
                  marginTop: '2.6%',
                  fontSize: 13,
                  color: 'white',
                }}>
                My coompany operated as a legal entity and
              </Text>
              <Text
                style={{
                  marginBottom: '3%',
                  marginTop: '-4%',
                  marginLeft: '5%',
                  fontSize: 13,
                  color: 'white',
                }}>
                has a registeration number
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={38}
              color={'white'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              width: '95%',
              marginTop: '10%',
              alignItems: 'center',
              backgroundColor: '#200b54',
              flexDirection: 'row',
            }}>
            <View>
              <Text
                style={{
                  marginLeft: '5%',
                  marginTop: '5%',
                  fontSize: 17,
                  color: 'white',
                }}>
                I'am a freelancer or sole trader
              </Text>
              <Text
                style={{
                  marginLeft: '5%',
                  marginBottom: '5%',
                  marginTop: '2.6%',
                  fontSize: 13,
                  color: 'white',
                }}>
                I operate my under my legal name and am registered
              </Text>
              <Text
                style={{
                  marginBottom: '3%',
                  marginTop: '-4%',
                  marginLeft: '5%',
                  fontSize: 13,
                  color: 'white',
                }}>
                with the local tax authority
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={38}
              color={'white'}
            />
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
    width: '74%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 50,
    marginBottom: '3%',
    height: '11%',
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
});
