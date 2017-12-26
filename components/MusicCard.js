import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';

export default class MusicCard extends React.Component {
  constructor(props){
    super(props)
  }
  render(props){
    return (
      <View style={styles.view}>
        <Card style={styles.containerStyle}>
          <CardItem>
            <Body style={styles.bodyStyle}>
              <Text style={styles.title}> Music Album</Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  containerStyle: {
      marginTop: 7,
      marginBottom: 7,
      marginLeft: 10,
      marginRight: 10,
      paddingHorizontal: 12,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
  },
  bodyStyle: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '200',
    color: '#444',
  },
  view: {
    marginTop: 100,
    backgroundColor: 'blue',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
  },
});
