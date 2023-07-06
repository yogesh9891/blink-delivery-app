import { FlatList, Image, ImageBackground, TouchableOpacity, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from '../stylecomponents/Style'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Header from '../ReusableComponents/Header';
export default function Orderprosser(props) {
    const navigate = useNavigation()
    return (
        <>
            <Header stackHeader={true} screenName={"Order"} rootProps={props} />

            <ScrollView>
               <View style={[styles.pdlr, styles.bgbodyapp, styles.mttop10]}>
                    <Pressable onPress={() => navigate.navigate('OrderArriving')} style={styles.boxoderproser}>
                        <View style={styles.leftordersie}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={styles.bgyelow}>In Transit</Text>
                                <Text style={styles.textblack}>26 Jan 2022, 09:45pm</Text>
                            </View>
                            <Text style={[styles.fontw6, styles.colorblck, styles.mttop10, styles.mbbotom10]}>0AMIWBE12345</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={[styles.fontw6, styles.colorblck, styles.mr2]}>17 Items</Text>
                                <Text style={{ backgroundColor: '#000', width: 5, height: 5, borderRadius: 50, marginRight: 10, marginTop: 10, }}></Text>
                                <Text style={[styles.fontw6, styles.colorblck,]}>₹337</Text>
                            </View>
                        </View>
                        <Entypo name={'chevron-right'} size={30} color={'#EB8E24'} />
                    </Pressable>

                    <Pressable onPress={() => navigate.navigate('Ordersummary')} style={styles.boxoderproser}>
                        <View style={styles.leftordersie}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>

                                <Pressable onPress={() => navigate.navigate('Ordersummary')}>
                                    <Text style={styles.bggreen}>Delivered</Text>
                                </Pressable>

                                <Text style={styles.textblack}>26 Jan 2022, 09:45pm</Text>
                            </View>
                            <Text style={[styles.fontw6, styles.colorblck, styles.mttop10, styles.mbbotom10]}>0AMIWBE12345</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={[styles.fontw6, styles.colorblck, styles.mr2]}>17 Items</Text>
                                <Text style={{ backgroundColor: '#000', width: 5, height: 5, borderRadius: 50, marginRight: 10, marginTop: 10, }}></Text>
                                <Text style={[styles.fontw6, styles.colorblck,]}>₹337</Text>
                            </View>
                        </View>
                        <Entypo name={'chevron-right'} size={30} color={'#EB8E24'} />
                    </Pressable>

                    <View style={styles.boxoderproser}>
                        <View style={styles.leftordersie}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={styles.bggray}>Cencenlled</Text>
                                <Text style={styles.textblack}>26 Jan 2022, 09:45pm</Text>
                            </View>
                            <Text style={[styles.fontw6, styles.colorblck, styles.mttop10, styles.mbbotom10]}>0AMIWBE12345</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={[styles.fontw6, styles.colorblck, styles.mr2]}>17 Items</Text>
                                <Text style={{ backgroundColor: '#000', width: 5, height: 5, borderRadius: 50, marginRight: 10, marginTop: 10, }}></Text>
                                <Text style={[styles.fontw6, styles.colorblck,]}>₹337</Text>
                            </View>
                        </View>
                        <Entypo name={'chevron-right'} size={30} color={'#EB8E24'} />
                    </View>

                    <View style={styles.boxoderproser}>
                        <View style={styles.leftordersie}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={styles.bggreen}>Delivered</Text>
                                <Text style={styles.textblack}>26 Jan 2022, 09:45pm</Text>
                            </View>
                            <Text style={[styles.fontw6, styles.colorblck, styles.mttop10, styles.mbbotom10]}>0AMIWBE12345</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={[styles.fontw6, styles.colorblck, styles.mr2]}>17 Items</Text>
                                <Text style={{ backgroundColor: '#000', width: 5, height: 5, borderRadius: 50, marginRight: 10, marginTop: 10, }}></Text>
                                <Text style={[styles.fontw6, styles.colorblck,]}>₹337</Text>
                            </View>
                        </View>
                        <Entypo name={'chevron-right'} size={30} color={'#EB8E24'} />
                    </View>

                    <View style={styles.boxoderproser}>
                        <View style={styles.leftordersie}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={styles.bgyelow}>Delivered</Text>
                                <Text style={styles.textblack}>26 Jan 2022, 09:45pm</Text>
                            </View>
                            <Text style={[styles.fontw6, styles.colorblck, styles.mttop10, styles.mbbotom10]}>0AMIWBE12345</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={[styles.fontw6, styles.colorblck, styles.mr2]}>17 Items</Text>
                                <Text style={{ backgroundColor: '#000', width: 5, height: 5, borderRadius: 50, marginRight: 10, marginTop: 10, }}></Text>
                                <Text style={[styles.fontw6, styles.colorblck,]}>₹337</Text>
                            </View>
                        </View>
                        <Entypo name={'chevron-right'} size={30} color={'#EB8E24'} />
                    </View>

                    <View style={styles.boxoderproser}>
                        <View style={styles.leftordersie}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={styles.bggreen}>Delivered</Text>
                                <Text style={styles.textblack}>26 Jan 2022, 09:45pm</Text>
                            </View>
                            <Text style={[styles.fontw6, styles.colorblck, styles.mttop10, styles.mbbotom10]}>0AMIWBE12345</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={[styles.fontw6, styles.colorblck, styles.mr2]}>17 Items</Text>
                                <Text style={{ backgroundColor: '#000', width: 5, height: 5, borderRadius: 50, marginRight: 10, marginTop: 10, }}></Text>
                                <Text style={[styles.fontw6, styles.colorblck,]}>₹337</Text>
                            </View>
                        </View>
                        <Entypo name={'chevron-right'} size={30} color={'#EB8E24'} />
                    </View>


                </View>
            </ScrollView>

        </>
    )
}