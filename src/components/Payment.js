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
import { getUserWalletApi } from '../services/wallet.service';

export default function Payment() {
    const  navigate = useNavigation()
    
  const [isAuthorized, setIsAuthorized] = useContext(TokenContext);
  const [userObj, setUserObj] = useState(null);
  const [useWalletAmount, setuseWalletAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [transactionArr, setTransactionArr] = useState([]);
  const [displytransactionArr, setdisplyTransactionArr] = useState([]);
const [totalAmount, setTotalAmount] = useState(0);
const [transferAmount, settransferAmount] = useState(0);
    const isFocused = useIsFocused();
    useEffect(() => {
      if(isFocused){
        getLoggedInUser();
      }
  
    }, [isFocused]);

    useEffect(() => {
      if(userObj && userObj?._id){
        handleUserWallet(userObj?._id);
      }
  
    }, [userObj]);
  
    useEffect(() => {
        if(transactionArr && transactionArr?.length > 0){
            let trasnfer = transactionArr.filter(el => el.transactionType == 'Transfer').reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.amount;
              }, 0);
              let carttotal = transactionArr.filter(el => el.transactionType == 'Credit').reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.amount;
              }, 0);
              setTotalAmount(carttotal)
              settransferAmount(trasnfer)
        }
    
      }, [transactionArr]);
    

    const handleUserWallet = async (userId) => {
        try {
            let { data: res } = await getUserWalletApi(userId,'');
            if (res.data) {
                console.log(res.data, "transactionArrtransactionArrtransactionArr")
                setuseWalletAmount(res.data?.deliveryAmount)
                if (res.data.transactionHistoryArr && res.data.transactionHistoryArr?.length >= 0) {
                    setTransactionArr(res.data.transactionHistoryArr)
                    setdisplyTransactionArr(res.data.transactionHistoryArr)
                }
            }
        } catch (error) {
            toastError(error);
        }
    }

    const getLoggedInUser = async () => {
      try {
        let data = await getAuth();
        console.log(JSON.stringify(data.user,null,2),"-----")
        setUserObj(data?.user);
      } catch (error) {
        toastError(error);
      }
    };

    const restransactionHistory = ({ item, index }) => {
        return (

            <View style={[styles.rowflex1, styles1.bgwhitehist, styles.mttop10]}>
                <View>
                    <Text style={styles1.textedin}>{new Date(item.createdAt).toDateString()}</Text>
                    <Text style={styles1.onlintext}>{item.message}</Text>
                </View>
                {
                    item.transactionType == 'Credit' ? (
                        <Text style={[styles1.teminf]}>+ ₹ {item.amount}</Text>
                    ) : (<Text style={[styles1.teminf, { color: '#FF0000' }]}>- ₹ {item.amount}</Text>)
                }
            </View>
        );
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
        <Text style={styles1.delivery_Histro}>Payment History</Text>
        </View>
        <View style={styles1.complete_box}>
            <View style={{flex:1, alignItems:'center', borderRightColor:'#f0aa5b', borderRightWidth:1}}>
                <Text style={styles1.textwhitenum}>{totalAmount}</Text>
                <Text style={styles1.textwhite}>Total</Text>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
                <Text style={styles1.textwhitenum}>{transferAmount}</Text>
                <Text style={styles1.textwhite}>Transfer</Text>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
                <Text style={styles1.textwhitenum}>{useWalletAmount}</Text>
                <Text style={styles1.textwhite}>Pending</Text>
            </View>
        </View>
            <View style={{paddingHorizontal:10}}>
            <FlatList
                                contentContainerStyle={{}}
                                data={transactionArr}
                                renderItem={restransactionHistory}
                                keyExtractor={(item, index) => `${index}`}
                            />
            </View>

      </View>
    </>
  )
}

const styles1 = StyleSheet.create({
    delivery_Histro:{
        color: '#141312',
        fontSize:15,
        marginBottom:10,
        fontFamily: 'DMSans-Bold',
        textAlign:'center',
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
    bgwhitehist: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    textedin: {
        fontWeight: '600',
        color: '#000',
        fontSize: 14,
    },
    teminf: {
        fontSize: 12,
        fontWeight: '600',
        color: '#43D100',
        backgroundColor: '#E5EFF0',
        paddingHorizontal: 18,
        borderRadius: 100,
        paddingVertical: 8,
    },
    onlintext: {
        fontSize: 11,

    }
});
