import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import History2 from '../../components/History2';
import Home2 from '../../components/Home2';
import Map from '../../components/Map';
import Menu from '../../components/Menu';
import Order from '../../components/Order';
import OrderAccept from '../../components/OrderAccept';
import OrderArriving from '../../components/OrderArriving';
import OrderId from '../../components/OrderId';
import Orderprosser from '../../components/Orderprosser';
import Ordersummary from '../../components/Ordersummary';
import Otpverification from '../../components/Otpverification';
import PaymentOption from '../../components/PaymentOption';
import Profile from '../../components/Profile';
import Profilesetting from '../../components/Profilesetting';
import SingIn from '../../components/SingIn';
// import Wallet from '../../components/Wallet';
// import Walletsuccessful from '../../components/Walletsuccessful';
import {TabBar} from '../TabNavigator/BottomTabNavigator';
import Delivered from '../../components/Delivered';
import Payment from '../../components/Payment';
const Stack = createNativeStackNavigator();
export default function AuthorisedStack() {
  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="Tab"
        component={TabBar}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="Menu"
        component={Menu}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'Map',
        }}
        name="Map"
        component={Map}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="Home"
        component={Home2}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="History2"
        component={History2}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="Delivered"
        component={Delivered}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="Payment"
        component={Payment}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="OrderArriving"
        component={OrderArriving}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="OrderAccept"
        component={OrderAccept}
      />

      {/* <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'Wallet',
        }}
        name="Wallet"
        component={Wallet}
      /> */}

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="Profilesetting"
        component={Profilesetting}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="SingIn"
        component={SingIn}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="PaymentOption"
        component={PaymentOption}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="OrderId"
        component={OrderId}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="Ordersummary"
        component={Ordersummary}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="Orderprosser"
        component={Orderprosser}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="Order"
        component={Order}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="Profile"
        component={Profile}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
        name="Otpverification"
        component={Otpverification}
      />
    </Stack.Navigator>
  );
}
