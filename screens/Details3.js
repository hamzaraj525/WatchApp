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
export default class Details3 extends Component {
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
            <Progress.Bar color="white" progress={0.4} width={200} />
          </View>
          <Text
            style={{
              marginTop: '16%',
              marginBottom: '3%',
              fontSize: 28,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Usual purpose of transfers
          </Text>

          <MyCheckBox
            title="Everyday purchases"
            themeColor="white"
            checked={this.state.fi}
            onIconPress={() =>
              this.setState({
                fi: !this.state.fi,
              })
            }
          />
          <MyCheckBox
            title="Pay suppliers and /or employees"
            themeColor="white"
            checked={this.state.se}
            onIconPress={() =>
              this.setState({
                se: !this.state.se,
              })
            }
          />
          <MyCheckBox
            title="Manage multiple currencies"
            themeColor="white"
            checked={this.state.th}
            onIconPress={() =>
              this.setState({
                th: !this.state.th,
              })
            }
          />
          <MyCheckBox
            title="other business activities"
            themeColor="white"
            checked={this.state.fo}
            onIconPress={() =>
              this.setState({
                fo: !this.state.fo,
              })
            }
          />

          <TouchableOpacity
            style={{
              width: '74%',
              marginTop: '27%',
              height: '12%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}
            onPress={() => this.props.navigation.navigate('Detaisl6')}>
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
