import Geolocation from '@react-native-community/geolocation';
import {useNavigation ,useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import React, {useState, useEffect, useRef} from 'react';
import {AppState, FlatList, Image, PermissionsAndroid, Pressable, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getOrdersForDeliveryBoy} from '../services/order.service';
import styles from '../stylecomponents/Style';
import {getAuth} from '../utils/auth';
import {toastError} from '../utils/toastError';
import { generateFilePath } from '../utils/file';
import { generalModelStatuses } from '../utils/constant';
export default function Home2() {
  const navigate = useNavigation();

  const [userObj, setUserObj] = useState(null);
  const [ordersArr, setOrdersArr] = useState([]);
  const isFocused = useIsFocused();

  const [regionObj, setRegionObj] = useState(null);
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

  const getLoggedInUser = async () => {
    try {
      let data = await getAuth();

      console.log(JSON.stringify(data.user,null,2),"")

      setUserObj(data);
    } catch (error) {
      toastError(error);
    }
  };

  const getOrdersByLocation = async () => {
    try {
      let query = `lat=${regionObj?.latitude}&lng=${regionObj?.longitude}`;
      const {data: res} = await getOrdersForDeliveryBoy(query);
      if (res) {
        setOrdersArr(res.data);
      }
    } catch (error) {
      toastError(error);
    }
  };

  useEffect(() => {
    if (regionObj && regionObj?.latitude) {
      getOrdersByLocation();
    }
  }, [regionObj]);

  useEffect(() => {
    if(isFocused){
      requestPermission();
      getLoggedInUser();
    }

  }, [isFocused]);

  const [categoryname1, setcategoryname1] = useState([
    {
      trackingnumber: '#124 784 8754',
      status: 'Pending',
      starttgrcking: 'Jamia Miliya, South Delhi',
      endtgrcking: 'NSP, New Delhi',
      timedate: '24 Jun, 16:32',
    },
    {
      trackingnumber: '#124 784 8754',
      status: 'Pending',
      starttgrcking: 'Jamia Miliya, South Delhi',
      endtgrcking: 'NSP, New Delhi',
      timedate: '24 Jun, 16:32',
    },
    {
      trackingnumber: '#124 784 8754',
      status: 'Pending',
      starttgrcking: 'Jamia Miliya, South Delhi',
      endtgrcking: 'NSP, New Delhi',
      timedate: '24 Jun, 16:32',
    },
    {
      trackingnumber: '#124 784 8754',
      status: 'Pending',
      starttgrcking: 'Jamia Miliya, South Delhi',
      endtgrcking: 'NSP, New Delhi',
      timedate: '24 Jun, 16:32',
    },
    {
      trackingnumber: '#124 784 8754',
      status: 'Pending',
      starttgrcking: 'Jamia Miliya, South Delhi',
      endtgrcking: 'NSP, New Delhi',
      timedate: '24 Jun, 16:32',
    },
    {
      trackingnumber: '#124 784 8754',
      status: 'Pending',
      starttgrcking: 'Jamia Miliya, South Delhi',
      endtgrcking: 'NSP, New Delhi',
      timedate: '24 Jun, 16:32',
    },
  ]);
  const rendercategoryname1 = ({item, index}) => {
    return (
      <Pressable onPress={() =>item?.deliveryBoyStatus.currentStatus == generalModelStatuses?.REACHED ? navigate.navigate('Delivered', {orderId: item?._id}) :  navigate.navigate('OrderAccept', {orderId: item?._id})} style={styles1.boxtraking}>
        <View style={styles1.toptrakinghead}>
          <View>
            <Text style={styles1.tackingnam}>Tracking Number</Text>
            <Text style={styles1.tackingnum}>{item?._id}</Text>
          </View>
          <Text style={styles1.btnpading}>{item?.deliveryBoyStatus.currentStatus ? item?.deliveryBoyStatus.currentStatus: item?.status}</Text>
        </View>

        <View style={{width: '100%', borderRadius: 1, borderWidth: 0.5, borderColor: '#e7e7e7', borderStyle: 'solid', marginVertical: 10}} />

        <View style={styles1.flex_list}>
          <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
            <Entypo name="circle" size={16} color="#F95A54" />
            <Text style={styles1.stat_jueary}>{item?.storeObj?.storeAddressObj?.addressName}</Text>
          </View>
          <Text style={styles1.date_time}>{moment(item?.createdAt).format('DD-MM-YYYY')}</Text>
        </View>

        <View style={{borderStyle: 'dotted', borderLeftColor: '#e7e7e7', borderLeftWidth: 1, height: 40, marginLeft: 8}}></View>
        <View style={styles1.flex_list}>
          <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
            <EvilIcons name="location" size={20} color="#000" style={{marginLeft: -2}} />
            <Text style={styles1.stat_jueary}>{item?.userAddress?.addressName}</Text>
          </View>
          <Text style={styles1.date_time}>{moment(item?.createdAt).format('DD-MM-YYYY')}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f6f6f6" color="#000" />

      <View style={[styles.bgbodycolor, styles.flexbodycolorone, styles.prletive, {backgroundColor: '#f6f6f6'}]}>
        <Image source={require('../../assets/img/light_login.png')} style={styles.imglogcentr} />
        <View style={styles.pdlr5}>
          <View style={styles1.flexbetween}>
            <View style={styles1.rowfles}>
              {

                userObj && userObj?.user?.profile ? (
                  <Image source={{uri: generateFilePath(userObj?.user?.profile)}} style={styles1.headerimg} />
                ) : (
                    <Image source={require('../../assets/img/profile.png')} style={styles1.headerimg} />

                )
              }
              <View>
                <Text style={styles1.helotext}>Hello {userObj?.user?.name},</Text>
                <Text style={styles1.heading}>Welcome Back! </Text>
              </View>
            </View>
            <View style={{position: 'relative'}}>
              <Ionicons name="notifications" size={19} color="black" />
              <Text
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 20,
                  backgroundColor: 'red',
                  position: 'absolute',
                }}></Text>
            </View>
          </View>
          <View style={styles1.searchbartop}>
            <View style={styles1.searchbar}>
              <AntDesign name="search1" size={19} color="#000" />
              <TextInput placeholder="Shipping number" style={styles1.inputtext} />
            </View>
            <MaterialCommunityIcons name="line-scan" size={20} color="#fff" style={styles1.iconseact} />
          </View>
          <View style={[styles1.flexbetwen, styles1.padingvr20]}>
            <Text style={styles1.heading_main}>Shipments</Text>
            <Pressable onPress={() => navigate.navigate('History2')}>
              <Text style={styles1.btnall}>View All</Text>
            </Pressable>
          </View>

          <FlatList
            data={ordersArr}
            keyExtractor={(item, index) => `${index}`}
            renderItem={rendercategoryname1}
            scrollEnabled
            style={{maxHeight: hp(85), width: '100%', paddingBottom: 100}}
            contentContainerStyle={{paddingVertical: 5, paddingBottom: 120, marginBottom: 30}}
          />
        </View>
      </View>
    </>
  );
}

const styles1 = StyleSheet.create({
  date_time: {
    color: '#959594',
    fontSize: 12,
    fontFamily: 'DMSans-Bold',
  },
  stat_jueary: {
    color: '#141312',
    fontFamily: 'DMSans-Bold',
    fontSize: 12,
    width: '70%',
  },
  flex_list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnpading: {
    backgroundColor: '#F95A54',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: '#fff',
    fontFamily: 'Merriweather-Bold',
    fontSize: 11,
  },
  tackingnum: {
    fontFamily: 'Merriweather-Bold',
    color: '#000',
    fontSize: 17,
  },
  tackingnam: {
    color: '#959594',
    fontSize: 13,
    marginBottom: 5,
  },
  toptrakinghead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxtraking: {
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    padding: 10,
    borderBottomColor: 'rgba(20, 19, 18, 0.1)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  btnall: {
    color: '#EB8E24',
    fontFamily: 'DMSans-Bold',
    fontSize: 16,
  },
  padingvr20: {
    paddingVertical: 20,
  },
  flexbetwen: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconseact: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'flex-end',
    textAlign: 'center',
    width: wp(4),
    backgroundColor: '#eb8e24',
    paddingVertical: 13,
  },

  searchbartop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
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
});
