import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

const OpenLink = ({ navigation, route }) => {
    return (
        <>
            <View style={{paddingTop: Constants.statusBarHeight,}}></View>
            <WebView source={{ uri: route.params.url }} />
        </>
    )
}

export default OpenLink

const styles = StyleSheet.create({})