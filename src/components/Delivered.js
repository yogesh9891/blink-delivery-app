import {  FlatList,  Image,  ImageBackground,  Pressable,  ScrollView,  StyleSheet,  Text,  TextInput,  View,} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../stylecomponents/Style';
import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { getOrderById, getUserOrderApi, orderDeliveredApi } from '../services/order.service';
import { getAuth } from '../utils/auth';
import { toastError, toastSuccess } from '../utils/toastError';
import { generalModelStatuses } from '../utils/constant';
import moment from 'moment';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function Delivered(props) {
    const navigate = useNavigation();
    const isFocused = useIsFocused();
    const [userObj, setUserObj] = useState(null);
     const [orderId, setOrderId] = useState(props?.route?.params?.orderId);
    const [ordersArr, setOrdersArr] = useState([]);
    const [displayOrderArr, setDisplayOrderArr] = useState([]);
    const [rejectOrderArr, setRejectOrderArr] = useState([]);
    const [orderObj, setOrderObj] = useState(null);
    const [code, setCode] = useState('');
    useEffect(() => {
      if(isFocused){
        getLoggedInUser();
        getOrder()
      }
  
    }, [isFocused]);


    const getLoggedInUser = async () => {
      try {
        let data = await getAuth();
        console.log(JSON.stringify(data.user,null,2),"-----")
        setUserObj(data?.user);
      } catch (error) {
        toastError(error);
      }
    };
  
    
    const getOrder = async () => {
      try {
        const {data: res} = await getOrderById(orderId);
        if (res) {
          setOrderObj(res.data);
        }
      } catch (error) {
        toastError(error);
      }
    };
 
 
    const handleOrdeaStatus = async (status) => {
      try {

        if(code == ''){
          toastError("Please Enter Order Code")
        }
          let obj ={
            status,
            code
          }
        let {data:res}= await orderDeliveredApi(orderId,obj);
        if(res.success){
          toastSuccess(res.message)
          navigate.navigate("History2")
        }
      } catch (error) {
        toastError(error);
  
      }
    };
    


  const rendercategoryname1 = ({item, index}) => {
    return (
      <Pressable onPress={() => navigate.navigate('OrderAccept', {orderId: item?._id})} style={styles1.boxtraking}>
      <View style={styles1.toptrakinghead}>
        <View>
          <Text style={styles1.tackingnam}>Tracking Number</Text>
          <Text style={styles1.tackingnum}>{item?._id}</Text>
        </View>
        <Text style={styles1.btnpading}>{item?.deliveryBoyStatus?.currentStatus ? item?.deliveryBoyStatus?.currentStatus: item?.status}</Text>
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




    const ListHeader = () => {
        return (
            <>
               <FlatList
          data={navtabs}
          keyExtractor={(item, index) => `${index}`}
          renderItem={rendertabs}
          horizontal
          
          
          />
            </>
        )}


        
  const ListFooter = () => {
    return (
        <>

       
        <FlatList
          data={displayOrderArr}
          keyExtractor={(item, index) => `${index}`}
          renderItem={rendercategoryname1}
          scrollEnabled
          style={{maxHeight: hp(85), width: '100%'}}
          contentContainerStyle={{paddingVertical: 5,paddingBottom:120,  marginBottom:30,}}
          />
        </>
    )}
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
        <Text style={styles1.delivery_Histro}>Delivery History</Text>
        <Pressable style={styles1.boxtraking}>
        <View style={styles1.toptrakinghead}>
          <View>
            <Text style={styles1.tackingnam}>Tracking Number</Text>
            <Text style={styles1.tackingnum}>{orderObj?._id}</Text>
          </View>
          <Text style={styles1.btnpading}>{orderObj?.deliveryBoyStatus?.currentStatus ? orderObj?.deliveryBoyStatus?.currentStatus: orderObj?.status}</Text>
        </View>

{/* 
        <View style={[styles1.carduserhed, styles.rowflex1, styles.mbbotom10]}>
              <View style={styles.dflx}>
                <Image style={{width:wp(12), marginRight:10, height:hp(6)}} source={require('../../assets/img/userimg2.png')} />
                <View style={styles1}>
                  <Text style={{ fontWeight: '600', fontSize: 11, color: '#000' }}>Hi, I’m Pradeep</Text>
                  <Text style={{ fontSize: 9, fontWeight: '500', color: '#868686', }}>Your Delivert Partner</Text>
                </View>
              </View>
              <View>
                <View style={[styles1.vaccinabox, styles.dflx]}>
                  <Fontisto name={'injection-syringe'} size={16} color={'#3740AA'} style={styles1.vacciocn} />
                  <Text style={{ color: '#3740AA', fontSize: 11, fontWeight: '600' }}>Vaccinated</Text>
                </View>
              </View>
              <Feather name={'phone-call'} size={18} color={'#46B3A5'} style={styles1.callicon} />
            </View> */}

            {/* <View style={[styles1.carduserhed, styles.rowflex1, styles.mbbotom10]}>
              <View style={styles.dflx}>
                <Ionicons name={'bicycle'} size={21} color={'#4E1D14'} style={styles.mr2} />
                <Text style={[styles1.f10, styles.colorblck]}>Avarage riding speed during delivery </Text>
              </View>
              <View style={styles.dflx}>
                <Text style={[styles.fontw6, styles.colorblck, styles1.f12,]}>22 kmph </Text>
              </View>
            </View>

            <View style={[styles1.carduserhed, styles.rowflex1, styles.mbbotom10]}>
              <View style={styles.dflx}>
                <AntDesign name={'checkcircleo'} size={21} color={'#8ED16F'} style={styles.mr2} />
                <Text style={[styles1.f10, styles.colorblck]}>Helping delivery partners stay safe </Text>
              </View>
              <View style={styles.dflx}>
                <Text style={[styles.fontw6, styles.colorblck, styles1.f12,]}>Know More<Entypo name={'chevron-right'} size={12} color={'#000'} style={{ marginTop: -10, }} /> </Text>
              </View>
            </View> */}

            <View style={[styles1.deliverto, styles.mbbotom10]}>

              <View style={[styles.rowflex1]}>
                <View style={[styles.dflx]} >
                  <FontAwesome5 name={'box'} size={23} color={'#3740AA'} style={[styles.mr2, styles.dflx]} />
                  <Pressable onPress={()=> navigation.navigate("Ordersummary")}>
                    <Text style={[styles.colorblck, styles.fontw6, styles1.f13]}>Order ID: {orderObj?._id}</Text>
                    <View style={[styles.dflx, styles.mttop5]}>
                      <Text style={[styles.mr2, { fontSize: 9, color: '#868686', }]}>{orderObj?.totalItems} Items </Text>
                      <Text style={[styles.mr2, styles.fontw6, { fontSize: 9, color: '#868686', }]}>{orderObj?.totalQuantity}  Quantity</Text>
                    </View>
                  </Pressable>
                </View>
                {/* <Entypo name={'chevron-right'} size={25} color={'#EB8E24'} /> */}
              </View>
              <View style={[styles.rowflex1, styles.mttop10, styles.bordrtop]}>
                <View style={[styles.dflx]} >
                  <Entypo name={'circle'} size={23} color={'#FE4773'} style={[styles.mr2, styles.dflx]} />
                  <View>
                    <Text style={[styles.colorblck, styles.fontw6, styles1.f13, styles.mb5]}>From To</Text>
                    <Text style={{ fontSize: 9, color: '#868686',width:wp(70) }}>{orderObj?.storeObj?.storeAddressObj?.addressName}</Text>
                  </View>
                </View>
              </View>
              <View   style={[styles.rowflex1, styles.mttop10, styles.bordrtop]}>
                <View style={[styles.dflx]} >
                  <Entypo name={'location'} size={23} color={'#FE4773'} style={[styles.mr2, styles.dflx]} />
                  <View>
                    <Text style={[styles.colorblck, styles.fontw6, styles1.f13, styles.mb5]}>Delivered To</Text>
                           <Text style={{ fontSize: 9, color: '#868686',width:wp(70) }}>{orderObj?.userAddress?.addressName}</Text>
                  </View>
                </View>
              </View>
            </View>
      </Pressable>
            {
              orderObj && orderObj.deliveryBoyStatus.currentStatus == generalModelStatuses.REACHED && (
                <View style={styles1.boxtraking}> 
                <View>
          
                              <Text  style={{fontSize: 16, fontFamily: 'DMSans-Medium', color: '#000',textAlign:'center'}}> Enter OTP Send To Customer </Text>
                              <View style={styles1.containerForTextInput}>
          
                              <OTPInputView
                        style={{height: 70,width:wp(85)}}
                        pinCount={6}
                        autoFocusOnLoad={false}
                        editable
                        codeInputHighlightStyle={styles1.highlightedStyles}
                        codeInputFieldStyle={styles1.input}
                        onCodeFilled={code => {
                          console.log(code);
                          setCode(code)
                      }}
                      />
                              <View  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                              <Pressable style={[styles1.flexRow, styles1.bottomBtn]} onPress={() => handleOrdeaStatus(generalModelStatuses.DELEVERED)}>
                          {/* <AntDesign name="arrowleft" size={20} color="#fff" /> */}
                         <Text style={{fontSize: 18, fontFamily: 'DMSans-Medium', color: '#FFF',textAlign:'center'}}>Delivered</Text>
                        </Pressable>
                              </View>
                     
                          </View>
                      </View>
                    
                
                </View>
              )
            }
    
      
        {/* <FlatList
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={ListHeader}
          ListFooterComponent={ListFooter}
        /> */}


        </View>
      </View>
    </>
  )
}

const styles1 = StyleSheet.create({
    acitvetab:{
        backgroundColor:'#EB8E24',
        color:'#fff',
        padding:10,
     
        marginRight:10,
        borderRadius:8,

    },
    tabsnav:{
        backgroundColor:'#fff',
        borderRadius:8,
        padding:10,
        color:'#858584',
        marginRight:10,

    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    bottomBtn: {
      width: wp(50),
      marginLeft: 10,
      borderRadius: 10,
      backgroundColor: '#eb8e24',
      paddingVertical: 13,
    },
    flexlist:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginBottom:20,
    },
    date_time:{
        color: '#959594',
        fontSize:12,
        fontFamily: 'DMSans-Bold',
    },
    stat_jueary:{
        color: '#141312',
        fontFamily: 'DMSans-Bold',
        fontSize: 11,
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
    fontSize: 15,
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
        width:wp(90),
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
  delivery_Histro:{
    color: '#141312',
    fontSize:15,
    marginBottom:10,
    fontFamily: 'DMSans-Bold',
    textAlign:'center',
  },
  containerForTextInput: {
    width: wp(92),
  },
  input: {
    zIndex: 1500,
    color:'#000'
  },
  bgwhite: {
    backgroundColor: '#fff',
  },
  arvistatus: {
    backgroundColor: '#EDF0FF',
    paddingHorizontal: 15,
    paddingTop: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  carduserhed: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 10,
  },
  vaccinabox: {
    backgroundColor: '#C4E7E2',
    borderRadius: 50,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  vacciocn: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 50,
    marginRight: 8,
  },
  callicon: {
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 5,
    paddingVertical: 8,
    marginTop: 3,
    width: 33,
    height: 33,
    borderColor: '#46B3A5',
  },
  f10: {
    fontSize: 11,
  },
  f12: {
    fontSize: 11,
  },
  f13: {
    fontSize: 12,
  },
  deliverto: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  bordrbotm: {
    borderBottomWidth: 0.9,
    borderColor: '#868686',
  },
  bordrtop: {
    borderTopColor: 'red',
    borderTopWidth: 2,
    height: 15,

  }

});
