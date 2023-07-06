import {FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../stylecomponents/Style';
import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {getAuth, logoutUser} from '../utils/auth';
import {TokenContext} from '../../App';
import {toastError} from '../utils/toastError';
import {getDashboardDataApi} from '../services/order.service';
import {generateFilePath} from '../utils/file';
export default function Profile(props) {
  const navigate = useNavigation();
  const isFocused = useIsFocused();

  const [isAuthorized, setIsAuthorized] = useContext(TokenContext);
  const [userObj, setUserObj] = useState(null);

  const getLoggedInUser = async () => {
    try {
      let data = await getAuth();
      console.log(JSON.stringify(data.user, null, 2), '-----');
      setUserObj(data?.user);
    } catch (error) {
      toastError(error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getLoggedInUser();
    }
  }, [isFocused]);

  return (
    <>
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#f6f6f6" color="#000" />

        <ScrollView style={[styles.bgbodycolor, styles.flexbodycolorone, styles.prletive, {backgroundColor: '#f6f6f6'}]}>
          <Image source={require('../../assets/img/light_login.png')} style={styles.imglogcentr} />
          <View style={styles.pdlr5}>
            <Text style={styles1.delivery_Histro}>Profile</Text>
            <Pressable style={styles1.boxtraking}>
              <View>
                <Text style={styles1.tackingnam}>Personal Details</Text>
              </View>

              <View style={styles1.toptrakinghead}>
                <View>
                  <Text style={styles1.tackingnum}>Name</Text>
                </View>
                <Text style={styles1.btnpading}>{userObj?.name}</Text>
              </View>
              <View style={styles1.toptrakinghead}>
                <View>
                  <Text style={styles1.tackingnum}>Email</Text>
                </View>
                <Text style={styles1.btnpading}>{userObj?.email}</Text>
              </View>

              <View style={styles1.toptrakinghead}>
                <View>
                  <Text style={styles1.tackingnum}>Phone</Text>
                </View>
                <Text style={styles1.btnpading}>{userObj?.phone}</Text>
              </View>

              <View style={styles1.toptrakinghead}>
                <View>
                  <Text style={styles1.tackingnum}>Address</Text>
                </View>
                <Text style={styles1.btnpading}>{userObj?.addressLine1} {userObj?.addressLine2}</Text>
              </View>

              <View style={styles1.toptrakinghead}>
                <View>
                  <Text style={styles1.tackingnum}>Area</Text>
                </View>
                <Text style={styles1.btnpading}>{userObj?.areaObj?.name}</Text>
              </View>
              
              <View style={styles1.toptrakinghead}>
                <View>
                  <Text style={styles1.tackingnum}>City</Text>
                </View>
                <Text style={styles1.btnpading}>{userObj?.cityObj?.name}</Text>
              </View>
              <View style={styles1.toptrakinghead}>
                <View>
                  <Text style={styles1.tackingnum}>State</Text>
                </View>
                <Text style={styles1.btnpading}>{userObj?.stateObj?.name}</Text>
              </View>

              <View style={styles1.toptrakinghead}>
                <View>
                  <Text style={styles1.tackingnum}>Phone</Text>
                </View>
                <Text style={styles1.btnpading}>{userObj?.phone}</Text>
              </View>

            </Pressable>
            <Pressable style={styles1.boxtraking}>
              <View>
                <Text style={styles1.tackingnam}>KYC Details</Text>
              </View>
               <View style={styles1.toptrakinghead}>
                <View>
                  <Text style={styles1.tackingnum}>Aadhar</Text>
                </View>
                <Text style={styles1.btnpading}>{userObj?.aadhar}</Text>
              </View>
              <View style={styles1.toptrakinghead}>
                <View>
                  {userObj?.aadharFile && (
                     <Image source={{uri: generateFilePath(userObj?.aadharFile)}} style={styles1.headerimg} />
                  )
                  }
                </View>
              </View>
              <View style={styles1.toptrakinghead}>
                <View>
                  <Text style={styles1.tackingnum}>Pan</Text>
                </View>
                <Text style={styles1.btnpading}>{userObj?.pan}</Text>
              </View>
              <View style={styles1.toptrakinghead}>
                <View>
                  {userObj?.panFile && (
                     <Image source={{uri: generateFilePath(userObj?.panFile)}} style={styles1.headerimg} />
                  )
                  }
                </View>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </>
    </>
  );
}

const styles1 = StyleSheet.create({
  textsetting: {
    color: '#000',
    fontFamily: 'DMSans-Medium',
    fontSize: 14,
  },
  headerimg: {
    width: wp(50),
    height: hp(25),
  },
  flexrow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  flexbetwin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 7,
    marginBottom: 10,
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
    paddingVertical: 5,
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
  delivery_Histro: {
    color: '#141312',
    fontSize: 15,
    marginBottom: 10,
    fontFamily: 'DMSans-Bold',
    textAlign: 'center',
  },
  tackingnum: {
    fontFamily: 'Merriweather-Bold',
    color: '#000',
    fontSize: 15,
  },
  tackingnam: {
    color: '#959594',
    fontSize: 13,
    marginBottom: 5,
  },
});
