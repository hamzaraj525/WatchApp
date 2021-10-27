import React, {Component, useState, useEffect} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  StatusBar,
  Button,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import * as Progress from 'react-native-progress';

import PhoneInput from 'react-native-phone-input';
import {Checkbox} from 'react-native-paper';
import MyCheckBox from '../MyCheckBox';

import {Picker} from '@react-native-picker/picker';
export default class Local extends Component {
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
              marginTop: '2%',
              fontSize: 28,
              color: 'white',
              fontWeight: 'bold',
            }}>
            NEW TRANSFER
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
                INTERNATIONAL
              </Text>
              <Text
                style={{
                  color: '#11062C',
                  fontSize: 16,
                  color: 'white',
                }}>
                LOCAL
              </Text>
            </View>
            <View style={{marginBottom: '4%'}}>
              <Progress.Bar color="white" progress={0.7} width={309} />
            </View>
            <View style={styles.loginBtn}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                }}>
                Currency
              </Text>
            </View>
            <View
              style={{
                width: '70%',
                height: '10%',

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
            <View
              style={{
                alignItems: 'center',
                width: '74%',

                height: '10%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '70%',
                  height: '90%',
                  marginBottom: '3%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderColor: 'white',
                  borderWidth: 0.5,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: 'white',
                    width: '64%',
                    marginLeft: '5%',
                    fontSize: 14,
                  }}>
                  Receiver gets
                </Text>
                <Text
                  style={{
                    color: 'white',
                    width: '64%',
                    fontSize: 14,
                  }}>
                  $500
                </Text>
              </View>

              <Text style={{marginLeft: '4%', fontSize: 13, color: 'white'}}>
                You pay:$500.99
              </Text>
            </View>

            <View style={styles.loginBtn}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                }}>
                Instant local transfers for just $0.99
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LocalTransfer')}
              style={{
                marginTop: '10%',
              }}>
              <Text
                style={{
                  fontSize: 21,

                  color: 'white',
                }}>
                GET STARTED
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
    width: '80%',
    height: '7%',
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
