import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { Image, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { sendOtpApi } from '../services/user.service';
import styles from '../stylecomponents/Style';
import { toastError, toastSuccess } from '../utils/toastError';

export default function SingIn() {
  const navigate = useNavigation()
  


  const [mobile, setMobile] = useState("")
  const [isAuthorised, setIsAuthorised] = useState(false);

  

  const sendOtp = async () => {
    console.log("TESIT")
    if (`${mobile}` == '' || `${mobile}`?.length != 10) {
      toastError("Please Enter Valid Mobile Number")
      return
    }
    try {
      let obj = {
        phone: mobile
      }    
      
      console.log(obj, "otpResponseotpResponseotpResponseotpResponse")
      let res = await sendOtpApi(obj);
      console.log(res?.data, "otpResponse")
      let otpResponse = res.data

      if (otpResponse && otpResponse.status == true) {
        toastSuccess(otpResponse.msg);
        navigate.navigate('Otpverification', { mobile: mobile })

      } else {
        toastError(otpResponse.msg);
      }
    } catch (error) {
      console.error(error)
      toastError("Please Try Again");
    }
  }


  return (
    <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
      {/* <StatusBar barStyle="white-content" backgroundColor="#F6F6F6" color="#fff" /> */}
      <View style={[styles.bgbodycolor, styles.flexbodycolorone, styles.prletive]}>
        <Image source={require('../../assets/img/login-bg-img.png')} style={styles.imglogcentr} />
        <View style={styles.logoabsl}>
          <Image source={require('../../assets/img/logo.png')} style={[styles.logocenter, { width: widthPercentageToDP(40), height: 50 }]} resizeMode="contain" />
        </View>
        <View style={styles.pdlr}>
          <Text style={[styles.textclr, styles.bigfontsize]}>
            We deliver to our customer best product in just 15 Min
          </Text>

          <View style={[styles.inputnuber, styles.mttop10]}>
            <Text style={styles.numberin}>+ 91 <AntDesign name={'caretdown'} size={12} color={'#F56D17'} /></Text>
            <TextInput placeholder='Mobile Number' style={[styles.inputborder, styles.widhtinpu82]} onChangeText={(e)=>setMobile(e)} keyboardType="phone-pad" maxLength={10} />
          </View>
          <Pressable onPress={() =>sendOtp()}>
            <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={[styles.subbtn, styles.mttop10]}>
              <Text style={[styles.textwhite, styles.textcenter]}>Continue</Text>
            </LinearGradient>
          </Pressable>
        </View>
      
        <View style={{flex:1}}></View>
          <View style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Text style={styles.textwhite}>By continuing, you agree to our</Text>
            <Text style={styles.textbron}> Terms of use <Text style={{ color: '#fff' }}> </Text> Privacy Policy</Text>
          </View>
      </View>

    </KeyboardAvoidingView>


  )
}