import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StatusBar, Image, ScrollView, FlatList, } from 'react-native';
import { ActivityIndicator } from "react-native-paper";
const { width, height } = Dimensions.get('screen')

import axios from 'axios';

function Done_Order({ navigation }) {

    const [Stutas_Bar_background, setStutas_Bar_background] = useState("#6ED468")
    const [Profile_background, setProfile_background] = useState("#44C72F")

    const [Datiles_order_background, setDatiles_order_background] = useState("#37C72F")
    const [End_order_background, setEnd_order_background] = useState("#37C72F")

    const [lodding, setLodding] = useState(false)

    const [order, setOrder] = useState([])

    const detalies_order = () => {
        axios.get("https://generation3.000webhostapp.com/project/admin_order_data.php").then(res => {
          if (res.status == 200) {
    
            // setorder(res.data)
    
            if (res.data == 'error') {
              alert("Please Try Agin")
            }
             else if (typeof(res.data) == "object" ){
              setOrder(res.data)
             }
             else{
               alert("Try")
             }
    
          }
      
        }
    
        )
      }
    
    
      useEffect(() => {
        detalies_order()
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
                            height: height * 0.22,
                            backgroundColor: "#00BC1F",
                            marginVertical: 10,
                            borderRadius: 20,
                            justifyContent: "center",
                            paddingHorizontal: 10

                        }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>رقم الطلب    :  {'\t\t'}
                                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}> {item.ordered_Items_id}</Text>
                            </Text>


                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>عدد الوجبات : {'\t\t\t'}
                                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}> {item.Ordered_Items_meals_num}</Text>
                            </Text>


                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>السعر الكلي   : {'\t\t'}
                                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}> {item.ordered_Items_total_price}</Text>
                            </Text>


                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>تاريخ الطلب : {'\t\t'}
                                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}> {item.ordered_Items_date}</Text>
                            </Text>
                            <TouchableOpacity

                                onPress={() => {
                                    navigation.navigate("Detalies_Order", {
                                        order: item,
                                        order_2: item.ordered_Items_details,
                                        Stutas_Bar_background: Stutas_Bar_background,
                                        Profile_background: Profile_background,
                                        Datiles_order_background: Datiles_order_background,
                                        End_order_background: End_order_background,

                                    })
                                }}

                                style={{
                                    width: width * 0.6,
                                    height: "30%",
                                    backgroundColor: "#F3F3F3",
                                    alignSelf: "center",
                                    marginTop: 5,
                                    borderRadius: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>  تفاصيل الطلب </Text>

                            </TouchableOpacity>


                        </View>




                    )} />
                </ScrollView>

            </View>




        </>
    )
}
export default Done_Order;