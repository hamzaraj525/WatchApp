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

export default class ProceedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#B99156" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '122%',
          }}>
          <View style={styles.logo}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
              COMPLETE WATCH
            </Text>
            {/* <Image
              style={styles.image}
              source={require('./images/whatsap.png')}
            /> */}
          </View>

          <Text
            style={{
              marginTop: '2%',
              marginBottom: '2%',
              fontSize: 26,
              fontWeight: 'bold',
              color: 'white',
            }}>
            TOTAL COST PRICE
          </Text>
          <View
            style={[
              styles.loginBtn,
              {
                marginBottom: '2%',
                backgroundColor: 'white',
                width: '65%',
                height: '30%',
              },
            ]}
            onPress={() => this.props.navigation.navigate('PaymentProceed')}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
              $400
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.loginBtn,
              {
                backgroundColor: 'white',
                width: '55%',
                height: '13%',
              },
            ]}
            onPress={() => this.props.navigation.navigate('weWelcome')}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
              PROCEED
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
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#B99156',
  },
  loginBtn: {
    width: '99%',
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
    marginTop: '14%',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: '321%',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: '5%',
  },
});
