import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';

export default function Paly(){
    return(
        <view style={StyleSheet.container}>
            <Image>
            source={require("./nana.jpg")}style={styles.Image};
            </Image>
            <Text style={styelys.header}>Ngwana 'Mae</Text>
            <Text style={styelys.date}>8min ago</Text>
            <Text></Text>
        </view>
    )
}