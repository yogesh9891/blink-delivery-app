import {  FlatList,  Image,  ImageBackground,  Pressable,  ScrollView,  StyleSheet,  Text,  TextInput,  View,} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../stylecomponents/Style';
import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { getAuth, logoutUser } from '../utils/auth';
import { TokenContext } from '../../App';
import { toastError } from '../utils/toastError';
import { getDashboardDataApi } from '../services/order.service';
import { generateFilePath } from '../utils/file';

export default function Menu() {
    const  navigate = useNavigation()
    
  const [isAuthorized, setIsAuthorized] = useContext(TokenContext);
  const [userObj, setUserObj] = useState(null);
  const [userDashBordData, setUserDashBordData] = useState(null);

    const handleLogout=async()=>{
      await logoutUser()
      setIsAuthorized(false)
    }
    const isFocused = useIsFocused();
    useEffect(() => {
      if(isFocused){
        getLoggedInUser();
      }
  
    }, [isFocused]);

    useEffect(() => {
      if(userObj && userObj?._id){
        getDeliveryDashboardData(userObj?._id);
      }
  
    }, [userObj]);
  

    const getDeliveryDashboardData = async (userid) => {

      console.log(userid,"userObjuserObjuserObjuserObjuserObjuserObjuserObj")

      try {
        const {data: res} = await getDashboardDataApi(userid);
        if (res) {
          console.log(res)
          setUserDashBordData(res.data);
        }
      } catch (error) {
        toastError(error);
      }
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
  

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f6f6f6"
        color="#000"
      />

      <View
        style={[
          styles.bgbodycolor,
          styles.flexbodycolorone,
          styles.prletive,
          {backgroundColor: '#f6f6f6'},
        ]}>
        <Image
          source={require('../../assets/img/light_login.png')}
          style={styles.imglogcentr}
        />
        <View style={styles.pdlr5}>
          <View style={styles1.flexbetween}>
          <View style={styles1.rowfles}>
              {

                userObj && userObj?.profile ? (
                  <Image source={{uri: generateFilePath(userObj?.profile)}} style={styles1.headerimg} />
                ) : (
                    <Image source={require('../../assets/img/profile.png')} style={styles1.headerimg} />

                )
              }
              <View>
                <Text style={styles1.helotext}>Hello {userObj?.user?.name},</Text>
                <Text style={styles1.heading}>Welcome Back! </Text>
              </View>
            </View>
            <Pressable style={{position: 'relative'}} onPress={()=> navigate.navigate('Profile')
            }>
              <AntDesign name="edit" size={26} color="#EB8E24" />
            </Pressable>
          </View>
      
        <View style={styles1.complete_box}>
            <View style={{flex:1, alignItems:'center', borderRightColor:'#f0aa5b', borderRightWidth:1}}>
                <Text style={styles1.textwhitenum}>{userDashBordData ?userDashBordData?.totalOrder : '0' }</Text>
                <Text style={styles1.textwhite}>Completed</Text>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
                <Text style={styles1.textwhitenum}>{userDashBordData ?userDashBordData?.rejectOrder : '0' }</Text>
                <Text style={styles1.textwhite}>Rejected</Text>
            </View>
        </View>
        </View>
        <View style={[styles1.settng_section, styles.pdlr5]}>
            <Pressable onPress={()=> navigate.navigate('Map')} style={styles1.flexbetwin}>
                <View style={styles1.flexrow}>
                    <Image source={require('../../assets/img/Notification.png')} style={{width:wp(5), height:hp(3)}} resizeMode='contain' />
                    <Text style={styles1.textsetting}>Notification</Text>
                </View>
                <Entypo name='chevron-small-right' color='#898988' size={30} />
            </Pressable>
            <Pressable onPress={()=> navigate.navigate('Payment')}  style={styles1.flexbetwin}>
                <View style={styles1.flexrow}>
                    <Image source={require('../../assets/img/payment_11.png')} style={{width:wp(5), height:hp(3)}} resizeMode='contain' />
                    <Text style={styles1.textsetting}>Payments</Text>
                </View>
                <Entypo name='chevron-small-right' color='#898988' size={30} />
            </Pressable>

            <View style={styles1.flexbetwin}>
                <View style={styles1.flexrow}>
                    <Image source={require('../../assets/img/setting3.png')} style={{width:wp(5), height:hp(3)}} />
                    <Text style={styles1.textsetting}>Setting</Text>
                </View>
                <Entypo name='chevron-small-right' color='#898988' size={30} />
            </View>
            <View style={styles1.flexbetwin}>
                <View style={styles1.flexrow}>
                    <Image source={require('../../assets/img/ShieldDone.png')} style={{width:wp(5), height:hp(3)}} />
                    <Text style={styles1.textsetting}>Security</Text>
                </View>
                <Entypo name='chevron-small-right' color='#898988' size={30} />
            </View>
            <View style={styles1.flexbetwin}>
                <View style={styles1.flexrow}>
                    <Image source={require('../../assets/img/InfoCircle.png')} style={{width:wp(5), height:hp(3)}} />
                    <Text style={styles1.textsetting}>Help & Support</Text>
                </View>
                <Entypo name='chevron-small-right' color='#898988' size={30} />
            </View>
            <View style={styles1.flexbetwin}>
                <View style={styles1.flexrow}>
                    <Image source={require('../../assets/img/Document.png')} style={{width:wp(5), height:hp(3)}} />
                    <Text style={styles1.textsetting}>FAQ</Text>
                </View>
                <Entypo name='chevron-small-right' color='#898988' size={30} />
            </View>
            <Pressable onPress={()=>handleLogout()} style={styles1.flexbetwin}>
                <View style={styles1.flexrow}>
                    <Image source={require('../../assets/img/Login.png')} style={{width:wp(5), height:hp(3)}} />
                    <Text style={styles1.textsetting}>Logout</Text>
                </View>
                <Entypo name='chevron-small-right' color='#898988' size={30} />
            </Pressable>


        </View>


      </View>
    </>
  )
}

