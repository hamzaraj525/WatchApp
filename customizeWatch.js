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

export default class customizeWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="white" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '115%',
          }}>
          <View style={styles.logo}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
              Customize Watch Display
            </Text>
            {/* <Image
              style={styles.image}
              source={require('./images/whatsap.png')}
            /> */}
          </View>
          <View
            style={{paddinHorizontal: 14, flexDirection: 'column', flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  marginBottom: 19,
                  borderRadius: 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48%',
                  height: 94,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={[
                    styles.loginText,
                    {marginTop: '-12%', fontSize: 20, color: 'black'},
                  ]}>
                  Straps
                </Text>

                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => this.props.navigation.navigate('Strap')}>
                  <Text style={styles.loginText}>Select</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginBottom: 19,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 13,
                  width: '48%',
                  height: 94,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={[
                    styles.loginText,
                    {marginTop: '-12%', fontSize: 20, color: 'black'},
                  ]}>
                  Dails
                </Text>
                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => {
                    alert('sign in ');
                  }}>
                  <Text style={styles.loginText}>Select</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  marginBottom: 19,
                  borderRadius: 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48%',
                  height: 94,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={[
                    styles.loginText,
                    {marginTop: '-12%', fontSize: 20, color: 'black'},
                  ]}>
                  Numbers
                </Text>

                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => {
                    alert('sign in ');
                  }}>
                  <Text style={styles.loginText}>Select</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginBottom: 19,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 13,
                  width: '48%',
                  height: 94,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={[
                    styles.loginText,
                    {marginTop: '-12%', fontSize: 20, color: 'black'},
                  ]}>
                  Needles
                </Text>
                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => {
                    alert('sign in ');
                  }}>
                  <Text style={styles.loginText}>Select</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  marginBottom: 19,
                  borderRadius: 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48%',
                  height: 94,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={[
                    styles.loginText,
                    {marginTop: '-12%', fontSize: 20, color: 'black'},
                  ]}>
                  Crowns
                </Text>

                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => {
                    alert('sign in ');
                  }}>
                  <Text style={styles.loginText}>Select</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginBottom: 19,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 13,
                  width: '46%',
                  height: 94,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={[
                    styles.loginText,
                    {marginTop: '-12%', fontSize: 20, color: 'black'},
                  ]}>
                  Text
                </Text>
                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() =>
                    this.props.navigation.navigate('CustomizedText')
                  }>
                  <Text style={styles.loginText}>Select</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.loginBtn,
              {
                marginBottom: '8%',
                backgroundColor: 'white',
                width: '55%',
                height: '8%',
              },
            ]}
            onPress={() => this.props.navigation.navigate('PaymentProceed')}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
              ORDER
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
    backgroundColor: '#B99156',
    alignItems: 'center',
  },
  loginBtn: {
    borderRadius: 14,
    width: '99%',
    position: 'absolute',
    bottom: 0,
    marginTop: '3%',
    height: '36%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: '37.8%',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: '170%',
    backgroundColor: 'white',
    marginBottom: '9%',
  },
});
