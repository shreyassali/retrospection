import React from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const Banner = (props) => (
  <SafeAreaView forceInset={{ vertical: 'never' }}>
    <ImageBackground source={require('../assets/images/header.png')} style={styles.bgImage}>
        <View style={styles.banner}>
            <Text style={styles.title}>{props.headerText}</Text>
        </View>
    </ImageBackground>
  </SafeAreaView>
);

export default Banner;

const styles = StyleSheet.create({
  bgImage: {
    width: Dimensions.get('window').width,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor:'transparent',
  },
  title: {
    fontSize: 20,
    fontWeight: '250',
    color: '#fff',
    margin: 10,
    alignItems: 'center',
  },
});
