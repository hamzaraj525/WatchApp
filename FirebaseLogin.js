import React, {Component, useState, useEffect} from 'react';
import {
  BackHandler,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  ToastAndroid,
  StatusBar,
  Button,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AnimatedLoader from 'react-native-animated-loader';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import Firebase from '@react-native-firebase/app';

export default class FirebaseLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nameValidate: true,
      passwordValidate: true,
      password: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 3000);
  }
  // SignUp = (email, password) => {
  //   if (this.state.email.length > 0) {
  //     if (this.state.password.length > 0) {
  //       auth()
  //         .createUserWithEmailAndPassword(email, password)
  //         .then(() => {
  //           alert(' Succesfully signed Up!');
  //         })
  //         .catch(error => {
  //           if (error.code === 'auth/email-already-in-use') {
  //             alert('That email address is already in use!');
  //           }

  //           if (error.code === 'auth/invalid-email') {
  //             alert('That email address is invalid!');
  //           }
  //           if (error.code === 'auth/wrong-password') {
  //             alert('That password is weak!');
  //           }
  //         });
  //     } else {
  //       ToastAndroid.showWithGravityAndOffset(
  //         'Paaword Cannot be empty',
  //         ToastAndroid.SHORT,
  //         ToastAndroid.BOTTOM,
  //         10,
  //         60,
  //       );
  //     }
  //   } else {
  //     ToastAndroid.showWithGravityAndOffset(
  //       'Email Cannot be empty',
  //       ToastAndroid.SHORT,
  //       ToastAndroid.BOTTOM,
  //       10,
  //       60,
  //     );
  //   }
  // };
  LogIn = (email, password) => {
    if (this.state.email.length > 0) {
      if (this.state.password.length > 0) {
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            this.props.navigation.navigate('FirebaseForm');
          })
          .then(() => {
            ToastAndroid.showWithGravityAndOffset(
              'Succesfully signed in!',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              10,
              60,
            );
          })

          .catch(error => {
            if (error.code === 'auth/invalid-email') {
              alert('That email address is invalid!');
            }
            if (error.code === 'auth/wrong-password') {
              alert('That password is invalid!');
            }
          });
      } else {
        ToastAndroid.showWithGravityAndOffset(
          'Password Cannot be empty',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          10,
          60,
        );
      }
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Email Cannot be empty',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        10,
        60,
      );
    }
  };

  forgotPassword = email => {
    if (this.state.email.length > 0) {
      auth()
        .sendPasswordResetEmail(email)
        .then(function (user) {
          alert('Please check your email...');
        })
        .catch(function (e) {
          alert(
            'You Can Not Reset Your Passwoord Because There Is No Record Found Of This Email Adress',
            e,
          );
        });
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Please Enter your Email',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        10,
        60,
      );
    }
  };

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
            paddingBottom: '60%',
          }}>
          <SafeAreaView style={styles.logo}>
            {/* <Image style={styles.image} source={require('./images/user.png')} /> */}
          </SafeAreaView>

          <TextInput
            style={[
              styles.input,
              !this.state.nameValidate ? styles.error : null,
            ]}
            onChangeText={email => this.setState({email})}
            placeholder="Email"
          />
          <TextInput
            style={[
              styles.input,
              !this.state.passwordValidate ? styles.error : null,
            ]}
            onChangeText={password => this.setState({password})}
            placeholder="Password"
            secureTextEntry
            autoCorrect={false}
          />
          {/* Forgot Password Button */}
          <TouchableOpacity
            onPress={() =>
              this.forgotPassword(this.state.email, this.state.password)
            }>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              <ActivityIndicator
                style={styles.containerrrrr}
                color="#bc2b78"
                size="large"
              />;
              this.LogIn(this.state.email, this.state.password);
            }}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            //   onPress={() => this.props.navigation.navigate('Go')}
            onPress={() => this.props.navigation.navigate('FirebaseForm')}>
            <Text style={styles.loginText}>SIGNUP</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    borderWidth: 4,
    borderColor: 'red',
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'orange',
  },
  googleBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  image: {
    marginBottom: '8%',
    width: '42%',
    height: '22.5%',
  },
  containerrrrr: {
    flex: 1,
    justifyContent: 'center',
  },
});
