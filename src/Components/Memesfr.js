import React, { useState } from 'react';
import { StyleProp, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import Login from './WelcomeScreen/Login';
import colors from '../theme';
import CreateAccount from './WelcomeScreen/CreateAccount';
import LoginAction from './WelcomeScreen/LoginAction';
import { useAuth } from '../Contexts/AuthContext';
import Castle from '../../Assets/Castle.svg';
import Home from './HomeScreen/Home';
import Profile from './HomeScreen/Profile';
import Messages from './HomeScreen/Messages';
import Upload from './HomeScreen/Upload';
import Search from './HomeScreen/Search';

import HomeIcon from '../../Assets/BottomNav/Home.svg';
import MessageIcon from '../../Assets/BottomNav/Message.svg';
import ProfileIcon from '../../Assets/BottomNav/User.svg';
import PostIcon from '../../Assets/BottomNav/Plus.svg';
import SearchIcon from '../../Assets/BottomNav/Search.svg';

export default function Memesfr() {
  const { bg, textPrimary } = colors;

  const [activeScreen, setActiveScreen] = useState(0);

  // const { isSignedIn } = useAuth();

  const isSignedIn = true;

  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const StackHeader = () => {
    return (
      <>
        <Castle />
        <Text style={{ fontSize: 30, fontWeight: '700', color: 'white' }}>
          Memesfr
        </Text>
      </>
    );
  };

  const PostButton = ({ children, onPress }) => {
    return (
      <TouchableOpacity
        style={{
          height: '100%',
          backgroundColor: 'pink',
        }}
        onPress={onPress}
      >
        <View
          style={{
            width: 55,
            height: 45,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 15,
            border: colors.accent,
            backgroundColor: colors.textPrimary,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.accent,
            // tabBarOptions: {
            //   style: {
            //     display: 'flex',
            //     justifyContent: 'flexStart',
            //     backgroundColor: 'pink',
            //     alignItems: 'flexStart',
            //   },
            // },
            tabBarStyle: {
              // position: 'absolute',
              // bottom: 20,
              // left: 10,
              // right: 10,
              // elevation: 0,
              // justifyContent: 'center',
              // flexDirection: 'row',
              borderTopColor: colors.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: colors.bg,
              width: '100%',
              // display: 'flex',
              // borderRadius: 15,
              // alignItems: 'center',
              height: 80,
            },
            tabBarItemStyle: {},
          }}
        >
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <HomeIcon
                  style={{
                    width: 35,
                    height: 35,

                    position: 'relative',
                  }}
                  stroke={focused ? colors.textPrimary : colors.textSecondary}
                />
              ),
            }}
            component={Home}
            name="Home"
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <SearchIcon
                  style={{ width: 35, height: 35, marginRight: 10 }}
                  stroke={focused ? colors.textPrimary : colors.textSecondary}
                />
              ),
            }}
            component={Search}
            name="Search"
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ size, focused }) => (
                <View
                  style={{
                    position: 'relative',

                    backgroundColor: 'white',
                    borderRadius: 15,
                    // paddingLeft: 8,
                    // paddingRight: 8,
                    paddingTop: 5,
                    paddingBottom: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <PostIcon
                    style={{
                      width: 50,
                      height: 30,
                    }}
                    stroke={colors.bg}
                  />
                </View>
              ),
              // tabBarButton: (props) => <PostButton {...props} />,
            }}
            component={Upload}
            name="Upload"
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ size, focused }) => (
                <MessageIcon
                  style={{ width: 40, height: 40, marginLeft: 10 }}
                  stroke={focused ? colors.textPrimary : colors.textSecondary}
                />
              ),
            }}
            component={Messages}
            name="Messages"
            style={{ textAlignVertical: 'center' }}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <ProfileIcon
                  style={{ width: 35, height: 35 }}
                  stroke={focused ? colors.textPrimary : colors.textSecondary}

                  // bgColor={barColor} // background space color.
                  // {...props}
                />
              ),
            }}
            component={Profile}
            name="Profile"
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: !isSignedIn,
            headerBackTitle: '',
            // headerLeft: () => (
            //   <Text style={{color: 'white', fontSize: 15}}>Cancel</Text>
            // ),
            // headerBackVisible
            headerShadowVisible: false,
            headerTintColor: 'white',
            headerBackTitleVisible: true,
            headerStyle: {
              colors: textPrimary,
              backgroundColor: bg,
              shadowColor: 'transparent',
              shadowRadius: 0,
              shadowOffset: {
                height: 0,
              },
            },
            headerTitle: () => <StackHeader />,
          }}
        >
          <Stack.Screen
            name="Welcome"
            options={{ headerShown: false }}
            component={WelcomeScreen}
          />
          <Stack.Screen name="Create Account" component={CreateAccount} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Login Action" component={LoginAction} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
