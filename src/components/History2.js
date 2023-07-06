import {  FlatList,  Image,  ImageBackground,  Pressable,  ScrollView,  StyleSheet,  Text,  TextInput,  View,} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
import { getOrderById, getUserOrderApi } from '../services/order.service';
import { getAuth } from '../utils/auth';
import { toastError } from '../utils/toastError';
import { generalModelStatuses } from '../utils/constant';
import moment from 'moment';

export default function History2() {
    const navigate = useNavigation();
    const isFocused = useIsFocused();
    const [userObj, setUserObj] = useState(null);
    const [ordersArr, setOrdersArr] = useState([]);
    const [displayOrderArr, setDisplayOrderArr] = useState([]);
    const [rejectOrderArr, setRejectOrderArr] = useState([]);

    useEffect(() => {
      if(isFocused){
        getLoggedInUser();
      }
  
    }, [isFocused]);


    useEffect(() => {
      if(userObj  && userObj?._id){
        getUserOrder(userObj?._id);
        getRejectedOrder(userObj?._id)
      }
  
    }, [userObj]);

    
    useEffect(() => {
      if(rejectOrderArr){
        setDisplayOrderArr([...displayOrderArr,...rejectOrderArr]);
      }
  
    }, [rejectOrderArr]);
    
  const getLoggedInUser = async () => {
    try {
      let data = await getAuth();

      console.log(JSON.stringify(data.user,null,2),"-----")

      setUserObj(data?.user);
    } catch (error) {
      toastError(error);
    }
  };
    const getUserOrder = async (userID) => {
      try {

          let query = '';
          query += 'deliveryBoyId='+userID+'&reject=true'; 

          let { data: res } = await getUserOrderApi(query);
          if (res && res?.success) {
              console.log(res.data.length,"orders")
              setOrdersArr(res.data?.filter((el) => el.deliveryBoyStatus?.currentStatus !== generalModelStatuses.REJECT))
              setDisplayOrderArr(res.data?.filter((el) => el.deliveryBoyStatus?.currentStatus !== generalModelStatuses.REJECT))
          }
          return

      } catch (error) {
          console.error(error)
          toastError(error)
      }
  }


  const getRejectedOrder = async (userID) => {
    try {

        let query = '';
            query += 'deliveryId='+userID+'&reject=true'; 

        let { data: res } = await getUserOrderApi(query);
        if (res && res?.success) {
          console.log(res.data.length,"orders")
            setRejectOrderArr(res.data?.map((el) =>{
              el.deliveryBoyStatus =generalModelStatuses.REJECT;
              return el;

            }))
        }
        return

    } catch (error) {
        console.error(error)
        toastError(error)
    }
}


  const rendercategoryname1 = ({item, index}) => {
    return (
      <Pressable onPress={() => navigate.navigate('Delivered', {orderId: item?._id})} style={styles1.boxtraking}>
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


  const handleOrderTab =  (tab) => {
    let tempTabAr = [...navtabs];
    let index = tempTabAr.findIndex(el =>el.tabs == tab);
    console.log(index,"navtabsnavtabsnavtabsnavtabs")
    if(index == -1) return 0;

    tempTabAr = tempTabAr.map((el,ind) => {
      if(ind == index){

        el.active = true;
      } else {
        el.active = false;
      }
      return el;
    })

    console.log(tempTabAr,"tempTabArtempTabAr")
    setNavtabs([...tempTabAr])

    if(tab == 'Rejected'){
        setDisplayOrderArr(rejectOrderArr)
      return 0
    }
    if(tab == 'Completed'){
      setDisplayOrderArr(ordersArr.filter((el) => el.deliveryBoyStatus?.currentStatus == generalModelStatuses.DELEVERED))
      return 0
    }
    setDisplayOrderArr([...ordersArr,...rejectOrderArr]);
    return
  }

  const [navtabs, setNavtabs] = useState([
    {
        tabs:'All',
        active:true
    },
    {
        tabs:'Rejected',
        active:false
    },
    {
        tabs:'Completed',
        active:false
    }
 
   ]);
   const rendertabs = ({item, index}) => {
     return (
        <View style={styles1.flexlist}>
        <Pressable onPress={()=> handleOrderTab(item.tabs)}><Text  style={[item.active == false ? styles1.tabsnav: styles1.acitvetab,]}>{item.tabs}</Text></Pressable>
    </View>
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
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={ListHeader}
          ListFooterComponent={ListFooter}
        />


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
});
