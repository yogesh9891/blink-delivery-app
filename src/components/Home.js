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

export default function Home(props) {
    const navigation = useNavigation()
    const [categoryArr, setCategoryArr] = useState([
        {
            imageSource: require('../../assets/img/newslideimg.png'),

        },
        {
            imageSource: require('../../assets/img/slide2.png'),

        },
        {
            imageSource: require('../../assets/img/newslideimg.png'),

        },
        {
            imageSource: require('../../assets/img/slide2.png'),

        },


    ]);
    //   trandingproduct


    const [productArr, setProductArr] = useState([

        {
            imageSource1: require('../../assets/img/bananan1.png'),
            freeimg: require('../../assets/img/offer1.png'),
            prductname: 'Banana',
            contity: '12pc',
            prductcutprice: '₹60',
            fainalprice: '₹40',
        },

        {
            imageSource1: require('../../assets/img/laysto1.png'),
            prductname: 'Lay’s Classic',
            contity: '52 g',
            fainalprice: '₹35',
        },
        {
            imageSource1: require('../../assets/img/cheetos1.png'),
            prductname: 'Cheetos Flamin Hot',
            contity: '52 g',
            fainalprice: '₹35',
        },
        {
            imageSource1: require('../../assets/img/Pepsi1.png'),
            prductname: 'Pepsi ',
            contity: '250 ml',
            fainalprice: '₹35',
        },

    ]);

    //   -------------------------------------------------------- frouts

    const [fruitsArr, setfruitsArr] = useState([

        {
            imageSource1: require('../../assets/img/frouts11.png'),
            freeimg: require('../../assets/img/offer1.png'),
            prductname: 'Pomegranate (Anar)',
            contity: '1 kg',
            prductcutprice: '₹80',
            fainalprice: '₹60',
        },

        {
            imageSource1: require('../../assets/img/frouts22.png'),
            prductname: 'Banana (kela)',
            contity: '52 g',
            fainalprice: '₹35',
        },
        {
            imageSource1: require('../../assets/img/frouts11.png'),
            prductname: 'Apple (seb)',
            contity: '1 kg',
            fainalprice: '₹35',
        },

    ]);

    //   ------------------------------------------------------------------

    const [VegetableArr, setVegetableArr] = useState([

        {
            imageSource1: require('../../assets/img/vegetable1.png'),

            prductname: 'Lady’s Finger (Bindi)',
            contity: '1 kg',

            fainalprice: '₹60',
        },

        {
            imageSource1: require('../../assets/img/vegetable2.png'),
            prductname: 'Bottle Gourd (Loki)',
            fainalprice: '₹35',
        },
        {
            imageSource1: require('../../assets/img/vegetable3.png'),
            freeimg: require('../../assets/img/offer1.png'),
            prductname: 'Onion  (Piyaaz)',
            contity: '1 kg',
            fainalprice: '₹35',
        },
        {
            imageSource1: require('../../assets/img/vegetable2.png'),
            prductname: 'Bottle Gourd (Loki)',
            fainalprice: '₹35',
        },

    ]);
    //   -----------------------------------------------------------

    const [FastfoodArr, setFastfoodArr] = useState([

        {
            imageSource1: require('../../assets/img/fastfd.png'),
            prductname: 'Maggi Spicy Epice',
            contity: '180 g',

            fainalprice: '₹35',
        },

        {
            imageSource1: require('../../assets/img/fastfd1.png'),
            prductname: 'Cup Noodles Garlinha alplra',
            fainalprice: '₹35',
        },
        {
            imageSource1: require('../../assets/img/fastfd.png'),

            prductname: 'Maggi',
            contity: '1 kg',
            fainalprice: '₹35',
        },
        {
            imageSource1: require('../../assets/img/fastfd1.png'),
            prductname: 'Pepsi ',
            contity: '250 ml',
            fainalprice: '₹35',
        },

    ]);


    // -----------------------------------------------------


    const [snacksArr, setsnacksArr] = useState([

        {
            imageSource1: require('../../assets/img/Juice3.png'),
            prductname: 'Lay’s Classic',
            contity: '52 g',

            fainalprice: '₹35',
        },

        {
            imageSource1: require('../../assets/img/Juice2.png'),
            prductname: 'Cup Noodles Garlinha alplra',
            fainalprice: '₹35',
        },
        {
            imageSource1: require('../../assets/img/Juice1.png'),

            prductname: 'Juice Becker Bester',
            contity: '1 kg',
            fainalprice: '₹35',
        },
        {
            imageSource1: require('../../assets/img/Juice3.png'),
            prductname: 'Lay’s Classic',
            contity: '52 g',
            fainalprice: '₹35',
        },

    ]);


    // -----------------------------------------------------------------------------

    const [producbannerslideArr, setproducbannerslideArr] = useState([

        {
            imageSource1: require('../../assets/img/frame1.png'),

        },

        {
            imageSource1: require('../../assets/img/frame2.png'),

        },
        {
            imageSource1: require('../../assets/img/frame3.png'),


        },
        {
            imageSource1: require('../../assets/img/frame4.png'),

        },

    ]);











    const tophomeslide = ({ item, index }) => {
        console.log(item, 'item');
        return (
            <View style={styles1.datesubcirption}>
                <Image source={item.imageSource} style={styles1.sliderheight} />
            </View>
        );
    };

    //   ------------------------------------------------------------------
    const trandingproduct = ({ item, index }) => {
        console.log(item, 'item');
        return (
            <Pressable onPress={() => navigation.navigate("ProductDetails")} style={styles1.inrtrandingbox}>
                <View style={{ width: wp(20), backgroundColor: '#F2F2F2', paddingVertical: 7, borderRadius: 5, }}>
                    <Image style={{ width: wp(15), height: hp(8), textAlign: 'center', alignSelf: 'center', }} source={item.imageSource1} />
                </View>
                <View style={styles1.rightproctname}>
                    <Text style={styles1.prodname}>{item.prductname}</Text>
                    <Text style={[styles1.contenti, styles1.mttp2]}>{item.contity}</Text>
                    <Text style={styles1.cutpric}>{item.prductcutprice}</Text>
                    <View style={styles.rowflex1}>
                        <Text style={styles1.finalpric}>{item.fainalprice}</Text>
                        <AntDesign name={'plus'} size={20} color={'#EB8E24'} />
                    </View>
                </View>
                <View style={{ position: 'absolute', top: 0, right: 3 }}>
                    <Image style={{ width: wp(7), height: hp(3) }} source={item.freeimg} />
                </View>
            </Pressable>
        );
    };


    //   ------------------------------------------------------------------


    const trandinfruits = ({ item, index }) => {
        console.log(item, 'item');
        return (
            <Pressable onPress={() => navigation.navigate("ProductDetails")} style={styles1.inrtrandingbox}>
                <View style={{ width: wp(20), backgroundColor: '#F2F2F2', borderRadius: 5, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={item.imageSource1} resizeMode='contain' style={styles1.imgresponsive} />
                </View>
                <View style={styles1.rightproctname}>
                    <Text style={styles1.prodname}>{item.prductname}</Text>
                    <Text style={[styles1.contenti, styles1.mttp2]}>{item.contity}</Text>
                    <Text style={styles1.cutpric}>{item.prductcutprice}</Text>
                    <View style={styles.rowflex1}>
                        <Text style={styles1.finalpric}>{item.fainalprice}</Text>
                        <AntDesign name={'plus'} size={20} color={'#EB8E24'} />
                    </View>
                </View>
                <View style={{ position: 'absolute', top: 0, right: 0 }}>
                    <Image style={{ width: wp(7), height: hp(3) }} source={item.freeimg} />
                </View>
            </Pressable>
        );
    };

    //   ----------------------------------------------------------------


    const trandinvegetable = ({ item, index }) => {
        console.log(item, 'item');
        return (
            <Pressable onPress={() => navigation.navigate("ProductDetails")} style={styles1.inrtrandingbox}>
                <View style={{ width: wp(20), backgroundColor: '#F2F2F2', borderRadius: 5, borderRadius: 5, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={item.imageSource1} style={styles1.imgresponsive} resizeMode='contain' />
                </View>
                <View style={styles1.rightproctname}>
                    <Text style={styles1.prodname}>{item.prductname}</Text>
                    <Text style={[styles1.contenti, styles1.mttp2]}>{item.contity}</Text>
                    <Text style={styles1.cutpric}>{item.prductcutprice}</Text>
                    <View style={styles.rowflex1}>
                        <Text style={styles1.finalpric}>{item.fainalprice}</Text>
                        <AntDesign name={'plus'} size={20} color={'#EB8E24'} />
                    </View>
                </View>
                <View style={{ position: 'absolute', top: 0, right: 0 }}>
                    <Image style={{ width: wp(7), height: hp(3) }} source={item.freeimg} />
                </View>
            </Pressable>
        );
    };


    //   -----------------------------------------------------------------



    const Fastfood = ({ item, index }) => {
        console.log(item, 'item');
        return (
            <Pressable onPress={() => navigation.navigate("ProductDetails")} style={styles1.inrtrandingbox}>
                <View style={{ width: wp(20), backgroundColor: '#F2F2F2', borderRadius: 5, borderRadius: 5, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={item.imageSource1} style={styles1.imgresponsive} resizeMode='contain' />
                </View>
                <View style={styles1.rightproctname}>
                    <Text style={styles1.prodname}>{item.prductname}</Text>
                    <Text style={[styles1.contenti, styles1.mttp2]}>{item.contity}</Text>
                    <Text style={styles1.cutpric}>{item.prductcutprice}</Text>
                    <View style={styles.rowflex1}>
                        <Text style={styles1.finalpric}>{item.fainalprice}</Text>
                        <AntDesign name={'plus'} size={20} color={'#EB8E24'} />
                    </View>
                </View>
                <View style={{ position: 'absolute', top: 0, right: 0 }}>
                    <Image source={item.freeimg} />
                </View>
            </Pressable>
        );
    };


    //   ---------------------------------------------------------




    const producbannerslide = ({ item, index }) => {
        console.log(item, 'item');
        return (
            <View>
                <Image style={{ width: wp(80), height: hp(18), marginRight: 5, borderRadius: 5 }} source={item.imageSource1} />
            </View>
        );
    };

    // -------------------------------------------------------------------------

    const snacks = ({ item, index }) => {
        console.log(item, 'item');
        return (
            <View style={styles1.inrtrandingbox}>
                <View style={{ width: wp(20), backgroundColor: '#F2F2F2', borderRadius: 5, borderRadius: 5, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={item.imageSource1} style={styles1.imgresponsive} resizeMode='contain' />
                </View>
                <View style={styles1.rightproctname}>
                    <Text style={styles1.prodname}>{item.prductname}</Text>
                    <Text style={[styles1.contenti, styles1.mttp2]}>{item.contity}</Text>
                    <Text style={styles1.cutpric}>{item.prductcutprice}</Text>
                    <View style={styles.rowflex1}>
                        <Text style={styles1.finalpric}>{item.fainalprice}</Text>
                        <AntDesign name={'plus'} size={20} color={'#EB8E24'} />
                    </View>
                </View>
                <View style={{ position: 'absolute', top: 0, right: 0 }}>
                    <Image source={item.freeimg} />
                </View>
            </View>
        );
    };

    return (
        <>
            <Header addressLine={true} searchBar={true} rootProps={props} />
            {/* <View style={styles1.searheader}>
                <View style={[styles1.searinput, styles.rowflex1]}>
                    <AntDesign name={'search1'} size={20} color={'#D9D9D9'} />
                    <TextInput style={styles1.srchinput} placeholder="What are you looking for (e.g. mango, onion)" placeholderTextColor='#D9D9D9' />
                </View>
            </View> */}
            <ScrollView style={styles1.bgcolor}>
                <View style={[styles.img15, { width: wp(100) }]}>
                    <Image style={{ width: wp(100), height: hp(8) }} source={require('../../assets/img/headerimg.png')} />
                </View>

                <View style={styles1.topslid}>
                    <FlatList
                        style={styles.mttop10}
                        contentContainerStyle={{}}
                        data={categoryArr}
                        horizontal
                        renderItem={tophomeslide}
                        keyExtractor={(item, index) => `${index}`}
                    />
                </View>
                <View style={styles.pdlr}>
                    <View style={[styles.rowflex1, styles.mttop10]}>
                        <Text style={[styles.fontw6, styles.colorblck]}>Trending Near You</Text>
                        <View style={styles.rowflex}>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: '#EB8E24' }}>See more</Text>
                            <Entypo name={'chevron-right'} size={20} color={'#EB8E24'} />
                        </View>
                    </View>

                    <View style={styles1.boxtrandign}>

                        <FlatList
                            style={styles.mttop10}
                            contentContainerStyle={{}}
                            data={productArr}
                            horizontal
                            renderItem={trandingproduct}
                            keyExtractor={(item, index) => `${index}`} />
                    </View>

                    <View style={styles.mttop10}>
                        <Image style={{ width: wp(92), height: hp(15) }} source={require('../../assets/img/headerbanner.png')} />
                    </View>
                    <View style={[styles.rowflex1, styles.mttop10]}>
                        <Image style={{ width: wp(45), height: hp(19) }} source={require('../../assets/img/fruits1.png')} />
                        <Image style={{ width: wp(45), height: hp(19) }} source={require('../../assets/img/vegetables1.png')} />
                    </View>

                    <View style={[styles.rowflex1, styles.mttop20]}>
                        <Pressable onPress={() => navigation.navigate("SubCategories")} style={styles.prductcategory}>
                            <Image source={require('../../assets/img/dairy-fread1.png')} style={styles1.catryimgabs} resizeMode='contain' />
                            <Text style={styles.namecategry}>Dairy, Bread & Eggs</Text>
                        </Pressable>

                        <Pressable onPress={() => navigation.navigate("SubCategories")} style={styles.prductcategory}>
                            <Image source={require('../../assets/img/drink1.png')} style={styles1.catryimgabs} resizeMode='contain' />
                            <Text style={styles.namecategry}>Cold Drinks & Juices</Text>
                        </Pressable>

                        <Pressable onPress={() => navigation.navigate("SubCategories")} style={styles.prductcategory}>
                            <Image source={require('../../assets/img/tea21.png')} style={styles1.catryimgabs} resizeMode='contain' />
                            <Text style={styles.namecategry}>Tea, Coffee & More</Text>
                        </Pressable>

                    </View>

                    <View style={[styles.rowflex1, styles.mttop20]}>
                        <Pressable onPress={() => navigation.navigate("SubCategories")} style={styles.prductcategory}>
                            <Image source={require('../../assets/img/chips1.png')} style={styles1.catryimgabs} resizeMode='contain' />
                            <Text style={styles.namecategry}>Munchies</Text>
                        </Pressable>

                        <Pressable onPress={() => navigation.navigate("SubCategories")} style={styles.prductcategory}>
                            <Image source={require('../../assets/img/Sweet1.png')} style={styles1.catryimgabs} resizeMode='contain' />
                            <Text style={styles.namecategry}>Sweet Cravings</Text>
                        </Pressable>

                        <View style={styles.prductcategory}>
                            <Image source={require('../../assets/img/biscuits1.png')} style={styles1.catryimgabs} resizeMode='contain' />
                            <Text style={styles.namecategry}>Biscuits</Text>
                        </View>
                    </View>
                    <View style={[styles.rowflex1, styles.mttop20, styles.mbbotom15]}>
                        <View style={styles.prductcategory}>
                            <Image source={require('../../assets/img/homeneeds1.png')} style={styles1.catryimgabs} resizeMode='contain' />
                            <Text style={styles.namecategry}>Home Needs</Text>
                        </View>

                        <View style={styles.prductcategory}>
                            <Image source={require('../../assets/img/Health1.png')} style={styles1.catryimgabs} resizeMode='contain' />
                            <Text style={styles.namecategry}>Health & Baby Care</Text>
                        </View>

                        <View style={styles.prductcategory}>
                            <Image source={require('../../assets/img/bathbody1.png')} style={styles1.catryimgabs} resizeMode='contain' />
                            <Text style={styles.namecategry}>Bath & Body</Text>
                        </View>
                    </View>



                    <View style={[styles.rowflex1, styles.mttop20, styles.mbbotom15]}>
                        <View style={styles.prductcategory}>
                            <Image source={require('../../assets/img/fish1.png')} style={styles1.catryimgabs} resizeMode='contain' />
                            <Text style={styles.namecategry}>Meat, Fish & Eggs</Text>
                        </View>

                        <View style={styles.prductcategory}>
                            <Image source={require('../../assets/img/group1.png')} style={styles1.catryimgabs} resizeMode='contain' />
                            <Text style={styles.namecategry}>Breakfast & Sauces</Text>
                        </View>

                        <View style={styles.prductcategory}>
                            <Image source={require('../../assets/img/packagefood1.png')} style={styles1.catryimgabs} resizeMode='contain' />
                            <Text style={styles.namecategry}>Packaged Food</Text>
                        </View>
                    </View>

                    <Text style={[styles.fontw6, styles.colorblck, styles.mbbotom10, styles.pdlr]}>Super Sale</Text>
                    <View style={styles.mttop5}>
                        <Image source={require('../../assets/img/gbanner1.png')} style={{ width: wp(92), height: hp(18) }} resizeMode='contain' />
                    </View>
                    <View style={styles.mttop5}>
                        <Image source={require('../../assets/img/gbanner2.png')} style={{ width: wp(92), height: hp(18) }} resizeMode='contain' />
                    </View>
                    <View style={[styles.mttop5, styles.mbbotom10]}>
                        <Image source={require('../../assets/img/gbanner3.png')} style={{ width: wp(92), height: hp(18) }} resizeMode='contain' />
                    </View>

                </View>
                <View style={styles1.seasonbg}>
                    <View style={{ paddingHorizontal: 15, }}>
                        <Text style={{ fontSize: 17, marginTop: 15, fontWeight: '600', color: '#000' }}>Best For The Season</Text>
                        <View style={[styles.rowflex1, styles.mttop5]}>
                            <Text style={[styles.fontw6, styles.colorblck]}>Fruits</Text>
                            <View style={styles.rowflex}>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: '#EB8E24' }}>See more</Text>
                                <Entypo name={'chevron-right'} size={20} color={'#EB8E24'} />
                            </View>
                        </View>
                    </View>
                    <FlatList
                        style={styles.mttop10}
                        contentContainerStyle={{}}
                        data={fruitsArr}
                        horizontal
                        renderItem={trandinfruits}
                        keyExtractor={(item, index) => `${index}`} />


                    <View style={[styles.rowflex1, styles.mttop5, styles.pdlr]}>
                        <Text style={[styles.fontw6, styles.colorblck]}>Vegetable</Text>
                        <View style={styles.rowflex}>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: '#EB8E24' }}>See more</Text>
                            <Entypo name={'chevron-right'} size={20} color={'#EB8E24'} />
                        </View>
                    </View>

                    <FlatList
                        style={styles.mttop10}
                        contentContainerStyle={{}}
                        data={VegetableArr}
                        horizontal
                        renderItem={trandinvegetable}
                        keyExtractor={(item, index) => `${index}`} />

                </View>
                <View style={[styles.rowflex1, styles.mttop10, styles.pdlr]}>
                    <Text style={[styles.fontw6, styles.colorblck]}>Fast Meals</Text>
                    <View style={styles.rowflex}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#EB8E24' }}>See more</Text>
                        <Entypo name={'chevron-right'} size={20} color={'#EB8E24'} />
                    </View>
                </View>

                <FlatList
                    style={styles.mttop10}
                    contentContainerStyle={{}}
                    data={FastfoodArr}
                    horizontal
                    renderItem={Fastfood}
                    keyExtractor={(item, index) => `${index}`} />

                <View style={[styles.rowflex1, styles.mttop10, styles.pdlr]}>
                    <Text style={[styles.fontw6, styles.colorblck]}>Snacks</Text>
                    <View style={styles.rowflex}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#EB8E24' }}>See more</Text>
                        <Entypo name={'chevron-right'} size={20} color={'#EB8E24'} />
                    </View>
                </View>

                <FlatList
                    style={styles.mttop10}
                    contentContainerStyle={{}}
                    data={snacksArr}
                    horizontal
                    renderItem={snacks}
                    keyExtractor={(item, index) => `${index}`} />

                <View style={[styles.rowflex1, styles.mttop10, styles.pdlr]}>
                    <Text style={[styles.fontw6, styles.colorblck]}>Brands In Focuse</Text>
                    <View style={styles.rowflex}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#EB8E24' }}>See more</Text>
                        <Entypo name={'chevron-right'} size={20} color={'#EB8E24'} />
                    </View>
                </View>


                <View style={[styles1.brands, styles.mttop20, styles.pdlr]}>
                    <View style={styles1.brandrow}>
                        <View style={styles1.brandbox}>
                            <Image source={require('../../assets/img/itc-logo1.png')} style={[styles1.logosrl, styles1.responsivelogo]} resizeMode='contain' />
                            <Image source={require('../../assets/img/bgboximg01.png')} style={styles1.bgboximg} />
                            <Text style={styles1.ofrtext}>upto 33% off</Text>
                            <Image source={require('../../assets/img/brandproduct01.png')} style={[styles1.brandprodt, styles1.responsivproduct]} resizeMode='contain' />
                        </View>
                        <View style={styles1.brandbox}>
                            <Image source={require('../../assets/img/brandlogo01.png')} style={[styles1.logosrl, styles1.responsivelogo]} resizeMode='contain' />
                            <Image source={require('../../assets/img/bgboximg01.png')} style={styles1.bgboximg} />
                            <Text style={styles1.ofrtext}>upto 17% off</Text>
                            <Image source={require('../../assets/img/brandproduct02.png')} style={[styles1.brandprodt, styles1.responsivproduct]} resizeMode='contain' />
                        </View>
                        <View style={styles1.brandbox}>
                            <Image source={require('../../assets/img/brandlogo02.png')} style={[styles1.logosrl, styles1.responsivelogo]} resizeMode='contain' />
                            <Image source={require('../../assets/img/bgboximg01.png')} style={styles1.bgboximg} />
                            <Text style={styles1.ofrtext}>upto 33% off</Text>
                            <Image source={require('../../assets/img/brandproduct03.png')} style={[styles1.brandprodt, styles1.responsivproduct]} resizeMode='contain' />
                        </View>
                    </View>
                </View>

                <View style={[styles1.brands, styles.mttop20, styles.pdlr]}>
                    <View style={styles1.brandrow}>
                        <View style={styles1.brandbox}>
                            <Image source={require('../../assets/img/brandlogo444.png')} style={[styles1.logosrl, styles1.responsivelogo]} resizeMode='contain' />
                            <Image source={require('../../assets/img/bgboximg01.png')} style={styles1.bgboximg} />
                            <Text style={styles1.ofrtext}>upto 33% off</Text>
                            <Image source={require('../../assets/img/brandproduct04.png')} style={[styles1.brandprodt, styles1.responsivproduct]} resizeMode='contain' />
                        </View>
                        <View style={styles1.brandbox}>
                            <Image source={require('../../assets/img/brandlogo03.png')} style={[styles1.logosrl, styles1.responsivelogo]} resizeMode='contain' />
                            <Image source={require('../../assets/img/bgboximg01.png')} style={styles1.bgboximg} />
                            <Text style={styles1.ofrtext}>upto 17% off</Text>
                            <Image source={require('../../assets/img/brandproduct05.png')} style={[styles1.brandprodt, styles1.responsivproduct]} resizeMode='contain' />
                        </View>
                        <View style={styles1.brandbox}>
                            <Image source={require('../../assets/img/brandlogo04.png')} style={[styles1.logosrl, styles1.responsivelogo]} resizeMode='contain' />
                            <Image source={require('../../assets/img/bgboximg01.png')} style={styles1.bgboximg} />
                            <Text style={styles1.ofrtext}>upto 33% off</Text>
                            <Image source={require('../../assets/img/brandproduct06.png')} style={[styles1.brandprodt, styles1.responsivelogo]} resizeMode='contain' />
                        </View>
                    </View>
                </View>

                <View style={[styles1.brands, styles.mttop20, styles.pdlr]}>
                    <View style={styles1.brandrow}>
                        <View style={styles1.brandbox}>
                            <Image source={require('../../assets/img/brandlogo06.png')} style={[styles1.logosrl, styles1.responsivelogo]} resizeMode='contain' />
                            <Image source={require('../../assets/img/bgboximg01.png')} style={styles1.bgboximg} />
                            <Text style={styles1.ofrtext}>upto 33% off</Text>
                            <Image source={require('../../assets/img/brandproduct07.png')} style={[styles1.brandprodt, styles1.responsivelogo]} resizeMode='contain' />
                        </View>
                        <View style={styles1.brandbox}>
                            <Image source={require('../../assets/img/brandlogo05.png')} style={[styles1.logosrl, styles1.responsivelogo]} resizeMode='contain' />
                            <Image source={require('../../assets/img/bgboximg01.png')} style={styles1.bgboximg} />
                            <Text style={styles1.ofrtext}>upto 17% off</Text>
                            <Image source={require('../../assets/img/brandproduct08.png')} style={[styles1.brandprodt, styles1.responsivelogo]} resizeMode='contain' />
                        </View>
                        <View style={styles1.brandbox}>
                            <Image source={require('../../assets/img/brandlogo03.png')} style={[styles1.logosrl, styles1.responsivelogo]} resizeMode='contain' />
                            <Image source={require('../../assets/img/bgboximg01.png')} style={styles1.bgboximg} />
                            <Text style={styles1.ofrtext}>upto 17% off</Text>
                            <Image source={require('../../assets/img/brandproduct05.png')} style={[styles1.brandprodt, styles1.responsivproduct]} resizeMode='contain' />
                        </View>
                    </View>
                </View>

                <FlatList
                    style={styles.mttop10}
                    contentContainerStyle={{}}
                    data={producbannerslideArr}
                    horizontal
                    renderItem={producbannerslide}
                    keyExtractor={(item, index) => `${index}`} />

                <View style={[styles.rowflex1, styles.mttop10, styles.mbbotom10, styles.pdlr]}>
                    <Text style={[styles.fontw6, styles.colorblck]}>Wipes & Napkins</Text>
                    <View style={styles.rowflex}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#EB8E24' }}>See more</Text>
                        <Entypo name={'chevron-right'} size={20} color={'#EB8E24'} />
                    </View>
                </View>

                <View style={[styles1.wipesbox, styles.pdlr, styles.mttop10]}>
                    <View style={styles1.boxwips}>
                        <Image source={require('../../assets/img/wipesimg01.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Origami Multipurpose Napkins 21cm x 21cm...</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹45</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1 Piece</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#e56da8f0', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles1.boxwips}>
                        <Image source={require('../../assets/img/wipesimg02.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Origami Multipurpose Napkins 21cm x 21cm...</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹175</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>2 Piece</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#e56da8f0', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles1.boxwips}>
                        <Image source={require('../../assets/img/wipesimg03.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Origami Multipurpose Napkins 21cm x 21cm...</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹45</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>20 x 20 cm</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                </View>

                <View style={[styles1.wipesbox, styles.pdlr, styles.mttop10]}>
                    <View style={styles1.boxwips}>
                        <Image source={require('../../assets/img/wipesimg01.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Origami Multipurpose Napkins 21cm x 21cm...</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹45</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1 Piece</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles1.boxwips}>
                        <Image source={require('../../assets/img/wipesimg02.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Origami Multipurpose Napkins 21cm x 21cm...</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹175</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>2 Piece</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles1.boxwips}>
                        <Image source={require('../../assets/img/wipesimg03.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Origami Kitchen Towels 2 In 1 Quilted 2 ply.</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹45</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>20 x 20 cm</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                </View>

                <View style={[styles1.wipesbox, styles.pdlr, styles.mttop10]}>
                    <View style={styles1.boxwips}>
                        <Image source={require('../../assets/img/wipesimg01.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Origami Kitchen Towels 2 In 1 Quilted 2 ply</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹45</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1 Piece</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles1.boxwips}>
                        <Image source={require('../../assets/img/wipesimg02.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Origami Kitchen Towels 2 In 1 Quilted 2 ply</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹175</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>2 Piece</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles1.boxwips}>
                        <Image source={require('../../assets/img/wipesimg03.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Origami Kitchen Towels 2 In 1 Quilted 2 ply</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹45</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>20 x 20 cm</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                </View>


                <View style={[styles1.wipesbox, styles.pdlr, styles.mttop10]}>
                    <View style={styles1.boxwips}>
                        <Image source={require('../../assets/img/wipesimg01.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Origami Kitchen Towels 2 In 1 Quilted 2 ply</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹45</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1 Piece</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles1.boxwips}>
                        <Image source={require('../../assets/img/wipesimg02.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Origami Kitchen Towels 2 In 1 Quilted 2 ply</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹175</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>2 Piece</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles1.boxwips}>
                        <Image source={require('../../assets/img/wipesimg03.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Origami Kitchen Towels 2 In 1 Quilted 2 ply</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹45</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>20 x 20 cm</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                </View>


                <View style={[styles.rowflex1, styles.mttop10, styles.mbbotom10, styles.pdlr]}>
                    <Text style={[styles.fontw6, styles.colorblck]}>Laundry</Text>
                    <View style={styles.rowflex}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#EB8E24' }}>See more</Text>
                        <Entypo name={'chevron-right'} size={20} color={'#EB8E24'} />
                    </View>
                </View>

                <View style={[styles1.wipesbox, styles.pdlr, styles.mttop10]}>
                    <View style={styles1.laundrybox}>
                        <Image source={require('../../assets/img/laundryimg01.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Tide Whiteness Original Scent</Text>
                        <Text style={styles1.cutprice}>₹120</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles1.laundrybox}>
                        <Image source={require('../../assets/img/laundryimg02.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Tide Whiteness Original Scent</Text>
                        <Text style={styles1.cutprice}></Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles1.laundrybox}>
                        <Image source={require('../../assets/img/laundryimg03.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Tide Whiteness Original Scent</Text>
                        <Text style={styles1.cutprice}>₹120</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                </View>

                <View style={[styles1.wipesbox, styles.pdlr, styles.mttop10]}>
                    <View style={styles1.laundrybox}>
                        <Image source={require('../../assets/img/laundryimg01.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Tide Whiteness Original Scent</Text>
                        <Text style={styles1.cutprice}>₹120</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles1.laundrybox}>
                        <Image source={require('../../assets/img/laundryimg02.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Tide Whiteness Original Scent</Text>
                        <Text style={styles1.cutprice}></Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles1.laundrybox}>
                        <Image source={require('../../assets/img/laundryimg03.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Tide Whiteness Original Scent</Text>
                        <Text style={styles1.cutprice}>₹120</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                </View>
                <View style={[styles1.wipesbox, styles.pdlr, styles.mttop10]}>
                    <View style={styles1.laundrybox}>
                        <Image source={require('../../assets/img/laundryimg01.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Tide Whiteness Original Scent</Text>
                        <Text style={styles1.cutprice}>₹120</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles1.laundrybox}>
                        <Image source={require('../../assets/img/laundryimg02.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Tide Whiteness Original Scent</Text>
                        <Text style={styles1.cutprice}></Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles1.laundrybox}>
                        <Image source={require('../../assets/img/laundryimg03.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Tide Whiteness Original Scent</Text>
                        <Text style={styles1.cutprice}>₹120</Text>
                        <View style={[styles.rowflex1, styles1.margintiobotm5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                </View>

                <View style={[styles.rowflex1, styles.mttop10, styles.mbbotom10, styles.pdlr]}>
                    <Text style={[styles.fontw6, styles.colorblck]}>Kitchen Cleaning</Text>
                    <View style={styles.rowflex}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#EB8E24' }}>See more</Text>
                        <Entypo name={'chevron-right'} size={20} color={'#EB8E24'} />
                    </View>
                </View>

                <View style={[styles1.wipesbox, styles.pdlr, styles.mttop10]}>
                    <View style={styles1.kitchenbox}>
                        <Image source={require('../../assets/img/cleaningimg01.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Lizol All Purpose Power Cleaner</Text>

                        <View style={[styles.rowflex1, styles.mttop10, styles.mb5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹120</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>250</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles1.kitchenbox}>
                        <Image source={require('../../assets/img/cleaningimg02.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Fairy U    Konzentrat (Villarriba)</Text>

                        <View style={[styles.rowflex1, styles.mttop10, styles.mb5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles1.kitchenbox}>
                        <Image source={require('../../assets/img/cleaningimg03.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Tide Whiteness Original Scent</Text>

                        <View style={[styles.rowflex1, styles.mttop10, styles.mb5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                </View>

                <View style={[styles1.wipesbox, styles.pdlr, styles.mttop10]}>
                    <View style={styles1.kitchenbox}>
                        <Image source={require('../../assets/img/cleaningimg01.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Lizol All Purpose Power Cleaner</Text>

                        <View style={[styles.rowflex1, styles.mttop10, styles.mb5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹120</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>250</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles1.kitchenbox}>
                        <Image source={require('../../assets/img/cleaningimg02.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Fairy U    Konzentrat (Villarriba)</Text>

                        <View style={[styles.rowflex1, styles.mttop10, styles.mb5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles1.kitchenbox}>
                        <Image source={require('../../assets/img/cleaningimg03.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Tide Whiteness Original Scent</Text>

                        <View style={[styles.rowflex1, styles.mttop10, styles.mb5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                </View>

                <View style={[styles1.wipesbox, styles.pdlr, styles.mttop10]}>
                    <View style={styles1.kitchenbox}>
                        <Image source={require('../../assets/img/cleaningimg01.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Lizol All Purpose Power Cleaner</Text>

                        <View style={[styles.rowflex1, styles.mttop10, styles.mb5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹120</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>250</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles1.kitchenbox}>
                        <Image source={require('../../assets/img/cleaningimg02.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Fairy U    Konzentrat (Villarriba)</Text>

                        <View style={[styles.rowflex1, styles.mttop10, styles.mb5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles1.kitchenbox}>
                        <Image source={require('../../assets/img/cleaningimg03.png')} style={styles1.napkisnprot} resizeMode='contain' />
                        <Text style={styles1.textwipes}>Tide Whiteness Original Scent</Text>

                        <View style={[styles.rowflex1, styles.mttop10, styles.mb5]}>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>₹100</Text>
                            <Text style={[styles.fontw6, styles.colorblck, styles1.font11]}>1.5KG</Text>
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }} colors={['#F03893', '#F7A149']} style={styles1.wipesbtn}>
                            <Text style={styles1.btnfontwipes}>Add</Text>
                        </LinearGradient>
                    </View>
                </View>


            </ScrollView>
        </>
    )
}


const styles1 = StyleSheet.create({
    searheader: {
        padding: 15,
        backgroundColor: '#3740AA',
    },
    searinput: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    srchinput: {
        width: wp(80)
    },
    topslid: {
        paddingHorizontal: 10,
    },
    sliderheight: {
        marginHorizontal: 5,
        textAlign: 'center',
        alignSelf: 'center',
        width: wp(35),
        height: hp(10),

    },
    proheight: {
        marginHorizontal: 5,
        textAlign: 'center',
        alignSelf: 'center',

    },
    inrtrandingbox: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        position: 'relative',
        width: wp(55),
        marginBottom: 5,
        marginRight: 10,
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    prodname: {
        fontSize: 11,
        fontWeight: '600',
        color: '#000',
    },
    contenti: {
        fontSize: 10,
        color: '#B3B3B3',
    },
    mttp2: {
        marginTop: 5
    },
    rightproctname: {
        marginLeft: 14,
        width: wp(25),
    },
    cutpric: {
        textDecorationLine: 'line-through',
        fontSize: 10,
        color: '#B3B3B3',
    },
    finalpric: {
        fontSize: 11,
        color: '#000',
        fontWeight: '600',
    },
    bgcolor: {
        backgroundColor: '#fff',
    },
    seasonbg: {
        backgroundColor: '#FADCDC',
        paddingVertical: 20,

    },
    brandrow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    brandbox: {
        backgroundColor: '#FFEED7',
        minHeight: 150,
        position: 'relative',
        width: wp(29),
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    },
    logosrl: {
        position: 'absolute',
        top: -40,
        textAlign: 'center',
        zIndex: 2
    },
    bgboximg: {

        position: 'absolute',
        top: 10,
        width: wp(28),
        height: hp(12),
    },
    ofrtext: {
        position: 'relative',
        marginTop: -25,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 15,
        fontWeight: '600',
        fontSize: 12,
        color: '#000'
    },
    brandprodt: {
        position: 'absolute',
        bottom: 5
    },
    boxwips: {
        backgroundColor: '#EAEEFF',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 15,
        padding: 5,
        minHeight: 150,
        width: wp(30),
    },
    font11: {
        fontSize: 10,
    },
    wipesbox: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textwipes: {
        fontSize: 9,
        color: '#000',
        fontWeight: '500',
    },
    imgcenter: {
        textAlign: 'center',
        alignSelf: 'center',

    },
    btnfontwipes: {
        fontSize: 13,
        textAlign: 'center',
        color: '#fff',
        padding: 6,
    },
    wipesbtn: {
        borderRadius: 5,
    },
    margintiobotm: {
        marginVertical: 10,
    },
    margintiobotm5: {
        marginVertical: 5,
    },
    laundrybox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        padding: 5,
        minHeight: 150,
        width: wp(30),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    cutprice: {
        textDecorationLine: 'line-through',
        color: '#868686',
        fontSize: 10,
        marginTop: 8,
    },
    kitchenbox: {
        backgroundColor: '#F8EAF6',
        padding: 5,
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        minHeight: 160,
        width: wp(30),
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8,
    },
    catryimgabs: {
        position: 'relative',
        top: -20,
        textAlign: 'center',
        alignSelf: 'center',
        width: wp(24),
        height: hp(9),
    },
    imgresponsive: {
        width: wp(15),
        height: hp(8),
        textAlign: 'center',
        alignSelf: 'center',
    },
    responsivelogo: {
        width: wp(20),
        height: hp(10),

        textAlign: 'center',
        alignSelf: 'center',
    },
    responsivproduct: {
        width: wp(25),
        height: hp(8),

        textAlign: 'center',
        alignSelf: 'center',
    },
    napkisnprot: {
        width: wp(40),
        height: hp(12),

        textAlign: 'center',
        alignSelf: 'center',
    }
})