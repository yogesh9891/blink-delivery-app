// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import React from 'react';
// // import AntDesign from "react-native-vector-icons/AntDesign";
// // import Ionicons from "react-native-vector-icons/Ionicons";
// // import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// // import Octicons from "react-native-vector-icons/Octicons";
// // import Categories from '../../components/Categories';
// // import Home from '../../components/Home';
// // import StationeryHome from '../../components/StationeryHome';
// // import Subscription from '../../components/Subscription';
// const Tab = createBottomTabNavigator();
// export default function BottomTabNav() {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarActiveTintColor: '#EB8E24',
//             }}>
//             <Tab.Screen
//                 options={{
//                     headerShown: false,
//                     tabBarLabel: 'Home',
//                     tabBarIcon: ({ color, size }) => (
//                         <Octicons name="home" color={color} size={15} />
//                     ),
//                 }}
//                 name="Home" component={Home} />

//             <Tab.Screen
//                 options={{
//                     headerShown: false,
//                     tabBarLabel: 'Categories',
//                     tabBarIcon: ({ color, size }) => (
//                         <AntDesign namDashboardDashboardDashboarde="appstore-o" color={color} size={15} />
//                     ),

//                 }}
//                 name="My orders" component={Categories} />
//             <Tab.Screen
//                 options={{
//                     headerShown: false,

//                     tabBarLabel: 'Subscription',
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="calendar-clock-outline" color={color} size={15} />
//                     ),
//                 }}
//                 name="Subscription" component={Subscription} />
//             <Tab.Screen
//                 options={{
//                     headerShown: false,
//                     tabBarLabel: 'Stationery',
//                     tabBarIcon: ({ color, size }) => (
//                         <Ionicons name="md-library-outline" color={color} size={15} />
//                     ),

//                 }}
//                 name="StationeryHome" component={StationeryHome} />
//         </Tab.Navigator>
//     )
// }
