import { FlatList, Image, ImageBackground, TouchableOpacity, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../stylecomponents/Style'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../ReusableComponents/Header';

export default function PaymentOption(props) {
   const navigation = useNavigation()
    return (
        <>
            <Header stackHeader={true} screenName={"Payment Options"} rootProps={props} />


            <ScrollView style={styles1.bggray}>

                <View style={[styles1.paymntheader, styles.pdlr, styles.rowflex1]}>
                    <Text style={[styles.fontw6, styles.colorblck]}>Pay Amount</Text>
                    <Text style={[styles.fontw6, styles.colorblck]}>₹320</Text>
                </View>
                <View style={styles.pdlr}>
                    <Text style={[styles.fontw6, styles.colorblck, styles.mttop10, styles.mbbotom10]}>Pay with UPI Apps</Text>

                    <View style={styles1.boxqr}>
                        <View style={styles1.paymentstyl3}>
                            <Pressable onPress={()=> navigation.navigate("Walletsuccessful")} style={styles1.widhtpaymnt}>
                                <Text style={styles1.iconpaymnt}>
                                    <Image style={styles1.iconpay} source={require('../../assets/img/gpay.png')} resizeMode='contain' />
                                    </Text>
                                <Text style={styles1.textpaymnt}>GPay</Text>
                            </Pressable>
                            <Pressable onPress={()=> navigation.navigate("Walletsuccessful")}  style={styles1.widhtpaymnt}>
                                <Text style={styles1.iconpaymnt}>
                                    <Image style={styles1.iconpay}  source={require('../../assets/img/ptm.png')} resizeMode='contain' /> </Text>
                                <Text style={styles1.textpaymnt}>Paytm</Text>
                            </Pressable>
                            <Pressable onPress={()=> navigation.navigate("Walletsuccessful")}  style={styles1.widhtpaymnt}>
                                <Text style={styles1.iconpaymnt}>
                                    <Image style={styles1.iconpay}  source={require('../../assets/img/phonepay.png')} resizeMode='contain' /> </Text>
                                <Text style={styles1.textpaymnt}>PhonePe</Text>
                            </Pressable>
                        </View>
                        <Text style={{ fontWeight: '600', color: '#EB8E24', marginTop: 16, }}>Other UPI Options</Text>
                    </View>
                    <Text style={{ fontWeight: '600', color: '#000', marginBottom: 10, }}>Cards</Text>

                    <View style={[styles1.boxqr, styles.rowflex1]}>
                        <Pressable onPress={()=> navigation.navigate("Walletsuccessful")}  style={styles1.rowflex1}>
                            <Image style={[styles1.imgsmall]} source={require('../../assets/img/arcticons_cred.png')}  resizeMode='contain'/>
                            <View style={{ marginLeft: 10, }}>
                                <Text style={{ fontSize: 12, color: '#000', fontWeight: '600' }}>CRED</Text>
                                <Text style={{ fontSize: 10, color: '#868686', }}>Get additional *10% up to Rs 75* on through *credit card*. No voucher code requied.</Text>
                            </View>
                        </Pressable>
                        <Entypo name={'chevron-right'} size={30} color={'#EB8E24'} />
                    </View>

                    <Text style={{ fontWeight: '600', color: '#000', marginBottom: 10, }}>Credit / Debit Cards</Text>

                    <Pressable onPress={()=> navigation.navigate("Walletsuccessful")}  style={[styles1.boxqr, styles.rowflex1]}>
                        <View style={styles.rowflex}>
                            <Image style={[styles1.imgsmall, {marginRight: 15}]} source={require('../../assets/img/paymnetkk.png')} resizeMode='contain' />
                            <Text style={{ fontSize: 12, color: '#000', fontWeight: '600' }}>Pay via Cards</Text>
                        </View>
                        <Entypo name={'chevron-right'} size={30} color={'#EB8E24'} />
                    </Pressable>

                    <Text style={{ fontWeight: '600', color: '#000', marginBottom: 10, }}>Wallet</Text>

                    <View style={[styles1.boxqr]}>
                        <Pressable onPress={()=> navigation.navigate("Walletsuccessful")}  style={[styles.rowflex1, { marginBottom: 5 }]}>
                            <View style={styles1.rowflex1}>
                                <Image  style={styles1.imgsmall} source={require('../../assets/img/ptm.png')} resizeMode='contain' />
                                <View style={{ marginLeft: 10, }}>
                                    <Text style={{ fontSize: 12, color: '#000', fontWeight: '600' }}>Paytm</Text>
                                    <Text style={{ fontSize: 10, color: '#868686', }}>Rs 50-500 CB (Scratch Card) on min Txn of Rs 1250 via Wallet/Postpaid.</Text>
                                </View>
                            </View>
                            <Entypo name={'chevron-right'} size={30} color={'#EB8E24'} />
                        </Pressable>



                        <Pressable onPress={()=> navigation.navigate("Walletsuccessful")}  style={[styles.rowflex1, styles.mttop5, styles1.bordertop]}>
                            <View style={styles1.rowflex1}>
                                <Image style={styles1.imgsmall} source={require('../../assets/img/mmcard.png')} resizeMode='contain' />
                                <View style={{ marginLeft: 10, }}>
                                    <Text style={{ fontSize: 12, color: '#000', fontWeight: '600' }}>Mobikwik</Text>
                                    <Text style={{ fontSize: 10, color: '#868686', }}>Rs 50-500 Cashback on min Txn of Rs 1000.</Text>
                                </View>
                            </View>
                            <Entypo name={'chevron-right'} size={30} color={'#EB8E24'} />
                        </Pressable>
                    </View>

                    <Text style={{ fontWeight: '600', color: '#000', marginBottom: 10, }}>Net Banking</Text>

                    <View style={styles1.boxqr}>
                        <View style={styles1.paymentstyl3}>
                            <Pressable onPress={()=> navigation.navigate("Walletsuccessful")}  style={styles1.widhtpaymnt}>
                                <Text style={styles1.iconpaymnt}>
                                    <Image style={styles1.iconpay}  source={require('../../assets/img/hdfc.png')} resizeMode='contain' /> </Text>
                                <Text style={styles1.textpaymnt}>HDCF</Text>
                            </Pressable>
                            <Pressable onPress={()=> navigation.navigate("Walletsuccessful")}  style={styles1.widhtpaymnt}>
                                <Text style={styles1.iconpaymnt}>
                                    <Image style={styles1.iconpay} source={require('../../assets/img/sbi.png')} resizeMode='contain' /> </Text>
                                <Text style={styles1.textpaymnt}>SBI</Text>
                            </Pressable>
                            <Pressable onPress={()=> navigation.navigate("Walletsuccessful")}  style={styles1.widhtpaymnt}>
                                <Text style={styles1.iconpaymnt}>
                                    <Image style={styles1.iconpay} source={require('../../assets/img/icic.png')} resizeMode='contain' /> </Text>
                                <Text style={styles1.textpaymnt}>ICICI</Text>
                            </Pressable>
                            <Pressable onPress={()=> navigation.navigate("Walletsuccessful")}  style={styles1.widhtpaymnt}>
                                <Text style={styles1.iconpaymnt}> 
                                <Image style={styles1.iconpay} source={require('../../assets/img/axis.png')} resizeMode='contain' /> </Text>
                                <Text  style={styles1.textpaymnt}>Axis</Text>
                            </Pressable>
                        </View>
                        <Text style={{ fontWeight: '600', color: '#EB8E24', marginTop: 16, }}>Other Bank</Text>
                    </View>

                </View>

            </ScrollView>

        </>
    )
}

const styles1 = StyleSheet.create({
    paymntheader: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    bggray: {
        backgroundColor: '#F3F3F3;',
        flex: 1,
    },
    boxqr: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        marginBottom: 12,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    paymentstyl3: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    widhtpaymnt: {
        width: wp(20),


    },
    iconpaymnt: {
        textAlign: 'center',
        alignSelf: 'center',
        width: 55,
        lineHeight:45,
        height: 55,
        backgroundColor: '#fff',
       
        textAlign: 'center',
       
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    textpaymnt: {
        fontSize: 11,
        marginTop: 5,
        color: '#000',
        fontWeight: '600',
        textAlign: 'center',
        alignSelf: 'center'
    },
    rowflex1: {
        display: 'flex',
        flexDirection: 'row',
        width: wp(60)
    },
    bdrtp: {
        borderTopColor: '#868686',
        borderTopWidth: '0.6',
    },
    bordertop: {
        borderTopWidth: 0.5,
        borderTopColor: '#868686',
        paddingTop: 10,
    },
    iconpay:{
        width:wp(9), height:hp(3)
    },
    imgsmall:{
        width:wp(8),
        height:hp(4),
    }
   



})