import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, AppState, FlatList, PermissionsAndroid, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../stylecomponents/Style';
export default function Map(props) {
  const navigation = useNavigation();

  const [regionObj, setRegionObj] = useState(null);
  const [orderId, setOrderId] = useState(props?.route?.params?.orderId);
  const appState = useRef(AppState.currentState);
  const requestPermission = async () => {
    if (Platform.OS == 'android') {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, {
          title: 'Location Permission',
          message: 'Cool Photo App needs access to your camera ' + 'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        });
        console.log(granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('getting location');
          Geolocation.getCurrentPosition(
            position => {
              console.log(position);
              setRegionObj({latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0.00922 * 1.5, longitudeDelta: 0.00421 * 1.5});
            },
            async error => {
              Alert.alert(
                'Alert',
                'Please turn on your location services.If you already did please restart your application.',
                [
                  {
                    text: 'Restart',
                    onPress: () => {
                      BackHandler.exitApp();
                    },
                  },
                  {
                    text: 'Settings',
                    onPress: () => {
                      Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS');
                    },
                  },
                ],
                {cancelable: false},
              );
            },
          );
        } else {
          // alert('Unable to create wall');
          // navigation.navigate('Home');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      const temp = await Geolocation.requestAuthorization();
      console.log(temp, 'ASD');
      await Geolocation.getCurrentPosition(position => setRegionObj({latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0.00922 * 1.5, longitudeDelta: 0.00421 * 1.5}));
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const [navtabs, setNavtabs] = useState([
    {
      tabs: 'All',
      active: true,
    },
    {
      tabs: 'Open Now',
      active: false,
    },
    {
      tabs: 'Nearby',
      active: false,
    },
    {
      tabs: 'Visited',
      active: false,
    },
    {
      tabs: 'Visited',
      active: false,
    },
    {
      tabs: 'Visited',
      active: false,
    },
  ]);
  const rendertabs = ({item, index}) => {
    return (
      <View style={styles1.flexlist}>
        <Pressable onPress={() => navigate.navigate('Menu')}>
          <Text style={[item.active == false ? styles1.tabsnav : styles1.acitvetab]}>{item.tabs}</Text>
        </Pressable>
      </View>
    );
  };

  const [addresstab, setAddresstab] = useState([
    {
      tabs: 'All',
      active: true,
    },
    {
      tabs: 'Open Now',
      active: false,
    },
    {
      tabs: 'Nearby',
      active: false,
    },
    {
      tabs: 'Visited',
      active: false,
    },
    {
      tabs: 'Visited',
      active: false,
    },
    {
      tabs: 'Visited',
      active: false,
    },
  ]);
  const renderaddress = ({item, index}) => {
    return (
      <View style={styles1.box_address}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles1.name}>Suresh Singh</Text>
            <Text style={styles1.adess}>W Market Rd, Gouripur 3517</Text>
          </View>
          <Text style={styles1.opentext}>Open</Text>
        </View>
        <View style={styles1.flexbetewn}>
          <Text style={styles1.tiemdatre}>Open : 9am - 8pm</Text>
          <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
            <Ionicons name="call-outline" size={18} color="#fff" style={styles1.acitvetab1} />
            <EvilIcons name="sc-telegram" size={18} color="#fff" style={styles1.acitvetab1} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={{flex: 1}}>
        <View style={[styles.pdlr5, {justifyContent: 'space-between', flex: 1}]}>
          {regionObj && (
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles1.map}
              region={regionObj}></MapView>
          )}
          <View style={styles1.box_address}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles1.name}>Suresh Singh</Text>
                <Text style={styles1.adess}>W Market Rd, Gouripur 3517</Text>
              </View>
              <Text style={styles1.opentext}>Open</Text>
            </View>
            <View style={styles1.flexbetewn}>
              <Text style={styles1.tiemdatre}>Open : 9am - 8pm</Text>
              <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                <Ionicons name="call-outline" size={18} color="#fff" style={styles1.acitvetab1} />
                <EvilIcons name="sc-telegram" size={18} color="#fff" style={styles1.acitvetab1} />
              </View>
            </View>
          </View>
          {/* <Pressable style={styles1.iconseact} onPress={() => navigation.navigate('Home')}>
            <AntDesign name="arrowleft" size={20} color="#fff" />
          </Pressable> */}
          <View></View>
        </View>
      </View>
    </>
  );
}

const styles1 = StyleSheet.create({
  map: {
    height: '70%',
    width: wp(94),
  },
  tiemdatre: {
    backgroundColor: '#F5F5F5',
    padding: 7,
    borderRadius: 8,
  },
  flexbetewn: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  opentext: {
    color: '#3AC479',
    fontFamily: 'DMSans-Bold',
  },
  adess: {
    color: '#959594',
    fontSize: 13,
  },
  name: {
    fontFamily: 'Merriweather-Bold',
    color: '#000',
    fontSize: 18,
  },
  box_address: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 18,
    marginRight: 15,
    width: wp(80),
    justifyContent: 'flex-end',
    flex: 1,
  },
  acitvetab: {
    backgroundColor: '#EB8E24',
    color: '#fff',
    padding: 10,

    marginRight: 10,
    borderRadius: 8,
  },
  acitvetab1: {
    backgroundColor: '#EB8E24',
    color: '#fff',
    padding: 8,
    textAlign: 'center',
    // marginRight: 10,
    borderRadius: 8,
  },
  tabsnav: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    color: '#858584',
    marginRight: 10,
  },
  flexlist: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  inputtext: {
    paddingRight: 25,
  },
  iconright: {
    position: 'absolute',
    right: 10,
  },
  mapflex: {
    zIndex: 1,
    position: 'absolute',
  },
  btnvisble: {
    zIndex: 999,
  },
  fntsi13: {
    fontSize: 13,
  },
  searchbartop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
    position: 'relative',
  },
  headerimg: {
    width: wp(15),
    height: hp(7),
  },
  rowfles: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  flexbetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingVertical: 15,
  },
  helotext: {
    color: 'rgba(20, 19, 18, 0.5)',
    fontSize: 13,
  },
  heading: {
    fontSize: 16,
    color: '#000',
  },
  searchbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 8,
    flex: 4,
  },
  heading_main: {
    fontFamily: 'Merriweather-Bold',
    color: '#000',
    fontSize: 17,
  },
  iconseact: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'red',

    backgroundColor: '#eb8e24',
    paddingVertical: 12,
  },
});
