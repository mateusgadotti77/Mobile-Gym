import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from './pages/Login/LoginPage';
import WorkoutPage from './pages/Workout/WorkoutPage';
import WorkoutDetailPage from './pages/Workout/WorkoutDetailPage';
import WorkoutFormPage from './pages/Workout/WorkoutFormPage';

import logo from './assests/mobileGym.png';

const AppNavigator = createStackNavigator({
  'Login': {
    screen: LoginPage,
    navigationOptions: {
        header:null,
    }
  },
  'Main': {
      screen: WorkoutPage,
  },
  'WorkoutForm': {
      screen: WorkoutFormPage,
      navigationOptions: ({ navigation }) => {
          if (navigation.state.params && navigation.state.params.workoutToEdit) {
              return {
                  title: navigation.state.params.workoutToEdit.name,
              }
          }
          return {
              title: 'Novo Treino',
          };
      }
  },
  'WorkoutDetail': {
      screen: WorkoutDetailPage,
      navigationOptions: ({ navigation }) => {
          const { workout } = navigation.state.params;
          return {
              title: workout.name
          }
      }
  },
}, {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
        // headerTitle: <Image source={logo} />,
        headerTitle: 'Mobile Gym',
        headerTintColor: 'white',
        headerStyle:{
            backgroundColor: '#F5F5F5',
        }
    } 
});

export default createAppContainer(AppNavigator);