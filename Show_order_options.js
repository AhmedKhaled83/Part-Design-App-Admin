import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StatusBar, Image, ScrollView, FlatList } from 'react-native';
const { width, height } = Dimensions.get('screen')

import axios from 'axios';

function Show_order_options({ navigation }) {


    const [order, setorder] = useState([])
    
    const Order_Options = () => {
        axios.get("https://generation3.000webhostapp.com/project/admin_order_data.php").then(res => {
          if (res.status == 200) {
    
            // setorder(res.data)
    
            if (res.data == 'error') {
              alert("Please Try Agin")
            }
             else if (typeof(res.data) == "object" ){
              setorder(res.data)
             }
             else{
               alert("Try")
             }
    
          }
      
        }
    
        )
      }

      useEffect(() => {
        Order_Options()
      },[])

    return (
        <>
            <StatusBar backgroundColor={"#FFFE"} barStyle={"dark-content"} ></StatusBar>

            <View style={{
                flex: 1,
                backgroundColor: "#EEEEEEDD",
                alignItems: 'center',

            }}>
                <ScrollView>

                    <FlatList data={order} renderItem={({ item, index }) => (

                        <View style={{
                            width: width * 0.95,
                            height: height * 0.39,
                            paddingBottom: 10,
                            backgroundColor: '#fff',
                            marginVertical: 10

                        }}>

                            <View style={{
                                flexDirection: 'row',
                                width: width * 0.95,
                                height: height * 0.08,
                                backgroundColor: '#97D7FF',
                                justifyContent: "center",
                                alignItems: 'center',
                                paddingVertical: 1,
                                paddingHorizontal: 3
                            }}>
                                <View style={{
                                    width: width * 0.346,
                                    height: "100%",
                                    // backgroundColor: '#ff0',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    paddingLeft: 7

                                }}>

                                    <Text style={{ color: "#000", fontSize: 15, fontWeight: 'bold' }}>order id : <Text style={{ color: "#D3FBD8", fontSize: 13 }}>{item.ordered_Items_id}</Text></Text>

                                    <Text style={{ color: "#000", fontSize: 15, fontWeight: 'bold' }}>Total : <Text style={{ color: "#23FD00", fontSize: 13 }}> {item.ordered_Items_total_price}</Text><Text style={{ fontSize: 15, fontWeight: "normal" }}> E.L</Text></Text>

                                </View>



                                <View style={{
                                    width: width * 0.595,
                                    height: "100%",
                                    // backgroundColor: '#f00',
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: 'center'
                                }}>

                                    <View style={{ width: "65%", height: "100%", justifyContent: "center", alignItems: "center" }}>

                                        <Text numberOfLines={1} style={{ fontSize: 13.5, color: "#000", fontWeight: "bold", width: "90%" }}> {item.ordered_Items_user_id.user_name}</Text>
                                        <Text style={{ fontSize: 12, color: "#000" }}> {item.ordered_Items_date}</Text>

                                    </View>

                                    <Image source={require("../Photoes/burger3.jpg")}
                                        style={{
                                            width: "25%",
                                            height: "80%",

                                        }}
                                        borderRadius={50}
                                        resizeMode='cover'
                                    />

                                </View>






                            </View>


                            <View>
                                <View style={{
                                    width: width * 0.95,
                                    height: height * 0.25,
                                    backgroundColor: "#fff",
                                    paddingHorizontal: 5,
                                    borderTopWidth: 1,
                                    borderBottomWidth: 0.5,
                                }}>
                                    <ScrollView>
                                        <View style={{
                                            width: width * 0.95,
                                            height: 20,
                                            // backgroundColor: "#f0f",
                                            marginTop: 3,
                                            alignSelf: "center",
                                            flexDirection: "row",
                                            justifyContent: 'space-between',
                                            alignItems: "center",
                                            paddingHorizontal: 10
                                        }}>

                                            <Text style={{ fontWeight: 'bold', color: "#f00" }}>Price<Text style={{ color: "#00FF40" }}> E.L</Text></Text>
                                            <Text style={{  fontWeight: 'bold', color: "#f00" }}>Mount</Text>

                                            <Text style={{  fontWeight: 'bold', color: "#f00" }}>Name</Text>


                                        </View>



                                        <View>
                                            {item.ordered_Items_details.map((items, index) => (
                                                <View>

                                                    <View style={{
                                                        width: width * 0.95,
                                                        height: 20,
                                                        // backgroundColor: "#f0f",
                                                        marginTop: 3,
                                                        alignSelf: "center",
                                                        flexDirection: "row",
                                                        justifyContent: 'space-between',
                                                        alignItems: "center",
                                                        paddingHorizontal: 10
                                                    }}>

                                                        <Text style={{ color: "#000" }}>{items.order_detailes_item_details_id.item_details_price}<Text style={{ color: "#00FF40" }}> E.L</Text></Text>
                                                        <Text style={{ color: "#000" }}>Oly : {items.order_detailes_amount}</Text>

                                                        <Text style={{ color: "#000" }}>{items.order_detailes_item_details_id.item_detalis_name}</Text>


                                                    </View>


                                                    {items.order_details_Item_addition_id.map((itemes, index) => (
                                                        <View style={{
                                                            width: width * 0.95,
                                                            height: 20,
                                                            // backgroundColor: "#f0f",
                                                            marginTop: 3,
                                                            alignSelf: "center",
                                                            flexDirection: "row",
                                                            justifyContent: 'space-between',
                                                            alignItems: "center",
                                                            paddingHorizontal: 10
                                                        }}>

                                                            <Text style={{ color: "#000" }}>{itemes.Addition_price}<Text style={{ color: "#00FF40" }}> E.L</Text></Text>
                                                            <Text style={{ color: "#000" }}>Oly : {items.order_detailes_amount}</Text>

                                                            <Text style={{ color: "#000" }}>{itemes.Addition_name}</Text>


                                                        </View>
                                                    ))}

                                                </View>

                                            ))}

                                        </View>

                                    </ScrollView>


                                </View>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                width: width * 0.95,
                                height: height * 0.05,
                                // backgroundColor: '#97D7FF',
                                justifyContent: "space-around",
                                alignItems: 'center',
                                paddingVertical: 1,
                                paddingHorizontal: 3,

                            }}>

                                <TouchableOpacity style={{
                                    width: "30%",
                                    height: "100%",
                                    backgroundColor: "#00864B",
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{ color: "#fff" }}> Accept Order</Text>
                                </TouchableOpacity>


                                <TouchableOpacity style={{
                                    width: "30%",
                                    height: "100%",
                                    backgroundColor: "#f00",
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{ color: "#fff" }}> Cancel Order</Text>
                                </TouchableOpacity>



                                <TouchableOpacity style={{
                                    width: "30%",
                                    height: "100%",
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: "#FF7F20"
                                }}>
                                    <Text style={{ color: "#fff" }}> Show Order</Text>
                                </TouchableOpacity>





                            </View>



                        </View>
                    )} />
                </ScrollView>

            </View>




        </>
    )
}
export default Show_order_options;