const styles1 = StyleSheet.create({
    textsetting:{
        color:'#000',
        fontFamily: 'DMSans-Medium',
        fontSize:14
    },
    flexrow:{
        display:'flex',
        flexDirection:'row',
        gap:10,
    },
    flexbetwin:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        borderBottomColor:'#d1d1d1',
        borderBottomWidth:1,
        borderStyle:'solid',
        paddingVertical:7,
        marginBottom:10,
    },
    settng_section:{
        backgroundColor:'#fff',
    },
    textwhitenum:{
        fontFamily: 'Merriweather-Bold',
        fontSize:25,
        color:'#fff',
        marginBottom:5,
    },
    textwhite:{
        color:'#fff',
        fontFamily: 'DMSans-Regular',
    },

    complete_box:{
        backgroundColor:'#EB8E24',
        borderRadius:8,
        display:'flex',
        flexDirection:'row',
        padding:10
    },


    date_time:{
        color: '#959594',
        fontSize:12,
        fontFamily: 'DMSans-Bold',
    },
    stat_jueary:{
        color: '#141312',
        fontFamily: 'DMSans-Bold',
        fontSize: 12,
    },
    flex_list:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    btnpading:{
        backgroundColor:'#F95A54',
        padding:5,
        paddingHorizontal:10,
        borderRadius:8,
        color:'#fff',
        fontFamily: 'Merriweather-Bold',
        fontSize:11,
    },
    tackingnum:{
    fontFamily: 'Merriweather-Bold',
    color: '#000',
    fontSize: 17,
    },
    tackingnam:{
        color: '#959594',
        fontSize:13,
        marginBottom:5,
    },
    toptrakinghead:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    boxtraking:{
        marginBottom:12,
        backgroundColor:'#fff',
        borderRadius:8,
        shadowColor: "#000",
        padding:10,
        borderBottomColor:'rgba(20, 19, 18, 0.1)',
        borderBottomWidth:1,
        borderStyle:'solid',
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
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
    backgroundColor: 'red',
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
});
