/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Routes as RouteNotAuthenticated } from './components/NotAuthenticated/Routes';

const NotAuthContainer = createAppContainer(RouteNotAuthenticated);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: 'SocialInsta', // eslint-disable-line
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <NotAuthContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
