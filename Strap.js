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

export default class Strap extends Component {
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
            paddingBottom: 55,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginTop: '7%',
              marginBottom: '7%',
              fontSize: 27,
              color: 'white',
              fontWeight: 'bold',
            }}>
            SELECT STRAPS
          </Text>
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
                  width: '45%',
                  height: 130,
                  backgroundColor: 'white',
                }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://e7.pngegg.com/pngimages/54/459/png-clipart-belt-buckle-belt-buckle-strap-belt-fashion-black.png',
                  }}
                />

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
                  width: '45%',
                  height: 130,
                  backgroundColor: 'white',
                }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://e7.pngegg.com/pngimages/54/459/png-clipart-belt-buckle-belt-buckle-strap-belt-fashion-black.png',
                  }}
                />
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
                  width: '45%',
                  height: 130,
                  backgroundColor: 'white',
                }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://e7.pngegg.com/pngimages/54/459/png-clipart-belt-buckle-belt-buckle-strap-belt-fashion-black.png',
                  }}
                />

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
                  width: '45%',
                  height: 130,
                  backgroundColor: 'white',
                }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://e7.pngegg.com/pngimages/54/459/png-clipart-belt-buckle-belt-buckle-strap-belt-fashion-black.png',
                  }}
                />
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
                  width: '45%',
                  height: 130,
                  backgroundColor: 'white',
                }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://e7.pngegg.com/pngimages/54/459/png-clipart-belt-buckle-belt-buckle-strap-belt-fashion-black.png',
                  }}
                />

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
                  width: '45%',
                  height: 130,
                  backgroundColor: 'white',
                }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://e7.pngegg.com/pngimages/54/459/png-clipart-belt-buckle-belt-buckle-strap-belt-fashion-black.png',
                  }}
                />
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
                  borderRadius: 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '45%',
                  height: 130,
                  backgroundColor: 'white',
                }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://e7.pngegg.com/pngimages/54/459/png-clipart-belt-buckle-belt-buckle-strap-belt-fashion-black.png',
                  }}
                />

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
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 13,
                  width: '45%',
                  height: 130,
                  backgroundColor: 'white',
                }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://e7.pngegg.com/pngimages/54/459/png-clipart-belt-buckle-belt-buckle-strap-belt-fashion-black.png',
                  }}
                />
                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => {
                    alert('sign in ');
                  }}>
                  <Text style={styles.loginText}>Select</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#B99156',
    alignItems: 'center',
  },
  loginBtn: {
    borderRadius: 11,
    width: '99%',
    position: 'absolute',
    bottom: 0,
    marginTop: '3%',
    height: '31%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: '60%',
    height: '47.8%',
  },
});
