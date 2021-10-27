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

import {Checkbox} from 'react-native-paper';
import MyCheckBox from '../MyCheckBox';

import {Picker} from '@react-native-picker/picker';
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fi: false,
      se: false,
      th: false,
      fo: false,
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
            paddingBottom: '70%',
            paddingTop: '11%',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginBottom: '-8%',
            }}>
            <Progress.Bar progress={0.4} width={200} />
          </View>

          <Text
            style={{
              marginTop: '16%',
              marginBottom: '3%',
              fontSize: 28,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Tell us about your business
          </Text>
          <Text
            style={{
              marginTop: '1%',

              fontSize: 15,
              color: 'white',
            }}>
            We need the following details to proceed.
          </Text>
          <TextInput
            style={{
              marginTop: '8%',
              height: '10%',
              backgroundColor: '#200b54',
              width: '74%',
              borderColor: 'white',
              borderWidth: 0.5,
              marginBottom: '5%',
            }}
            placeholder="Your Legal name"
            placeholderTextColor="white"
            onChangeText={text => this.setState({text})}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{
              color: 'white',
              height: '10%',
              backgroundColor: '#200b54',
              width: '74%',
              borderColor: 'white',
              borderWidth: 0.5,
              marginBottom: 20,
            }}
            placeholder="Tax Id (Optional)"
            placeholderTextColor="white"
            onChangeText={text => this.setState({text})}
            underlineColorAndroid="transparent"
          />
          <Text
            style={{
              width: '75%',

              padding: 10,
              marginLeft: 0,
              marginBottom: 0,

              fontWeight: 'normal',

              fontSize: 15,
              color: 'white',
            }}>
            Date of registeration (Optional)
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              width: '73%',
              marginTop: '2%',
              alignItems: 'center',

              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                height: '49%',
                backgroundColor: '#200b54',
                width: '22%',
                borderColor: 'white',
                borderWidth: 0.5,
                marginBottom: 20,
              }}
              placeholder="Day"
              placeholderTextColor="white"
              onChangeText={text => this.setState({text})}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '49%',
                backgroundColor: '#200b54',
                width: '27%',
                borderColor: 'white',
                borderWidth: 0.5,
                marginBottom: 20,
              }}
              placeholder="Month"
              placeholderTextColor="white"
              onChangeText={text => this.setState({text})}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                height: '49%',
                backgroundColor: '#200b54',
                width: '27%',
                borderColor: 'white',
                borderWidth: 0.5,
                marginBottom: 20,
              }}
              placeholder="Year"
              placeholderTextColor="white"
              onChangeText={text => this.setState({text})}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity
            style={{
              width: '74%',
              marginTop: '1%',
              height: '12%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}
            onPress={() => this.props.navigation.navigate('Details2')}>
            <Text
              style={{
                color: '#11062C',
                fontSize: 19,
                fontWeight: 'bold',
                color: 'black',
              }}>
              CONTINUE
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
