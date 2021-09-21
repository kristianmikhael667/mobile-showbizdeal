import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Info,
  Splash,
  Profile,
  Showbizlive,
  Transaksi,
  Message,
  DetailMarket,
  Login,
  Register,
  RegisterSuccess,
  DetailPortopolio,
  IDCard,
  MyDashboard,
  VirtualLive,
  MyTalent,
  ResultSearch,
  Showbizcare,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false, title: 'Marketplace'}}
      />
      <Tab.Screen
        name="Transaksi"
        component={Transaksi}
        options={{headerShown: false, title: 'Transaksi'}}
      />
      <Tab.Screen
        name="Showbizlive"
        component={Showbizlive}
        options={{headerShown: false, title: 'ShowbizLive'}}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{headerShown: false, title: 'Message'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false, title: 'Account'}}
      />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSuccess}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailMarket"
        component={DetailMarket}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPortopolio"
        component={DetailPortopolio}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IDCard"
        component={IDCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyDashboard"
        component={MyDashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyTalent"
        component={MyTalent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VirtualLive"
        component={VirtualLive}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ResultSearch"
        component={ResultSearch}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Showbizcare"
        component={Showbizcare}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
