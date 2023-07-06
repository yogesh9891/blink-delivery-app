import React, {useContext} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BottomSheetContext} from '../../../App';
import History2 from '../../components/History2';
import Home2 from '../../components/Home2';

export const TabBar = () => {
  const [bottomSheetToggle, setBottomSheetToggle] = useContext(BottomSheetContext);
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';
    let library = '';
    switch (routeName) {
      case 'Home':
        icon = 'home-outline';
        library = 'ion-icon';
        break;
      case 'History':
        icon = 'clock-o';
        library = 'FontAwesome';
        break;
      case 'Chat':
        icon = 'chatbox-outline';
        library = 'ion-icon';
        break;
      case 'Menu':
        icon = 'apps-outline';
        library = 'ion-icon';

        break;
    }
    console.log(library, icon);
    return <>{library == 'ion-icon' ? <Ionicons name={icon} size={25} color={routeName === selectedTab ? '#6E1C2C' : 'gray'} /> : <FontAwesome name={icon} size={25} color={routeName === selectedTab ? '#6E1C2C' : 'gray'} />}</>;
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        strokeWidth={0.5}
        type="UP"
        strokeColor="#DDDDDD"
        height={55}
        circleWidth={55}
        bgColor="white"
        shadowStyle={styles.shawdow}
        screenOptions={{headerShown: false}}
        initialRouteName="Home"
        borderTopLeftRight
        renderCircle={({selectedTab, navigate}) => (
          <LinearGradient colors={['#F03893', '#F7A149']} style={styles.btnCircle}>
            <Animated.View>
              <TouchableOpacity onPress={() => navigate('Menu')}>
                <Ionicons name={'apps-outline'} color="#FFF" size={25} />
              </TouchableOpacity>
            </Animated.View>
          </LinearGradient>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen name="Home" component={Home2} position="LEFT" />
        <CurvedBottomBar.Screen name="History" component={History2} position="RIGHT" />

        {/* <CurvedBottomBar.Screen name="Chat" component={Chat} position="RIGHT" /> */}
        {/* <CurvedBottomBar.Screen name="Menu" component={Menu} position="RIGHT" /> */}
      </CurvedBottomBar.Navigator>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
