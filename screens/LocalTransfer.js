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
import {RadioButton} from 'react-native-paper';
import {CheckBox} from 'react-native-elements';

import {Picker} from '@react-native-picker/picker';
export default class LocalTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fi: false,

      time: 'Standard',
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
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
            }}>
            NEW TRANSFER
          </Text>
          <View
            style={{
              height: '100%',
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
            <View style={{marginBottom: '2%'}}>
              <Progress.Bar color="white" progress={0.5} width={309} />
            </View>
            <View style={styles.loginBtn}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                }}>
                Sending from
              </Text>
            </View>

            <View
              style={{
                alignItems: 'center',
                width: '74%',
                height: '15%',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: '25%',
                  width: '34%',
                  justifyContent: 'center',

                  alignItems: 'center',
                }}>
                <PhoneInput
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
              <View
                style={{
                  width: '44%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '50%',
                  borderColor: 'white',
                  borderWidth: 0.5,
                }}>
                <Text
                  style={{
                    color: 'white',
                    marginLeft: '3%',
                    fontSize: 14,
                  }}>
                  $400.00
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                width: '74%',
                height: '15%',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: '25%',
                  width: '34%',
                  justifyContent: 'center',

                  alignItems: 'center',
                }}>
                <PhoneInput
                  style={{
                    color: 'white',
                    height: '25%',
                    width: '34%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  initialCountry="pl"
                  ref="phone"
                />
              </View>
              <View
                style={{
                  width: '44%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '50%',
                  borderColor: 'white',
                  borderWidth: 0.5,
                }}>
                <Text
                  style={{
                    color: 'white',
                    marginLeft: '3%',
                    fontSize: 14,
                  }}>
                  Zt1 545.62
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 13,
                color: 'white',
              }}>
              1 GB = 5.15207 PLN | Delivery fee: $0.00
            </Text>

            <View
              style={{
                borderColor: 'white',
                borderWidth: 1,
                marginTop: '5%',
                width: '90%',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  marginHorizontal: '3%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton
                    color="white"
                    value="Standard"
                    status={
                      this.state.time === 'Standard' ? 'checked' : 'unchecked'
                    }
                    onPress={() => this.setState({time: 'Standard'})}
                  />
                  <Text style={styles.labelInputText}>
                    Delivery tomorrow by, 22.30
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                  }}>
                  $0.00
                </Text>
              </View>
              <Text
                style={{
                  marginLeft: '15%',
                  fontSize: 10,
                  color: 'white',
                }}>
                Standard
              </Text>
            </View>
            <View
              style={{
                borderColor: 'white',
                borderWidth: 1,
                marginTop: '5%',
                width: '90%',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  marginHorizontal: '3%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton
                    color="white"
                    value="Today"
                    status={
                      this.state.time === 'Today' ? 'checked' : 'unchecked'
                    }
                    onPress={() => this.setState({time: 'Today'})}
                  />
                  <Text style={styles.labelInputText}>
                    Delivery today, by 22.30
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                  }}>
                  $1.99
                </Text>
              </View>
              <Text
                style={{
                  marginLeft: '15%',
                  fontSize: 10,
                  color: 'white',
                }}>
                Today
              </Text>
            </View>
            <View
              style={{
                borderColor: 'white',
                borderWidth: 1,
                marginTop: '5%',
                width: '90%',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  marginHorizontal: '3%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton
                    color="white"
                    value="time"
                    status={this.state.time === 'Now' ? 'checked' : 'unchecked'}
                    onPress={() => this.setState({time: 'Now'})}
                  />
                  <Text style={styles.labelInputText}>
                    Delivery within by 30 minutes
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                  }}>
                  $2.99
                </Text>
              </View>
              <Text
                style={{
                  marginLeft: '15%',
                  fontSize: 10,
                  color: 'white',
                }}>
                Now
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
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
  labelInputText: {
    color: 'white',
    textAlign: 'left',
    marginVertical: 10,
    fontSize: 13,
  },
});
