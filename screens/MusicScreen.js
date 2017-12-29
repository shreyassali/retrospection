import React from 'react';
import { ScrollView, StyleSheet, Dimensions, View } from 'react-native';

import MusicCard from '../components/MusicCard';


import firebase from 'firebase';
import Banner from '../components/Banner';

const { width } = Dimensions.get('window');

export default class MusicScreen extends React.Component {
  state = {
    isLoadingComplete: false,
    audioList: null
  };

  static navigationOptions = ({ navigation, screenProps }) => ({
    header:(
      <Banner headerText={'Select Your Music'}/>
    ),
  });

  componentDidMount() {
 		setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
    if(this.state.isLoadingComplete) {
      return;
    }
    //Read from firebase
    var musicList = [];
    firebase.database().ref('audioList').once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var audio = childSnapshot.val();
        audio.id = childSnapshot.key;
        console.log('one audio at a time' + audio.name);
        musicList.push(audio);
      });
      console.log('Music List' + musicList);
      return musicList;
    }).then((musicList) => this.setState({isLoadingComplete: true,
                  audioList: musicList}));
    console.log('Audio' + this.state.audioList);
 	}

  render () {
    const {state} = this.props.navigation;

    //console.log('Audio' + this.state.audioList);

    return (

      <ScrollView
        ref={(scrollView) => { this.scrollView = scrollView; }}
        style={styles.container}
        horizontal= {true}
        decelerationRate={0}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        contentInset={{ top: 0, left: 30, bottom: 0, right: 30, }}>

        <MusicCard audiolist={this.state.audioList}/>

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
