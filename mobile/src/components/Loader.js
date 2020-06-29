import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const Loader = (props) => {
    let {styles} = props
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator />
            <Text style={[styles.text,styles.loaderText]}>Loading</Text>
        </View>
    )
}

export default Loader
