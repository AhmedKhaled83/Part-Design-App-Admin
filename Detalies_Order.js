import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StatusBar, Image, ScrollView, FlatList } from 'react-native';
const { width, height } = Dimensions.get('screen')

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';

function Show_order_options({ navigation, route }) {
  



    const [order, setorder] = useState(route.params.order)
    const [order_2, setorder_2] = useState(route.params.order_2)



    
    const [Stutas_Bar_background, setStutas_Bar_background] = useState(route.params.Stutas_Bar_background)
    const [Profile_background, setProfile_background] = useState(route.params.Profile_background)

    const [Datiles_order_background, setDatiles_order_background] = useState(route.params.Datiles_order_background)
    const [End_order_background, setEnd_order_background] = useState(route.params.End_order_background)


    return (
        <>
            <StatusBar backgroundColor={Stutas_Bar_background} barStyle={"dark-content"} ></StatusBar>

            <View style={{
                flex: 1,
                backgroundColor: "#EEEEEEDD",
                alignItems: 'center',

            }}>


                <View style={{
                    width: width,
                    height: height * 0.09,
                    backgroundColor: Profile_background,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 1,
                }}>

                    <View style={{
                        width: width * 0.39,
                        height: height * 0.1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        <Text style={{ color: "#2B2D2E", fontWeight: 'bold', fontSize: 17 }}>رقم الطلب:
                            <Text style={{ color: "#000", fontSize: 17, fontWeight: 'bold', textDecorationLine: "underline" }}> {order.ordered_Items_id} </Text>

                        </Text>

                    </View>

                    <View style={{
                        flexDirection: 'row',
                        width: width * 0.6,
                        height: height * 0.1,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <View style={{ width: width * 0.45 }}>
                            <Text style={{ color: "#000", fontWeight: 'bold' }}>{order.ordered_Items_user_id.user_name}</Text>
                            <Text style={{ color: "#000", fontSize: 11 }}>{order.ordered_Items_date} </Text>
                        </View>
                        <TouchableOpacity style={{
                            width: width * 0.15,
                            height: height * 0.07,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: 10,
                            borderRadius: 300
                        }}>
                            <Image source={require("../Photoes/burger3.jpg")}
                                style={{ width: width * 0.15, height: height * 0.06, }} resizeMode='cover' borderRadius={300} />
                        </TouchableOpacity>



                    </View>


                </View>
                <ScrollView>

                    <View style={{
                        width: width,
                        height: height * 0.057,
                        backgroundColor: "#FFFFFFFF",
                        marginTop: 10,
                        marginBottom: 5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 20,
                        borderBottomWidth: 0.5,

                    }}>


                        <TouchableOpacity style={{
                            width: width * 0.2,
                            height: height * 0.057,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <FontAwesome5 name="phone" size={23} color={"#000"} />

                        </TouchableOpacity>


                        <Text style={{ color: "#000", fontWeight: 'bold', fontSize: 15 }}>{order.ordered_Items_user_id.user_phone ? (order.ordered_Items_user_id.user_phone) : ("لا يوجد")}</Text>


                    </View>


                    <View style={{
                        width: width,
                        height: height * 0.06,
                        backgroundColor: "#FFFFFFFF",
                        marginBottom: 5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 20,
                        borderBottomWidth: 0.5
                    }}>


                        <TouchableOpacity style={{
                            width: width * 0.2,
                            height: height * 0.06,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <FontAwesome5 name="envelope" size={23} color={"#000"} />

                        </TouchableOpacity>


                        <Text umberOfLines={1} style={{ color: "#000", fontWeight: 'bold', fontSize: 13, width: "82%" }}>{order.ordered_Items_user_id.user_email ? (order.ordered_Items_user_id.user_email) : ("لا يوجد")}</Text>


                    </View>



                    <View style={{
                        width: width,
                        height: height * 0.06,
                        backgroundColor: "#FFFFFFFF",
                        marginBottom: 5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 20,
                        borderBottomWidth: 0.5
                    }}>


                        <TouchableOpacity style={{
                            width: width * 0.2,
                            height: height * 0.06,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <FontAwesome5 name="map-marker-alt" size={23} color={"#000"} />

                        </TouchableOpacity>


                        <Text umberOfLines={1} style={{ color: "#000", fontWeight: 'bold', fontSize: 13, width: "82%" }}>{order.ordered_Items_address_id.address_title ? (order.ordered_Items_address_id.address_title) : ("لا يوجد")}  , {order.ordered_Items_address_id.address_description ? (order.ordered_Items_address_id.address_description) : ("لا يوجد")}</Text>


                    </View>



                    <View>
                        <View style={{
                            width: width * 0.95,
                            height: height * 0.04,
                            backgroundColor: Datiles_order_background,
                            marginTop: 3,
                            alignSelf: "center",
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            alignItems: "center",
                            paddingHorizontal: 10
                        }}>


                            <Text style={{ color: "#000", fontWeight: 'bold' }}>السعر</Text>

                            <Text style={{ color: "#000", fontWeight: 'bold' }}>الكميه</Text>

                            <View style={{
                                width: "30%", justifyContent: "center", alignItems: 'flex-end'
                            }}>
                                <Text style={{ color: "#000", fontWeight: 'bold' }}>الاسم</Text>
                            </View>


                        </View>
                        <View style={{
                            width: width * 0.95,
                           paddingTop:5,
                            backgroundColor: "#fff",
                            paddingHorizontal: 5,
                            borderBottomWidth: 0.5,
                            alignSelf: 'center',
                        }}>



                            <View>


                                <FlatList data={order_2} renderItem={({ item, index }) => (
                                    <View>

                                        <View style={{
                                            width: width * 0.95,
                                            paddingVertical: 3,
                                            // backgroundColor: "#f0f",
                                            marginTop: 3,
                                            alignSelf: "center",
                                            flexDirection: "row",
                                            justifyContent: 'space-between',
                                            alignItems: "center",
                                            paddingHorizontal: 10,
                                            borderBottomWidth:1,
                                        }}>

                                            <Text style={{ color: "#000" }}>{item.order_details_size_items_id.size_price}<Text style={{ color: "#00FF40" }}> E.L</Text></Text>
                                            <Text style={{ color: "#000" }}>العدد : {item.order_detailes_amount}  </Text>
                                            <View style={{
                                                width: "30%",  justifyContent: "center", alignItems: 'flex-end'
                                            }}>
                                                <Text style={{ color: "#000"  , color :"#2A00FF",fontWeight:"bold",fontSize:15}}>   {item.order_detailes_item_details_id.item_detalis_name} </Text>
                                                <Text style={{ color: "#f00" }}>{'{'}{item.order_details_size_items_id.size_name} , {item.order_detailes_item_details_id.item_detalis_ingredients}
                                                    {'}'} </Text>

                                            </View>

                                        </View>

                                        {item.order_details_Item_addition_id.map((itemes, index) => (
                                            <View style={{
                                                width: width * 0.95,
                                                paddingVertical:3,
                                                // backgroundColor: "#f0f",
                                                marginTop: 3,
                                                alignSelf: "center",
                                                flexDirection: "row",
                                                justifyContent: 'space-between',
                                                alignItems: "center",
                                                paddingHorizontal: 10,
                                                borderBottomWidth:1

                                            }}>

                                                <Text style={{ color: "#000" }}>{itemes.Addition_price}<Text style={{ color: "#00FF40" }}> E.L</Text></Text>
                                                <Text style={{ color: "#000" }}>العدد : 1</Text>

                                                <View style={{
                                                    width: "30%",  justifyContent: "center", alignItems: 'flex-end'
                                                }}>
                                                    <Text style={{ color: "#000" }}>{itemes.Addition_name}</Text>
                                                </View>

                                            </View>
                                        ))}

                                    </View>


                                )} />

                            </View>


                        </View>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginTop: 20, marginHorizontal: 20 }}>عدد الوجبات : <Text style={{ color: "#f00", textDecorationLine: "underline" }}>{order.Ordered_Items_meals_num}</Text></Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginHorizontal: 20 }}>الدلفرى {'\t\t\t\t'}: <Text style={{ color: "#000", textDecorationLine: "underline" }}>{order.Ordered_Items_delivary_price}</Text> جنيه</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginHorizontal: 20, marginBottom: 20 }}>السعر الكلي : <Text style={{ color: "#000", textDecorationLine: "underline" }}>{order.ordered_Items_total_price}</Text> جنيه</Text>


                </ScrollView>


                <TouchableOpacity onPress={() => { navigation.goBack() }}

                    style={{
                        width: width,
                        height: height * 0.09,
                        backgroundColor: End_order_background,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#000" }}> تم</Text>

                </TouchableOpacity>

            </View>




        </>
    )
}
export default Show_order_options;