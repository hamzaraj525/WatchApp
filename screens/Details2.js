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

import {Picker} from '@react-native-picker/picker';
export default class Details2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Business Category',

      val: '',
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
            justifyContent: 'center',
          }}>
          <View style={{marginTop: '5%'}}>
            <Progress.Bar color="white" progress={0.4} width={200} />
          </View>
          <Text
            style={{
              marginTop: '8%',
              marginBottom: '8%',
              fontSize: 28,
              color: 'white',
              fontWeight: 'bold',
            }}>
            What kind of business is it?
          </Text>

          <View
            style={{
              width: '80%',
              height: 40,
              borderWidth: 1,
              borderColor: 'white',
              justifyContent: 'center',
            }}>
            <Picker
              value={this.state.value}
              mode="dropdown"
              onValueChange={value => this.setState({val: this.state.value})}
              style={{height: 40}}>
              <Picker.Item
                color="white"
                label="Business Category"
                value="Business Category"
              />
              <Picker.Item color="red" label="Job" value="Job" />
            </Picker>
          </View>
          <TouchableOpacity
            style={{
              width: '74%',
              marginTop: '57%',
              height: '12%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}
            onPress={() => this.props.navigation.navigate('Details3')}>
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
