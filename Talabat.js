import React,{useState,useEffect} from 'react';
import {View ,Text, TouchableOpacity }from 'react-native';
import axios from 'axios';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PagerView from 'react-native-pager-view';

import Done_Order from './Done_Order'
import Pending from './Pending'
import Delet_Order from './Delet_Order'
const Tab = createMaterialTopTabNavigator();
function Talabat({navigation}) {
    return(
        <>
      
       <Tab.Navigator >
       <Tab.Screen name="Pending" component={Pending}   options={{ tabBarPressColor :"#02A8D8" }} />
       <Tab.Screen name="Deletion" component={Delet_Order}  options={{ tabBarPressColor :"#f00" }}/>
       <Tab.Screen name="Order_Done" component={Done_Order}  options={{ tabBarPressColor :"#00BC1F" }}  />
   

    </Tab.Navigator>
        
  
        
        
        </>
    )
}
export default Talabat;