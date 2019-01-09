import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text } from 'react-native';

const SignIn = (props) => {
  console.log(props);
  return <Text>Signin</Text>;
};
const SignUp = () => <Text>Signup</Text>;

const Routes = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUn: {
    screen: SignUp,
  },
}, {
  initialRouteName: 'SignIn',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'orange',
    },
  },
});

export { Routes };
