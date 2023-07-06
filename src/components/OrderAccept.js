import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, AppState, Linking, PermissionsAndroid, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {toastError, toastSuccess} from '../utils/toastError';
import {getOrderById, updateOrderStatusDelivery} from '../services/order.service';
import MapViewDirections from 'react-native-maps-directions';
import RBSheet from "react-native-raw-bottom-sheet";
import styles from '../stylecomponents/Style';
import { generalModelStatuses } from '../utils/constant';
import { getAuth } from '../utils/auth';

export default function OrderAccept(props) {
  const navigation = useNavigation();

  const [orderObj, setOrderObj] = useState(null);
  const [regionObj, setRegionObj] = useState(null);
  const [orderId, setOrderId] = useState(props?.route?.params?.orderId);
  const [originRegion, setOriginRegion] = useState(null);
  const [destinationRegion, setDestinationRegion] = useState(null);
  const [apiKey, setApiKey] = useState('AIzaSyBQ3hIdYYiD2NX-6uSuDn9-X37NHlgNU0M');
  const [userObj, setUserObj] = useState(null);

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
    getOrder();
  };

  const getLoggedInUser = async () => {
    try {
      let data = await getAuth();

      console.log(JSON.stringify(data.user,null,2),"-----")

      setUserObj(data?.user);
    } catch (error) {
      toastError(error);
    }
  };
  useEffect(() => {
    requestPermission();
    getLoggedInUser();
  }, []);


  const goToGoogleMap = async () => {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });

    let lat = regionObj?.latitude;
    let lng = regionObj?.longitude;
    const latLng = `${lat},${lng}`;
    const label = 'Google Map';
    console.log(url,"urlurlurlurlurlurl")
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });
    
    Linking.openURL(url);
  }
  const getOrder = async () => {
    try {
      const {data: res} = await getOrderById(orderId);
      if (res) {
        setOrderObj(res.data);
        let tempDestinationObj = {latitude: res?.data?.storeObj?.storeAddressObj?.location?.coordinates[1], longitude: res?.data?.storeObj?.storeAddressObj?.location?.coordinates[0]};
        let tempOriginObj = {latitude: res?.data?.userAddress?.location?.latitude, longitude: res?.data?.userAddress?.location?.longitude};
        setDestinationRegion(tempDestinationObj);
        setOriginRegion(tempOriginObj);
      }
    } catch (error) {
      toastError(error);
    }
  };

  const handleOrdeaStatus = async (status) => {
    try {

        let obj ={
          status
        }
      let {data:res}= await updateOrderStatusDelivery(orderId,obj);
      if(res.success){
        this.RBSheet.close();
        toastSuccess(res.message)
        if(status == generalModelStatuses.REACHED){
          navigation.navigate("Delivered",{orderId: orderObj?._id})
        }
        getOrder();
      }
    } catch (error) {
      this.RBSheet.close();
      toastError(error);

    }
  };
  

  useEffect(() => {
    console.log(originRegion, destinationRegion);
  }, [originRegion, destinationRegion]);

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
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center", zIndex: 99999 }}>
        <View>
          {regionObj && originRegion && destinationRegion && (
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles1.map}
              showsUserLocation
              showsBuildings
              showsCompass
              initialRegion={regionObj}>
              <MapViewDirections strokeWidth={6} strokeColor="#4a80f5" optimizeWaypoints={true} origin={originRegion} destination={destinationRegion} apikey={apiKey} />
            </MapView>
          )}
       <Pressable style={styles1.trackingdetial}>
          <View style={styles1.toptrakinghead}>
              <View>
                <Text style={styles1.tackingnam}>Tracking Number</Text>
                <Text style={styles1.tackingnum}>{orderObj?._id}</Text>
              </View>
              <Pressable onPress={()=>this.RBSheet.open()}><Text style={[styles1.btnpading,{fontSize:15}]}>View All</Text></Pressable>
         
              </View>
              </Pressable>
        <RBSheet ref={ref => { this.RBSheet = ref; }}
        height={400} openDuration={250} customStyles={{ container: { paddingHorizontal: 25, paddingVertical: 15, borderTopEndRadius: 20, borderTopLeftRadius: 20, } }}>

        <View>
        <View style={styles.rowflex1}>
              <Text style={{ color: '#595959', fontWeight: '600' }}>Delivery Details</Text>
              <Pressable  onPress={()=>this.RBSheet.close()} >
              <Text style={{ color: '#EB8E24', fontWeight: '600' }}><AntDesign name="close" size={22} /></Text>
              </Pressable>
            </View>
        <Pressable style={styles1.boxtraking}>
          
        <View style={styles1.toptrakinghead}>
        <View>
          <Text style={styles1.tackingnam}>Tracking Number</Text>
          <Text style={styles1.tackingnum}>{orderObj?._id}</Text>
        </View>
        <Text style={styles1.btnpading}>{orderObj?.deliveryBoyStatus?.currentStatus ? orderObj?.deliveryBoyStatus?.currentStatus: orderObj?.status}</Text>
        </View>

        <View style={{width: '100%', marginVertical: 10}} />

        <View style={styles1.flex_list}>
        <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
          <Entypo name="circle" size={16} color="#F95A54" />
          <Text style={styles1.stat_jueary}>{orderObj?.storeObj?.storeAddressObj?.addressName}</Text>
        </View>
        <Text style={styles1.date_time}>{moment(orderObj?.createdAt).format('DD-MM-YYYY')}</Text>
        </View>

        <View style={{borderStyle: 'dotted', borderLeftColor: '#e7e7e7', borderLeftWidth: 1, height: 40, marginLeft: 8}}></View>
        <View style={styles1.flex_list}>
        <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
          <EvilIcons name="location" size={20} color="#000" style={{marginLeft: -2}} />
          <Text style={styles1.stat_jueary}>{orderObj?.userAddress?.addressName}</Text>
        </View>
        <Text style={styles1.date_time}>{moment(orderObj?.createdAt).format('DD-MM-YYYY')}</Text>
        </View>
        </Pressable>
        <View style={styles1.flexlist}>
        {
          orderObj?.deliveryBoyStatus?.currentStatus == generalModelStatuses.PENDING  || orderObj?.deliveryBoyStatus?.currentStatus == generalModelStatuses.REJECT ?  (
        <Pressable style={[styles1.flexRow, styles1.bottomBtn]} onPress={() => navigation.goBack()}>
        {/* <AntDesign name="arrowleft" size={20} color="#fff" /> */}
        <Text style={{fontSize: 18, fontFamily: 'DMSans-Medium', color: '#FFF'}}>Back</Text>
        </Pressable>
          ) :(
            <Pressable style={[styles1.flexRow, styles1.bottomBtn]} onPress={() => handleOrdeaStatus(generalModelStatuses.REJECT)} >
            {/* <AntDesign name="arrowleft" size={20} color="#fff" /> */}
            <Text style={{fontSize: 18, fontFamily: 'DMSans-Medium', color: '#FFF'}}>Cancel</Text>
            </Pressable>
              )}
           {
          orderObj?.deliveryBoyStatus?.currentStatus == generalModelStatuses.ASSIGNED  &&  (
            <Pressable style={[styles1.flexRow, styles1.bottomBtn]} onPress={() => handleOrdeaStatus(generalModelStatuses.ONWAY)}>
            {/* <AntDesign name="check" size={20} color="#fff" /> */}
            <Text style={{fontSize: 18, fontFamily: 'DMSans-Medium', color: '#FFF'}}>Start</Text>
            </Pressable>
          ) 
          }  
           {
            orderObj?.deliveryBoyStatus?.currentStatus == generalModelStatuses.PENDING  &&  ( 
            <Pressable style={[styles1.flexRow, styles1.bottomBtn]} onPress={() => handleOrdeaStatus(generalModelStatuses.ASSIGNED)}>
            {/* <AntDesign name="check" size={20} color="#fff" /> */}
            <Text style={{fontSize: 18, fontFamily: 'DMSans-Medium', color: '#FFF'}}>Accept</Text>
            </Pressable>
          )
        }
            {
            orderObj?.deliveryBoyStatus?.currentStatus == generalModelStatuses.ONWAY  &&  ( 
            <Pressable style={[styles1.flexRow, styles1.bottomBtn]} onPress={() => handleOrdeaStatus(generalModelStatuses.REACHED)}>
            {/* <AntDesign name="check" size={20} color="#fff" /> */}
            <Text style={{fontSize: 18, fontFamily: 'DMSans-Medium', color: '#FFF'}}>Reached</Text>
            </Pressable>
          )
        }
    
        </View>
        </View>
        <Pressable style={[styles1.flexRow, styles1.gogoleMapbottomBtn]} onPress={() => goToGoogleMap()}>
            {/* <AntDesign name="check" size={20} color="#fff" /> */}
            <Text style={{fontSize: 16, fontFamily: 'DMSans-Medium', color: '#FFF'}}>Google Map</Text>
            </Pressable>
        </RBSheet>
        </View>
      </View>
    </>
  );
}

const styles1 = StyleSheet.create({
  map: {
    height: '90%',
    width: wp(100),
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
  trackingdetial: {
    marginBottom: 0,
    padding: 12,
    elevation: 2,
    backgroundColor:'#fff',
  paddingBottom:20
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
    marginBottom: 0,
    
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
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  date_time: {
    color: '#959594',
    fontSize: 12,
    fontFamily: 'DMSans-Bold',
  },
  stat_jueary: {
    color: '#141312',
    fontFamily: 'DMSans-Bold',
    fontSize: 10,
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
    fontSize: 12,
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
    padding: 10,
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
  bottomBtn: {
    width: wp(40),
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#eb8e24',
    paddingVertical: 13,
  },
  gogoleMapbottomBtn: {
    marginVertical:10,
    width: wp(85),
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#eb8e24',
    paddingVertical: 13,
  },
});
