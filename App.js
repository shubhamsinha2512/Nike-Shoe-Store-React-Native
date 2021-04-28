import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {icons, COLORS, FONTS, SIZES} from './constants/index';

import {Home} from './screens/index';

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{
            title: 'SHOE SELECTOR',
            headerTintColor: COLORS.lightGray,
            headerTitleContainerStyle:{...FONTS.navTitle},

            headerLeft: ({onPress})=>{
              <TouchableOpacity
                style={{
                  marginLeft: SIZES.padding,
                }}

                onPress={onPress}
              >
                <Image 
                  source={icons.menu} 
                  resizeMode='contain' 
                  style={{
                    height:25, 
                    width:25,
                    backgroundColor:'black'
                  }} 
                />
              </TouchableOpacity>
            },

            headerRight: ()=>{
              <TouchableOpacity
                style={{
                  marginRight: SIZES.padding
                }}

                onPress={()=> alert('Header Right Pressed')}
              >
                <Image 
                  source={icons.search}
                  style={{
                    width: 38,
                    height: 38
                  }}
                />
              </TouchableOpacity>
            }

          }}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

const styles = StyleSheet.create({
  
});

export default App;
