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
export default class Detaisl6 extends Component {
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
            paddingBottom: '77%',
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
            Account Verification
          </Text>
          <Text
            style={{
              paddingHorizontal: '12%',
              marginTop: '2%',
              marginBottom: '3%',
              fontSize: 12,
              color: 'white',
            }}>
            Coomplete the sections below to speed up verification
          </Text>
          <TouchableOpacity
            style={{
              paddingHorizontal: '17%',
              justifyContent: 'space-between',
              width: Dimensions.get('window').width,
              marginTop: '7%',
              flexDirection: 'row',
            }}
            onPress={() => this.props.navigation.navigate('Identity')}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: 'white',
                borderWidth: 0.5,
                width: '19%',
                height: '51%',
                backgroundColor: '#200b54',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                }}>
                1
              </Text>
            </View>

            <View>
              <Text
                style={{
                  marginRight: '12%',
                  marginTop: '5%',
                  fontSize: 16,
                  color: 'white',
                }}>
                Identity check
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'grey',
                }}>
                Incomplete
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={38}
              color={'white'}
            />
          </TouchableOpacity>

          <View style={styles.loginBtn}>
            <Text
              style={{
                color: '#200b54',
                fontSize: 19,
              }}>
              We've got something for you! We'll send you a welcome gift as son
              as you pass verification!
            </Text>
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
    width: '90%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 12,
    marginBottom: '3%',
    height: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
