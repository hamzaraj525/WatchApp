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

export default class PaymentProceed extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#B99156" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            paddingBottom: '30%',
            paddingTop: '10%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              marginTop: '4%',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              height: 156,
            }}>
            <Image
              style={{marginBottom: '9%'}}
              source={require('./images/wallModified.png')}
            />
          </View>
          <Text
            style={{
              marginTop: '5%',
              marginBottom: '9%',
              fontSize: 22,
              color: 'white',
              fontWeight: 'bold',
            }}>
            PAYMENT PROCEDURE
          </Text>
          <View
            style={{paddinHorizontal: 14, flexDirection: 'column', flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42%',
                  height: 120,
                }}>
                <Image
                  style={styles.image}
                  source={require('./images/sop.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '43%',
                  height: 120,
                }}>
                <Image
                  style={styles.image}
                  source={require('./images/opop.jpg')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '42%',
                height: 120,
              }}>
              <Image style={styles.image} source={require('./images/qp.jpg')} />
            </TouchableOpacity>
            <View
              style={{
                marginTop: '-25%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42%',
                  height: 120,
                }}>
                <Image
                  style={styles.image}
                  source={require('./images/qp.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '43%',
                  height: 120,
                }}>
                <Image
                  style={styles.image}
                  source={require('./images/vsaa.jpg')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '42%',
                height: 120,
              }}>
              <Image
                style={styles.image}
                source={require('./images/vsaa.jpg')}
              />
            </TouchableOpacity>
            <View
              style={{
                marginTop: '-24%',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                SHIPMENT COST
              </Text>
              <TextInput
                value={this.state.text}
                style={styles.input}
                onChangeText={text => this.setState({text})}
              />
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.loginBtn,
              {
                marginTop: 4,
                marginBottom: '7%',
                backgroundColor: 'white',
                height: '6%',
              },
            ]}
            onPress={() => this.props.navigation.navigate('ProceedScreen')}>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: 'black'}}>
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
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#B99156',
    alignItems: 'center',
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
    marginTop: '-3%',
    backgroundColor: 'white',
    width: '40%',
    height: '100%',
  },
});
