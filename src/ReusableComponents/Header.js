import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ExternalStyles from '../stylecomponents/Style'
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Header(props) {
    console.log(JSON.stringify(props, null, 2), "props")
    const navigation = useNavigation()
    return (
        <View style={ExternalStyles.Srchheader}>
            {
                props.addressLine &&

                <View style={[styles.flexRowJustiyBetween, { paddingBottom: 15 }]}>
                    <View style={styles.flexRow}>
                        <Entypo name={'location-pin'} size={20} color={'#FE4773'} />
                        <Text style={[ExternalStyles.textwhite, { fontSize: 12 }]}>4, Patel Chambers, Nr H L ...</Text>
                        <AntDesign name={'caretright'} size={10} color={'#fff'} />
                    </View>
                    <View style={[styles.flexRowJustiyBetween, { width: wp(25) }]}>
                        <Pressable onPress={() => navigation.navigate("ProductNotifiction")}>
                            <AntDesign name={'bells'} size={18} color={'#fff'} />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("Wallet")}>
                        <Entypo name={'wallet'} size={20} color={'#fff'} />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("Profilesetting")}>
                            <EvilIcons name={'user'} size={24} color={'#fff'} />
                        </Pressable>
                    </View>
                </View>
            }
            {
                props.stackHeaderAtTop &&
                <View style={ExternalStyles.topheader}>
                    <Text style={ExternalStyles.textwhite}>{props.screenName}</Text>
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name={'close'} size={20} color={'#fff'} />
                    </Pressable>
                </View>
            }
            {
                props.searchBar &&
                <View style={[ExternalStyles.srchinput, {marginTop:10}]}>
                    <AntDesign name={'search1'} size={20} color={'#D9D9D9'} style={ExternalStyles.mr2} />
                    <TextInput style={ExternalStyles.srchtxtinpit} placeholderTextColor="#D9D9D9" placeholder='What are you looking for (e.g. mango, onion)' />
                </View>
            }
            {
                props.stackHeader &&
                <View style={ExternalStyles.topheader}>
                    <Text style={ExternalStyles.textwhite}>{props.screenName}</Text>
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name={'close'} size={18} color={'#fff'} />
                    </Pressable>
                </View>
            }


        </View>
    )
}
const styles = StyleSheet.create({
    flexRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    flexRowJustiyBetween: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

})