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
// import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';
export default class Detail5 extends Component {
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
          <View
            style={{
              width: '74%',
              justifyContent: 'space-between',
              marginTop: '5%',
              alignItems: 'center',
              height: '30%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                borderColor: 'white',
                borderWidth: 1,
                height: '70%',
                width: '48%',
                backgroundColor: '#200b54',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  marginLeft: '4%',
                  marginTop: '4%',
                  fontSize: 15,
                  color: 'grey',
                }}>
                First Name
              </Text>
              <TextInput
                style={{
                  marginLeft: '4%',
                  color: 'white',
                  position: 'absolute',
                  bottom: 0,
                }}
                placeholder="Here"
                placeholderTextColor="white"
                onChangeText={text => this.setState({text})}
                underlineColorAndroid="transparent"
              />
            </View>
            <View
              style={{
                borderColor: 'white',
                borderWidth: 1,
                height: '70%',
                width: '48%',
                backgroundColor: '#200b54',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  marginLeft: '4%',
                  marginTop: '4%',
                  fontSize: 15,
                  color: 'grey',
                }}>
                Last Name
              </Text>
              <TextInput
                style={{
                  marginLeft: '4%',
                  position: 'absolute',
                  bottom: 0,
                  color: 'white',
                }}
                placeholder="Here"
                placeholderTextColor="white"
                onChangeText={text => this.setState({text})}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View
            style={{
              borderColor: 'white',
              borderWidth: 1,
              marginTop: '2%',
              height: '18%',
              width: '74%',
              backgroundColor: '#200b54',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                marginLeft: '3%',
                marginTop: '1%',
                fontSize: 15,
                color: 'grey',
              }}>
              Nationality
            </Text>
            <View style={{marginRight: '7%', width: '84%', height: '38%'}}>
              <Picker
                dropdownIconColor="white"
                value={this.state.value}
                mode="dropdown"
                onValueChange={value => this.setState({val: this.state.value})}>
                <Picker.Item color="grey" label="Pakistani" value="Pakistani" />
                <Picker.Item color="grey" label="Indian" value="Indian" />
              </Picker>
            </View>
          </View>

          <Text
            style={{
              width: '75%',

              padding: 10,
              marginLeft: 0,
              marginBottom: 0,

              fontWeight: 'normal',
              marginTop: '1%',
              fontSize: 15,
              color: 'white',
            }}>
            Date of birth
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
                color: 'white',
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
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',

                height: '49%',
                backgroundColor: '#200b54',
                width: '27%',
                borderColor: 'white',
                borderWidth: 0.5,
                marginBottom: 20,
              }}
              placeholder="Day"
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
            onPress={() => this.props.navigation.navigate('Details')}>
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
