import React from 'react';
import { ScrollView, StyleSheet, Dimensions, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import firebase from 'firebase';
import Banner from '../components/Banner';

const { width } = Dimensions.get('window');

export default class LinksScreen extends React.Component {
  state = {
    isLoadingComplete: false,
    audioList: null
  };

  static navigationOptions = {
    header:(
      <Banner headerText={'Select Your Music'}/>
    ),
  };
  componentDidMount() {
 		setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
    if(this.state.isLoadingComplete) {
      return;
    }
    console.log("Music file");
    //Read from firebase
    var audioList = [];
    firebase.database().ref('audioList').once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        console.log("Music file 2");
        var audio = childSnapshot.val();
        audio.id = childSnapshot.key;
        console.log(audio);
        audioList.push(audio);
      });
      return audioList;
    }).then((audioList) => this.setState({isLoadingComplete: true,
                  audioList: audioList}));
 	}

  render() {
    return (

      <ScrollView
        ref={(scrollView) => { this.scrollView = scrollView; }}
        style={styles.container}
        horizontal= {true}
        decelerationRate={0}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        contentInset={{ top: 0, left: 30, bottom: 0, right: 30, }}>

        <View style={styles.view} />
        <View style={styles.view2} />
        <View style={styles.view} />
        <View style={styles.view2} />
        <View style={styles.view} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  view: {
    marginTop: 100,
    backgroundColor: 'blue',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
  },
  view2: {
    marginTop: 100,
    backgroundColor: 'red',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
  },
});
